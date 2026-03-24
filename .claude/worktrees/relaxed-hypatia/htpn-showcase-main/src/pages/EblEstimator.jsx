import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const DEMO_URL = 'https://eblcalcwcc.netlify.app/'
const ACCENT = '#ef4444'

const inputs = [
  {
    icon: '📷',
    label: 'Open Camera',
    desc: 'Take a live photo of blood-soaked items at the bedside — AI estimates blood volume directly from the image.',
  },
  {
    icon: '🖼️',
    label: 'Upload Image',
    desc: 'Upload an existing photo of blood-soaked items for AI analysis.',
  },
  {
    icon: '✏️',
    label: 'Manual Entry',
    desc: 'Type in any uncaptured volume — blood on floor, unweighed drapes, suction canisters, etc.',
  },
]

const pictogram = [
  { item: 'Sanitary Pad', values: ['¼ soaked → 20 ml', '½ soaked → 50 ml', 'Fully soaked → 100 ml'] },
  { item: 'Kidney Dish', values: ['¼ filled → 100 ml', '½ filled → 250 ml', 'Full → 500 ml'] },
  { item: 'Linen Protector', values: ['¼ soaked → 500 ml', '½ soaked → 1,000 ml', 'Almost full → 1,500 ml'] },
  { item: 'Sarong', values: ['½ soaked → 400 ml', 'Fully soaked → 700 ml'] },
  { item: 'Vaginal Pack', values: ['Fully soaked → 80 ml'] },
  { item: 'Under Buttock Drape (15×14 in)', values: ['25% → 90 ml', '50% → 180 ml', '75% → 260 ml', '100% → 350 ml'] },
]

export default function EblEstimator() {
  return (
    <>
      <Navbar />
      <main className="project-page">

        {/* Back */}
        <div className="project-page-back">
          <Link to="/#projects" className="back-link">← Back to Projects</Link>
        </div>

        {/* Header */}
        <div className="project-page-header">
          <div className="project-page-meta">
            <span className="card-num">#07</span>
            <span className="card-status status-live">Demo</span>
            <span className="demo-badge" style={{ background: 'rgba(239,68,68,0.12)', color: ACCENT, borderColor: 'rgba(239,68,68,0.35)' }}>
              Demo · Pending Clinical Validation
            </span>
          </div>
          <div className="project-page-title-row">
            <img src="/icon-ebl.png" alt="EBL Estimator AI App" className="project-page-logo" />
            <h1 className="project-page-title">EBL Estimator AI App</h1>
          </div>
          <p className="project-page-subtitle">
            AI-powered bedside tool for estimating blood loss during obstetric emergencies at HTPN's WCC
          </p>
          <p className="project-page-credit">
            Co-developed by Dr Amalyna, Dr Anita bt Ali <span>(O&amp;G Dept)</span>
          </p>
          <div className="demo-disclaimer" style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: '8px', padding: '0.6rem 1rem', marginBottom: '1rem', fontSize: '13px', color: 'var(--text-muted)' }}>
            ⚠️ Demo version — pending clinical validation. Not yet approved for clinical decision-making.
          </div>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-btn"
            style={{ background: ACCENT }}
          >
            Open Demo →
          </a>
        </div>

        {/* Tech specs */}
        <div className="project-page-specs">
          <div className="spec-card">
            <div className="spec-label">Guideline basis</div>
            <div className="spec-value">MOH Malaysia 2016 PPH</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Input method</div>
            <div className="spec-value">Photo + manual entry</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Clinical context</div>
            <div className="spec-value">Obstetrics / PPH management</div>
          </div>
        </div>

        {/* What it is */}
        <div className="project-page-block">
          <h2 className="block-title">What it is</h2>
          <p className="block-text">
            A clinical bedside tool for obstetric nurses and doctors at HTPN's Women &amp; Children Centre (WCC)
            to rapidly estimate intrapartum and postpartum blood loss — a critical step in diagnosing and managing
            Postpartum Haemorrhage (PPH). Based on the MOH Malaysia 2016 PPH guidelines and visual estimation
            pictogram, it calculates total EBL by combining AI-analysed photos of blood-soaked items with manually
            entered volumes for unweighable sources like blood on the floor.
          </p>
        </div>

        {/* How it works + Output */}
        <div className="project-page-block two-col">
          <div className="project-page-block-inner">
            <h2 className="block-title">How it works — 3 inputs</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {inputs.map(inp => (
                <div key={inp.label} className="metric-card" style={{ gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '20px', flexShrink: 0 }}>{inp.icon}</span>
                  <div>
                    <div className="metric-title">{inp.label}</div>
                    <div className="metric-sub">{inp.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="project-page-block-inner">
            <h2 className="block-title">Output display</h2>
            <div style={{
              background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)',
              borderRadius: '12px', padding: '1.25rem', textAlign: 'center', marginBottom: '0.75rem',
            }}>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>
                Overall Total Blood Loss
              </div>
              <div style={{ fontSize: '32px', fontWeight: 600, color: ACCENT }}>
                — <span style={{ fontSize: '16px' }}>ml</span>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              {['From Photos', 'Added Manually'].map(label => (
                <div key={label} style={{
                  background: 'var(--card-bg)', border: '1px solid var(--border)',
                  borderRadius: '8px', padding: '0.75rem', textAlign: 'center',
                }}>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px' }}>{label}</div>
                  <div style={{ fontSize: '15px', fontWeight: 500 }}>0 ml</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MOH Pictogram reference */}
        <div className="project-page-block">
          <h2 className="block-title">Built-in reference guidelines — MOH 2016 PPH pictogram</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.6rem' }}>
            {pictogram.map(p => (
              <div key={p.item} className="metric-card" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                <div className="metric-title" style={{ marginBottom: '6px' }}>{p.item}</div>
                {p.values.map(v => (
                  <div key={v} className="metric-sub" style={{ lineHeight: '1.8' }}>{v}</div>
                ))}
              </div>
            ))}
            <div className="metric-card" style={{ flexDirection: 'column', alignItems: 'flex-start', gridColumn: 'span 2' }}>
              <div className="metric-title" style={{ marginBottom: '6px' }}>Lap Sponges &amp; Gauze</div>
              <div className="metric-sub">6×18 in &amp; 18×18 in (wet &amp; dry variants), 4×4 in Gauze Sponge (8 ply)</div>
              <div className="metric-sub">Per-percentage saturation estimates at 25% / 50% / 75% / 100% / 100% with dripping</div>
            </div>
          </div>
        </div>

        {/* Who it is for */}
        <div className="project-page-block">
          <h2 className="block-title">Who it is for &amp; clinical significance</h2>
          <p className="block-text">
            Used by midwives, O&amp;G nurses, and doctors at HTPN's WCC during and after delivery to rapidly
            quantify blood loss at the bedside. Visual estimation of blood loss is notoriously inaccurate —
            studies show clinicians consistently underestimate PPH by 30–50%. This app standardises that
            estimation using the MOH-approved pictogram, combining photo-based AI analysis with manual top-up
            inputs to give a clear total EBL figure. The app includes a disclaimer noting it supports —
            not replaces — clinical judgement and quantitative weighing methods.
          </p>
        </div>

        {/* CTA */}
        <div className="project-page-cta">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-btn"
            style={{ background: ACCENT }}
          >
            Open Demo →
          </a>
        </div>

      </main>
      <Footer />
    </>
  )
}
