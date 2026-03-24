import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const DEMO_URL = 'https://wcc-dlp-dashboard-nyjojnbhf4abxcsmb3djd4.streamlit.app'

const metrics = [
  { color: '#1D9E75', title: 'Total defects — 4,610', sub: 'Across 10 floors and 13+ departments' },
  { color: '#378ADD', title: 'Pending defects — 614', sub: 'Mostly Public category (455), then Electrical (68)' },
  { color: '#D85A30', title: 'Operational status', sub: '79.8% Active · 10.7% Rotation · 9.52% Pending' },
  { color: '#BA7517', title: 'Clinical incidence reports', sub: 'Defect-linked incidents per department (O&G highest)' },
]

const charts = [
  'Defect count by floor (Level 1–10) — bar chart with multi-select filters',
  'Defect count by department — bar chart across 13 departments',
  'Defect category pie chart — Public 52.1%, Electrical, Mechanical, ICT, Biomedical',
  'Defect category by level — stacked bar (floor vs. category breakdown)',
  'Defect category by department — cross-tabulated stacked bar',
  'Pending defects by category + operational status donut (Active / Rotation / Pending)',
  'Service disruption by location — days lost per ward due to defects',
  'Clinical incidence reports linked to defects by department',
  'Statistical analysis — ANOVA comparing disruption days across operational status groups',
]

const aiFeatures = [
  'Auto-generated narrative insights per chart',
  'Chi-square test + Cramér\'s V with interpretation',
  'ANOVA statistical analysis with auto-commentary',
  'Recommendations highlighted in coloured callouts',
  'Pattern detection across departments and categories',
]

const flowcharts = [
  'DLP WCC user flowchart (defect reporting & escalation)',
  'PTS complaint flow (Pneumatic Tube System within DLP)',
  'Contact numbers for engineering units (HIJG)',
  'JHR form submission process for non-urgent defects',
]

export default function DlpDashboard() {
  return (
    <div className="dlp-page-wrapper">
      <Navbar />
      <main className="project-page">

        {/* Back */}
        <div className="project-page-back">
          <Link to="/#projects" className="back-link">← Back to Projects</Link>
        </div>

        {/* Header */}
        <div className="project-page-header">
          <div className="project-page-meta">
            <span className="card-num">#10</span>
            <span className="card-status status-live">Live</span>
            <span className="demo-badge">Live Demo · Streamlit</span>
          </div>
          <div className="project-page-title-row">
            <img src="/icon-dlp-dashboard.png" alt="Dashboard DLP" className="project-page-logo" />
            <h1 className="project-page-title">Dashboard DLP</h1>
          </div>
          <p className="project-page-subtitle">
            AI-Driven Defect Liability Period Tracking &amp; Risk Management — WCC, Women &amp; Child Centre
          </p>
          <p className="project-page-credit">
            Co-developed by Dr Naim &nbsp;·&nbsp; CC Yati <span>(Unit Pembangunan &amp; Perolehan)</span>
          </p>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-btn"
          >
            Open Live Demo →
          </a>
          <p className="demo-note">
            This is a study prototype connected to live facility data. Contains no patient information.
          </p>
        </div>

        {/* Tech specs */}
        <div className="project-page-specs">
          <div className="spec-card">
            <div className="spec-label">Platform</div>
            <div className="spec-value">Streamlit (Python)</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Data source</div>
            <div className="spec-value">Google Sheets (live CSV)</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Auto-refresh</div>
            <div className="spec-value">Every 60 seconds</div>
          </div>
        </div>

        {/* What it is */}
        <div className="project-page-block">
          <h2 className="block-title">What it is</h2>
          <p className="block-text">
            A real-time monitoring dashboard built for the Warranty &amp; Contract Control (WCC) team managing the
            Defect Liability Period (DLP) of a new Ministry of Health (MOH) hospital facility. The DLP is a
            post-handover period during which the contractor must fix any defects — this dashboard tracks every
            defect complaint across all wards and departments until DLP expiry on 22 November 2026.
          </p>
        </div>

        {/* Key metrics */}
        <div className="project-page-block">
          <h2 className="block-title">Key metrics tracked</h2>
          <div className="metrics-grid">
            {metrics.map(m => (
              <div key={m.title} className="metric-card">
                <div className="metric-dot" style={{ background: m.color }} />
                <div>
                  <div className="metric-title">{m.title}</div>
                  <div className="metric-sub">{m.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Charts */}
        <div className="project-page-block">
          <h2 className="block-title">Charts &amp; analytics sections</h2>
          <ol className="charts-list">
            {charts.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ol>
        </div>

        {/* AI + Flowcharts */}
        <div className="project-page-block two-col">
          <div className="project-page-block-inner">
            <h2 className="block-title">AI features</h2>
            <ul className="feature-list">
              {aiFeatures.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
          <div className="project-page-block-inner">
            <h2 className="block-title">Flowcharts embedded</h2>
            <ul className="feature-list">
              {flowcharts.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
        </div>

        {/* Who it is for */}
        <div className="project-page-block">
          <h2 className="block-title">Who it is for &amp; how it works</h2>
          <p className="block-text">
            Designed for the WCC team, engineers, and hospital management at a new MOH facility. Data is entered
            into a Google Sheet by ward staff or engineers and the dashboard auto-refreshes every 60 seconds.
            Filters allow slicing by floor (Level 1–10), department, and operational status. The sidebar allows
            a custom CSV URL input so the data source can be swapped. It is also described as a{' '}
            <em>study prototype</em> — part of research into AI-driven dashboard models for post-handover
            facility management.
          </p>
        </div>

        {/* CTA */}
        <div className="project-page-cta">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-btn"
          >
            Open Live Demo →
          </a>
        </div>

      </main>
      <Footer />
    </div>
  )
}
