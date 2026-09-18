// Warns when content.js points at a media file that is not in public/.
import { existsSync } from 'node:fs'
import { teamAdvisor, tournament, welcome } from '../src/content.js'

const photos = [
  ...welcome.blocks.flatMap((block) => block.type === 'gallery' ? block.photos : block.type === 'photo' ? [block] : []),
  ...teamAdvisor.photos,
  ...tournament.photos,
]

const refs = [
  welcome.video.src,
  welcome.video.poster,
  welcome.video.captions,
  ...photos.map((photo) => photo.src),
].filter(Boolean)

const missing = refs.filter((r) => !existsSync(`public${r}`))
const photosWithoutAlt = photos.filter((b) => b.src && !b.alt)

for (const m of missing) console.error(`missing file: public${m}`)
for (const p of photosWithoutAlt) console.error(`photo has src but empty alt: ${p.src}`)

if (missing.length || photosWithoutAlt.length) process.exit(1)
console.log(`media ok - ${refs.length} referenced file(s) present`)
