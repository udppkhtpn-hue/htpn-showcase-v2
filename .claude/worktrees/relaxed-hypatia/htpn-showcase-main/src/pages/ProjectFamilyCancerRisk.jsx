import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'
import ProjectScreenshot from '../components/ProjectScreenshot'

const ACCENT = '#0d7d76'
const DEMO_URL = 'https://family-cancer-risk-assistant.vercel.app/'

export default function ProjectFamilyCancerRisk() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>Family Cancer Risk Check — Hereditary Cancer Risk Triage · HTPN HIO</title>
        <meta name="description" content="A bilingual prototype from the National Cancer Institute (IKN) that turns a few questions about family history of cancer into a risk level and a clear next step, anchored to Malaysian clinical practice guidelines." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/family-cancer-risk-assistant" />
        <meta property="og:title" content="Family Cancer Risk Check · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/family-cancer-risk-assistant" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--pipeline">DEMO</span>
          <h1 className="detail-title">Family Cancer Risk Check</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#10 · Patient's Journey</p>
        </div>

        <ProjectScreenshot />

        <div className="detail-meta">
          <span className="detail-tag">Family History</span>
          <span className="detail-tag">Cancer Risk Triage</span>
          <span className="detail-tag">Bilingual (EN/BM)</span>
        </div>

        <p className="detail-subtitle">
          A bilingual prototype from the National Cancer Institute (IKN) that helps members of the public understand what their family history of cancer means. A few simple questions produce a risk level and a clear next step: whether to see a doctor, which test to ask for, how often, and what warning signs to watch. It supports decisions and does not replace a doctor or diagnose.
        </p>

        <div className="detail-block">
          <div className="detail-block__cta">
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="detail-demo-btn" style={{ background: ACCENT, color: '#0a0a0a' }}>
              Open Demo →
            </a>
          </div>
        </div>

        <div className="detail-block">
          <div className="spec-cards">
            <div className="spec-card-new">
              <span className="spec-card-new__label">Audience</span>
              <span className="spec-card-new__value">General public in Malaysia</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Languages</span>
              <span className="spec-card-new__value">English and Bahasa Malaysia (EN / BM toggle)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Basis</span>
              <span className="spec-card-new__value">Anchored to Malaysian clinical practice guidelines (CPGs)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Output</span>
              <span className="spec-card-new__value">Risk level and next step: see a doctor, test to ask for, how often, warning signs</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Privacy</span>
              <span className="spec-card-new__value">No IC, phone or address requested; study participation is optional, under a participant code, to PDPA standards</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#C8B89A' }}>Prototype · Research &amp; educational use</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            Many people do not know that a strong family history of cancer can change when and how they should be screened. Guidance exists in Malaysian CPGs, but it is long and written for clinicians.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Hard-to-Use Guidelines</span>
              <span className="prd-section-item__desc">Hereditary cancer criteria sit in long clinical documents, so the public and non-specialist staff struggle to apply them to a single family.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Late or Missed Referral</span>
              <span className="prd-section-item__desc">Without a simple prompt, people with a concerning pattern of cancer in relatives may not seek advice, or may not know which test to ask for.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Low Awareness</span>
              <span className="prd-section-item__desc">Public understanding of cancer in Malaysia and of why family history matters is limited, and there are few plain-language tools in both English and Bahasa Malaysia.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(13,125,118,0.18)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Read the Notice</span>
              <span className="prd-section-item__desc">A disclaimer states the tool is a research and educational prototype, produces provisional results, and is not medical advice.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(13,125,118,0.18)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Start the Check</span>
              <span className="prd-section-item__desc">Users answer a few simple questions about cancer in their family.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(13,125,118,0.18)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Get a Risk Level and Next Step</span>
              <span className="prd-section-item__desc">Whether to see a doctor, which test to ask for, how often, and which warning signs to watch.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(13,125,118,0.18)', color: ACCENT }}>04</span>
              <span className="prd-section-item__title">Print or Keep a Sheet for the Clinic</span>
              <span className="prd-section-item__desc">An optional name can be added to the sheet; it stays on the device and is not sent anywhere.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(13,125,118,0.18)', color: ACCENT }}>05</span>
              <span className="prd-section-item__title">Learn More</span>
              <span className="prd-section-item__desc">Supporting sections explain why family history matters and show a snapshot of the National Cancer Registry.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">MODULES</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Start the Check</span>
              <span className="prd-section-item__desc">The family-history questionnaire and risk result.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Why Use This?</span>
              <span className="prd-section-item__desc">Why a strong family history matters.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Cancer in Malaysia</span>
              <span className="prd-section-item__desc">A National Cancer Registry snapshot.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">04</span>
              <span className="prd-section-item__title">Quick Quiz</span>
              <span className="prd-section-item__desc">Eight questions, about three minutes, to test existing knowledge.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">05</span>
              <span className="prd-section-item__title">Ask the Guidelines</span>
              <span className="prd-section-item__desc">A NotebookLM grounded only in the Malaysian CPGs.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">06</span>
              <span className="prd-section-item__title">Serious Symptom Shortcut</span>
              <span className="prd-section-item__desc">A "Having a serious symptom right now?" link at the top, directing people to urgent care.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>English and Bahasa Malaysia</li>
            <li>Plain-language risk level and next-step advice</li>
            <li>Urgent-symptom shortcut on every screen</li>
            <li>Knowledge quiz and National Cancer Registry snapshot</li>
            <li>Guideline Q&amp;A grounded only in the Malaysian CPGs</li>
            <li>Optional study participation under a participant code</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">PRIVACY &amp; GOVERNANCE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>The app states it never asks for IC, phone number or address</li>
              <li>Joining the study is optional; if the user agrees, answers are stored without their name under a participant code, to PDPA standards, and used only for the study. Users may decline and still use every part of the tool</li>
              <li>A name added for the clinic is printed on the user's sheet only and never leaves the device</li>
              <li>Every risk estimate is provisional and must be reviewed by a qualified doctor. The tool does not diagnose; clinical responsibility remains with the treating doctor</li>
            </ul>
          </div>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Dr Nurul Amiera Asli · National Cancer Institute (IKN), Malaysia</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
