"""
Convert voxel renders in assets/img/src/voxel/ into the web assets the site reads.

  voxel/hero.png                 -> assets/img/hero.webp             1536x1024 <=220KB  (+ og-home.jpg 1200x630)
  voxel/cases/<slug>.png         -> assets/img/cases/<slug>.webp     1200x800  <=150KB
  voxel/diagrams/<slug>-<n>.png  -> assets/img/cases/<slug>/<n>.webp 1200x800  <=150KB

Centre-crops to 3:2 first. Usage:  python tools/optimize_voxel.py
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "assets" / "img" / "src" / "voxel"
OUT = ROOT / "assets" / "img"


def crop_to_ratio(im, w, h):
    ratio = w / h
    iw, ih = im.size
    if iw / ih > ratio:
        nw = int(ih * ratio); left = (iw - nw) // 2
        im = im.crop((left, 0, left + nw, ih))
    else:
        nh = int(iw / ratio); top = (ih - nh) // 2
        im = im.crop((0, top, iw, top + nh))
    return im.resize((w, h), Image.LANCZOS)


def save_webp(im, out: Path, max_kb: int) -> int:
    out.parent.mkdir(parents=True, exist_ok=True)
    im = im.convert("RGB")
    for q in (84, 78, 72, 66, 60, 54):
        im.save(out, "WEBP", quality=q, method=6)
        kb = out.stat().st_size // 1024
        if kb <= max_kb:
            return kb
    return out.stat().st_size // 1024


def main() -> None:
    n = 0
    hero = SRC / "hero.png"
    if hero.exists():
        im = Image.open(hero)
        kb = save_webp(crop_to_ratio(im, 1536, 1024), OUT / "hero.webp", 220)
        og = OUT / "og-home.jpg"
        crop_to_ratio(im, 1200, 630).convert("RGB").save(og, "JPEG", quality=86, optimize=True)
        print(f"hero -> hero.webp {kb} KB; og-home.jpg {og.stat().st_size // 1024} KB")
        n += 1
    for png in sorted((SRC / "cases").glob("*.png")) if (SRC / "cases").exists() else []:
        kb = save_webp(crop_to_ratio(Image.open(png), 1200, 800), OUT / "cases" / f"{png.stem}.webp", 150)
        print(f"cover {png.stem} -> {kb} KB")
        n += 1
    for png in sorted((SRC / "demos").glob("*.png")) if (SRC / "demos").exists() else []:
        kb = save_webp(crop_to_ratio(Image.open(png), 1200, 800), OUT / "demos" / f"{png.stem}.webp", 150)
        print(f"demo cover {png.stem} -> {kb} KB")
        n += 1
    for png in sorted((SRC / "diagrams").glob("*.png")) if (SRC / "diagrams").exists() else []:
        slug, num = png.stem.rsplit("-", 1)
        kb = save_webp(crop_to_ratio(Image.open(png), 1200, 800), OUT / "cases" / slug / f"{num}.webp", 150)
        print(f"diagram {png.stem} -> cases/{slug}/{num}.webp {kb} KB")
        n += 1
    print(f"{n} image(s) processed")


if __name__ == "__main__":
    main()
