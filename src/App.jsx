import { useEffect, useState } from 'react'
import { contact, links, news, scholarship, site, welcome, work } from './content'
import './App.css'

const NAV = [
  { href: '#welcome', label: 'Welcome' },
  { href: '#work', label: 'What I do' },
  { href: '#news', label: 'News' },
  { href: '#links', label: 'Find me' },
  { href: '#contact', label: 'Contact' },
]
const IS_SCHOLARSHIP = ['/scholarship', '/scholarship/', '/page-3', '/page-3/'].includes(window.location.pathname)

// Number the photo blocks once up front, so a placeholder can name the file it wants
// without counting during render.
const WELCOME_BLOCKS = (() => {
  let n = 0
  return welcome.blocks.map((block) =>
    block.type === 'photo' ? { ...block, photoIndex: (n += 1) } : block,
  )
})()

const DATE_FMT = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  timeZone: 'UTC', // dates are bare YYYY-MM-DD; UTC keeps them off a day boundary
})

function Nav() {
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="nav shell" data-stuck={stuck}>
      <a className="nav__mark" href={IS_SCHOLARSHIP ? '/' : '#top'}>
        {site.name} <span>/ {site.handle}</span>
      </a>
      <nav className="nav__links" aria-label="Sections">
        {NAV.map((item) => (
          <a key={item.href} href={IS_SCHOLARSHIP ? `/${item.href}` : item.href}>
            {item.label}
          </a>
        ))}
        <a href="/scholarship" aria-current={IS_SCHOLARSHIP ? 'page' : undefined}>{scholarship.navLabel}</a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero shell" id="top">
      <span className="hero__eyebrow">
        <span className="hero__dot" aria-hidden="true" />
        Maui, Hawai&#699;i
      </span>
      <h1>
        {site.name} <em>{site.handle}</em>
      </h1>
      <p className="hero__tagline">{site.tagline}</p>
      <p className="hero__intro">{site.intro}</p>
      <div className="hero__actions">
        <a className="btn btn--primary" href="#links">
          Find me online
        </a>
        <a className="btn btn--ghost" href="#welcome">
          Read the story
        </a>
        <a className="btn btn--ghost" href="/scholarship">{scholarship.navLabel}</a>
      </div>
    </section>
  )
}

function Section({ id, heading, children }) {
  return (
    <section className="section shell" id={id}>
      <h2 className="section__head">{heading}</h2>
      {children}
    </section>
  )
}

// Stands in for a missing asset so the layout is reviewable before the files exist.
// Renders nothing once the real src is filled in.
function Placeholder({ ratio, label, hint }) {
  return (
    <div className="placeholder" style={{ aspectRatio: ratio }}>
      <span className="placeholder__label">{label}</span>
      <span className="placeholder__hint">{hint}</span>
    </div>
  )
}

function WelcomeVideo() {
  const { src, poster, captions, label, embedUrl, externalLabel } = welcome.video

  if (embedUrl) {
    return (
      <div>
        <iframe
          className="welcome__video welcome__embed"
          src={embedUrl}
          title={label}
          allow="autoplay; fullscreen"
          allowFullScreen
        />
        <p>
          <a href={embedUrl} target="_blank" rel="noopener noreferrer">
            {externalLabel}
          </a>
        </p>
      </div>
    )
  }

  if (!src) {
    return (
      <Placeholder
        ratio="16 / 9"
        label={label}
        hint="Drop the file at public/media/welcome.mp4, then set video.src in src/content.js"
      />
    )
  }

  return (
    <video
      className="welcome__video"
      controls
      playsInline
      preload="metadata"
      poster={poster ?? undefined}
      aria-label={label}
    >
      <source src={src} type="video/mp4" />
      {captions && (
        <track kind="captions" src={captions} srcLang="en" label="English" default />
      )}
    </video>
  )
}

function Photo({ block, index }) {
  if (!block.src) {
    return (
      <Placeholder
        ratio="3 / 2"
        label={`Photo ${index}`}
        hint={`Drop the file at public/media/photo-${index}.jpg, then set src and alt in src/content.js`}
      />
    )
  }

  return (
    <figure className={`photo photo--${block.width ?? 'wide'}`}>
      <img src={block.src} alt={block.alt} loading="lazy" decoding="async" />
      {block.caption && <figcaption>{block.caption}</figcaption>}
    </figure>
  )
}

function Welcome() {
  return (
    <Section id="welcome" heading={welcome.heading}>
      <p className="welcome__lede">{welcome.lede}</p>

      <div className="welcome__media">
        <WelcomeVideo />
      </div>

      <div className="welcome__letter">
        {WELCOME_BLOCKS.map((block, i) =>
          block.type === 'photo' ? (
            <Photo block={block} index={block.photoIndex} key={`photo-${block.photoIndex}`} />
          ) : (
            // Paragraph text is stable copy, so the index is a safe key here.
            <p key={`p-${i}`}>{block.text}</p>
          ),
        )}
      </div>

      <dl className="stats stats--row">
        {welcome.stats.map((stat) => (
          <div key={stat.label}>
            <dt className="stat__value">{stat.value}</dt>
            <dd className="stat__label">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}

function Work() {
  return (
    <Section id="work" heading={work.heading}>
      <div className="cards">
        {work.items.map((item) => (
          <article className="card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}

function News() {
  return (
    <Section id="news" heading={news.heading}>
      <ol className="news">
        {news.items.map((item) => (
          <li className="news__item" key={item.href}>
            <a className="news__link" href={item.href} target="_blank" rel="noreferrer">
              <div className="news__meta">
                <time dateTime={item.date}>{DATE_FMT.format(new Date(item.date))}</time>
                <span className="news__source">{item.source}</span>
              </div>
              <h3 className="news__title">{item.title}</h3>
              <p className="news__blurb">{item.blurb}</p>
            </a>
          </li>
        ))}
      </ol>
    </Section>
  )
}

function Links() {
  return (
    <Section id="links" heading={links.heading}>
      <div className="linklist">
        {links.items.map((item) => {
          const body = (
            <>
              <span className="linklist__label">{item.label}</span>
              <span className="linklist__handle">{item.handle}</span>
            </>
          )
          return item.href ? (
            <a
              className="linklist__row"
              key={item.label}
              href={item.href}
              target="_blank"
              rel="me noreferrer"
            >
              {body}
            </a>
          ) : (
            <div className="linklist__row" key={item.label} data-pending="true">
              {body}
            </div>
          )
        })}
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contact" heading={contact.heading}>
      <p className="contact__body">{contact.body}</p>
      <div className="hero__actions">
        {contact.practiceUrl && (
          <a
            className="btn btn--primary"
            href={contact.practiceUrl}
            target="_blank"
            rel="noreferrer"
          >
            Book at Doctors On Call
          </a>
        )}
        {contact.email && (
          <a className="btn btn--ghost" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        )}
      </div>
      <p className="contact__note">{contact.note}</p>
    </Section>
  )
}

function Scholarship() {
  return (
    <>
      <section className="hero shell scholarship" id="top">
        <h1>{scholarship.heading}</h1>
        <p className="hero__intro">{scholarship.lede}</p>
        <div className="welcome__letter">
          {scholarship.paragraphs.map((text) => <p key={text}>{text}</p>)}
        </div>
        <div className="hero__actions">
          <a className="btn btn--primary" href={scholarship.donationUrl || '#give-now'} target={scholarship.donationUrl ? '_blank' : undefined} rel={scholarship.donationUrl ? 'noopener noreferrer' : undefined}>{scholarship.giveLabel}</a>
        </div>
      </section>
      <Section id="give-now" heading={scholarship.giveLabel}>
        <div className="welcome__letter scholarship__details">
          <p>{scholarship.donationIntro}</p>
          {scholarship.donationUrl ? (
            <a className="btn btn--primary" href={scholarship.donationUrl} target="_blank" rel="noopener noreferrer">{scholarship.giveLabel}</a>
          ) : <p className="contact__note">{scholarship.pendingLabel}</p>}
          <p>{scholarship.taxNote}</p>
          <h3>{scholarship.mailHeading}</h3>
          <address>{scholarship.address.map((line) => <div key={line}>{line}</div>)}</address>
          <p>{scholarship.checkInstructions}</p>
          <h3>{scholarship.contactHeading}</h3>
          <p>
            {scholarship.contactName}<br />{scholarship.contactTitle}<br />
            <a href={`mailto:${scholarship.contactEmail}`}>{scholarship.contactEmail}</a>
          </p>
        </div>
      </Section>
    </>
  )
}

export default function App() {
  useEffect(() => {
    document.title = IS_SCHOLARSHIP ? `${scholarship.heading} · DocMaui` : 'Dr. Norman Estin · DocMaui'
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `https://drestin.com${IS_SCHOLARSHIP ? '/scholarship' : '/'}`)
  }, [])
  return (
    <>
      <Nav />
      <main>
        {IS_SCHOLARSHIP ? <Scholarship /> : <>
        <Hero />
        <Welcome />
        <Work />
        <News />
        <Links />
        <Contact />
        </>}
      </main>
      <footer className="footer shell">
        <span>
          &copy; {new Date().getFullYear()} {site.name}
        </span>
        <span>{site.domain}</span>
      </footer>
    </>
  )
}
