"""
Convert origami renders in assets/img/src/origami/ into the EN site's web assets.

  origami/hero.png          -> assets/img/en/hero.webp          1536x1024 <=220KB
  origami/cases/<slug>.png  -> assets/img/en/cases/<slug>.webp  1200x800  <=150KB
  origami/demos/<slug>.png  -> assets/img/en/demos/<slug>.webp  1200x800  <=150KB

Centre-crops to 3:2. Usage:  python tools/optimize_origami.py
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "assets" / "img" / "src" / "origami"
OUT = ROOT / "assets" / "img" / "en"


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
        kb = save_webp(crop_to_ratio(Image.open(hero), 1536, 1024), OUT / "hero.webp", 220)
        print(f"hero -> en/hero.webp {kb} KB")
        n += 1
    for sub in ("cases", "demos"):
        d = SRC / sub
        if not d.exists():
            continue
        for png in sorted(d.glob("*.png")):
            kb = save_webp(crop_to_ratio(Image.open(png), 1200, 800), OUT / sub / f"{png.stem}.webp", 150)
            print(f"{sub}/{png.stem} -> {kb} KB")
            n += 1
    print(f"{n} image(s) processed")


if __name__ == "__main__":
    main()
