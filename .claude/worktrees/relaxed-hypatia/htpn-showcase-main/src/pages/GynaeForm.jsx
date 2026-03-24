import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const DEMO_URL = 'https://script.google.com/a/macros/moh.gov.my/s/AKfycbxjbhFlte-FSS9MgkDRWJhrqy01vCwd8rTqedzatYgr-1tWXYO6EePCKP7c3pCmZTVNyg/exec'
const ACCENT = '#f97316'

const tabs = [
  {
    num: 'Tab 1',
    color: '#3b82f6',
    label: 'Patient',
    desc: 'Full name, IC / Passport number, MRN (Hospital ID), Age, Weight (kg), Height (cm). BMI is auto-calculated live from weight and height inputs.',
  },
  {
    num: 'Tab 2',
    color: '#8b5cf6',
    label: 'Clinical',
    desc: 'Category (e.g. Gynaecology), Surgery date, Post-op confirmed diagnosis (free text), Classification (Major/Minor), Surgical approach (Open/Laparoscopic/etc.), Procedure dropdown (e.g. Hysterectomy +/− BSO), Others free text for unlisted procedures.',
  },
  {
    num: 'Tab 3',
    color: '#10b981',
    label: 'Staff (Surgical Team)',
    desc: 'Lead Surgeon (required), Supervisor, Assistant 1, Assistant 2, HO 1, HO 2, Remarks (Notes, EBL, etc.). Submission via Save to Census button which writes the full record to Google Sheets.',
  },
]

const navFeatures = [
  'Tabs are clickable directly or via "Next" button at bottom',
  'Tab 1 → Tab 2 labelled "Next: Clinical Details"',
  'Tab 2 → Tab 3 labelled "Next: Surgical Team"',
  'Tab 3 ends with "Save to Census"',
  'Top nav toggles between New Case and History',
]

const historyFeatures = [
  'Accessible via "History" button in top nav',
  'Lists previously submitted surgical cases',
  'Pulls records back from Google Sheets',
  'Shows "No recent cases found" when empty',
]

export default function GynaeForm() {
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
            <span className="card-num">#06</span>
            <span className="card-status status-live">Live</span>
            <span className="demo-badge" style={{ background: 'rgba(249,115,22,0.12)', color: ACCENT, borderColor: 'rgba(249,115,22,0.35)' }}>
              Live Tool · Google Apps Script
            </span>
          </div>
          <div className="project-page-title-row">
            <img src="/icon-gynae.png" alt="Gynae Census Web Form" className="project-page-logo" />
            <h1 className="project-page-title">Gynae Census Web Form</h1>
          </div>
          <p className="project-page-subtitle">
            Digital surgical census data entry for the Gynaecology department at HTPN — MOH accounts only
          </p>
          <p className="project-page-credit">
            Co-developed by Dr Hazimah, Dr Missdalia, Dr Zulaikha <span>(O&amp;G Dept)</span>
          </p>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-btn"
            style={{ background: ACCENT }}
          >
            Open Web Form →
          </a>
          <p className="demo-note" style={{ color: 'var(--text-muted)' }}>
            Restricted to MOH Google Workspace accounts.
          </p>
        </div>

        {/* Tech specs */}
        <div className="project-page-specs">
          <div className="spec-card">
            <div className="spec-label">Platform</div>
            <div className="spec-value">Google Apps Script</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Backend</div>
            <div className="spec-value">Google Sheets</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Access</div>
            <div className="spec-value">MOH accounts only</div>
          </div>
        </div>

        {/* What it is */}
        <div className="project-page-block">
          <h2 className="block-title">What it is</h2>
          <p className="block-text">
            A digital surgical census data entry form for the Gynaecology department at HTPN. It replaces
            paper-based surgical log books by allowing clinical staff to record each surgical case —
            including patient demographics, clinical details, and the surgical team — directly into a
            structured web form that saves to a Google Sheets database. Cases can also be reviewed via a
            built-in history view.
          </p>
        </div>

        {/* 3-tab form */}
        <div className="project-page-block">
          <h2 className="block-title">3-tab data entry form</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {tabs.map(t => (
              <div key={t.num} className="metric-card" style={{ gap: '0.75rem', alignItems: 'flex-start' }}>
                <div style={{
                  minWidth: '52px', height: '28px', borderRadius: '8px',
                  background: t.color, color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '12px', fontWeight: 600, flexShrink: 0, padding: '0 8px',
                }}>
                  {t.num}
                </div>
                <div>
                  <div className="metric-title">{t.label}</div>
                  <div className="metric-sub">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation + History */}
        <div className="project-page-block two-col">
          <div className="project-page-block-inner">
            <h2 className="block-title">Navigation</h2>
            <ul className="feature-list">
              {navFeatures.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
          <div className="project-page-block-inner">
            <h2 className="block-title">History view</h2>
            <ul className="feature-list">
              {historyFeatures.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
        </div>

        {/* Who it is for */}
        <div className="project-page-block">
          <h2 className="block-title">Who it is for &amp; how it works</h2>
          <p className="block-text">
            Used by Gynaecology ward staff and surgical team members at HTPN to log every surgical case
            in real time — at the time of surgery or immediately post-op. Each submission is saved directly
            to a central Google Sheets census registry, enabling the department to maintain an accurate
            surgical logbook for audit, training documentation, and statistical reporting. The
            auto-calculated BMI and structured procedure dropdowns reduce manual effort and improve data
            consistency. Access is restricted to MOH Google Workspace accounts.
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
            Open Web Form →
          </a>
        </div>

      </main>
      <Footer />
    </>
  )
}
