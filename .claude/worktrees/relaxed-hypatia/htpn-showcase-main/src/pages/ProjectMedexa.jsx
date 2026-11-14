import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'
import ProjectScreenshot from '../components/ProjectScreenshot'

const ACCENT = '#14b8a6'
const VIDEO_URL = 'https://drive.google.com/file/d/1v5ozemsuHMOTgJMHkpSWf4XRplZkBqaj/preview'

export default function ProjectMedexa() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>Medexa — Post-Opening Medication Shelf-Life Tracker · HTPN HIO</title>
        <meta name="description" content="A medication safety ecosystem developed at Hospital Kepala Batas that tells users how long a medicine stays safe once opened, with a personal medicine cabinet, OCR label scanning and expiry alerts." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/medexa" />
        <meta property="og:title" content="Medexa · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/medexa" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">Medexa</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#12 · Patient's Journey</p>
        </div>

        <ProjectScreenshot />

        <div className="detail-meta">
          <span className="detail-tag">Medication Safety</span>
          <span className="detail-tag">OCR Label Scanning</span>
          <span className="detail-tag">Expiry Alerts</span>
        </div>

        <p className="detail-subtitle">
          Medexa is a medication safety ecosystem developed at Hospital Kepala Batas that removes the guesswork about the shelf life of medicines once they are opened. Users look up a drug, store their own medicines in a personal cabinet, and are warned before and when each one expires.
        </p>

        <div className="detail-block">
          <figure className="detail-video">
            <div className="detail-video__frame">
              <iframe
                src={VIDEO_URL}
                title="Medexa preview video"
                allow="autoplay"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <figcaption className="detail-shot__caption">Preview video — the live app is available to approved users only.</figcaption>
          </figure>
        </div>

        <div className="detail-block">
          <div className="spec-cards">
            <div className="spec-card-new">
              <span className="spec-card-new__label">Developed At</span>
              <span className="spec-card-new__value">Hospital Kepala Batas (HKB)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Medication Database</span>
              <span className="spec-card-new__value">209 multi-dose medications</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Search</span>
              <span className="spec-card-new__value">By generic name or brand name</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Data Entry</span>
              <span className="spec-card-new__value">OCR label scanning, with manual entry as a fallback</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Alerts</span>
              <span className="spec-card-new__value">Yellow clock icon within 30 days of expiry, red when expired, plus an email warning on expiry</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#4ade80' }}>Live · Access limited to approved users (preview video shown)</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            Once a multi-dose medicine is opened, its safe shelf life is often shorter than the date printed on the pack, but people and wards rarely know by how much.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Missing Labels</span>
              <span className="prd-section-item__desc">The team reports that 65.42% of multi-dose medications lack a post-opening shelf-life label.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Slow Answers</span>
              <span className="prd-section-item__desc">The team reports that getting stability data from a manufacturer by the manual route took an average of 7.4 days.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Manual Tracking and Waste</span>
              <span className="prd-section-item__desc">Tracking opened medicines by hand is easy to forget, which risks accidental use of expired medicine and wasted stock.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(20,184,166,0.18)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Search</span>
              <span className="prd-section-item__desc">Look up a drug by generic or brand name to see how long it can be kept after opening, at what temperature, and where to store it.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(20,184,166,0.18)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Add to "Cabinet Saya" (My Cabinet)</span>
              <span className="prd-section-item__desc">Log a medicine by scanning its label with OCR, or type it in if the packaging is unusual or hard to scan.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(20,184,166,0.18)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Automatic Tracking</span>
              <span className="prd-section-item__desc">The app starts the post-opening timeline once the medicine is logged.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(20,184,166,0.18)', color: ACCENT }}>04</span>
              <span className="prd-section-item__title">Get Alerts</span>
              <span className="prd-section-item__desc">A yellow clock icon appears when a medicine will expire within 30 days, it turns bright red once expired, and an email warning is sent to the user's inbox.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(20,184,166,0.18)', color: ACCENT }}>05</span>
              <span className="prd-section-item__title">Give Feedback</span>
              <span className="prd-section-item__desc">Through "Maklum Balas" the user can submit a "Tambah Ubat" (add medication) request, which instantly alerts the Drug Information System (DIS) unit of the Hospital Kepala Batas pharmacy department so the live database can be updated.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>Search by generic or brand name across 209 multi-dose medications</li>
            <li>Storage duration, temperature and location for each logged medicine</li>
            <li>"Cabinet Saya" personal medicine cabinet</li>
            <li>OCR label reading with manual entry as a fallback</li>
            <li>Colour-coded expiry icons: yellow within 30 days, red when expired</li>
            <li>Automatic email warnings on expiry</li>
            <li>"Maklum Balas" feedback and "Tambah Ubat" request that alerts the DIS unit</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">REPORTED IMPACT</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1rem' }}>
            Figures as stated by the Medexa team in its preview video.
          </p>
          <ul className="detail-features">
            <li>Wait for manufacturer stability data cut from an average of 7.4 days to 4.3 minutes</li>
            <li>65.42% of multi-dose medications found to lack a post-opening shelf-life label</li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Pharmacy Department · Hospital Kepala Batas (HKB)</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
