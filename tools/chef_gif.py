"""
Build the welcome-wave animation from the 3-column chef sprite strip.

  assets/img/src/order/chef-strip.png (1536x1024, 3 equal columns)
    -> demos/order/img/chef.gif        (160x160 frames, ping-pong 1-2-3-2, 220 ms/frame)
    -> demos/order/img/chef.png        (frame 1, static, used by the kitchen board header)

Each column is cropped, the character is re-centred by its non-background bounding box so the
three frames line up, then pixelized (box-downscale + quantise) like the other icons.
Usage:  python tools/chef_gif.py
"""
from pathlib import Path
from PIL import Image, ImageChops

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "assets" / "img" / "src" / "order" / "chef-strip.png"
OUT = ROOT / "demos" / "order" / "img"
SIZE = 160
COLOURS = 32
BG = (244, 243, 238)


def bbox_of_subject(im: Image.Image):
    bg = Image.new("RGB", im.size, BG)
    diff = ImageChops.difference(im, bg).convert("L").point(lambda v: 255 if v > 28 else 0)
    return diff.getbbox()


def main() -> None:
    if not SRC.exists():
        print(f"missing {SRC}")
        return
    strip = Image.open(SRC).convert("RGB")
    W, H = strip.size
    col = W // 3
    cols = [strip.crop((i * col, 0, (i + 1) * col, H)) for i in range(3)]

    # common canvas: square of the largest subject bbox + margin, subject centred in each frame
    boxes = [bbox_of_subject(c) or (0, 0, col, H) for c in cols]
    bw = max(b[2] - b[0] for b in boxes)
    bh = max(b[3] - b[1] for b in boxes)
    side = int(max(bw, bh) * 1.12)
    frames = []
    for c, b in zip(cols, boxes):
        cx, cy = (b[0] + b[2]) // 2, (b[1] + b[3]) // 2
        canvas = Image.new("RGB", (side, side), BG)
        subj = c.crop(b)
        canvas.paste(subj, (side // 2 - (b[2] - b[0]) // 2, side // 2 - (b[3] - b[1]) // 2))
        small = canvas.resize((SIZE, SIZE), Image.BOX)
        frames.append(small)

    # shared palette so the GIF doesn't flicker between frames
    sheet = Image.new("RGB", (SIZE * 3, SIZE), BG)
    for i, f in enumerate(frames):
        sheet.paste(f, (i * SIZE, 0))
    pal = sheet.quantize(colors=COLOURS - 1, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE).convert("RGB")
    # key the flat background to transparent, then build a shared palette with index 0 reserved for it
    TOL = 18
    rgba = pal.convert("RGBA")
    px = rgba.load()
    for y in range(rgba.size[1]):
        for x in range(rgba.size[0]):
            r, g, b, a = px[x, y]
            if abs(r - BG[0]) <= TOL and abs(g - BG[1]) <= TOL and abs(b - BG[2]) <= TOL:
                px[x, y] = (0, 0, 0, 0)
    q_frames = []
    for i in range(3):
        f = rgba.crop((i * SIZE, 0, (i + 1) * SIZE, SIZE))
        alpha = f.getchannel("A")
        pf = f.convert("RGB").quantize(colors=COLOURS - 1, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE)
        # remap: shift indices by 1, use 0 as transparent
        pf = pf.point(lambda v: v + 1)
        mask = alpha.point(lambda v: 255 if v == 0 else 0)
        pf.paste(0, mask=mask)
        palette = pf.getpalette()
        pf.putpalette(([244, 243, 238] + palette)[: 256 * 3])
        pf.info["transparency"] = 0
        q_frames.append(pf)
    q = q_frames

    OUT.mkdir(parents=True, exist_ok=True)
    seq = [q[0], q[1], q[2], q[1]]
    seq[0].save(OUT / "chef.gif", save_all=True, append_images=seq[1:], duration=[420, 220, 420, 220], loop=0, optimize=False, disposal=2, transparency=0)
    rgba.crop((0, 0, SIZE, SIZE)).save(OUT / "chef.png", "PNG", optimize=True)
    print("chef.gif", (OUT / "chef.gif").stat().st_size, "bytes;", "chef.png", (OUT / "chef.png").stat().st_size, "bytes")


if __name__ == "__main__":
    main()
