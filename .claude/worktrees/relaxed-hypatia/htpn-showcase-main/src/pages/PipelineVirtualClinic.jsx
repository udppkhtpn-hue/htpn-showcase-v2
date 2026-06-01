import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#7c3aed'

const platforms = [
  {
    icon: '🗓️',
    title: 'Management Platform',
    items: ['Auto-scheduling', 'Doctor notes & prescriptions', 'Pharmacy access to prescription', 'Full consultation workflow'],
  },
  {
    icon: '❤️',
    title: 'Health Vitals Screening',
    items: ['Web-based using smartphone camera', 'Cardiovascular, BP, haemoglobin', 'Diabetes & hypertension risk', 'AI-generated screening result'],
  },
  {
    icon: '🎥',
    title: 'Teleconferencing',
    items: ['Live video consultation', 'Google Meet integration', 'Secure specialist-to-patient link', 'No hardware installation needed'],
  },
]

const costRows = [
  { metric: 'Cost per patient', physical: 'RM 225', virtual: 'RM 120' },
  { metric: 'Escort staff required', physical: '3–5 / day', virtual: '0' },
  { metric: 'Transport trips / day', physical: '2', virtual: '0' },
  { metric: 'Saving per patient', physical: '—', virtual: 'RM 105' },
  { metric: 'Monthly saving', physical: '—', virtual: 'RM 2,310' },
  { metric: 'Annual saving', physical: '—', virtual: 'RM 27,720' },
]

const benefits = [
  { icon: '💰', title: 'RM 27,720 Annual Savings', desc: 'RM 105 saved per consultation — RM 27,720 over a full year based on current visit volume.' },
  { icon: '🏥', title: 'Better Access to Care', desc: 'Timely specialist consultation without transport delays — prisoners receive care faster.' },
  { icon: '🔒', title: 'Zero Escorts Needed', desc: '3–5 security staff per day redirected from escort duties back to core security priorities.' },
  { icon: '🛡️', title: 'Safer Hospital Environment', desc: 'Eliminates daily prisoner transport — removing a recurring security risk from the hospital.' },
]

export default function PipelineVirtualClinic() {
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
        <title>Prison Virtual Clinic · HTPN Pipeline</title>
        <meta name="description" content="Secure specialist teleconsultation platform enabling HTPN doctors to conduct virtual clinics with prisoners at Kajang Prison — improving access to specialist care while eliminating escort logistics and transport costs." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/pipeline/prison-virtual-clinic" />
        <meta property="og:title" content="Prison Virtual Clinic · HTPN Pipeline" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/pipeline/prison-virtual-clinic" />
      </Helmet>
      <div className="detail-container">
        <button className="detail-back" onClick={handleBack}>← Back to Pipeline</button>

        {/* Header */}
        <header className="detail-header">
          <div className="detail-meta">
            <span className="detail-journey">( Innovation Pipeline )</span>
            <span className="detail-badge detail-badge--pipeline">PLANNED</span>
          </div>
          <h1 className="detail-title">
            <span style={{ marginRight: '16px' }}>🏥</span>
            Prison Virtual Clinic
          </h1>
          <p className="detail-subtitle">
            Secure specialist teleconsultation platform enabling HTPN doctors to conduct virtual clinics with prisoners at Kajang Prison — improving access to specialist care while eliminating escort logistics, security risks, and transport costs.
          </p>
          <div className="prd-tags" style={{ marginTop: '20px' }}>
            {['Telemedicine', 'Prison Health', 'Access to Care', 'Surgery', 'Medicine'].map(t => (
              <span key={t} className="prd-tag">{t}</span>
            ))}
          </div>
        </header>

        {/* Problem / Solution */}
        <div className="detail-block">
          <div className="prd-two-col">
            <div className="prd-block-inner">
              <h2 className="detail-block__title" style={{ color: '#f5a623', marginBottom: '16px' }}>⚠️ The Problem</h2>
              <ul className="detail-features">
                <li>Security risks from daily prisoner transport to hospital</li>
                <li>3–5 escort staff consumed daily on transport duties</li>
                <li>Brief follow-ups require full escorts and 2 trips</li>
                <li>RM 225 cost per physical consultation</li>
                <li>Extended patient wait times for short appointments</li>
              </ul>
            </div>
            <div className="prd-block-inner prd-block-inner--accent">
              <h2 className="detail-block__title" style={{ color: '#059669', marginBottom: '16px' }}>✅ The Solution</h2>
              <ul className="detail-features">
                <li>Remote specialist-prisoner connection at prison location</li>
                <li>Zero transport; zero escorts required</li>
                <li>Complete workflow: scheduling → vitals → consultation → notes → prescription</li>
                <li>Cost reduced to RM 120 per visit (RM 105 savings)</li>
                <li>Staff redeployed to core security functions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Explainer Image */}
        <div className="detail-block">
          <img
            src="/virtual-clinic-explainer.jpg"
            alt="Virtual Clinic system explainer"
            style={{ width: '100%', display: 'block', borderRadius: '4px', border: '1px solid var(--border)' }}
          />
        </div>

        {/* Platform Capabilities */}
        <div className="detail-block">
          <h2 className="detail-block__title">PLATFORM CAPABILITIES</h2>
          <div className="prd-features" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {platforms.map(p => (
              <div key={p.title} className="prd-feature">
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>{p.icon}</div>
                <div className="prd-feature__title">{p.title}</div>
                <ul className="detail-features" style={{ marginTop: '8px' }}>
                  {p.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Cost Comparison */}
        <div className="detail-block">
          <h2 className="detail-block__title">COST COMPARISON</h2>
          <div style={{ border: '1px solid var(--border)', borderRadius: '2px', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'rgba(245,245,240,0.04)' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>Metric</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>Physical Visit</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT, borderBottom: '1px solid var(--border)' }}>Virtual Clinic</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((row, i) => (
                  <tr key={row.metric} style={{ borderBottom: i < costRows.length - 1 ? '1px solid var(--border)' : 'none' }}>
                    <td style={{ padding: '12px 16px', fontSize: '13px', color: 'var(--fg)' }}>{row.metric}</td>
                    <td style={{ padding: '12px 16px', fontSize: '13px', color: 'var(--muted)' }}>{row.physical}</td>
                    <td style={{ padding: '12px 16px', fontSize: '13px', color: ACCENT, fontWeight: '600' }}>{row.virtual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Expected Benefits */}
        <div className="detail-block">
          <h2 className="detail-block__title">EXPECTED BENEFITS</h2>
          <div className="prd-features">
            {benefits.map(b => (
              <div key={b.title} className="prd-feature">
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>{b.icon}</div>
                <div className="prd-feature__title">{b.title}</div>
                <p className="prd-feature__desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RKB Governance */}
        <div className="detail-block">
          <h2 className="detail-block__title">🏛️ RKB REGISTRATION</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <p className="detail-block__text">
              One of five HTPN digital transformation initiatives formally registered under Malaysia's RKB (Razionalisasi dan Komersial Birokrasi) framework — a government initiative to reduce bureaucratic burden and accelerate public sector innovation. The Malaysian Productivity Corporation (MPC) serves as the guiding body throughout implementation.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '32px' }}>
          <button className="detail-back" onClick={handleBack}>← Back to Pipeline</button>
        </div>
      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
