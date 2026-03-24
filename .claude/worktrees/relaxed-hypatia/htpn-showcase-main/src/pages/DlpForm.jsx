import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const DEMO_URL = '/dlp-form.html'
const ACCENT = '#f5c518'

const formSections = [
  {
    num: '1',
    title: 'Maklumat Projek — Project Information',
    fields: [
      { label: 'Nama Projek', desc: 'Pre-filled: HTPN Naiktaraf Hospital Kajang' },
      { label: 'No Kontrak', desc: 'Pre-filled: JKR/IP/CKUB/80/2018' },
      { label: 'No Aduan', desc: 'Complaint number — e.g. L1 ED 0142' },
    ],
  },
  {
    num: '2',
    title: 'Butiran Laporan — Defect Report Details',
    fields: [
      { label: 'Jenis Kecacatan / Kerosakan', desc: 'Defect type selector' },
      { label: 'Laporan / Keterangan', desc: 'Full description — free text' },
      { label: 'Lokasi', desc: 'Location within the building' },
      { label: 'Tarikh Laporan', desc: 'Report date — auto-filled to today' },
    ],
  },
  {
    num: '3',
    title: 'Butiran Pelapor — Reporter Details',
    fields: [
      { label: 'Nama Pelapor', desc: 'Reporter full name' },
      { label: 'Jabatan / Unit', desc: 'Department or unit' },
      { label: 'No Telefon', desc: 'Contact number' },
    ],
  },
  {
    num: '4',
    title: 'Kegunaan Pejabat — Office Use (JKR)',
    fields: [
      { label: 'Kategori Kecacatan', desc: '0 — Tidak Kritikal · 1 — Kritikal-Kefungsian · 2 — Kritikal-Keselamatan' },
      { label: 'JKR Bidang (13 fields)', desc: 'Am · Asas · Struktur · Jalan · Jambatan · Maritim · Lapangan Terbang · Air · Pembetungan · Kerja Luar Bangunan · Seni Bina · Mekanikal · Elektrikal' },
      { label: 'Tindakan JKR', desc: 'Diterima / Ditolak' },
      { label: 'Tarikh Arahan / Terima / Siap', desc: 'Three date fields for JKR action tracking' },
    ],
  },
]

const bulkMethods = [
  {
    label: 'Excel / CSV Upload',
    color: '#166534',
    bg: 'rgba(22,101,52,0.1)',
    desc: 'Upload .xlsx, .xls, or .csv — app auto-maps columns (No Aduan, Jenis Kerosakan, Laporan, Lokasi, etc.) and bulk-pushes all rows to Google Sheets.',
  },
  {
    label: 'Google Sheet URL',
    color: '#1e40af',
    bg: 'rgba(30,64,175,0.1)',
    desc: 'Paste any public Google Sheet URL — app extracts the Sheet ID, exports as CSV, parses and imports. CORS fallback via allorigins.win proxy.',
  },
  {
    label: 'AI Scan (Gemini OCR)',
    color: ACCENT,
    bg: 'rgba(245,197,24,0.1)',
    desc: 'Photograph any paper DLP form — Gemini 2.5 Flash reads the image and auto-fills all form fields. Enables rapid back-digitisation of legacy paper records.',
  },
]

export default function DlpForm() {
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
            <span className="card-num">#13</span>
            <span className="card-status status-live">Live</span>
            <span className="demo-badge" style={{ background: 'rgba(245,197,24,0.12)', color: ACCENT, borderColor: 'rgba(245,197,24,0.35)' }}>
              Live Tool · HTML Demo
            </span>
          </div>
          <div className="project-page-title-row">
            <img src="/icon-dlp-form.png" alt="DLP Web Form" className="project-page-logo" />
            <h1 className="project-page-title">DLP Reporting Web Form</h1>
          </div>
          <p className="project-page-subtitle">
            Sistem Laporan Kerosakan JKR — Digital replacement for the paper DLP complaint form at HTPN
          </p>
          <p className="project-page-credit">
            Built by Dr Syafiz &nbsp;·&nbsp; <span>Unit Pembangunan &amp; Perolehan · HTPN</span>
          </p>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-btn"
            style={{ background: ACCENT, color: '#000' }}
          >
            Open Web Form →
          </a>
        </div>

        {/* Tech specs */}
        <div className="project-page-specs">
          <div className="spec-card">
            <div className="spec-label">Tech Stack</div>
            <div className="spec-value">React 18 + Tailwind</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Backend</div>
            <div className="spec-value">Google Sheets · Apps Script</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">AI Engine</div>
            <div className="spec-value">Gemini 2.5 Flash (OCR)</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Project Ref</div>
            <div className="spec-value">JKR/IP/CKUB/80/2018</div>
          </div>
        </div>

        {/* What it is */}
        <div className="project-page-block">
          <h2 className="block-title">What it is</h2>
          <p className="block-text">
            A digital replacement for the standard JKR (Jabatan Kerja Raya) paper-based Defect Liability
            Period (DLP) complaint form used at HTPN. Hospital staff, nursing officers, and engineers
            submit defect reports through this web form instead of filling paper forms manually. Every
            submission is sent directly to a central Google Sheets database which feeds the{' '}
            <strong style={{ color: 'var(--text)' }}>WCC DLP Dashboard</strong> — making this form
            the <strong style={{ color: 'var(--text)' }}>live data entry front-end</strong> of the
            entire DLP tracking and analytics ecosystem.
          </p>
        </div>

        {/* Form sections */}
        <div className="project-page-block">
          <h2 className="block-title">Form structure — 4 sections</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {formSections.map(s => (
              <div key={s.num} className="project-page-block" style={{ background: 'var(--surface2)', borderRadius: '10px', padding: '1.25rem', marginBottom: 0 }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: ACCENT, marginBottom: '0.75rem' }}>
                  Section {s.num} — {s.title}
                </h3>
                <div className="metrics-grid">
                  {s.fields.map(f => (
                    <div key={f.label} className="metric-card">
                      <div>
                        <div className="metric-title">{f.label}</div>
                        <div className="metric-sub">{f.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI OCR + Bulk import — two col */}
        <div className="project-page-block">
          <h2 className="block-title">🤖 AI OCR &amp; Bulk Import — 3 methods</h2>
          <p className="block-text" style={{ marginBottom: '1rem' }}>
            Beyond manual entry, the form supports three methods to rapidly populate data — including
            photographing existing paper forms and letting Gemini read them automatically.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.85rem' }}>
            {bulkMethods.map(m => (
              <div key={m.label} className="metric-card" style={{ background: m.bg, border: `1px solid ${m.color}33` }}>
                <div>
                  <div className="metric-title" style={{ color: m.color }}>{m.label}</div>
                  <div className="metric-sub" style={{ marginTop: '0.4rem' }}>{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Print view + Records */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>

          <div className="project-page-block" style={{ background: 'var(--surface2)', borderRadius: '10px', padding: '1.25rem', marginBottom: 0 }}>
            <h2 className="block-title">📄 Print View</h2>
            <ul className="block-list">
              <li>Official JKR DLP form layout reproduced digitally</li>
              <li>HTPN hospital header with project &amp; contract details</li>
              <li>13-field Bidang checkboxes (JKR.PK(O).04-8)</li>
              <li>Kategori Kecacatan with tick marks</li>
              <li>JKR action + contractor action sections</li>
              <li>Signature blocks for both parties</li>
              <li>Print-optimised for A4 portrait (10mm margins)</li>
            </ul>
          </div>

          <div className="project-page-block" style={{ background: 'var(--surface2)', borderRadius: '10px', padding: '1.25rem', marginBottom: 0 }}>
            <h2 className="block-title">📊 Records List View</h2>
            <ul className="block-list">
              <li>Table of all submitted defect reports in session</li>
              <li>Columns: No Aduan, Date, Defect Type, Location, Category, Reporter</li>
              <li>View / Print button per record — opens official form layout</li>
              <li>Export CSV — downloads all records for Excel or dashboard use</li>
              <li>All records simultaneously live in Google Sheets feeding the DLP Dashboard</li>
            </ul>
          </div>

        </div>

        {/* Role in ecosystem */}
        <div className="project-page-block">
          <h2 className="block-title">Role in the DLP ecosystem</h2>
          <p className="block-text">
            Used by ward staff, nursing officers, engineers, and department heads at HTPN to submit
            building defect complaints during the DLP period for the new Women &amp; Child Centre.
            This form is the <strong style={{ color: 'var(--text)' }}>live data entry front-end</strong> —
            every submission feeds directly into Google Sheets, which in turn powers the{' '}
            <strong style={{ color: 'var(--text)' }}>WCC DLP Dashboard</strong> with real-time
            defect counts, status tracking, and departmental breakdowns. Together, the form and dashboard
            form a complete end-to-end digital DLP management system, fully replacing the JKR paper workflow.
          </p>
        </div>

        {/* CTA */}
        <div className="project-page-cta">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-btn"
            style={{ background: ACCENT, color: '#000' }}
          >
            Open Web Form →
          </a>
        </div>

      </main>
      <Footer />
    </>
  )
}
