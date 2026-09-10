# Media assets

Files here are served from the site root, so `public/media/welcome.mp4` is `/media/welcome.mp4`.
Nothing is processed by the build — what you put here ships byte-for-byte, so size matters.

After adding a file, point `src/content.js` at it. Until you do, the page renders a dashed
placeholder in its spot rather than a broken image.

## Welcome video — `welcome.mp4`

Dr. Estin speaking to camera.

| | |
| --- | --- |
| Format | H.264 MP4, AAC audio |
| Resolution | 1920×1080 or 1280×720 |
| Target size | under 25 MB |
| Poster | `welcome-poster.jpg`, same aspect ratio, a frame with his face in it |
| Captions | `welcome.vtt` (WebVTT) |

Set `welcome.video.src`, `.poster` and `.captions`.

Two things worth doing rather than skipping:

- **Captions.** A physician's site should be usable by deaf and hard-of-hearing visitors, and
  captions also make the video usable with sound off, which is how most people scroll. If you
  have no caption file, the letter underneath is the fallback — but it is not a substitute.
- **A poster frame.** Without one the video is a black rectangle until it loads.

Anything much over 25 MB should go to YouTube or Vimeo and be embedded instead — CloudFront
will happily serve a 400 MB file and bill you for every view of it.

## Photos — `photo-1.jpg`, `photo-2.jpg`

Placed inside the letter: photo 1 after the paragraph about the PGA, NCAA and Olympics; photo 2
after the paragraph about the 2023 wildfires.

| | |
| --- | --- |
| Format | JPEG (or WebP) |
| Width | 1600px is plenty — they display at 768px |
| Target size | under 400 KB each |

Set `src` **and `alt`** on each photo block. `alt` describes the image for screen readers and
for anyone whose image fails to load; write what is in the picture, e.g. "Dr. Estin examining a
patient at the Kāʻanapali clinic" — not "photo" or "image".
