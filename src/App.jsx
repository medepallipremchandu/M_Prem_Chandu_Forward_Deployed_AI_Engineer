import { useEffect, useState } from 'react'
import {
  profile, stats, competencies, experience, projects, moreSolutions,
  skills, awards, certifications, education, publications, extras,
} from './data.js'

const NAV = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['recognition', 'Recognition'],
  ['contact', 'Contact'],
]

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('theme') || 'dark' } catch { return 'dark' }
  })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch { /* ignore */ }
  }, [theme])
  return [theme, () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))]
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) }
      }),
      { threshold: 0.12 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  })
}

function Header({ theme, toggle }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav">
        <a href="#top" className="logo">
          <span className="logo-mark">PC</span>
          <span className="logo-text">{profile.short}</span>
        </a>
        <nav className={`links ${open ? 'open' : ''}`}>
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="btn btn-sm btn-primary" href={profile.resume} target="_blank" rel="noreferrer">Resume</a>
        </nav>
        <div className="nav-actions">
          <button className="icon-btn" onClick={toggle} aria-label="Toggle theme">
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          <button className="icon-btn menu-btn" onClick={() => setOpen(o => !o)} aria-label="Menu">
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="pill"><span className="dot" /> Open to Forward Deployed & AI Engineering roles</div>
        <h1>
          Hi, I'm {profile.short}.<br />
          <span className="grad">I ship production AI</span><br />that teams actually adopt.
        </h1>
        <p className="lead">{profile.intro}</p>
        <p className="role mono">{profile.role} · {profile.tagline}</p>
        <div className="cta">
          <a className="btn btn-primary" href="#projects">View my work →</a>
          <a className="btn btn-ghost" href={profile.resume} download="Prem_Chandu_Medepalli_Resume.pdf">Download resume</a>
          <a className="btn btn-ghost" href={`mailto:${profile.email}`}>Get in touch</a>
        </div>
        <div className="stats">
          {stats.map(s => (
            <div className="stat" key={s.label}>
              <div className="stat-value grad">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow mono">{eyebrow}</span>
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    </section>
  )
}

function About() {
  const steps = [
    ['01', 'Discover', 'Embed with stakeholders, map real workflows and find the high-value AI use case.'],
    ['02', 'Prototype', 'Ship a working prototype in days using agentic, spec-driven development.'],
    ['03', 'Productionize', 'Harden with RBAC, audit trails, evals and cost governance — then deploy.'],
    ['04', 'Drive adoption', 'Iterate with users until the system is part of how the team works.'],
  ]
  return (
    <Section id="about" eyebrow="// about" title="Engineer in the room with the customer">
      <div className="about-grid">
        <div className="reveal">
          {profile.summary.map((p, i) => <p className="body" key={i}>{p}</p>)}
          <div className="chips">
            {competencies.map(c => <span className="chip" key={c}>{c}</span>)}
          </div>
        </div>
        <div className="process reveal">
          {steps.map(([n, t, d]) => (
            <div className="step" key={n}>
              <span className="step-n mono">{n}</span>
              <div>
                <h4>{t}</h4>
                <p>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

function Experience() {
  return (
    <Section id="experience" eyebrow="// experience" title="Where I've been delivering">
      <div className="card exp reveal">
        <div className="exp-head">
          <div>
            <h3>{experience.company}</h3>
            <p className="muted">{experience.location}</p>
          </div>
          <span className="badge">{experience.period}</span>
        </div>
        <div className="timeline">
          {experience.roles.map(r => (
            <div className="tl-item" key={r.title}>
              <span className="tl-dot" />
              <div>
                <strong>{r.title}</strong>
                <span className="muted"> · {r.period}</span>
              </div>
            </div>
          ))}
        </div>
        <ul className="bullets">
          {experience.points.map(p => <li key={p}>{p}</li>)}
        </ul>
      </div>
    </Section>
  )
}

function Projects() {
  const cats = ['All', ...new Set(projects.map(p => p.category))]
  const [cat, setCat] = useState('All')
  const [active, setActive] = useState(null)
  const list = cat === 'All' ? projects : projects.filter(p => p.category === cat)

  useEffect(() => {
    const onKey = e => e.key === 'Escape' && setActive(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <Section id="projects" eyebrow="// projects" title="Platforms I've built and shipped">
      <div className="filters reveal">
        {cats.map(c => (
          <button key={c} className={`filter ${c === cat ? 'active' : ''}`} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>
      <div className="grid">
        {list.map(p => (
          <article className="card project reveal visible" key={p.name} onClick={() => setActive(p)}
            tabIndex={0} onKeyDown={e => e.key === 'Enter' && setActive(p)}>
            <div className="project-top">
              <span className="cat mono">{p.category}</span>
              <span className="arrow">↗</span>
            </div>
            <h3>{p.name}</h3>
            <p className="sub">{p.subtitle}</p>
            <p className="impact">◆ {p.highlight}</p>
            <p className="desc">{p.description}</p>
            <div className="tags">
              {p.tech.slice(0, 6).map(t => <span className="tag" key={t}>{t}</span>)}
              {p.tech.length > 6 && <span className="tag">+{p.tech.length - 6}</span>}
            </div>
          </article>
        ))}
      </div>

      <div className="more reveal">
        <h3>More AI solutions & client POCs</h3>
        <div className="more-grid">
          {moreSolutions.map(s => (
            <div className="more-item" key={s.name}>
              <strong>{s.name}</strong>
              <span>{s.impact}</span>
            </div>
          ))}
        </div>
      </div>

      {active && (
        <div className="modal-bg" onClick={() => setActive(null)}>
          <div className="modal" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">
            <button className="icon-btn close" onClick={() => setActive(null)} aria-label="Close">✕</button>
            <span className="cat mono">{active.category}</span>
            <h3>{active.name}</h3>
            <p className="sub">{active.subtitle}</p>
            <p className="impact">◆ {active.highlight}</p>
            <p className="desc">{active.description}</p>
            <ul className="bullets">
              {active.points.map(pt => <li key={pt}>{pt}</li>)}
            </ul>
            <div className="tags">
              {active.tech.map(t => <span className="tag" key={t}>{t}</span>)}
            </div>
          </div>
        </div>
      )}
    </Section>
  )
}

function Skills() {
  return (
    <Section id="skills" eyebrow="// skills" title="Toolkit">
      <div className="skills-grid">
        {skills.map(s => (
          <div className="card skill reveal" key={s.group}>
            <h4>{s.group}</h4>
            <div className="tags">
              {s.items.map(i => <span className="tag" key={i}>{i}</span>)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Recognition() {
  return (
    <Section id="recognition" eyebrow="// recognition" title="Awards, credentials & education">
      <div className="rec-grid">
        <div className="card reveal">
          <h4 className="card-title">🏆 Awards</h4>
          {awards.map(a => (
            <div className="row" key={a.title}>
              <strong>{a.title}</strong>
              <span className="muted">{a.org} — {a.note}</span>
            </div>
          ))}
          <h4 className="card-title spaced">📜 Certifications</h4>
          <ul className="checks">
            {certifications.map(c => <li key={c}>{c}</li>)}
          </ul>
        </div>
        <div className="card reveal">
          <h4 className="card-title">🎓 Education</h4>
          {education.map(e => (
            <div className="row" key={e.degree}>
              <div className="row-head"><strong>{e.degree}</strong><span className="badge">{e.score}</span></div>
              <span className="muted">{e.school} · {e.period}</span>
            </div>
          ))}
          <h4 className="card-title spaced">📄 Publications</h4>
          {publications.map(p => (
            <div className="row" key={p.title}>
              <strong>{p.title}</strong>
              <span className="muted">{p.venue} · {p.date}</span>
            </div>
          ))}
        </div>
        <div className="card reveal">
          <h4 className="card-title">⚡ Leadership & internships</h4>
          {extras.map(x => (
            <div className="row" key={x.title}>
              <strong>{x.title}</strong>
              <span className="muted">{x.org} · {x.period}</span>
              <span className="small">{x.note}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard?.writeText(profile.email).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    })
  }
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact card reveal">
          <span className="eyebrow mono">// contact</span>
          <h2>Have a messy problem AI could solve?</h2>
          <p className="lead">I'd love to hear about it. I'm open to Forward Deployed Engineer, AI Engineer and GenAI solutions roles.</p>
          <div className="cta center">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>✉ {profile.email}</a>
            <button className="btn btn-ghost" onClick={copy}>{copied ? '✓ Copied' : 'Copy email'}</button>
            <a className="btn btn-ghost" href={`tel:${profile.phone.replace(/\s/g, '')}`}>☎ {profile.phone}</a>
          </div>
          <p className="muted small">📍 {profile.location}</p>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  const [theme, toggle] = useTheme()
  useReveal()
  return (
    <>
      <Header theme={theme} toggle={toggle} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Recognition />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  )
}
