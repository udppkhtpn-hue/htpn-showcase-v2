import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#eab308'
const SCREENSHOTS = [
  { src: '/ot-leave-dashboard.webp', caption: 'Dashboard Overview — monthly KPI cards, time-off and claim-hour gauges' },
  { src: '/ot-leave-movements-log.webp', caption: 'Staff Movements Log — chronological register with colour-coded status chips' },
  { src: '/ot-leave-monthly-summary.webp', caption: 'Monthly Leave Summary — per-staff breakdown with grand total row' },
  { src: '/ot-leave-entitlement.webp', caption: 'Leave Entitlement & Balances — Year-to-Date computation against quota' },
]

export default function ProjectOTLeaveRegister() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>Monthly Staff Movement &amp; Leave Register — Occupational Therapy Unit · HTPN HIO</title>
        <meta name="description" content="An administrative monitoring web application consolidating daily staff assignments, official out-of-office duties, short leave permits, and public healthcare leave categories — with automated Year-to-Date balance calculations and audit-ready exports." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/ot-leave-register" />
        <meta property="og:title" content="Monthly Staff Movement &amp; Leave Register · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/ot-leave-register" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">Monthly Staff Movement &amp; Leave Register</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#34 · Management Productivity</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">Clinical Staff Management</span>
          <span className="detail-tag">Duty Roster &amp; Leave</span>
          <span className="detail-tag">Bilingual (EN/MS)</span>
        </div>

        <p className="detail-subtitle">
          An administrative monitoring application for unit heads, clinical supervisors, and occupational therapy staff — consolidating daily assignments, official out-of-office duties, short leave permits under four hours, and multiple public healthcare leave categories into one platform with automated Year-to-Date balance computation.
        </p>

        <div className="detail-block">
          <div className="prd-block-inner prd-block-inner--accent">
            <p className="detail-subtitle" style={{ margin: 0 }}>
              <strong style={{ color: ACCENT }}>Live and operational.</strong> This is not a prototype — the screenshots below are taken from the system in active daily use by the Occupational Therapy Unit at Hospital Port Dickson, running against live Google Sheets data for the current reporting month.
            </p>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE SYSTEM IN USE</h2>
          <div className="detail-shots">
            {SCREENSHOTS.map(shot => (
              <a key={shot.src} href={shot.src} target="_blank" rel="noopener noreferrer" className="detail-shot">
                <img src={shot.src} alt={shot.caption} loading="lazy" />
                <span className="detail-shot__caption">{shot.caption}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="detail-block">
          <div className="spec-cards">
            <div className="spec-card-new">
              <span className="spec-card-new__label">Pillar</span>
              <span className="spec-card-new__value" style={{ color: ACCENT }}>Management Productivity</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Workflow Stream</span>
              <span className="spec-card-new__value">Back-Office Admin · Unit Supervisor &amp; Clinician-Facing</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Tech Stack</span>
              <span className="spec-card-new__value">HTML5 / Modern CSS / Vanilla JavaScript + Google Apps Script</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Data Architecture</span>
              <span className="spec-card-new__value">Bi-directional real-time sync with Google Sheets</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Regulatory Basis</span>
              <span className="spec-card-new__value">Perintah Am Bab G · Pekeliling Perkhidmatan KKM</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#4ade80' }}>Deployed · Hospital Port Dickson</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            A clinical unit's staffing position on any given day is the sum of several separate registers — who is on annual leave, who is at a course, who stepped out on an official errand under four hours, who is claiming compensatory hours. Kept as separate paper logbooks, that sum is never visible in one place, and the year-to-date balances underneath it have to be tallied by hand.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Fragmented Movement Records</span>
              <span className="prd-section-item__desc">Daily assignments, official duties, short time-off permits, and leave were each logged separately — leaving supervisors without a single view of actual clinical staffing on the floor for a given day.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Manual Year-to-Date Tallying</span>
              <span className="prd-section-item__desc">Entitlement balances had to be recomputed by hand against brought-forward quotas each time a leave application was considered, making errors likely and real-time balance checks impractical.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Reporting as a Separate Exercise</span>
              <span className="prd-section-item__desc">Monthly summaries for hospital human resources were assembled retrospectively from the logbooks rather than produced from the records as they were entered.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(234,179,8,0.15)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Access &amp; Initiation</span>
              <span className="prd-section-item__desc">Opened through an internal Google Apps Script web portal link on clinical workstations or departmental intranet dashboards. No client installation — it establishes a live cloud link to Google Sheets with a visible connectivity indicator (Connected: Google Sheets) and dynamic month and year selectors.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(234,179,8,0.15)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Active Task &amp; Processing</span>
              <span className="prd-section-item__desc">Navigation across dedicated tabs — Dashboard Overview, Staff Movements Log, Monthly Leave Summary, Leave Entitlement &amp; Balances, Monthly Reports &amp; Export. Supervisors record entries via + Tambah Rekod or Rekod Pergerakan modals and adjust team quotas through Selaraskan Kelayakan Anggota, with formula-driven YTD deductions applied instantly.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(234,179,8,0.15)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Delivery &amp; Handover</span>
              <span className="prd-section-item__desc">Document generation and extraction through Export CSV, Import CSV / Sheets, and Cetak / Simpan PDF — producing shift logs, audit-ready monthly summaries for hospital HR, and live visibility over daily ward clinical staffing levels.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">CORE FUNCTIONAL MODULES</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Movement Overview Dashboard</span>
              <span className="prd-section-item__desc">Operational command centre with KPI metric cards: Anggota Unit (total staff), monthly counters for Cuti Rehat (CR), Cuti Hazard (CH), Medical Leave (MC), Tanpa Rekod (CTR), and Kursus / Rasmi duty counts — plus dedicated tracking for Keluar Pejabat (time-off under 4 hours) and Tuntutan Jam (claim hours) with quota usage gauges.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Staff Movements Log</span>
              <span className="prd-section-item__desc">Searchable chronological register capturing Hari, Tarikh, Nama Anggota, Status Pergerakan (Hospital Meeting, Leave, Claim Hours, Course / Training, Keluar Pejabat), Jenis Cuti, Tempoh, and Catatan / Masa Keluar / Tempat, with row-level edit and delete.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Monthly Leave Summary</span>
              <span className="prd-section-item__desc">Aggregated roll-up per staff member (Nama Anggota, Jawatan / Gred) tabulating days taken across Cuti Rehat, Cuti Hazard, Medical Leave, and Cuti Tanpa Rekod, with a computed Jumlah Cuti Bulan Ini and a grand total row.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">04</span>
              <span className="prd-section-item__title">Leave Entitlement &amp; Balances</span>
              <span className="prd-section-item__desc">Multi-tier Year-to-Date ledger tracking brought-forward entitlement (Kelayakan + Bawa), days taken (Ambil YTD), and remaining balance (Baki) for Cuti Rehat and Cuti Hazard, alongside Medical Leave ceiling checks (180 max) and unrecorded leave tallies.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">05</span>
              <span className="prd-section-item__title">Reports &amp; Data Pipeline</span>
              <span className="prd-section-item__desc">Bulk import and export controls enabling bi-directional flow with linked Google Sheets, CSV transfers, and dedicated print / PDF rendering for administrative filing.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>Automated public sector formula engine encoding civil service rules — remaining annual leave derived as brought-forward plus annual entitlement, less year-to-date usage</li>
            <li>Compensatory rest conversion built in, with nine hours of recorded duty converting to one Cuti Gantian</li>
            <li>High-affordance status chips colour-code movement state at a glance — meetings, approved leave, training, and time-off exits each distinct</li>
            <li>Persistent top bar with live connection status, manual sync trigger, and month / year filtering without a page reload</li>
            <li>Administrative guardrails via dedicated modals for quota recalibration and bulk roster updates rather than free-form table editing</li>
            <li>Print and PDF layouts styled to render clean tabular output for HR filing without web chrome artifacts</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">GOVERNANCE &amp; SCOPE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>Enforces internal clinical governance and public service circular directives (Pekeliling Perkhidmatan KKM)</li>
              <li>Leave deductions, claim hours (Cuti Gantian), and short time-off permissions under four hours must comply with Perintah Am Bab G</li>
              <li>All entries remain subject to official supervisor endorsement</li>
              <li>Computed balances support decisions but do not replace formal approval workflow</li>
            </ul>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">LOGBOOK vs REGISTER — COMPARISON</h2>
          <div className="detail-table-wrap">
            <table className="detail-table">
              <thead>
                <tr>
                  <th>Evaluation Vector</th>
                  <th>Paper Logbooks</th>
                  <th style={{ color: ACCENT }}>Movement &amp; Leave Register</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Daily Staffing Picture</td>
                  <td>Spread across separate registers</td>
                  <td>Consolidated on one dashboard</td>
                </tr>
                <tr>
                  <td>YTD Balances</td>
                  <td>Recomputed by hand per enquiry</td>
                  <td>Derived automatically from entitlement and usage</td>
                </tr>
                <tr>
                  <td>Short Time-Off (&lt; 4 hrs)</td>
                  <td>Informally noted, rarely aggregated</td>
                  <td>Tracked as a first-class category with quota gauge</td>
                </tr>
                <tr>
                  <td>Monthly HR Reporting</td>
                  <td>Assembled retrospectively from logbooks</td>
                  <td>Exported directly as CSV or PDF</td>
                </tr>
                <tr>
                  <td>Record Lookup</td>
                  <td>Manual page search by date</td>
                  <td>Live search with category filters</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">STRATEGIC IMPACT</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">👥</span>
              <span className="prd-section-item__title">Staffing Visible Before It Becomes a Gap</span>
              <span className="prd-section-item__desc">Consolidating every movement category into one daily view lets supervisors see thin coverage while there is still time to adjust the roster, rather than discovering it on the day.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🧮</span>
              <span className="prd-section-item__title">Entitlement Arithmetic Removed</span>
              <span className="prd-section-item__desc">Encoding the civil service balance rules in the system turns every leave decision into a lookup instead of a calculation — and removes a recurring source of manual error.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">📄</span>
              <span className="prd-section-item__title">Reporting as a Byproduct</span>
              <span className="prd-section-item__desc">Because monthly summaries derive from records already captured, HR filing becomes an export rather than a month-end reconstruction exercise.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Unit Terapi Carakerja (Occupational Therapy) Administration Team · Hospital Port Dickson, Ministry of Health Malaysia</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
