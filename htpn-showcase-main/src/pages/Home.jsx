import { useLayoutEffect, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Ticker from '../components/Ticker'
import ProjectRow from '../components/ProjectRow'
import SiteNavigator from '../components/SiteNavigator'
import Footer from '../components/Footer'
import { projects } from '../data/projects'
import { pipelineItems } from '../data/pipeline'
import { inDevelopmentItems } from '../data/inDevelopment'
import { milestones, upcomingInvitations } from '../data/journey'
import { trainingItems } from '../data/training'
import '../styles/home.css'
import '../styles/about.css'
import '../styles/beyond.css'
import '../styles/contact.css'

// ─── Helpers ───────────────────────────────────────────────────────────────

function JourneyHeader({ label }) {
  return (
    <div className="journey-header">
      <span>{label}</span>
    </div>
  )
}

function SectionEntrance({ children, id, className = '' }) {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    gsap.fromTo(el,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true } }
    )
    return () => ScrollTrigger.getAll().filter(t => t.vars.trigger === el).forEach(t => t.kill())
  }, [])
  return <div ref={ref} id={id} className={className}>{children}</div>
}

function WordRevealHeadline({ text, className = '' }) {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const words = el.querySelectorAll('.word-inner')
    gsap.fromTo(words,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 80%', once: true } }
    )
    return () => ScrollTrigger.getAll().filter(t => t.vars.trigger === el).forEach(t => t.kill())
  }, [])
  const lines = text.split('\n')
  return (
    <h2 ref={ref} className={`section__headline ${className}`}>
      {lines.map((line, li) => (
        <span key={li} style={{ display: 'block' }}>
          {line.split(' ').map((word, wi) => (
            <span key={wi} className="word">
              <span className="word-inner">{word}</span>
            </span>
          ))}
        </span>
      ))}
    </h2>
  )
}

// ─── Hero ──────────────────────────────────────────────────────────────────

function Hero() {
  const sectionRef = useRef(null)
  const stageRef = useRef(null)
  const scrollCueRef = useRef(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Word positions: [x%, y%] from viewport
    const wordData = [
      { text: 'We',      cls: 'hero__word--small',  x: '8%',   y: '20%',  tx: '8%',   ty: '38%'  },
      { text: 'Build',   cls: 'hero__word--large',  x: '72%',  y: '75%',  tx: '50%',  ty: '38%'  },
      { text: 'Digital', cls: 'hero__word--xlarge', x: '20%',  y: '42%',  tx: '8%',   ty: '48%'  },
      { text: 'Health',  cls: 'hero__word--large',  x: '65%',  y: '18%',  tx: '55%',  ty: '48%'  },
      { text: 'From',    cls: 'hero__word--small',  x: '5%',   y: '78%',  tx: '8%',   ty: '62%'  },
      { text: 'Within.', cls: 'hero__word--large',  x: '35%',  y: '65%',  tx: '15%',  ty: '62%'  },
    ]

    // Create and position words in the stage
    const stage = stageRef.current
    const wordEls = wordData.map((d) => {
      const el = document.createElement('div')
      el.className = `hero__word ${d.cls}`
      el.textContent = d.text
      el.style.left = d.x
      el.style.top = d.y
      stage.appendChild(el)
      return { el, ...d }
    })

    // Image inserts
    const imgSrcs = ['/img_1.jpg', '/img_2.jpg', '/img_3.png', '/img_4.jpg', '/img_5.jpg']
    const imgEls = imgSrcs.map((src, i) => {
      const el = document.createElement('img')
      el.src = src
      el.className = 'hero__img-insert'
      el.style.left = `${15 + i * 16}%`
      el.style.top = `${25 + (i % 2) * 30}%`
      stage.appendChild(el)
      return el
    })

    // Stats el
    const statsEl = document.createElement('div')
    statsEl.className = 'hero__assembled'
    statsEl.innerHTML = `
      <div class="hero__stats">
        <div class="hero__stat">
          <div class="hero__stat-num" id="stat1">0</div>
          <div class="hero__stat-label">AI tools deployed</div>
        </div>
        <div class="hero__stat">
          <div class="hero__stat-num" id="stat2">0</div>
          <div class="hero__stat-label">clinician builders</div>
        </div>
        <div class="hero__stat">
          <div class="hero__stat-num" id="stat3">∞</div>
          <div class="hero__stat-label">possibilities</div>
        </div>
      </div>
      <div class="hero__tagline">HTPN AI TEAM · KAJANG, SELANGOR</div>
    `
    stage.appendChild(statsEl)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=300%',
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      }
    })

    // Step 1: words appear (0–15%)
    tl.fromTo(wordEls.map(w => w.el),
      { opacity: 0 },
      { opacity: 1, duration: 0.15, stagger: 0.02, ease: 'power3.out' },
      0
    )
    tl.fromTo(imgEls,
      { opacity: 0 },
      { opacity: 1, duration: 0.1, stagger: 0.01 },
      0.03
    )

    // Step 2: words drift to assembled position (15–55%)
    wordEls.forEach(({ el, tx, ty }) => {
      tl.to(el, { left: tx, top: ty, duration: 0.4, ease: 'power2.inOut' }, 0.15)
    })
    tl.to(imgEls, { opacity: 0, duration: 0.2 }, 0.2)

    // Step 3: stats count up (55–75%)
    tl.fromTo(statsEl, { opacity: 0 }, { opacity: 1, duration: 0.1 }, 0.55)
    tl.fromTo('#stat1', { innerText: 0 }, { innerText: 16, duration: 0.1, snap: { innerText: 1 }, ease: 'none' }, 0.6)
    tl.fromTo('#stat2', { innerText: 0 }, { innerText: 3, duration: 0.08, snap: { innerText: 1 }, ease: 'none' }, 0.65)
    tl.to('.hero__tagline', { opacity: 1, duration: 0.08 }, 0.7)

    // Step 4: scroll cue (75–100%)
    tl.fromTo(scrollCueRef.current, { opacity: 0 }, { opacity: 1, duration: 0.1 }, 0.78)

    return () => tl.scrollTrigger?.kill()
  }, [])

  return (
    <section id="hero" ref={sectionRef} className="hero">
      <div className="hero__bg" />
      <div ref={stageRef} className="hero__stage" />
      <div ref={scrollCueRef} className="hero__scroll-cue">
        <span>Scroll to discover</span>
        <div className="hero__scroll-arrow" />
      </div>
    </section>
  )
}

// ─── Projects Section ──────────────────────────────────────────────────────

function ProjectsSection() {
  const patient  = projects.filter(p => p.category === 'patient')
  const doctor   = projects.filter(p => p.category === 'doctor')
  const mgmt     = projects.filter(p => p.category === 'management')

  const toRow = (p) => ({
    ...p,
    slug: p.detailPath?.split('/').pop(),
    credit: [p.credit?.by, p.credit?.aiTeam, p.credit?.coAuthor].filter(Boolean).join(', ')
      + (p.credit?.dept ? ` · ${p.credit.dept}` : ''),
    image: null,
  })

  return (
    <section id="projects" className="section">
      <div className="section__container">
        <div className="section__eyebrow">Live · Deployed</div>
        <WordRevealHeadline text={"tools we've\nalready built."} />

        <JourneyHeader label="PATIENT JOURNEY" />
        {patient.map((p, i) => (
          <ProjectRow key={p.num} project={toRow(p)} idx={i}
            journeyLabel="Patient Journey" basePath="/projects" ctaLabel="VIEW PROJECT" />
        ))}

        <JourneyHeader label="DOCTOR'S JOURNEY" />
        {doctor.map((p, i) => (
          <ProjectRow key={p.num} project={toRow(p)} idx={i}
            journeyLabel="Doctor's Journey" basePath="/projects" ctaLabel="VIEW PROJECT" />
        ))}

        <JourneyHeader label="MANAGEMENT PRODUCTIVITY" />
        {mgmt.map((p, i) => (
          <ProjectRow key={p.num} project={toRow(p)} idx={i}
            journeyLabel="Management" basePath="/projects" ctaLabel="VIEW PROJECT" />
        ))}
      </div>
    </section>
  )
}

// ─── Pipeline Section ──────────────────────────────────────────────────────

function PipelineSection() {
  const pipelineImages = {
    'amr': null,
    'drone-specimen': null,
  }

  const toRow = (p, i) => ({
    ...p,
    num: `0${i + 1}`,
    slug: p.detailPath?.split('/').pop(),
    credit: null,
    image: pipelineImages[p.detailPath?.split('/').pop()] || null,
  })

  return (
    <section id="pipeline" className="section" style={{ background: '#080808' }}>
      <div className="section__container">
        <div className="section__eyebrow" style={{ color: 'rgba(200,184,154,0.6)' }}>On the Horizon</div>
        <WordRevealHeadline text={"what we're\nimagining next."} />

        <JourneyHeader label="INNOVATION PIPELINE" />
        {pipelineItems.map((p, i) => (
          <ProjectRow key={i} project={toRow(p, i)} idx={i}
            journeyLabel="Innovation Pipeline" basePath="/pipeline" ctaLabel="EXPLORE CONCEPT" />
        ))}
      </div>
    </section>
  )
}

// ─── In Development Section ────────────────────────────────────────────────

function InDevelopmentSection() {
  const toRow = (p, i) => ({
    ...p,
    num: `KIV-0${i + 1}`,
    slug: p.slug,
    credit: null,
    image: null,
    tags: [],
  })

  return (
    <section id="in-development" className="section">
      <div className="section__container">
        <div className="section__eyebrow" style={{ color: 'rgba(138,155,168,0.6)' }}>In Development</div>
        <WordRevealHeadline text={"currently\nbeing built."} />

        <JourneyHeader label="IN DEVELOPMENT" />
        {inDevelopmentItems.map((p, i) => (
          <ProjectRow key={i} project={toRow(p, i)} idx={i}
            journeyLabel="In Development" basePath="/in-development" ctaLabel="LEARN MORE" />
        ))}
      </div>
    </section>
  )
}

// ─── About Section ─────────────────────────────────────────────────────────

function AboutSection() {
  const pillarsRef = useRef(null)
  const locationRef = useRef(null)

  useLayoutEffect(() => {
    // Pillars thud animation
    const cards = pillarsRef.current?.querySelectorAll('.pillar')
    if (cards?.length) {
      gsap.fromTo(cards,
        { opacity: 0, y: 80, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.15, ease: 'back.out(1.2)',
          scrollTrigger: { trigger: pillarsRef.current, start: 'top 75%', once: true } }
      )
    }

    // Location items reveal
    const items = locationRef.current?.querySelectorAll('.location-item')
    if (items?.length) {
      gsap.fromTo(items,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.2, ease: 'power2.out',
          scrollTrigger: { trigger: locationRef.current, start: 'top 70%', once: true } }
      )
    }
  }, [])

  const locations = [
    'HTPN, Kajang',
    'KKM, Putrajaya',
    'Cluster Hospitals, Penang',
    'Hospital Sultanah Aminah, JB',
    'Jabatan Kesihatan Negeri Sarawak',
    'London School of Economics',
    'Future Healthcare Asia Conference',
  ]

  return (
    <section id="about" className="section" style={{ background: '#050505' }}>
      <div className="section__container">
        <div className="section__eyebrow">About Us</div>
        <WordRevealHeadline text={"We are HTPN AI Team:\nclinicians who build."} />

        {/* Stats row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2px', marginBottom: '80px' }}>
          {[
            ['16', 'tools deployed'],
            ['3', 'equal partners'],
            ['2024', 'serving HTPN since'],
            ['KKM', 'part of the journey'],
          ].map(([n, l]) => (
            <div key={l} style={{ background: '#111', padding: '32px 28px' }}>
              <div style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 800, color: 'var(--teal)', lineHeight: 1 }}>*{n}</div>
              <div style={{ fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,245,240,0.35)', marginTop: '8px' }}>{l}</div>
            </div>
          ))}
        </div>

        {/* Director block */}
        <div className="about-director">
          <img src="/director.png" alt="Dr Azhar, Hospital Director" className="about-director__img" />
          <div className="about-director__overlay">
            <div className="about-director__name">Dr Azhar, Hospital Director</div>
            <div className="about-director__title">Hospital Tengku Permaisuri Norashikin · Kajang, Selangor</div>
            <p className="about-director__prose">
              Under the leadership and vision of our Hospital Director, the HTPN AI Team was given the space
              and trust to build, experiment, and deploy — transforming HTPN into a living lab for digital
              health innovation within KKM.
            </p>
          </div>
        </div>

        {/* Philosophy pillars */}
        <div ref={pillarsRef} className="pillars">
          {[
            { n: '01', t: 'clinician-led',     d: 'Built by doctors, for doctors.' },
            { n: '02', t: 'rapid prototyping',  d: 'From idea to working tool in days.' },
            { n: '03', t: 'always-beta',        d: 'Constantly improving from real ward feedback.' },
            { n: '04', t: 'patient-centred',    d: 'Every tool traces back to better care.' },
          ].map(p => (
            <div key={p.n} className="pillar">
              <div className="pillar__num">({p.n})</div>
              <div className="pillar__title">{p.t}</div>
              <div className="pillar__desc">{p.d}</div>
            </div>
          ))}
        </div>

        {/* Location reveal */}
        <div ref={locationRef} className="location-reveal" style={{ margin: '0 -40px' }}>
          <div className="location-reveal__bg" style={{ backgroundImage: 'url(/hospital.png)' }}>
            <div className="location-reveal__bg" style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,10,0.82)' }} />
          </div>
          <div className="location-reveal__inner">
            {locations.map((loc, i) => (
              <div key={i} className="location-item">{loc}</div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div style={{ marginTop: '80px' }}>
          <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', marginBottom: '40px' }}>
            <img src="/team.jpg" alt="HTPN AI Team" style={{ width: '100%', height: '320px', objectFit: 'cover', opacity: 0.7 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 50%)' }} />
            <div style={{ position: 'absolute', bottom: '24px', left: '32px', fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,245,240,0.5)' }}>
              The HTPN AI Team
            </div>
          </div>

          <div className="team-grid">
            {[
              { name: 'Dr Ferwahn Fairis',              role: 'AI & Innovation · HTPN AI Team' },
              { name: 'Dr Naim bin Abdul Malek',         role: 'AI & Innovation · HTPN AI Team' },
              { name: 'Dr Muhammad Syafiz bin Ruzain',   role: 'AI & Innovation · HTPN AI Team' },
            ].map(m => (
              <div key={m.name} className="team-card">
                <div className="team-card__avatar">photo</div>
                <div className="team-card__name">{m.name}</div>
                <div className="team-card__role">{m.role}</div>
              </div>
            ))}
          </div>
          <p className="team-caption">Three doctors. One shared mission. More members joining soon.</p>
        </div>
      </div>
    </section>
  )
}

// ─── Stats Uncover ─────────────────────────────────────────────────────────

function StatsUncover() {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const rows = ref.current?.querySelectorAll('.stat-uncover-row')
    if (!rows?.length) return
    rows.forEach((row, i) => {
      const num = row.querySelector('.stat-uncover-num')
      const desc = row.querySelector('.stat-uncover-desc')
      const tl = gsap.timeline({
        scrollTrigger: { trigger: row, start: 'top 80%', once: true }
      })
      tl.fromTo(num, { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
        { opacity: 1, clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: 'power3.out' }, 0)
        .fromTo(desc, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6 }, 0.2)
    })
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  const stats = [
    { num: '16',   desc: 'web tools deployed without an IT department.' },
    { num: '3',    desc: 'doctors who learned to code on the job.' },
    { num: '0',    desc: 'budget allocated for digital health when we started.' },
    { num: '100%', desc: 'of tools built from real ward problems.' },
    { num: '9',    desc: 'training sessions delivered across HTPN departments.' },
    { num: '1 ⭐', desc: 'Coding Camp where O&G doctors wrote their first lines of code.' },
  ]

  return (
    <div ref={ref} className="stats-uncover section__container" style={{ maxWidth: 1280, margin: '0 auto' }}>
      {stats.map((s, i) => (
        <div key={i} className="stat-uncover-row">
          <div className="stat-uncover-num">{s.num}</div>
          <div className="stat-uncover-desc">{s.desc}</div>
        </div>
      ))}
    </div>
  )
}

// ─── Beyond HTPN Section ───────────────────────────────────────────────────

function BeyondSection() {
  const timelineRef = useRef(null)

  useLayoutEffect(() => {
    const items = timelineRef.current?.querySelectorAll('.milestone-card')
    if (!items?.length) return
    gsap.fromTo(items,
      { opacity: 0, x: -16 },
      { opacity: 1, x: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out',
        scrollTrigger: { trigger: timelineRef.current, start: 'top 75%', once: true } }
    )
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <section id="beyond-htpn" className="section" style={{ background: '#080808' }}>
      <div className="section__container">
        <div className="section__eyebrow">Beyond HTPN · Building Capacity</div>
        <WordRevealHeadline text={"Where clinicians\nbecome builders."} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', marginBottom: '80px' }}>
          <div>
            <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,245,240,0.3)', marginBottom: '16px' }}>Beyond HTPN</div>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(245,245,240,0.55)' }}>
              Our work is being noticed beyond Kajang. We collaborate with KKM, present at national and
              international conferences, and share our tools openly with any hospital ready to build.
            </p>
          </div>
          <div>
            <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,245,240,0.3)', marginBottom: '16px' }}>Building Capacity</div>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(245,245,240,0.55)' }}>
              We run internal workshops, mentor junior doctors in rapid prototyping, and are developing an
              AI literacy framework for Malaysian clinicians and Occupational Health Doctors.
            </p>
          </div>
        </div>

        <StatsUncover />

        {/* Journey timeline */}
        <div style={{ marginTop: '80px' }}>
          <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,245,240,0.3)', marginBottom: '32px' }}>Journey</div>
          <div ref={timelineRef} className="milestones-grid">
            {milestones.map((m, i) => (
              <div key={i} className="milestone-card" dangerouslySetInnerHTML={{ __html: `<div class="milestone-card__title">${m.text.replace(/<\/?strong>/g, '')}</div>` }} />
            ))}
            {upcomingInvitations.map((u, i) => (
              <div key={`up${i}`} className="milestone-card upcoming">
                <div className="milestone-card__title">{u.icon} {u.title}</div>
                <div className="milestone-card__desc">{u.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Training strip */}
        <div className="training-strip">
          <div className="training-strip__track">
            {[...trainingItems, ...trainingItems].map((t, i) => (
              <div key={i} className="training-item">
                <span className="training-item__num">{t.num}</span>
                <span>{t.title} — {t.dept} · {t.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Belief Statement Pin ──────────────────────────────────────────────────

function BeliefPin() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const words = section.querySelectorAll('.belief-pin__word')

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=200%',
        pin: true,
        scrub: 1,
      }
    })

    words.forEach((w, i) => {
      tl.fromTo(w, { opacity: 0 }, { opacity: 1, duration: 0.2 }, i * 0.2)
    })

    return () => tl.scrollTrigger?.kill()
  }, [])

  const text = 'We believe the best digital health tools are built by the doctors who use them every day.'
  const words = text.split(' ')

  return (
    <section ref={sectionRef} className="belief-pin">
      <p className="belief-pin__text">
        {words.map((w, i) => (
          <span key={i} className="belief-pin__word">{w} </span>
        ))}
      </p>
    </section>
  )
}

// ─── Contact Section ───────────────────────────────────────────────────────

function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you — we will be in touch!')
  }

  return (
    <section id="contact" className="section" style={{ background: '#050505' }}>
      <div className="section__container">
        <div className="section__eyebrow">Get in Touch</div>
        <WordRevealHeadline text={"Let's build\ntogether."} style={{ marginBottom: '60px' }} />

        <form className="contact-form" onSubmit={handleSubmit}>
          <p className="contact-sentence">
            I am a{' '}
            <select defaultValue="">
              <option value="" disabled>role</option>
              <option>Doctor</option>
              <option>Nurse</option>
              <option>Administrator</option>
              <option>Developer</option>
              <option>Researcher</option>
              <option>Other</option>
            </select>
            {' '}from{' '}
            <input type="text" placeholder="hospital or institution" />
            {' '}interested in{' '}
            <select defaultValue="">
              <option value="" disabled>topic</option>
              <option>Collaborating on a tool</option>
              <option>Adopting a tool for my hospital</option>
              <option>Learning from your team</option>
              <option>Partnering with HTPN</option>
              <option>Just saying hello</option>
            </select>
          </p>
          <button type="submit" className="contact-cta">
            <div className="contact-cta__circle">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            Let's connect
          </button>
        </form>

        <div className="contact-info">
          <div className="contact-info__row">
            <div className="contact-info__label">Email</div>
            <div className="contact-info__value">
              <a href="mailto:udppkhtpn@moh.gov.my">udppkhtpn@moh.gov.my</a>
            </div>
          </div>
          <div className="contact-info__row">
            <div className="contact-info__label">Location</div>
            <div className="contact-info__value">
              Hospital Tengku Permaisuri Norashikin<br />
              Kajang, Selangor, Malaysia
            </div>
          </div>
        </div>

        <WordRevealHeadline text={"Local insight.\nNational impact."} className="contact-closing" style={{ marginTop: '80px', fontSize: 'clamp(2.5rem,6vw,5.5rem)' }} />
      </div>
    </section>
  )
}

// ─── Home (assembled) ──────────────────────────────────────────────────────

export default function Home() {
  // Restore scroll position from sessionStorage
  useEffect(() => {
    const anchor = sessionStorage.getItem('scrollTo')
    if (anchor) {
      sessionStorage.removeItem('scrollTo')
      setTimeout(() => {
        const el = document.querySelector(anchor)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [])

  return (
    <>
      <Hero />
      <Ticker />
      <ProjectsSection />
      <PipelineSection />
      <InDevelopmentSection />
      <AboutSection />
      <BeyondSection />
      <BeliefPin />
      <ContactSection />
      <SiteNavigator />
      <Footer />
    </>
  )
}
