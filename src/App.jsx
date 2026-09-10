import { useEffect, useState } from 'react'
import { about, contact, links, news, site, work } from './content'
import './App.css'

const NAV = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'What I do' },
  { href: '#news', label: 'News' },
  { href: '#links', label: 'Find me' },
  { href: '#contact', label: 'Contact' },
]

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
      <a className="nav__mark" href="#top">
        {site.name} <span>/ {site.handle}</span>
      </a>
      <nav className="nav__links" aria-label="Sections">
        {NAV.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
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
        <a className="btn btn--ghost" href="#about">
          Read the story
        </a>
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

function About() {
  return (
    <Section id="about" heading={about.heading}>
      <div className="about">
        <div className="about__body">
          {about.body.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <dl className="stats">
          {about.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="stat__value">{stat.value}</dt>
              <dd className="stat__label">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
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

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <News />
        <Links />
        <Contact />
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
