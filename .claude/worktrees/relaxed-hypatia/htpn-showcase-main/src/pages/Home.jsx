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
          <span className="hero__word">Redefining</span>
        </div>

        {/* Line 2 */}
        <div className="hero__line hero__line--2">
          <span className="hero__accent-star">✦</span>
          <span className="hero__word hero__word--teal">Healthcare</span>
        </div>

        {/* Line 3 */}
        <div className="hero__line hero__line--3">
          <span className="hero__word hero__word--dim">Through</span>
        </div>

        {/* Line 4 */}
        <div className="hero__line hero__line--4">
          <span className="hero__word">Applied AI.</span>
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
        start="top 40%"
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

      <ScrollRevealText
        text="Beyond the screen. Beyond the hospital. These are the projects where robots move, drones fly, and governments listen. This is where we build the future of Malaysian healthcare."
        className="pipeline__explainer"
        cursor={false}
      />

      <div className="card-grid">
        {pipelineItems.map((item) => {
          const slug = item.detailPath.replace('/pipeline/', '')
          return (
            <div
              key={item.detailPath}
              className={`card reveal${item.cardImage ? ' card--with-image' : ''}`}
              onClick={() => navigate(item.detailPath)}
            >
              <div className="card__body">
                {item.cardImage ? (
                  <div className="card__meta">
                    <span className="card__category">( Pipeline )</span>
                    <span className="card__status-badge">POC in Progress</span>
                  </div>
                ) : null}
                <div className="card__icon">{item.icon}</div>
                <h3 className="card__title">{item.title}</h3>
                <p className="card__desc">{item.desc}</p>
                <div className="card__tags">
                  {item.tags?.map(t => <span key={t} className="card__tag">{t}</span>)}
                </div>
                <span className="card__view-btn">View Project →</span>
              </div>
              {item.cardImage && (
                <div className="card__img-wrap">
                  <img src={item.cardImage} alt={item.title} className="card__img" />
                </div>
              )}
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

      {/* Director Card */}
      <div className="about-director reveal">
        <img src="/director.png" alt="Dr Hj Muhd Siv Azhar Merican bin Abdullah" className="about-director__photo" />
        <div>
          <p className="about-director__label">Pengarah Hospital</p>
          <h3 className="about-director__name">Dr Hj Muhd Siv Azhar Merican bin Abdullah</h3>
          <p className="about-director__desc">
            Under the leadership and mentorship of our hospital director, the AI Team at HTPN Kajang has been empowered to innovate from within — translating frontline ideas into real, deployable digital solutions that serve patients and staff alike.
          </p>
          <p className="about-director__desc">
            The AI Team at HTPN Kajang is an internal innovation unit dedicated to building practical digital solutions that address real frontline problems — designed and deployed by the people who use them daily.
          </p>
          <p className="about-director__desc">
            Our approach is deeply collaborative. The innovation unit works directly with clinicians and hospital departments across HTPN — it is the frontline personnel who identify the problems and drive the solutions, while the AI Team contributes the technical know-how in vibe coding, automation, and AI-assisted development.
          </p>
          <p className="about-director__desc">
            Operating within Malaysia's MOH infrastructure and leveraging Google Workspace, our tools are PDPA-compliant, mobile-first, and built to serve both clinical and administrative needs — without waiting for top-down procurement.
          </p>
          <p className="about-director__desc">
            From a 135-year-old government hospital, we're proving that meaningful digital transformation starts at the ward level.
          </p>
        </div>
      </div>

      {/* Team Photo */}
      <img src="/team.jpg" alt="AI Team HTPN Kajang" className="about-team-photo reveal" />
      <p className="about-team-caption reveal">AI Team HTPN Kajang</p>
      <div className="about-team-members reveal">
        <p className="about-team-members__label">AI Team Members</p>
        <div className="about-team-members__names">
          <span>Dr Ferwahn Fairis bin Ab Karim</span>
          <span>Dr Naim bin Abdul Malek</span>
          <span>Dr Muhammad Syafiz bin Ruzain</span>
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

/* ── Journey Beyond HTPN ─────────────────────────────── */
const partnerships = [
  { org: 'Monash University', desc: 'Completed the 6-week Digital Health Micro-Credential programme.' },
  { org: 'MPC & Roketz Sdn Bhd', desc: 'Organised four AI workshop series in collaboration, upskilling clinical and administrative staff.' },
  { org: 'London School of Economics', desc: 'Participated and presented an AI project at the Data Science & AI Course.' },
  { org: 'Future Healthcare Asia Conference 2025', desc: 'Invited Speaker on AI ethics and data security.' },
  { org: 'AI Workshop, Cluster Hospitals Penang', desc: "Invited Speaker, sharing HTPN's digitalisation journey." },
  { org: 'MIH Megatrend 2025', desc: "Presented a poster showcasing HTPN's AI-driven digital transformation." },
  { org: 'Hospital Sultanah Aminah, Johor Bahru', desc: "Conducted a full AI workshop for the hospital's clinical and administrative team." },
]

const upcomingInvitations = [
  { icon: '🏥', org: 'Hospital Pulau Pinang', desc: 'AI Workshop — Invitation Accepted' },
  { icon: '🌿', org: 'Jabatan Kesihatan Negeri Sarawak', desc: 'AI Workshop — Invitation Accepted' },
]

function JourneySection() {
  const sectionRef = useScrollReveal('.reveal')
  return (
    <section id="journey" className="section" ref={sectionRef}>
      <div className="section__header">
        <div>
          <p className="section__label reveal">05 — Our Journey</p>
          <h2 className="section__title reveal">Beyond HTPN</h2>
        </div>
      </div>
      <p className="journey__subtitle reveal">
        From our own wards to hospital networks across Malaysia — the AI Team HTPN has grown into a recognised voice in clinical AI adoption and digital health education.
      </p>

      <div className="journey__timeline">
        {partnerships.map((p, i) => (
          <div key={i} className="journey__item reveal">
            <div className="journey__item-num">{String(i + 1).padStart(2, '0')}</div>
            <div className="journey__item-body">
              <div className="journey__item-org">{p.org}</div>
              <p className="journey__item-desc">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="journey__stats reveal">
        <div className="journey__stat">
          <span className="journey__stat-icon">🎓</span>
          <div className="journey__stat-num">7+</div>
          <div className="journey__stat-label">Workshops Conducted</div>
          <div className="journey__stat-sub">Across Malaysia</div>
        </div>
        <div className="journey__stat">
          <span className="journey__stat-icon">🏛️</span>
          <div className="journey__stat-num">4+</div>
          <div className="journey__stat-label">Conferences & Presentations</div>
          <div className="journey__stat-sub">National & International</div>
        </div>
      </div>

      <div className="journey__upcoming reveal">
        <p className="journey__upcoming-label">Upcoming Invitations</p>
        <div className="journey__upcoming-grid">
          {upcomingInvitations.map((inv, i) => (
            <div key={i} className="journey__upcoming-card">
              <span className="journey__upcoming-icon">{inv.icon}</span>
              <div className="journey__upcoming-org">{inv.org}</div>
              <p className="journey__upcoming-desc">{inv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Internal Training ────────────────────────────────── */
const trainingCourses = [
  { title: 'Kursus Perancangan Penggunaan AI Dalam Tugasan Harian — Bahagian Pengurusan', date: '10–11 July 2025' },
  { title: 'Kursus Perancangan Penggunaan AI Dalam Tugasan Harian — Unit Kejururawatan', date: '22–23 October 2025' },
  { title: 'Supercharge Obstetrics With AI — Obstetrics & Gynaecology Dept', date: '9 December 2025' },
  { title: 'AI for Daily Tasks in Clinical Setting — Medical Dept, Part 1', date: '15 January 2026' },
  { title: 'Penggunaan AI dalam Kerja Seharian — KPPK', date: '27 January 2026' },
  { title: 'AI for Daily Tasks in Clinical Setting — Medical Dept, Part 2', date: '11 February 2026' },
  { title: 'AI for Daily Tasks in Clinical Setting — Medical Dept, Part 3', date: '27 February 2026' },
  { title: 'Supercharge Obstetrics With AI — Obstetrics & Gynaecology Dept, Part 2', date: '3 March 2026' },
  { title: 'Coding Camp — Obstetrics Department', date: '10 March 2026', recent: true },
]

function TrainingSection() {
  const sectionRef = useScrollReveal('.reveal')
  return (
    <section id="training" className="section" ref={sectionRef}>
      <div className="section__header">
        <div>
          <p className="section__label reveal">05B — Internal Training</p>
          <h2 className="section__title reveal">Building Capacity Within</h2>
        </div>
      </div>
      <p className="journey__subtitle reveal">
        Beyond deploying tools, the AI Team runs a structured internal training programme — bringing AI literacy directly to clinical and administrative staff at HTPN.
      </p>

      <div className="training__list">
        {trainingCourses.map((c, i) => (
          <div key={i} className={`training__item reveal${c.recent ? ' training__item--recent' : ''}`}>
            <div className="training__item-num">{String(i + 1).padStart(2, '0')}</div>
            <div className="training__item-body">
              <div className="training__item-title">{c.title}</div>
              <div className="training__item-date">{c.date}</div>
            </div>
            {c.recent && <span className="training__item-badge">Most Recent</span>}
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
        text="Technology built by clinicians for clinicians — solves real problems in real time."
        className="belief__text"
        cursor={true}
        start="top 85%"
        end="bottom 20%"
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
          <p className="section__label reveal">06 — Contact</p>
          <h2 className="section__title reveal">Get In Touch</h2>
        </div>
      </div>

      <p className="journey__subtitle reveal">
        Interested in our work, want to collaborate, or looking to bring an AI workshop to your hospital? Reach out to the team.
      </p>

      <div className="contact__cards reveal">
        <a href="mailto:udppkhtpn@moh.gov.my" className="contact__card">
          <span className="contact__card-icon">✉️</span>
          <span className="contact__card-label">Email</span>
          <span className="contact__card-value">udppkhtpn@moh.gov.my</span>
          <span className="contact__card-sub">AI Team HTPN Kajang</span>
        </a>
        <a href="tel:0388133333" className="contact__card">
          <span className="contact__card-icon">📞</span>
          <span className="contact__card-label">Phone</span>
          <span className="contact__card-value">03-8813 3333</span>
          <span className="contact__card-sub">Hospital Tengku Permaisuri Norashikin</span>
        </a>
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
      <JourneySection />
      <TrainingSection />
      <InDevelopmentSection />
      <ContactSection />
      <SiteNavigator />
      <Footer />
    </main>
  )
}
