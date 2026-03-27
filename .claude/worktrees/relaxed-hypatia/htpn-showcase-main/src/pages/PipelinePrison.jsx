import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/detail.css'
import '../styles/amr.css'

const ACCENT = '#a78bfa'

const platformCapabilities = [
  {
    icon: '🗂️',
    title: 'Management Platform',
    items: ['Auto-scheduling', 'Doctor notes & prescriptions', 'Pharmacy access to prescription', 'Full consultation workflow'],
  },
  {
    icon: '📱',
    title: 'Health Vitals Screening',
    items: ['Web-based using smartphone camera', 'Cardiovascular, BP, haemoglobin', 'Diabetes & hypertension risk', 'AI-generated screening result'],
  },
  {
    icon: '📹',
    title: 'Teleconferencing',
    items: ['Live video consultation', 'Google Meet integration', 'Secure specialist-to-patient link', 'No hardware installation needed'],
  },
]

const costRows = [
  { label: 'Cost per patient', physical: 'RM 225', virtual: 'RM 120' },
  { label: 'Escort staff required', physical: '3–5 per day', virtual: '0' },
  { label: 'Transport trips per day', physical: '2', virtual: '0' },
  { label: 'Saving per patient / day', physical: '—', virtual: 'RM 105' },
  { label: 'Monthly saving', physical: '—', virtual: 'RM 2,310' },
  { label: 'Annual saving', physical: '—', virtual: 'RM 27,720' },
]

const benefits = [
  { icon: '💰', title: 'Cost Savings', desc: 'RM27,720 saved annually from eliminated escort logistics, transport, and reduced consultation overhead.' },
  { icon: '🏥', title: 'Better Access to Care', desc: 'Prisoners receive timely specialist care without the delays and complexities of physical hospital transport.' },
  { icon: '👮', title: 'Zero Escorts Needed', desc: 'Frees 3–5 prison staff per day previously dedicated to hospital escorts — redirected to security priorities.' },
  { icon: '🔒', title: 'Safer Hospital Environment', desc: 'Eliminates the daily security risk to patients, visitors, and HTPN clinical staff.' },
]

export default function PipelinePrison() {
  return (
    <>
      <Navbar />
      <main className="project-page">

        <div className="project-page-back">
          <Link to="/#pipeline" className="back-link">← Back to Pipeline</Link>
        </div>

        <div className="project-page-header">
          <div className="project-page-meta">
            <span className="card-status status-pipeline">Pipeline</span>
            <span className="demo-badge" style={{ background: 'rgba(167,139,250,0.1)', color: ACCENT, borderColor: 'rgba(167,139,250,0.3)' }}>Planned</span>
          </div>
          <div className="project-page-title-row">
            <span style={{ fontSize: '3rem', lineHeight: 1 }}>⚖️</span>
            <h1 className="project-page-title">Prison Virtual Clinic</h1>
          </div>
          <p className="project-page-subtitle">
            Secure specialist teleconsultation platform enabling HTPN doctors to conduct virtual clinics with prisoners at Kajang Prison — improving access to specialist care while eliminating escort logistics, security risks, and transport costs.
          </p>
        </div>

        {/* Platform Capabilities */}
        <div className="project-page-block">
          <h2 className="block-title">Platform Capabilities</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {platformCapabilities.map(cap => (
              <div key={cap.title} style={{
                background: 'var(--bg2)',
                borderTop: `3px solid ${ACCENT}`,
                border: `1px solid rgba(167,139,250,0.15)`,
                borderTopWidth: '3px',
                borderTopColor: ACCENT,
                borderRadius: '12px',
                padding: '1.25rem',
              }}>
                <div style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>{cap.icon}</div>
                <div style={{ fontWeight: 600, color: 'var(--text)', marginBottom: '0.75rem' }}>{cap.title}</div>
                <ul style={{ paddingLeft: '1.1rem', color: 'var(--text2)', fontSize: '0.85rem', lineHeight: 1.75 }}>
                  {cap.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Problem / Solution */}
        <div className="project-page-block two-col">
          <div className="project-page-block-inner">
            <h2 className="block-title">⚠️ The Problem</h2>
            <ul className="feature-list">
              <li>Prisoners transported daily to HTPN — creating security risks for hospital visitors & staff</li>
              <li>3–5 escort staff per day consumed on hospital transport runs</li>
              <li>Most follow-ups are brief (blood results, imaging reviews) — yet require full escort with 2 trips</li>
              <li>High physical consultation cost of RM225 per patient visit</li>
              <li>Patients wait long periods for short consultations that could be handled remotely</li>
            </ul>
          </div>
          <div className="project-page-block-inner" style={{ borderColor: 'rgba(5,150,105,0.25)', background: 'rgba(5,150,105,0.03)' }}>
            <h2 className="block-title" style={{ color: '#059669' }}>✅ The Solution</h2>
            <ul className="feature-list">
              <li>Secure virtual clinic connects HTPN specialists with prisoners at Kajang Prison remotely</li>
              <li>Full consultation from within the prison — zero patient transport, zero escort required</li>
              <li>Complete workflow: scheduling → vitals → consultation → clinical notes → prescription</li>
              <li>Cost reduced from RM225 to RM120 per patient — saving RM105 per visit</li>
              <li>Prison staff freed from escort duties, redeployed to higher-value security roles</li>
            </ul>
          </div>
        </div>

        {/* Cost Comparison */}
        <div className="project-page-block">
          <h2 className="block-title">Cost Comparison</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr>
                  <th style={{ background: 'var(--bg2)', color: 'var(--text3)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '1px solid var(--border)' }}></th>
                  <th style={{ background: 'var(--bg2)', color: 'var(--text3)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '1px solid var(--border)' }}>Physical Consultation</th>
                  <th style={{ background: 'var(--bg2)', color: 'var(--text3)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '1px solid var(--border)' }}>Virtual Clinic</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map(row => (
                  <tr key={row.label}>
                    <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--border)', color: 'var(--text)', fontWeight: 500 }}>{row.label}</td>
                    <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--border)', color: 'var(--text2)' }}>{row.physical}</td>
                    <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--border)', color: '#059669', fontWeight: 700 }}>{row.virtual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Expected Benefits */}
        <div className="project-page-block">
          <h2 className="block-title">Expected Benefits</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {benefits.map(b => (
              <div key={b.title} style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.25rem' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{b.icon}</div>
                <div style={{ fontWeight: 600, color: 'var(--text)', marginBottom: '0.4rem' }}>{b.title}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text2)', lineHeight: 1.65 }}>{b.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RKB */}
        <div className="project-page-block">
          <div style={{ background: 'var(--bg2)', borderLeft: '3px solid var(--text3)', borderRadius: '12px', padding: '1.5rem' }}>
            <h3 style={{ fontWeight: 700, color: 'var(--text)', marginBottom: '0.75rem', fontSize: '1rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              🏛️ Registered Under Reformasi Kerenah Birokrasi (RKB)
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.75, margin: 0 }}>
              One of five HTPN digital transformation initiatives formally registered under Malaysia's RKB framework — a government initiative to reduce bureaucratic burden and accelerate public sector innovation. The Malaysian Productivity Corporation (MPC) serves as the guiding body throughout implementation.
            </p>
          </div>
        </div>

        {/* POC Partner */}
        <div className="detail-block">
          <h2 className="detail-block__title">POC Partner</h2>
          <div className="amr-partner">
            <span className="amr-partner__icon">🤝</span>
            <div>
              <div className="amr-partner__name">Roketz Sdn Bhd</div>
              <p className="detail-block__text">
                Roketz Sdn Bhd (Registration No: 1503799W) is a Malaysian technology firm incorporated on March 16, 2023, that specializes in artificial intelligence (AI) and digital transformation solutions, where they apply their digital expertise to enhance operational efficiency and support the empowerment of AI-integrated systems within local healthcare and administrative frameworks.
              </p>
            </div>
          </div>
        </div>

        <div className="project-page-back" style={{ marginTop: '40px' }}>
          <Link to="/#pipeline" className="back-link">← Back to Pipeline</Link>
        </div>

      </main>
      <Footer />
    </>
  )
}
