"""
Convert raw generated PNGs in assets/img/src/ into web-ready WebP files.

  hero.png            -> assets/img/hero.webp          1536x1024 (3:2), target <= 220 KB
  cases/<slug>.png    -> assets/img/cases/<slug>.webp  1200x800  (3:2), target <= 150 KB
  og-home.png (opt.)  -> assets/img/og-home.png        1200x630

Any aspect ratio is accepted: images are centre-cropped to 3:2 first.
Usage:  python tools/optimize_images.py
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "assets" / "img" / "src"
OUT = ROOT / "assets" / "img"

TARGETS = {
    "hero": {"size": (1536, 1024), "max_kb": 220, "out": OUT / "hero.webp"},
}
CASE_SIZE = (1200, 800)
CASE_MAX_KB = 150


def crop_to_ratio(im: Image.Image, w: int, h: int) -> Image.Image:
    ratio = w / h
    iw, ih = im.size
    if iw / ih > ratio:  # too wide
        nw = int(ih * ratio)
        left = (iw - nw) // 2
        im = im.crop((left, 0, left + nw, ih))
    else:  # too tall
        nh = int(iw / ratio)
        top = (ih - nh) // 2
        im = im.crop((0, top, iw, top + nh))
    return im.resize((w, h), Image.LANCZOS)


def save_webp(im: Image.Image, out: Path, max_kb: int) -> int:
    out.parent.mkdir(parents=True, exist_ok=True)
    im = im.convert("RGB")
    for q in (82, 76, 70, 64, 58, 52):
        im.save(out, "WEBP", quality=q, method=6)
        kb = out.stat().st_size // 1024
        if kb <= max_kb:
            return kb
    return out.stat().st_size // 1024


def main() -> None:
    if not SRC.exists():
        print(f"no source dir: {SRC}")
        return
    done = 0
    files = sorted(SRC.glob("*.png")) + sorted((SRC / "cases").glob("*.png"))
    for png in files:
        stem = png.stem
        im = Image.open(png)
        if stem == "hero":
            t = TARGETS["hero"]
            kb = save_webp(crop_to_ratio(im, *t["size"]), t["out"], t["max_kb"])
            print(f"hero      -> {t['out'].relative_to(ROOT)}  {kb} KB")
        elif stem == "og-home":
            out = OUT / "og-home.png"
            crop_to_ratio(im, 1200, 630).convert("RGB").save(out, "PNG", optimize=True)
            print(f"og-home   -> {out.relative_to(ROOT)}  {out.stat().st_size // 1024} KB")
        else:
            out = OUT / "cases" / f"{stem}.webp"
            kb = save_webp(crop_to_ratio(im, *CASE_SIZE), out, CASE_MAX_KB)
            print(f"{stem:9} -> {out.relative_to(ROOT)}  {kb} KB")
        done += 1
    print(f"{done} image(s) processed")


if __name__ == "__main__":
    main()
