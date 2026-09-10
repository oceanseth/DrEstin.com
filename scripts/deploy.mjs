// Build output -> S3 -> CloudFront invalidation.
// Hashed assets get a long immutable cache; the entry HTML and crawler files must not.
import { execFileSync } from 'node:child_process'
import { existsSync } from 'node:fs'

const STACK = process.env.STACK ?? 'drestin-site-prod'
const REGION = 'us-east-1'

const aws = (...args) =>
  execFileSync('aws', [...args, '--region', REGION], {
    encoding: 'utf8',
    shell: process.platform === 'win32',
  }).trim()

const output = (key) =>
  aws(
    'cloudformation',
    'describe-stacks',
    '--stack-name',
    STACK,
    '--query',
    `Stacks[0].Outputs[?OutputKey=='${key}'].OutputValue`,
    '--output',
    'text',
  )

if (!existsSync('dist')) {
  console.error('No dist/ - run `npm run build` first.')
  process.exit(1)
}

const bucket = output('BucketName')
const distribution = output('DistributionId')
console.log(`bucket=${bucket} distribution=${distribution}`)

// Pass 1: everything except the files that must stay fresh.
aws(
  's3',
  'sync',
  'dist/',
  `s3://${bucket}/`,
  '--delete',
  '--cache-control',
  'public,max-age=31536000,immutable',
  '--exclude',
  'index.html',
  '--exclude',
  'robots.txt',
  '--exclude',
  'sitemap.xml',
)

// Pass 2: the always-revalidate set.
aws(
  's3',
  'sync',
  'dist/',
  `s3://${bucket}/`,
  '--cache-control',
  'public,max-age=0,must-revalidate',
  '--exclude',
  '*',
  '--include',
  'index.html',
  '--include',
  'robots.txt',
  '--include',
  'sitemap.xml',
)

const id = JSON.parse(
  aws(
    'cloudfront',
    'create-invalidation',
    '--distribution-id',
    distribution,
    '--paths',
    '/*',
    '--output',
    'json',
  ),
).Invalidation.Id

console.log(`Deployed. Invalidation ${id} in flight -> https://drestin.com`)
