import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'
import ProjectScreenshot from '../components/ProjectScreenshot'

const ACCENT = '#db2777'
const VIDEO_URL = 'https://drive.google.com/file/d/1QBKA3PNzgPEFzIvHkn8XuaT8lQNQimSg/preview'

export default function ProjectGynapse() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>Gynapse — Obstetrics &amp; Gynaecology KPI Dashboard · HTPN HIO</title>
        <meta name="description" content="An interactive clinical dashboard from the Department of Obstetrics and Gynaecology, Hospital Shah Alam, that tracks Ministry of Health key performance indicators, raises alerts when a limit is breached and helps teams plan improvement activities." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/gynapse" />
        <meta property="og:title" content="Gynapse · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/gynapse" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">Gynapse</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#66 · Management Productivity</p>
        </div>

        <ProjectScreenshot />

        <div className="detail-meta">
          <span className="detail-tag">Obstetrics</span>
          <span className="detail-tag">KPI Dashboard</span>
          <span className="detail-tag">Quality Improvement</span>
        </div>

        <p className="detail-subtitle">
          Gynapse is an interactive, centralised clinical dashboard built by the Gynapse team from the Department of Obstetrics and Gynaecology, Hospital Shah Alam. It monitors the key performance indicators set by the Ministry of Health and gives teams a time- and cost-effective way to track, trend and improve clinical safety and quality.
        </p>

        <div className="detail-block">
          <figure className="detail-video">
            <div className="detail-video__frame">
              <iframe
                src={VIDEO_URL}
                title="Gynapse pitch video"
                allow="autoplay"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <figcaption className="detail-shot__caption">Pitch video of the app</figcaption>
          </figure>
        </div>

        <div className="detail-block">
          <div className="spec-cards">
            <div className="spec-card-new">
              <span className="spec-card-new__label">Department</span>
              <span className="spec-card-new__value">Obstetrics and Gynaecology, Hospital Shah Alam</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Tracks</span>
              <span className="spec-card-new__value">Caesarean section rate, perinatal mortality rate, massive postpartum haemorrhage (PPH) rate, obstetric anal sphincter injuries (OASIS), waiting times</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Alerts</span>
              <span className="spec-card-new__value">Triggered when a KPI limit is breached, with simple directive management instructions</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Roles</span>
              <span className="spec-card-new__value">Superadmin, Admin, Viewer</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Display</span>
              <span className="spec-card-new__value">Dark and light mode, two languages</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#4ade80' }}>Live (preview video only)</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            Hospital KPIs are reported in separate files and often too late to act on.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">KPIs Are Scattered</span>
              <span className="prd-section-item__desc">Data sits in spreadsheets and registers, so trends are hard to see.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Breaches Are Noticed Late</span>
              <span className="prd-section-item__desc">Without alerts, a rise in a rate may only be found at the next review.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Follow-Up Is Hard to Track</span>
              <span className="prd-section-item__desc">Improvement activities and their owners are not linked to the numbers that prompted them.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(219,39,119,0.2)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Enter Data</span>
              <span className="prd-section-item__desc">Dedicated data entry sections with validation controls help reduce human error.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(219,39,119,0.2)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Dashboard Updates</span>
              <span className="prd-section-item__desc">Entries link to their KPIs and update the main dashboard in real time.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(219,39,119,0.2)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">View Scorecards and Charts</span>
              <span className="prd-section-item__desc">Users can view data across custom time phases, with automated simple analysis on the charts.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(219,39,119,0.2)', color: ACCENT }}>04</span>
              <span className="prd-section-item__title">Get Alerts</span>
              <span className="prd-section-item__desc">When a KPI exceeds its limit, an alert shows simple directive instructions for management.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(219,39,119,0.2)', color: ACCENT }}>05</span>
              <span className="prd-section-item__title">Plan Activities</span>
              <span className="prd-section-item__desc">KPI leads and persons in charge plan future activities and receive live reminders.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(219,39,119,0.2)', color: ACCENT }}>06</span>
              <span className="prd-section-item__title">Review Reports</span>
              <span className="prd-section-item__desc">KPI heads use alert reports to follow reminders and breaches.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">USER ROLES</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Superadmin</span>
              <span className="prd-section-item__desc">Manages the app and tracks the audit trail of user login sessions.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Admin</span>
              <span className="prd-section-item__desc">Manages data entry and generates reports.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Viewer</span>
              <span className="prd-section-item__desc">Read-only access.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>Scorecards and visual charts for the Ministry of Health KPIs</li>
            <li>Alert system with directive management instructions</li>
            <li>Custom time phases and automated simple chart analysis</li>
            <li>Data entry with validation controls</li>
            <li>Real-time dashboard updates</li>
            <li>Activity planning and live reminders for KPI leads</li>
            <li>Alert reports for KPI heads</li>
            <li>Links clinical activities, workforce involvement, outcomes, risk management and patient satisfaction to support governance</li>
            <li>Superadmin, Admin and Viewer roles; audit trail of login sessions</li>
            <li>Dark and light mode, two languages</li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Gynapse Team · Department of Obstetrics and Gynaecology, Hospital Shah Alam</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
