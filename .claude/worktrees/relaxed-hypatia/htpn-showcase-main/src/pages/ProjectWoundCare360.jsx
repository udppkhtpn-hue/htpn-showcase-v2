import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'
import ProjectScreenshot from '../components/ProjectScreenshot'

const ACCENT = '#f97316'
const DEMO_URL = 'https://www.appsheet.com/start/6579b49f-dc2f-451c-a72d-1054a1afac8c'
const VIDEO_URL = 'https://drive.google.com/file/d/177UK-hVGE6pArR7ELrhOZDR6tQMzeB2V/preview'

export default function ProjectWoundCare360() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>Wound Care 360 — Wound Registry &amp; Progress Tracking · HTPN HIO</title>
        <meta name="description" content="A mobile wound care app that keeps a patient's registration, vital signs and wound photographs in one place, so healing can be followed from the first visit to the latest." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/wound-care-360" />
        <meta property="og:title" content="Wound Care 360 · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/wound-care-360" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">Wound Care 360</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#33 · Clinician's Journey</p>
        </div>

        <ProjectScreenshot />

        <div className="detail-meta">
          <span className="detail-tag">Wound Documentation</span>
          <span className="detail-tag">Photo Progress Tracking</span>
          <span className="detail-tag">AppSheet</span>
        </div>

        <p className="detail-subtitle">
          Wound Care 360 is a mobile wound care app that keeps a patient's registration, vital signs and wound photographs in one place. Each visit is recorded with the patient's observations, and each wound is logged with its body site, type and photos, so healing can be followed over time.
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
                title="Wound Care 360 demo video"
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
              <span className="spec-card-new__label">Platform</span>
              <span className="spec-card-new__value">Google AppSheet (mobile and desktop, installable app)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Language</span>
              <span className="spec-card-new__value">Bahasa Malaysia interface with English terms</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Modules</span>
              <span className="spec-card-new__value">Dashboard · Patient Registration · Vital Signs &amp; Visits · Wound Progress · About</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Wound Types Seen</span>
              <span className="spec-card-new__value">Surgical wounds, diabetic ulcers, traumatic wounds</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Record</span>
              <span className="spec-card-new__value">Each wound entry carries the patient, the body site, the wound type and photo attachments</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#4ade80' }}>Live (the version reviewed contains sample data only)</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            Wounds heal over weeks, and judging progress means comparing today's wound with earlier ones, together with the patient's condition at each visit.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Scattered Records</span>
              <span className="prd-section-item__desc">Photos, vital signs and notes are often kept in different places, so they are hard to compare across visits.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Hard to Follow Progress</span>
              <span className="prd-section-item__desc">Without photos linked to the same wound and date, a change in size or appearance depends on memory.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">No Overview</span>
              <span className="prd-section-item__desc">Teams find it hard to see, at a glance, who they are treating and what kinds of wounds are common.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(249,115,22,0.18)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Register the Patient</span>
              <span className="prd-section-item__desc">"Borang Pendaftaran Pesakit" records the patient and gives quick text-message and phone-call actions from the patient's record.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(249,115,22,0.18)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Record Each Visit</span>
              <span className="prd-section-item__desc">"Tanda Vital &amp; Lawatan" captures blood pressure, pulse rate, temperature, pain score, ABSI (if needed), SpO2, random blood sugar (RBS), weight, BMI and other notes, plus the case category (new or repeat case) and the referral source with its details.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(249,115,22,0.18)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Log the Wound</span>
              <span className="prd-section-item__desc">"Kemajuan Luka" records the body site, the wound type and photo attachments for each entry, grouped by body site and filterable by patient.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(249,115,22,0.18)', color: ACCENT }}>04</span>
              <span className="prd-section-item__title">Follow Progress</span>
              <span className="prd-section-item__desc">Each visit lists its related wound entries, and each wound entry links back to the patient.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(249,115,22,0.18)', color: ACCENT }}>05</span>
              <span className="prd-section-item__title">See the Overview</span>
              <span className="prd-section-item__desc">The Dashboard shows a patient demographics chart (by sex) with a "Reset Dashboard" option.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>Patient registration with call and text shortcuts</li>
            <li>Visit record with vital signs, ABSI, SpO2, RBS, weight and BMI (BMI shown as calculated)</li>
            <li>Case category (new or repeat) and referral source for each visit</li>
            <li>Wound entries with body site, wound type and photo attachments</li>
            <li>Visits and wound entries linked to the patient, so history stays together</li>
            <li>Dashboard of patient demographics</li>
            <li>Search, filtering and a sync function built into the app</li>
            <li>Works on phone and desktop</li>
          </ul>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
