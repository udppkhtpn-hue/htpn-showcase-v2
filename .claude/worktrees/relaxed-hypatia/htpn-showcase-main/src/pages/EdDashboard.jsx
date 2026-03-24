import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const DEMO_URL = 'https://script.google.com/a/macros/moh.gov.my/s/AKfycbwyz2Fiuu4bVMNmD8V-F-jG9njwAG9FwS03eALdKpinMcDcjZoKoXjs250FnOQWazqH/exec?authuser=2'

const patientSearchFeatures = [
  'Search by IC number, passport number, or patient name',
  'Minimum 4 characters required to search',
  'IC number shown in masked form for privacy (PDPA-compliant)',
  'Returns current treatment status in ED or PAC',
]

const capacityFeatures = [
  'Live bed count per zone vs normal capacity',
  'Colour-coded progress bars (red = over capacity)',
  'Crisis beds activated shown as a badge',
  'Average waiting time shown per zone',
  'Covers Bangunan Utama, WCC, and PAC',
]

const liveZones = [
  { color: '#E24B4A', label: 'Zon Merah — Bangunan Utama', count: '11', capacity: '6 katil', note: '5 katil krisis diaktifkan', noteColor: '#E24B4A' },
  { color: '#BA7517', label: 'Zon Kuning — Bangunan Utama', count: '38', capacity: '16 katil', note: '22 katil krisis diaktifkan', noteColor: '#E24B4A' },
  { color: '#1D9E75', label: 'Zon Hijau — Bangunan Utama', count: '2', capacity: '2 bilik', note: 'Masa tunggu: 63 min (10 pesakit)', noteColor: null },
  { color: '#E24B4A', label: 'Bilik Pemerhatian — WCC', count: '8', capacity: '8 katil', note: 'At full capacity', noteColor: null },
  { color: '#1D9E75', label: 'Bilik Asma — WCC', count: '2', capacity: '4 katil', note: '50% capacity', noteColor: null },
  { color: '#E24B4A', label: 'PAC — Ibu Mengandung (WCC)', count: '13', capacity: '8 katil', note: '5 katil krisis diaktifkan', noteColor: '#E24B4A' },
]

export default function EdDashboard() {
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
            <span className="card-num">#09</span>
            <span className="card-status status-live">Live</span>
            <span className="demo-badge" style={{ background: 'rgba(0,180,255,0.12)', color: '#00b4ff', borderColor: 'rgba(0,180,255,0.35)' }}>
              Demo · Google Apps Script
            </span>
          </div>
          <div className="project-page-title-row">
            <img src="/icon-ed.png" alt="Dashboard ED" className="project-page-logo" />
            <h1 className="project-page-title">Dashboard ED</h1>
          </div>
          <p className="project-page-subtitle">
            Jabatan Kecemasan &amp; PAC — Real-Time Patient Status &amp; Bed Capacity Monitoring
          </p>
          <p className="project-page-credit">
            Co-developed by Dr Naim
          </p>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-btn"
            style={{ background: '#00b4ff' }}
          >
            View Demo →
          </a>
          <p className="demo-note">
            Uses dummy data only. Pending approval from JKNS &amp; KKM before live deployment.
          </p>
        </div>

        {/* Tech specs */}
        <div className="project-page-specs">
          <div className="spec-card">
            <div className="spec-label">Platform</div>
            <div className="spec-value">Google Apps Script</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Data refresh</div>
            <div className="spec-value">Every 5 minutes</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Language</div>
            <div className="spec-value">Bahasa Melayu</div>
          </div>
        </div>

        {/* What it is */}
        <div className="project-page-block">
          <h2 className="block-title">What it is</h2>
          <p className="block-text">
            A public-facing patient status web app for the Emergency Department (ED) and PAC (Pusat Penilaian
            Pesakit / Patient Assessment Centre) at HTPN Kajang. It serves two audiences:{' '}
            <strong style={{ color: 'var(--text)' }}>family members</strong> who can search for their loved
            one's treatment status, and{' '}
            <strong style={{ color: 'var(--text)' }}>hospital management and staff</strong> who can monitor
            real-time bed occupancy and waiting queues across all clinical zones and buildings.
          </p>
        </div>

        {/* Features */}
        <div className="project-page-block two-col">
          <div className="project-page-block-inner">
            <h2 className="block-title">Feature 1 — Patient search</h2>
            <ul className="feature-list">
              {patientSearchFeatures.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
          <div className="project-page-block-inner">
            <h2 className="block-title">Feature 2 — Capacity overview</h2>
            <ul className="feature-list">
              {capacityFeatures.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
        </div>

        {/* Live zone data */}
        <div className="project-page-block">
          <h2 className="block-title">Live data snapshot — 20 Mar 2026, 12:46</h2>
          <div className="metrics-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {liveZones.map(z => (
              <div key={z.label} className="metric-card" style={{ borderLeft: `3px solid ${z.color}`, paddingLeft: '0.75rem' }}>
                <div style={{ width: '100%' }}>
                  <div className="metric-sub" style={{ marginBottom: '0.25rem' }}>{z.label}</div>
                  <div className="metric-title" style={{ fontSize: '1.25rem' }}>
                    {z.count} <span style={{ fontSize: '0.75rem', fontWeight: 400, color: 'var(--text3)' }}>/ {z.capacity}</span>
                  </div>
                  <div className="metric-sub" style={{ color: z.noteColor || 'var(--text3)', marginTop: '0.2rem' }}>{z.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Crisis + Green queue */}
        <div className="project-page-block two-col">
          <div className="project-page-block-inner" style={{ borderColor: 'rgba(226,75,74,0.4)', background: 'rgba(226,75,74,0.07)' }}>
            <h2 className="block-title" style={{ color: '#E24B4A' }}>Crisis alert banner</h2>
            <p className="block-text" style={{ color: '#e07070' }}>
              A prominent red warning banner is displayed when the ED is operating in{' '}
              <strong style={{ color: '#E24B4A' }}>mod krisis</strong> (crisis mode) — alerting visitors
              that extra beds have been activated and wait times are elevated.
            </p>
          </div>
          <div className="project-page-block-inner">
            <h2 className="block-title">Green zone waiting queue</h2>
            <p className="block-text">
              Separate queue counters for{' '}
              <strong style={{ color: 'var(--text)' }}>Bangunan Utama (50)</strong> and{' '}
              <strong style={{ color: 'var(--text)' }}>WCC (50)</strong> show the number of patients
              currently waiting in the Green Zone queue.
            </p>
          </div>
        </div>

        {/* Who it is for */}
        <div className="project-page-block">
          <h2 className="block-title">Who it is for &amp; how it works</h2>
          <p className="block-text">
            Built on Google Apps Script pulling from a Google Sheet backend, refreshing every 5 minutes.
            It is a <strong style={{ color: 'var(--text)' }}>public-facing screen</strong> — accessible
            to patients' families waiting outside — while also serving as a management situational awareness
            tool. The app is scoped to HTPN's MOH Google Workspace domain. It covers two physical buildings:{' '}
            <strong style={{ color: 'var(--text)' }}>Bangunan Utama</strong> (main ED) and{' '}
            <strong style={{ color: 'var(--text)' }}>WCC</strong> (Women &amp; Children Centre), with zones
            colour-coded Red, Yellow, and Green matching standard ED triage levels.
          </p>
        </div>

        {/* CTA */}
        <div className="project-page-cta">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-btn"
            style={{ background: '#00b4ff' }}
          >
            View Demo →
          </a>
        </div>

      </main>
      <Footer />
    </>
  )
}
