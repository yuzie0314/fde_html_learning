"""
Turn generated 1024x1024 "pixel-style" cat portraits into real 128x128 pixel-art PNGs
for the AI-service demo avatar.

  assets/img/src/cats/cat-<n>.png -> demos/ai-service/img/cat-<n>.png (128x128, <=24 colours)

Steps: centre-crop to square -> downscale to 128x128 (box filter, so each output pixel is the
average of a block) -> quantise to a small palette (snaps to flat colours, kills gradients).
Usage:  python tools/optimize_cats.py
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "assets" / "img" / "src" / "cats"
OUT = ROOT / "demos" / "ai-service" / "img"
SIZE = 128
COLOURS = 24


def main() -> None:
    if not SRC.exists():
        print(f"no source dir: {SRC}")
        return
    OUT.mkdir(parents=True, exist_ok=True)
    n = 0
    for png in sorted(SRC.glob("cat-*.png")):
        im = Image.open(png).convert("RGB")
        w, h = im.size
        s = min(w, h)
        im = im.crop(((w - s) // 2, (h - s) // 2, (w - s) // 2 + s, (h - s) // 2 + s))
        small = im.resize((SIZE, SIZE), Image.BOX)
        small = small.quantize(colors=COLOURS, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE)
        out = OUT / png.name
        small.save(out, "PNG", optimize=True)
        print(f"{png.name} -> {out.relative_to(ROOT)}  {out.stat().st_size} bytes")
        n += 1
    print(f"{n} cat(s) processed")


if __name__ == "__main__":
    main()
