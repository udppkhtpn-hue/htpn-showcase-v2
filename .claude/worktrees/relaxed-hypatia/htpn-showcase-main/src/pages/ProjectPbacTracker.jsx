import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'
import ProjectScreenshot from '../components/ProjectScreenshot'

const ACCENT = '#f43f5e'
const DEMO_URL = 'https://htpg-pbac1.netlify.app/'
const VIDEO_URL = 'https://drive.google.com/file/d/1W3pWEC90RAJ53CR_zdwqTHunQSv6jmM9/preview'

export default function ProjectPbacTracker() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>PBAC Tracker — Pictorial Blood Loss Assessment Chart · HTPN HIO</title>
        <meta name="description" content="A bilingual mobile record-keeping aid from the Department of Obstetrics &amp; Gynaecology, Hospital Taiping, that digitises the Pictorial Blood Loss Assessment Chart and keeps the record on the user's own device." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/pbac-tracker" />
        <meta property="og:title" content="PBAC Tracker · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/pbac-tracker" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">PBAC Tracker</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#11 · Patient's Journey</p>
        </div>

        <ProjectScreenshot />

        <div className="detail-meta">
          <span className="detail-tag">Menstrual Blood Loss</span>
          <span className="detail-tag">Self-Tracking</span>
          <span className="detail-tag">Bilingual (EN/BM)</span>
        </div>

        <p className="detail-subtitle">
          A mobile record-keeping aid from the Department of Obstetrics &amp; Gynaecology at Hospital Taiping that digitises the Pictorial Blood Loss Assessment Chart. Women log their bleeding day by day, and the record stays on their own device, ready to share with their doctor at the next consultation.
        </p>

        <div className="detail-block">
          <div className="detail-block__cta">
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="detail-demo-btn" style={{ background: ACCENT, color: '#0a0a0a' }}>
              Open Demo →
            </a>
          </div>
        </div>

        <div className="detail-block">
          <figure className="detail-video">
            <div className="detail-video__frame">
              <iframe
                src={VIDEO_URL}
                title="PBAC Tracker demo video"
                allow="autoplay"
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
              <span className="spec-card-new__label">Audience</span>
              <span className="spec-card-new__value">Women who want to keep a record of their menstrual bleeding</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Languages</span>
              <span className="spec-card-new__value">English and Bahasa Malaysia (ENG / BM toggle on the agreement screen)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Version</span>
              <span className="spec-card-new__value">2.0 · © 2026 Obstetrics &amp; Gynaecology Department, Hospital Taiping</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Data Storage</span>
              <span className="spec-card-new__value">Kept only in the browser's cache on the user's own device; nothing is sent to any cloud or to the hospital</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Intended Use</span>
              <span className="spec-card-new__value">Record-keeping aid for consultations; not a diagnostic tool</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#4ade80' }}>Live · Hospital Taiping</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            A clear record of menstrual bleeding helps the conversation at a gynaecology consultation, but keeping one reliably, and privately, is not always easy.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Hard to Recall</span>
              <span className="prd-section-item__desc">Menstrual bleeding is difficult to describe accurately from memory, and details of earlier cycles fade quickly.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Paper Charts Get Lost</span>
              <span className="prd-section-item__desc">A paper pictorial chart has to be kept safe, brought to the clinic and totalled by hand.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Privacy Matters</span>
              <span className="prd-section-item__desc">Menstrual history is intimate, and people may hesitate to use an app that uploads it to a server.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(244,63,94,0.18)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Enter</span>
              <span className="prd-section-item__desc">A splash screen shows the hospital name and department.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(244,63,94,0.18)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Read and Accept the User Agreement</span>
              <span className="prd-section-item__desc">Available in English and Bahasa Malaysia, covering the clinical-aid-only purpose, local privacy and limitation of liability.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(244,63,94,0.18)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Log Bleeding on the Pictorial Chart</span>
              <span className="prd-section-item__desc">Menstrual bleeding is scored day by day on the pictorial chart.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(244,63,94,0.18)', color: ACCENT }}>04</span>
              <span className="prd-section-item__title">Review the Record</span>
              <span className="prd-section-item__desc">Menstrual history, metrics and daily scores are kept on the device, to bring to the consultation.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>A pictorial chart for logging menstrual blood loss</li>
            <li>English and Bahasa Malaysia</li>
            <li>Works in a phone browser, with data staying in that browser</li>
            <li>A clear user agreement before use</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">PRIVACY &amp; GOVERNANCE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>All data, including menstrual history, metrics and daily scoring details, stays in the cache memory of the user's own browser. It is not stored, backed up or sent to any third-party cloud or to Hospital Taiping</li>
              <li>Because data lives only in the browser, clearing browser storage can erase the record. The agreement says the hospital and developer accept no liability for data loss from browser storage resets</li>
              <li>The app is a record-keeping aid only and does not replace clinical evaluation, diagnosis or treatment</li>
              <li>The hospital and developer accept no legal liability for clinical complications, diagnostic inaccuracy or actions taken on the metrics shown</li>
            </ul>
          </div>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Obstetrics &amp; Gynaecology Department · Hospital Taiping</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
