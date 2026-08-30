"""
Generic "pixelize": turn 1024x1024 pixel-style renders into real NxN pixel-art PNGs.

Usage:
  python tools/pixelize.py <src_dir> <out_dir> [size=128] [colours=24] [glob=*.png] [key=0|1]

  key=1 turns the flat warm-white background (#F4F3EE +/- tolerance) transparent.

Steps per file: centre-crop to square -> box-downscale to size -> quantise to a small palette.
(Used for the AI-service cats and the order-demo icons.)
"""
import sys
from pathlib import Path
from PIL import Image


BG = (244, 243, 238)
TOL = 18


def key_background(im: Image.Image) -> Image.Image:
    rgba = im.convert("RGBA")
    px = rgba.load()
    w, h = rgba.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if abs(r - BG[0]) <= TOL and abs(g - BG[1]) <= TOL and abs(b - BG[2]) <= TOL:
                px[x, y] = (r, g, b, 0)
    return rgba


def pixelize(png: Path, out: Path, size: int, colours: int, key: bool = False) -> None:
    im = Image.open(png).convert("RGB")
    w, h = im.size
    s = min(w, h)
    im = im.crop(((w - s) // 2, (h - s) // 2, (w - s) // 2 + s, (h - s) // 2 + s))
    small = im.resize((size, size), Image.BOX)
    small = small.quantize(colors=colours, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE)
    out.parent.mkdir(parents=True, exist_ok=True)
    if key:
        small = key_background(small.convert("RGB"))
    small.save(out, "PNG", optimize=True)


def main() -> None:
    if len(sys.argv) < 3:
        print(__doc__)
        return
    src, out = Path(sys.argv[1]), Path(sys.argv[2])
    size = int(sys.argv[3]) if len(sys.argv) > 3 else 128
    colours = int(sys.argv[4]) if len(sys.argv) > 4 else 24
    pattern = sys.argv[5] if len(sys.argv) > 5 else "*.png"
    key = len(sys.argv) > 6 and sys.argv[6] == "1"
    n = 0
    for png in sorted(src.glob(pattern)):
        target = out / png.name
        pixelize(png, target, size, colours, key)
        print(f"{png.name} -> {target}  {target.stat().st_size} bytes")
        n += 1
    print(f"{n} file(s)")


if __name__ == "__main__":
    main()
