"""
Generic 3-column sprite strip -> transparent pixel-art GIF (+ static PNG of frame 1).

Usage:
  python tools/strip_gif.py <strip.png> <out_base> [size=160] [colours=32] [recenter=1|0] [durations=420,220,420,220]

  <out_base>          e.g. demos/roulette/img/cat  ->  cat.gif + cat.png
  recenter=1          re-centre each frame on its subject's bounding box (good for characters)
  recenter=0          keep the column as-is (good for bursts that grow from a fixed centre)

Frames are played ping-pong 1-2-3-2 by default.
"""
import sys
from pathlib import Path
from PIL import Image, ImageChops

BG = (244, 243, 238)
TOL = 18


def bbox_of_subject(im: Image.Image):
    bg = Image.new("RGB", im.size, BG)
    diff = ImageChops.difference(im, bg).convert("L").point(lambda v: 255 if v > 28 else 0)
    return diff.getbbox()


def key_alpha(rgba: Image.Image) -> Image.Image:
    px = rgba.load()
    for y in range(rgba.size[1]):
        for x in range(rgba.size[0]):
            r, g, b, a = px[x, y]
            if abs(r - BG[0]) <= TOL and abs(g - BG[1]) <= TOL and abs(b - BG[2]) <= TOL:
                px[x, y] = (0, 0, 0, 0)
    return rgba


def main() -> None:
    if len(sys.argv) < 3:
        print(__doc__)
        return
    src, out_base = Path(sys.argv[1]), Path(sys.argv[2])
    size = int(sys.argv[3]) if len(sys.argv) > 3 else 160
    colours = int(sys.argv[4]) if len(sys.argv) > 4 else 32
    recenter = (sys.argv[5] if len(sys.argv) > 5 else "1") == "1"
    durations = [int(d) for d in (sys.argv[6] if len(sys.argv) > 6 else "420,220,420,220").split(",")]

    strip = Image.open(src).convert("RGB")
    W, H = strip.size
    col = W // 3
    cols = [strip.crop((i * col, 0, (i + 1) * col, H)) for i in range(3)]

    if recenter:
        boxes = [bbox_of_subject(c) or (0, 0, col, H) for c in cols]
        side = int(max(max(b[2] - b[0] for b in boxes), max(b[3] - b[1] for b in boxes)) * 1.12)
        frames = []
        for c, b in zip(cols, boxes):
            canvas = Image.new("RGB", (side, side), BG)
            canvas.paste(c.crop(b), (side // 2 - (b[2] - b[0]) // 2, side // 2 - (b[3] - b[1]) // 2))
            frames.append(canvas.resize((size, size), Image.BOX))
    else:
        side = min(col, H)
        frames = []
        for c in cols:
            sq = c.crop(((col - side) // 2, (H - side) // 2, (col - side) // 2 + side, (H - side) // 2 + side))
            frames.append(sq.resize((size, size), Image.BOX))

    sheet = Image.new("RGB", (size * 3, size), BG)
    for i, f in enumerate(frames):
        sheet.paste(f, (i * size, 0))
    pal = sheet.quantize(colors=colours - 1, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE).convert("RGB")
    rgba = key_alpha(pal.convert("RGBA"))

    q = []
    for i in range(3):
        f = rgba.crop((i * size, 0, (i + 1) * size, size))
        alpha = f.getchannel("A")
        pf = f.convert("RGB").quantize(colors=colours - 1, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE)
        pf = pf.point(lambda v: v + 1)
        pf.paste(0, mask=alpha.point(lambda v: 255 if v == 0 else 0))
        pf.putpalette(([BG[0], BG[1], BG[2]] + pf.getpalette())[: 256 * 3])
        pf.info["transparency"] = 0
        q.append(pf)

    out_base.parent.mkdir(parents=True, exist_ok=True)
    seq = [q[0], q[1], q[2], q[1]][: len(durations)]
    gif = out_base.with_suffix(".gif")
    seq[0].save(gif, save_all=True, append_images=seq[1:], duration=durations, loop=0, optimize=False, disposal=2, transparency=0)
    png = out_base.with_suffix(".png")
    rgba.crop((0, 0, size, size)).save(png, "PNG", optimize=True)
    print(f"{gif.name} {gif.stat().st_size} bytes; {png.name} {png.stat().st_size} bytes")


if __name__ == "__main__":
    main()
