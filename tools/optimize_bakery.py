"""
Convert raw bakery PNGs in assets/img/src/bakery/ into web-ready WebP files
under demos/bakery/img/.

  hero.png  -> demos/bakery/img/hero.webp   800x800  (1:1) target <= 90 KB
  <id>.png  -> demos/bakery/img/<id>.webp   900x600  (3:2) target <= 80 KB

Usage:  python tools/optimize_bakery.py
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "assets" / "img" / "src" / "bakery"
OUT = ROOT / "demos" / "bakery" / "img"


def crop_to_ratio(im: Image.Image, w: int, h: int) -> Image.Image:
    ratio = w / h
    iw, ih = im.size
    if iw / ih > ratio:
        nw = int(ih * ratio)
        left = (iw - nw) // 2
        im = im.crop((left, 0, left + nw, ih))
    else:
        nh = int(iw / ratio)
        top = (ih - nh) // 2
        im = im.crop((0, top, iw, top + nh))
    return im.resize((w, h), Image.LANCZOS)


def save_webp(im: Image.Image, out: Path, max_kb: int) -> int:
    out.parent.mkdir(parents=True, exist_ok=True)
    im = im.convert("RGB")
    for q in (84, 78, 72, 66, 60, 54):
        im.save(out, "WEBP", quality=q, method=6)
        kb = out.stat().st_size // 1024
        if kb <= max_kb:
            return kb
    return out.stat().st_size // 1024


def main() -> None:
    if not SRC.exists():
        print(f"no source dir: {SRC}")
        return
    n = 0
    for png in sorted(SRC.glob("*.png")):
        im = Image.open(png)
        if png.stem == "hero":
            kb = save_webp(crop_to_ratio(im, 800, 800), OUT / "hero.webp", 90)
        else:
            kb = save_webp(crop_to_ratio(im, 900, 600), OUT / f"{png.stem}.webp", 80)
        print(f"{png.stem:18} -> {kb} KB")
        n += 1
    print(f"{n} image(s) processed")


if __name__ == "__main__":
    main()
