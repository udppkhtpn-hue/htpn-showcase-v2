import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/amr.css'

const benefits = [
  { icon: '⚡', title: 'Faster Lab TAT', desc: 'Specimens reach the Pathology Lab faster — cutting turnaround time and accelerating clinical decisions in the ED.' },
  { icon: '🏥', title: 'Better Patient Outcomes', desc: 'Quicker lab results mean faster diagnosis and treatment initiation for emergency patients.' },
  { icon: '👩‍⚕️', title: 'Staff Time Reclaimed', desc: 'Nursing and clinical staff freed from specimen transport runs — more time at the bedside.' },
  { icon: '🔒', title: 'Safer Specimen Handling', desc: 'Secured compartment with biometric access and GPS tracking ensures chain of custody at every step.' },
]

const timeline = [
  {
    phase: 'Phase 1', weeks: 'Weeks 1–4',
    items: ['Hardware installation', 'Robot configuration', 'SHiS software integration', 'Staff training'],
  },
  {
    phase: 'Phase 2', weeks: 'Weeks 5–8',
    items: ['Limited trial delivery', 'Performance monitoring', 'Staff feedback collection'],
  },
  {
    phase: 'Phase 3', weeks: 'Weeks 9–12',
    items: ['Full-scale deployment', 'All routes activated', 'System optimisation'],
  },
  {
    phase: 'Phase 4', weeks: 'Weeks 13–14',
    items: ['Data collection & analysis', 'Final report preparation', 'Recommendations to KKM'],
  },
]

const specs = [
  { label: 'Robot Model', value: 'NEO-6' },
  { label: 'Software', value: 'SHiS Platform' },
  { label: 'Integration', value: 'MPIS via API / HL7' },
  { label: 'Access Control', value: 'Biometric + Password' },
  { label: 'Tracking', value: 'GPS + Geofencing' },
  { label: 'Fleet Management', value: 'Multi-robot under one system' },
]

export default function PipelineAmr() {
  const navigate = useNavigate()

  useEffect(() => {
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  const handleBack = () => {
    sessionStorage.setItem('scrollTo', '#pipeline')
    navigate('/')
  }

  return (
    <div className="detail-page">
      <Helmet>
        <title>AMR — Autonomous Mobile Robot · HTPN Pipeline</title>
        <meta name="description" content="Proof of Concept for deploying an autonomous mobile robot at Hospital Tengku Permaisuri Norashikin to transport laboratory specimens from the Emergency Department to the Pathology Lab — cutting turnaround time and minimising exposure risk." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/pipeline/amr" />
        <meta property="og:title" content="AMR — Autonomous Mobile Robot · HTPN Pipeline" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/pipeline/amr" />
      </Helmet>
      <div className="detail-container">
        <button className="detail-back" onClick={handleBack}>← Back to Pipeline</button>

        {/* Header */}
        <header className="detail-header">
          <div className="detail-meta">
            <span className="detail-journey">( Innovation Pipeline )</span>
            <span className="detail-badge detail-badge--pipeline">POC IN PROGRESS</span>
          </div>
          <h1 className="detail-title">
            <span style={{ marginRight: '16px' }}>🤖</span>
            AMR — Autonomous Mobile Robot
          </h1>
          <p className="detail-subtitle">
            A Proof of Concept for deploying an autonomous mobile robot at Hospital Kajang to transport laboratory specimens from the Emergency Department to the Pathology Lab — cutting turnaround time, reducing staff movement, and minimising human exposure risk.
          </p>
          <div className="amr-tags">
            {['Robotics', 'Emergency Dept', 'Pathology Lab', 'Automation', 'Patient Safety'].map(t => (
              <span key={t} className="amr-tag">{t}</span>
            ))}
          </div>
          <p className="amr-governance-note">
            POC initiated: December 2024 · Endorsed by Jabatan Kesihatan Negeri Selangor
          </p>
        </header>

        {/* Video */}
        <div className="detail-video-wrap">
          <video
            src="/amr.mp4"
            controls
            autoPlay
            muted
            loop
            playsInline
            className="detail-video"
          />
          <p className="amr-video-caption">AMR NEO-6 · Delta Global Automation · POC Route: Emergency Dept → Pathology Lab, Hospital Kajang</p>
        </div>

        {/* Images */}
        <div className="amr-img-grid">
          <div className="amr-img-wrap">
            <img src="/AMR2.PNG" alt="AMR NEO-6 — In operation at Hospital Kajang" />
            <p className="amr-img-caption">AMR NEO-6 — In operation at Hospital Kajang</p>
          </div>
        </div>

        {/* Problem / Solution */}
        <div className="detail-block">
          <div className="amr-two-col">
            <div className="amr-block-inner">
              <h2 className="amr-block-title amr-block-title--problem">⚠️ The Problem</h2>
              <ul className="detail-features">
                <li>ED staff manually ferrying specimens to Pathology Lab</li>
                <li>Delayed test results due to transport lag</li>
                <li>Risk of specimen mislabelling or damage in transit</li>
                <li>Valuable nursing and clinical time lost to logistics</li>
              </ul>
            </div>
            <div className="amr-block-inner amr-block-inner--solution">
              <h2 className="amr-block-title amr-block-title--solution">✅ The Solution</h2>
              <ul className="detail-features">
                <li>AMR navigates autonomously from ED to Pathology Lab</li>
                <li>Secured specimen compartment — biometric or password access</li>
                <li>GPS tracking &amp; geofencing for route monitoring</li>
                <li>Integrated with SHiS &amp; MPIS hospital systems</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Expected Benefits */}
        <div className="detail-block">
          <h2 className="detail-block__title">Expected Benefits</h2>
          <div className="amr-benefits">
            {benefits.map(b => (
              <div key={b.title} className="amr-benefit">
                <div className="amr-benefit__icon">{b.icon}</div>
                <div className="amr-benefit__title">{b.title}</div>
                <p className="amr-benefit__desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* POC Timeline */}
        <div className="detail-block">
          <h2 className="detail-block__title">POC Timeline — 14 Weeks</h2>
          <div className="amr-timeline">
            {timeline.map(t => (
              <div key={t.phase} className="amr-timeline__phase">
                <div className="amr-timeline__header">
                  <span className="amr-timeline__phase-label">{t.phase}</span>
                  <span className="amr-timeline__weeks">{t.weeks}</span>
                </div>
                <ul className="amr-timeline__items">
                  {t.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specs */}
        <div className="detail-block">
          <h2 className="detail-block__title">🔧 Technical Specs</h2>
          <div className="amr-specs">
            {specs.map(s => (
              <div key={s.label} className="amr-spec">
                <div className="amr-spec__label">{s.label}</div>
                <div className="amr-spec__value">{s.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* POC Partner */}
        <div className="detail-block">
          <h2 className="detail-block__title">POC Partner</h2>
          <div className="amr-partner">
            <span className="amr-partner__icon">🤝</span>
            <div>
              <div className="amr-partner__name">Delta Global Automation Sdn Bhd</div>
              <p className="detail-block__text">
                All POC implementation costs are borne by Delta Global Automation. A minimum 3-year service contract covers hardware &amp; software maintenance, system upgrades, offline support, and staff training.
              </p>
            </div>
          </div>
        </div>

        <div className="detail-block__cta">
          <button className="detail-back" onClick={handleBack}>← Back to Pipeline</button>
        </div>
      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
