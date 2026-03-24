import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Ticker from '../components/Ticker'
import ScrollRevealText from '../components/ScrollRevealText'
import ProjectFolders from '../components/ProjectFolders'
import ProjectRow from '../components/ProjectRow'
import SiteNavigator from '../components/SiteNavigator'
import Footer from '../components/Footer'
import { projects } from '../data/projects'
import { pipelineItems } from '../data/pipeline'
import { inDevelopmentItems } from '../data/inDevelopment'
import '../styles/home.css'

function useScrollReveal(selector, opts = {}) {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll(selector)
    if (!els.length) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        els,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            once: true,
          },
          ...opts,
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])
  return ref
}

/* ── Hero ─────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section id="hero" className="hero hero--untold">

      {/* Top bar */}
      <div className="hero__topbar">
        <span className="hero__eyebrow">HTPN · AI Team · Kajang</span>
        <span className="hero__eyebrow">Hospital Tengku Permaisuri Norashikin</span>
      </div>

      {/* Giant type block */}
      <div className="hero__type">

        {/* Line 1 */}
        <div className="hero__line hero__line--1">
          <span className="hero__word">We</span>
          {/* Floating card — like untold's embedded photo */}
          <div className="hero__float-card">
            <div className="hero__float-card__num">16+</div>
            <div className="hero__float-card__label">Live Tools<br />Deployed</div>
          </div>
          <span className="hero__word">Build</span>
        </div>

        {/* Line 2 */}
        <div className="hero__line hero__line--2">
          <span className="hero__accent-star">✦</span>
          <span className="hero__word hero__word--teal">Clinical</span>
        </div>

        {/* Line 3 */}
        <div className="hero__line hero__line--3">
          <span className="hero__word">Tools.</span>
        </div>

      </div>

      {/* Bottom row */}
      <div className="hero__bottom">
        <div className="hero__scroll-discover">
          <span>SCROLL TO DISCOVER</span>
          <div className="hero__scroll-line" />
        </div>
      </div>

    </section>
  )
}

/* ── Wireframe Image ──────────────────────────────────── */
function WireframeSection() {
  return (
    <div className="wireframe-bg">
      <img src="/HTPN Old Wireframe.png" alt="" className="wireframe-bg__img" />
      <div className="wireframe-bg__overlay" />
    </div>
  )
}

/* ── Story Block ──────────────────────────────────────── */
function StoryBlock() {
  return (
    <section className="story-block">
      <span className="section__label" style={{ marginBottom: '32px', display: 'inline-flex' }}>Our Story</span>
      <ScrollRevealText
        text="Homegrown digital solutions built by clinicians, for clinicians. Empowering HTPN with AI-assisted tools, real-time dashboards, and workflow automation — transforming a 135-year-old institution into a model of modern, frontline-led digital healthcare."
        className="story-block__text"
        cursor={false}
      />
    </section>
  )
}

/* ── Projects ─────────────────────────────────────────── */
function ProjectsSection() {
  return <ProjectFolders projects={projects} />
}

/* ── Pipeline ─────────────────────────────────────────── */
function PipelineSection() {
  const sectionRef = useScrollReveal('.reveal')
  const navigate = useNavigate()

  return (
    <section id="pipeline" className="section" ref={sectionRef}>
      <div className="section__header">
        <div>
          <p className="section__label reveal">Innovation Pipeline</p>
          <h2 className="section__title reveal">Innovation<br />Horizon</h2>
        </div>
        <span className="section__count reveal">{pipelineItems.length} concepts</span>
      </div>

      <div className="card-grid">
        {pipelineItems.map((item) => {
          const slug = item.detailPath.replace('/pipeline/', '')
          return (
            <div
              key={item.detailPath}
              className="card reveal"
              onClick={() => navigate(item.detailPath)}
            >
              <div className="card__icon">{item.icon}</div>
              <h3 className="card__title">{item.title}</h3>
              <p className="card__desc">{item.desc}</p>
              <div className="card__tags">
                {item.tags?.map(t => <span key={t} className="card__tag">{t}</span>)}
              </div>
              <span className="card__arrow">→ View</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

/* ── About ────────────────────────────────────────────── */
function AboutSection() {
  const sectionRef = useScrollReveal('.reveal')

  return (
    <section id="about" className="section" ref={sectionRef}>
      <div className="section__header">
        <div>
          <p className="section__label reveal">About Us</p>
          <h2 className="section__title reveal">Who We Are</h2>
        </div>
      </div>

      <div className="about-grid">
        <div className="about__text reveal">
          <ScrollRevealText
            text="A team of clinicians, doctors, and nurses at HTPN Kajang — building digital tools that solve real problems in everyday hospital workflow without waiting for procurement cycles."
            cursor={false}
          />
        </div>

        <div className="about__details">
          <div className="reveal">
            <p className="about__detail-label">Hospital</p>
            <p className="about__detail-value">Hospital Tengku Permaisuri Norashikin (HTPN)<br />Kajang, Selangor</p>
          </div>
          <div className="reveal">
            <p className="about__detail-label">Focus Areas</p>
            <p className="about__detail-value">
              Patient Journey · Doctor's Workflow<br />
              Management Productivity · AI Integration
            </p>
          </div>
          <div className="reveal">
            <p className="about__detail-label">Approach</p>
            <p className="about__detail-value">
              Built by the people who use it.<br />
              Deployed on the wards. Used daily.
            </p>
          </div>
        </div>
      </div>

      <div className="stats-row">
        {[
          { num: '16+', label: 'Live Deployments' },
          { num: '4', label: 'Pipeline Projects' },
          { num: '3', label: 'Clinical Journeys' },
          { num: '1', label: 'Shared Mission' },
        ].map(({ num, label }) => (
          <div key={label} className="stat-cell reveal">
            <div className="stat-cell__num">{num}</div>
            <div className="stat-cell__label">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── Belief ───────────────────────────────────────────── */
function BeliefSection() {
  return (
    <section className="belief">
      <span className="section__label" style={{ marginBottom: '40px', display: 'inline-flex' }}>Our Philosophy</span>
      <ScrollRevealText
        text="Technology built by clinicians for clinicians — solves problems that procurement never reaches."
        className="belief__text"
        cursor={true}
      />
    </section>
  )
}

/* ── In Development ───────────────────────────────────── */
function InDevelopmentSection() {
  const sectionRef = useScrollReveal('.reveal')
  const navigate = useNavigate()

  return (
    <section id="in-development" className="section" ref={sectionRef}>
      <div className="section__header">
        <div>
          <p className="section__label reveal">In Development</p>
          <h2 className="section__title reveal">Coming Soon</h2>
        </div>
        <span className="section__count reveal">{inDevelopmentItems.length} ideas</span>
      </div>

      <div className="card-grid">
        {inDevelopmentItems.map((item) => (
          <div
            key={item.slug}
            className="card reveal"
            onClick={() => navigate(`/in-development/${item.slug}`)}
          >
            <div className="card__icon">{item.icon}</div>
            <h3 className="card__title">{item.title}</h3>
            <p className="card__desc">{item.desc}</p>
            <div className="card__tags">
              {item.tags?.map(t => <span key={t} className="card__tag">{t}</span>)}
            </div>
            <span className="card__arrow">→ Learn More</span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── Contact ──────────────────────────────────────────── */
function ContactSection() {
  const [name, setName] = useState('')
  const [topic, setTopic] = useState('collaboration')
  const sectionRef = useScrollReveal('.reveal')

  const handleSubmit = () => {
    const subject = `HTPN AI Team — ${topic}`
    const body = name ? `Hi, I'm ${name}. I'd like to discuss ${topic}.` : ''
    window.location.href = `mailto:htpnaiteam@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="section" ref={sectionRef}>
      <div className="section__header">
        <div>
          <p className="section__label reveal">Get in Touch</p>
          <h2 className="section__title reveal">Get in Touch</h2>
        </div>
      </div>

      <div className="contact__form">
        <p className="contact__sentence reveal">
          Hi, my name is{' '}
          <input
            className="contact__input"
            placeholder="your name"
            value={name}
            onChange={e => setName(e.target.value)}
          />{' '}
          and I'd like to talk about{' '}
          <select
            className="contact__select"
            value={topic}
            onChange={e => setTopic(e.target.value)}
          >
            <option value="collaboration">collaboration</option>
            <option value="a project idea">a project idea</option>
            <option value="joining the team">joining the team</option>
            <option value="knowledge sharing">knowledge sharing</option>
            <option value="something else">something else</option>
          </select>
          .
        </p>

        <button className="contact__cta reveal" onClick={handleSubmit}>
          Send Message →
        </button>
      </div>
    </section>
  )
}

/* ── Home ─────────────────────────────────────────────── */
export default function Home() {
  useEffect(() => {
    const scrollTo = sessionStorage.getItem('scrollTo')
    if (scrollTo) {
      sessionStorage.removeItem('scrollTo')
      const id = scrollTo.replace('#', '')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <main>
      <div className="hero-story-group">
        <HeroSection />
        <WireframeSection />
        <StoryBlock />
      </div>
      <Ticker />
      <ProjectsSection />
      <PipelineSection />
      <BeliefSection />
      <AboutSection />
      <InDevelopmentSection />
      <ContactSection />
      <SiteNavigator />
      <Footer />
    </main>
  )
}
