import { useEffect, useState } from 'react'
import { community, contact, links, scholarship, site, teamAdvisor, tournament, welcome, work } from './content'
import './App.css'

const NAV = [
  { href: '#welcome', label: 'Welcome' },
  { href: '#work', label: 'What I do' },
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
  const portrait = welcome.blocks.find((block) => block.src === '/media/clinic-portrait.jpg')
  return (
    <section className="hero hero--coastal shell" id="top">
      <div className="hero__copy">
      <span className="hero__eyebrow">
        {site.coastal.eyebrow}
      </span>
      <h1>
        <span className="hero__greeting">{site.coastal.greeting}<img className="hibiscus" src="/media/decor/hibiscus-botanical.svg" alt="" aria-hidden="true" width="80" height="80" /></span><br />{site.coastal.introduction}
      </h1>
      <p className="hero__tagline">{site.tagline}</p>
      <p className="hero__intro">{site.intro}</p>
      <div className="hero__actions">
        <a className="btn btn--primary" href="#welcome">
          {site.coastal.storyAction}
        </a>
        <a className="btn btn--ghost" href="/scholarship">{site.coastal.scholarshipAction}</a>
      </div>
      </div>
      {portrait && <figure className="hero__portrait"><img src={portrait.src} alt={portrait.alt} fetchPriority="high" /></figure>}
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
    <Section id="welcome" heading={site.coastal.storyHeading}>
      <div className="welcome__overview">
      <div className="welcome__summary">
        <p className="welcome__lede">{welcome.lede}</p>
        {WELCOME_BLOCKS.slice(0, 2).map((block, i) => <p key={i}>{block.text}</p>)}
      </div>
      <div className="welcome__media">
        <WelcomeVideo />
      </div>
      </div>
      <details className="welcome__full">
      <summary>{site.coastal.letterAction}</summary>
      <div className="welcome__letter">
        {WELCOME_BLOCKS.slice(2).map((block, i) =>
          block.type === 'photo' ? (
            <Photo block={block} index={block.photoIndex} key={`photo-${block.photoIndex}`} />
          ) : block.type === 'gallery' ? (
            <div className="welcome-gallery" id={block.id} role="group" aria-label={block.label} key={block.id}>
              {block.photos.map((photo) => (
                <a key={photo.src} href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full photo: ${photo.alt}`}>
                  <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
                </a>
              ))}
            </div>
          ) : (
            // Paragraph text is stable copy, so the index is a safe key here.
            <p key={`p-${i}`}>{block.text}</p>
          ),
        )}
      </div>
      </details>

      <dl className="stats stats--row">
        {welcome.stats.map((stat) => (
          <div key={stat.label}>
            <dt className="stat__value">{stat.value}</dt>
            <dd className="stat__label">{stat.label}</dd>
          </div>
        ))}
      </dl>
      <section className="team-advisor" aria-labelledby="tournament-heading">
        <h2 id="tournament-heading">{tournament.heading}</h2>
        <p>{tournament.body}</p>
        {tournament.groups.map((group) => (
          <section className="tournament-group" key={group.id} aria-labelledby={group.id}>
            <h3 id={group.id}>{group.heading}</h3>
            <div className="team-gallery">
              {group.photos.map((photo) => (
                <figure className="tournament-photo" key={photo.src}>
                  <a href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full photo: ${photo.alt}`}>
                    <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
                  </a>
                  {photo.movieUrl && (
                    <figcaption>
                      <a className="btn btn--primary movie-bit-button" href={photo.movieUrl} target="_blank" rel="noopener noreferrer">{photo.movieLabel}</a>
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>
        ))}
      </section>
      <section className="team-advisor" aria-labelledby="team-advisor-heading">
        <h2 id="team-advisor-heading">{teamAdvisor.heading}</h2>
        <p>{teamAdvisor.body}</p>
        <div className="team-gallery">
          {teamAdvisor.photos.map((photo) => (
            <a key={photo.src} href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full photo: ${photo.alt}`}>
              <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
            </a>
          ))}
        </div>
      </section>
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
            {item.photo && (
              <a className="card__photo" href={item.photo.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full photo: ${item.photo.alt}`}>
                <img src={item.photo.src} alt={item.photo.alt} loading="lazy" decoding="async" />
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}

function Community() {
  return (
    <Section id="community" heading={community.heading}>
      <p>{community.body}</p>
      <div className="community-gallery">
        {community.photos.map((photo) => (
          <figure className={`community-photo${photo.presentation === 'certificate' ? ' community-photo--certificate' : ''}`} key={photo.src}>
            <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
          </figure>
        ))}
      </div>
    </Section>
  )
}

function ScholarshipFeature() {
  return (
    <section className="section shell" aria-labelledby="scholarship-feature-heading">
      <div className="scholarship-feature">
        <p className="hero__eyebrow">{site.coastal.nextGeneration}</p>
        <h2 id="scholarship-feature-heading">{scholarship.heading}</h2>
        <p>{scholarship.lede}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="/scholarship">{site.coastal.scholarshipDetails}</a>
          <a className="btn btn--ghost" href={scholarship.donationUrl} target="_blank" rel="noopener noreferrer">{scholarship.giveLabel}</a>
        </div>
      </div>
    </section>
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
              target={item.href.startsWith('mailto:') ? undefined : '_blank'}
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
      <section className="section shell recipient" aria-labelledby="recipient-heading">
        <div className="recipient__card">
          <div className="recipient__visuals">
            <figure className="recipient__portrait">
              <svg viewBox="110 355 443 555" role="img" aria-label={scholarship.recipient.portraitAlt}>
                <image href={scholarship.recipient.source.src} width="2048" height="1186" />
              </svg>
              <figcaption>{scholarship.recipient.name}</figcaption>
            </figure>
            <svg className="recipient__logo" viewBox="577 353 448 448" role="img" aria-label={scholarship.recipient.logoAlt}>
              <image href={scholarship.recipient.source.src} width="2048" height="1186" />
            </svg>
          </div>
          <div className="recipient__copy">
            <h2 id="recipient-heading">{scholarship.recipient.heading}</h2>
            <p>{scholarship.recipient.body}</p>
            <p className="recipient__congratulations">{scholarship.recipient.congratulations}</p>
          </div>
        </div>
      </section>
      <Section id="give-now" heading={scholarship.giveLabel}>
        <div className="welcome__letter scholarship__details">
          <p>{scholarship.donationIntro}</p>
          <p>{scholarship.donationReminder}</p>
          {scholarship.donationUrl ? (
            <a className="btn btn--primary" href={scholarship.donationUrl} target="_blank" rel="noopener noreferrer">{scholarship.giveLabel}</a>
          ) : <p className="contact__note">{scholarship.pendingLabel}</p>}
          <p>{scholarship.taxNote}</p>
          <p>{scholarship.donationReminder}</p>
          <h3>{scholarship.mailHeading}</h3>
          <address>{scholarship.address.map((line) => <div key={line}>{line}</div>)}</address>
          <p>{scholarship.checkInstructions}</p>
          <p>{scholarship.donationReminder}</p>
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
    document.title = IS_SCHOLARSHIP ? `${scholarship.heading} · DocMaui` : 'Dr. Norm Estin · DocMaui'
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
        <Community />
        <ScholarshipFeature />
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
