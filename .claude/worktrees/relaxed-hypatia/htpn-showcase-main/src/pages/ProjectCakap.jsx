import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'
import ProjectScreenshot from '../components/ProjectScreenshot'

const ACCENT = '#059669'
const DEMO_URL = 'https://cakaphtpnspeech.vercel.app/'
const VIDEO_URL = 'https://www.youtube.com/embed/LNnvn2duf5I'

export default function ProjectCakap() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>CAKAP — Communication and Knowledge Kit: Activities for Parent Empowerment · HTPN HIO</title>
        <meta name="description" content="An interactive programme that helps parents build early communication skills with their children, based on Modul TOPS from the Ministry of Health Malaysia, with 13 topics, quizzes and a participation certificate." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/cakap" />
        <meta property="og:title" content="CAKAP · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/cakap" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">CAKAP</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#15 · Patient's Journey</p>
        </div>

        <ProjectScreenshot />

        <div className="detail-meta">
          <span className="detail-tag">Speech-Language Therapy</span>
          <span className="detail-tag">Parent Education</span>
          <span className="detail-tag">Bahasa Malaysia</span>
        </div>

        <p className="detail-subtitle">
          CAKAP (Communication and Knowledge Kit: Activities for Parent Empowerment) is an interactive programme that helps parents and guardians build early communication skills with their children. It is based on Modul TOPS from the Ministry of Health Malaysia and was developed by the Speech-Language Therapy Unit, Department of Rehabilitation Medicine, HTPN.
        </p>

        <div className="detail-block">
          <div className="detail-block__cta">
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="detail-demo-btn" style={{ background: ACCENT, color: '#fff' }}>
              Open Demo →
            </a>
          </div>
        </div>

        <div className="detail-block">
          <figure className="detail-video">
            <div className="detail-video__frame">
              <iframe
                src={VIDEO_URL}
                title="CAKAP demo video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <figcaption className="detail-shot__caption">Demo video of the app</figcaption>
          </figure>
        </div>

        <div className="detail-block">
          <div className="spec-cards">
            <div className="spec-card-new">
              <span className="spec-card-new__label">Users</span>
              <span className="spec-card-new__value">Mothers, fathers and guardians of children from under 1 year to 4 years and above (five age bands)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Content</span>
              <span className="spec-card-new__value">13 topics, each with a reading, animation, flashcards, mini game and checklist</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Assessment</span>
              <span className="spec-card-new__value">Short quiz per topic, with an achievement summary</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Certificate</span>
              <span className="spec-card-new__value">Downloadable participation certificate (PNG) on completing all 13 topics</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Language</span>
              <span className="spec-card-new__value">Mainly Bahasa Malaysia; title and subtitle in English</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#4ade80' }}>Live · Speech-Language Therapy Unit, HTPN</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            Early communication skills are built mostly at home, in daily moments between parent and child.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Clinic Time Is Short</span>
              <span className="prd-section-item__desc">Therapists see families briefly, and parents need reliable guidance between visits.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Parents Need Practical, Age-Matched Advice</span>
              <span className="prd-section-item__desc">Guidance should match the child's age band and be easy to follow.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Progress Is Hard to Follow</span>
              <span className="prd-section-item__desc">Families and the unit need to see who has completed what.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(5,150,105,0.2)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Register</span>
              <span className="prd-section-item__desc">The parent enters their name, phone number, the child's age band and their role (mother, father or guardian). Returning users choose "Selamat kembali!" to resume.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(5,150,105,0.2)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">See the Dashboard</span>
              <span className="prd-section-item__desc">A greeting, a session timer, a pause button and a progress bar ("Kemajuan Pembelajaran", for example 0 of 13 completed).</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(5,150,105,0.2)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Learn Each Topic</span>
              <span className="prd-section-item__desc">Five tabs: Baca (read), Animasi (animation), Kad Imbas (flashcards), Mini Game and Senarai Semak (checklist).</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(5,150,105,0.2)', color: ACCENT }}>04</span>
              <span className="prd-section-item__title">Take the Quiz</span>
              <span className="prd-section-item__desc">A short quiz per topic, with a results screen.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(5,150,105,0.2)', color: ACCENT }}>05</span>
              <span className="prd-section-item__title">Track Achievement</span>
              <span className="prd-section-item__desc">A summary shows topics completed, minutes studied and average quiz score.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(5,150,105,0.2)', color: ACCENT }}>06</span>
              <span className="prd-section-item__title">Receive a Certificate</span>
              <span className="prd-section-item__desc">Completing all 13 topics issues a "Sijil Participation" certificate that can be downloaded as a PNG.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>13 topics, five learning formats per topic</li>
            <li>Short quizzes and an achievement summary</li>
            <li>Session timer with pause and resume</li>
            <li>Automatic progress saving, so a closed tab can be reopened and continued</li>
            <li>General guide and summary panels on the five early communication skills and components</li>
            <li>Downloadable certificate</li>
            <li>An admin dashboard for the unit (lock-protected)</li>
            <li>Works in a phone browser</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">GOVERNANCE &amp; SCOPE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>The app collects the parent's name, phone number, the child's age band and the parent's role</li>
            </ul>
          </div>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Unit Terapi Pertuturan-Bahasa · Jabatan Perubatan Rehabilitasi · HTPN Kajang</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
