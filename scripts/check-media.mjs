// Warns when content.js points at a media file that is not in public/.
import { existsSync } from 'node:fs'
import { teamAdvisor, welcome } from '../src/content.js'

const refs = [
  welcome.video.src,
  welcome.video.poster,
  welcome.video.captions,
  ...welcome.blocks.filter((b) => b.type === 'photo').map((b) => b.src),
  ...teamAdvisor.photos.map((photo) => photo.src),
].filter(Boolean)

const missing = refs.filter((r) => !existsSync(`public${r}`))
const photosWithoutAlt = [...welcome.blocks.filter((b) => b.type === 'photo'), ...teamAdvisor.photos].filter((b) => b.src && !b.alt)

for (const m of missing) console.error(`missing file: public${m}`)
for (const p of photosWithoutAlt) console.error(`photo has src but empty alt: ${p.src}`)

if (missing.length || photosWithoutAlt.length) process.exit(1)
console.log(`media ok - ${refs.length} referenced file(s) present`)
