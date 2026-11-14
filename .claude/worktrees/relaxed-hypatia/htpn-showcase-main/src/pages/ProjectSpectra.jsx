import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'
import ProjectScreenshot from '../components/ProjectScreenshot'

const ACCENT = '#6d28d9'
const DEMO_URL = 'https://script.google.com/macros/s/AKfycbzrZDP-tRvyZAt9TiCv04lguCOGgIMJ0bdhYudmUGb7KB3kJ6RfSaA02kpXI0PU3GBuIg/exec'
const VIDEO_URL = 'https://drive.google.com/file/d/1onBnC78mDKXRqK7zOk7LUNpeGsbJLmx8/preview'

export default function ProjectSpectra() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>SPECTRA — Sensory Profile Evaluation &amp; Clinical Therapy Remote Assistant · HTPN HIO</title>
        <meta name="description" content="A web tool for the Occupational Therapy Unit: parents complete the Child Sensory Profile 2 questionnaire online with automatic scoring, and the therapist reviews, edits and approves the clinical summary and home programme before it goes to the family." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/spectra" />
        <meta property="og:title" content="SPECTRA · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/spectra" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">SPECTRA</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#33 · Clinician's Journey</p>
        </div>

        <ProjectScreenshot />

        <div className="detail-meta">
          <span className="detail-tag">Paediatric Occupational Therapy</span>
          <span className="detail-tag">Sensory Profile 2</span>
          <span className="detail-tag">Human-in-the-loop AI</span>
        </div>

        <p className="detail-subtitle">
          SPECTRA (Sensory Profile Evaluation &amp; Clinical Therapy Remote Assistant) lets parents complete the Child Sensory Profile 2 questionnaire online, scores it automatically, and gives the occupational therapist a portal to review, edit and approve the clinical summary and an evidence-based home programme before it goes back to the family.
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
                title="SPECTRA demo video"
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
              <span className="spec-card-new__label">Users</span>
              <span className="spec-card-new__value">Parents/caregivers and occupational therapists</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Questionnaire</span>
              <span className="spec-card-new__value">Child Sensory Profile 2, 86 questions, about 15 to 20 minutes</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Language</span>
              <span className="spec-card-new__value">Bahasa Melayu and English</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Scoring</span>
              <span className="spec-card-new__value">Automatic</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Safeguard</span>
              <span className="spec-card-new__value">Every AI output must be reviewed and signed off by a qualified clinician</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#4ade80' }}>Live · Version 3.0 · Unit Terapi Cara Kerja, HTPN</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            Sensory assessment is time-consuming for families and therapists alike.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Paper Questionnaires Are Slow</span>
              <span className="prd-section-item__desc">Scoring 86 items by hand takes therapist time that could go to patients.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Results Take Time to Reach Families</span>
              <span className="prd-section-item__desc">Parents wait for a summary and for advice they can use at home.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">AI Needs Clinical Oversight</span>
              <span className="prd-section-item__desc">Any automated summary must be checked by a therapist before it is used.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(109,40,217,0.2)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Read and Accept the Notice</span>
              <span className="prd-section-item__desc">Users are told that AI outputs need clinician sign-off, that patient-identifiable details should not be entered, and that the tool is not medical advice.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(109,40,217,0.2)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Choose a Role</span>
              <span className="prd-section-item__desc">Parent/Caregiver or Occupational Therapist.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(109,40,217,0.2)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Parent Completes the Questionnaire</span>
              <span className="prd-section-item__desc">86 questions in Bahasa Melayu or English, scored automatically. Parents can open the form directly by scanning a QR code from their therapist.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(109,40,217,0.2)', color: ACCENT }}>04</span>
              <span className="prd-section-item__title">Therapist Reviews</span>
              <span className="prd-section-item__desc">After logging in, the therapist can search for a patient by IC number, view score reports and clinical summaries, then edit and approve.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(109,40,217,0.2)', color: ACCENT }}>05</span>
              <span className="prd-section-item__title">Home Programme</span>
              <span className="prd-section-item__desc">An evidence-based weekly home activity plan is approved by the therapist and emailed to the parent.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>Bilingual questionnaire with automatic scoring</li>
            <li>QR code access for parents</li>
            <li>Therapist portal with IC search, score reports, edit and approve, and email to parent</li>
            <li>Personalised weekly home programme</li>
            <li>Mandatory clinician sign-off banner on every page</li>
            <li>Mobile-friendly</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">GOVERNANCE &amp; SCOPE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>As stated in the app: all AI outputs must be reviewed and signed off by a qualified clinician (human-in-the-loop)</li>
              <li>Users are advised not to enter patient-identifiable information such as a full name or IC number</li>
              <li>Audio files are processed and deleted immediately after transcription</li>
              <li>The tool does not constitute medical advice; clinical responsibility remains with the treating clinician</li>
              <li>Responses are described as private and used only for clinical assessment purposes</li>
            </ul>
          </div>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Occupational Therapist HTPN Team · Healthcare Intelligence Office HTPN</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
