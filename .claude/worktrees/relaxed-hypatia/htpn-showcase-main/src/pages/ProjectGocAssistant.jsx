import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'
import ProjectScreenshot from '../components/ProjectScreenshot'

const ACCENT = '#38bdf8'
const VIDEO_URL = 'https://drive.google.com/file/d/1bj2DfHcir7d3YhFaiHneAV7aM-2LA0ul/preview'

export default function ProjectGocAssistant() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>HTPN GOC Assistant — Goals of Care Documentation Assistant · HTPN HIO</title>
        <meta name="description" content="A clinical workflow assistant that turns a Goals of Care conversation into a consistent, reviewable record, with a printable patient-friendly summary. It supports documentation and does not replace clinical judgment." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/goc-assistant" />
        <meta property="og:title" content="HTPN GOC Assistant · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/goc-assistant" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">HTPN GOC Assistant</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#32 · Clinician's Journey</p>
        </div>

        <ProjectScreenshot />

        <div className="detail-meta">
          <span className="detail-tag">Goals of Care</span>
          <span className="detail-tag">Structured Documentation</span>
          <span className="detail-tag">Clinical Handoff</span>
        </div>

        <p className="detail-subtitle">
          The HTPN Goals of Care (GOC) Assistant is a clinical workflow assistant designed to improve the consistency, efficiency and accessibility of Goals of Care documentation across care teams. It supports documentation and communication; it does not replace clinical judgment or the conversation with the patient and family.
        </p>

        <div className="detail-block">
          <figure className="detail-video">
            <div className="detail-video__frame">
              <iframe
                src={VIDEO_URL}
                title="HTPN GOC Assistant preview video"
                allow="autoplay"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <figcaption className="detail-shot__caption">Preview video — the live app is not open to the public.</figcaption>
          </figure>
        </div>

        <div className="detail-block">
          <div className="spec-cards">
            <div className="spec-card-new">
              <span className="spec-card-new__label">Purpose</span>
              <span className="spec-card-new__value">Standardised documentation of Goals of Care conversations</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Capture</span>
              <span className="spec-card-new__value">Audio capture of the conversation, or manual entry</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Record Sections</span>
              <span className="spec-card-new__value">Patient values and goals · Treatment preferences · Surrogate decision-maker · Decisions reached</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Output</span>
              <span className="spec-card-new__value">A structured, printable record and a patient-friendly summary</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Control</span>
              <span className="spec-card-new__value">A clinician reviews every record before it is relied on</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#4ade80' }}>Live (preview video available)</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            Goals of Care conversations are sensitive and high-stakes, yet the documentation that follows is often incomplete, fragmented or misread.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Cognitive Load</span>
              <span className="prd-section-item__desc">These conversations need attention, empathy and clinical judgment, so recording the details at the same time is hard.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Time Pressure</span>
              <span className="prd-section-item__desc">Limited time can delay or shorten documentation after the conversation.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Inconsistent Notes</span>
              <span className="prd-section-item__desc">Free-text, fragmented records can leave attending teams unsure what was decided.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">04</span>
              <span className="prd-section-item__title">Communication Silos</span>
              <span className="prd-section-item__desc">Patient values and surrogate decisions can be buried in narrative notes, which makes them hard to find when emergency planning or continuity of care depends on them.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">OBJECTIVES</h2>
          <ul className="detail-features">
            <li>Standardisation and streamlining: guide clinicians through the essential GOC components, support complete documentation and make handoffs clearer</li>
            <li>Efficiency and accessibility: cut the documentation burden and give every team a clear, printable record for immediate review</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(56,189,248,0.18)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Capture</span>
              <span className="prd-section-item__desc">The conversation is captured by audio, or the clinician enters details manually.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(56,189,248,0.18)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Structure</span>
              <span className="prd-section-item__desc">The assistant organises the content into a standard Goals of Care record: patient priorities (values, goals, what matters most), treatment preferences (limits and choices), the surrogate decision-maker, participants and decisions reached, and any unresolved questions.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(56,189,248,0.18)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Clinician Review</span>
              <span className="prd-section-item__desc">The clinician reviews and confirms the record.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(56,189,248,0.18)', color: ACCENT }}>04</span>
              <span className="prd-section-item__title">Share</span>
              <span className="prd-section-item__desc">The record is available to the care team and can be printed as a patient-friendly summary.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE GOC RECORD</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Patient Values &amp; Goals</span>
              <span className="prd-section-item__desc">What matters most to the patient.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Treatment Preferences</span>
              <span className="prd-section-item__desc">Preferred and non-preferred treatments.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Surrogate Decision-Maker</span>
              <span className="prd-section-item__desc">Who speaks on the patient's behalf.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">04</span>
              <span className="prd-section-item__title">Decisions Reached</span>
              <span className="prd-section-item__desc">A summary of agreed-upon decisions.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">05</span>
              <span className="prd-section-item__title">Printable Summary</span>
              <span className="prd-section-item__desc">A patient-friendly summary.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>Structured framework that prompts clinicians through the key GOC discussion elements</li>
            <li>Audio capture or manual entry</li>
            <li>Complete, consistent documentation with fewer missed or delayed details</li>
            <li>Shared format that care teams can read the same way</li>
            <li>Clinician review before the record is used</li>
            <li>Printable, patient-friendly summary</li>
            <li>Designed to support, not replace, clinical judgment and the patient and family conversation</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ROADMAP: EMR INTEGRATION</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1rem' }}>
            This is an improvement being planned, not a feature that is in place today.
          </p>
          <ul className="detail-features">
            <li>Next step: move from a standalone assistant to availability inside existing hospital workflows</li>
            <li>Structured GOC details flowing into the electronic medical record after clinician review</li>
            <li>The record becoming easier to find where care teams already work</li>
            <li>Integration that keeps review, permissions and local clinical governance in place</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">GOVERNANCE &amp; SCOPE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>Planned integration keeps clinician review, permissions and local clinical governance</li>
              <li>The tool supports clinical judgment rather than replacing it</li>
            </ul>
          </div>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">HTPN Medical</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
