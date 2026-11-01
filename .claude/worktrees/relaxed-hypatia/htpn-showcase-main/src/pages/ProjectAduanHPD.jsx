import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#d946ef'
const SCREENSHOTS = [
  { src: '/aduan-dashboard.webp', caption: 'Dashboard Analisis Aduan Bulanan — KPI cards, SLA targets, and global filter bar' },
  { src: '/aduan-meeting-table.webp', caption: 'Perkara Utama Mesyuarat — issues paired with executive minutes and corrective actions' },
  { src: '/aduan-registration.webp', caption: 'Daftar Maklumat Aduan Baru — auto-generated ID, director directive, and panel assignment' },
]

export default function ProjectAduanHPD() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>Aduan HPD — Hospital Complaint Management System · HTPN HIO</title>
        <meta name="description" content="An enterprise hospital complaint management and clinical governance platform for Hospital Port Dickson — digitised complaint intake, KKM investigation SLA tracking, and executive meeting-ready corrective action reports." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/aduan-hpd" />
        <meta property="og:title" content="Aduan HPD — Complaint Management System · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/aduan-hpd" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">Aduan HPD</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#35 · Management Productivity</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">Complaint Governance</span>
          <span className="detail-tag">KKM SLA Tracking</span>
          <span className="detail-tag">Bahasa Malaysia</span>
        </div>

        <p className="detail-subtitle">
          A hospital complaint management and clinical governance platform for public relations officers, complaint coordinators (Penyelaras Aduan), and executive hospital directors — digitising complaint intake, enforcing Ministry of Health investigation timelines, and producing meeting-ready corrective action reports.
        </p>

        <div className="detail-block">
          <div className="prd-block-inner prd-block-inner--accent">
            <p className="detail-subtitle" style={{ margin: 0 }}>
              <strong style={{ color: ACCENT }}>Live and operational.</strong> This is not a prototype — the screenshots below are taken from the system in active use by the Public Relations &amp; Complaints Management Unit at Hospital Port Dickson.
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
              <span className="spec-card-new__value">Back-Office Admin · Executive Management &amp; Clinical Review</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Tech Stack</span>
              <span className="spec-card-new__value">HTML5 / Modern CSS / JavaScript (ES6+) + Custom Web Embed</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Data Architecture</span>
              <span className="spec-card-new__value">Cloud database with role-based access control</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Statutory SLAs</span>
              <span className="spec-card-new__value">7-day investigation · 15-day resolution</span>
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
            Patient feedback is only as useful as the speed and discipline with which it is acted on. Ministry of Health protocols set firm clocks on investigation and resolution, but tracking those clocks across a monthly complaint volume by hand makes breaches easy to miss — and leaves leadership reviewing raw logs rather than decisions.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Slow, Unmonitored Feedback</span>
              <span className="prd-section-item__desc">Complaints arrived through several channels with no single register, so intake dates, ownership, and progress were unclear until someone chased them.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Statutory Deadlines Tracked by Memory</span>
              <span className="prd-section-item__desc">The 7-day investigation and 15-day resolution windows depended on coordinators remembering to check each open case — with the risk of a governance breach if one slipped.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Raw Data in Management Meetings</span>
              <span className="prd-section-item__desc">Preparing the monthly Hospital Management Meeting meant assembling cases, directives, and corrective actions manually, rather than presenting issues and actions side by side.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(217,70,239,0.15)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Access &amp; Initiation</span>
              <span className="prd-section-item__desc">Authenticated login over the hospital intranet, with the user's role resolved automatically (e.g. Penyelaras Aduan, Super Admin). The single-page interface loads with live session indicators, alert counts for KKM correspondence and pending reminders, and the current month's complaint telemetry.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(217,70,239,0.15)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Active Task &amp; Processing</span>
              <span className="prd-section-item__desc">Coordinators file complaints through the + Tambah Aduan Baharu modal, assign investigation panels, and review cases across standard (Laporan Aduan Biasa) and complex (Laporan Aduan Kompleks) streams — with auto-generated IDs, auto-timestamps, cascading category pickers, and a dedicated field for executive directive minutes.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(217,70,239,0.15)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Delivery &amp; Handover</span>
              <span className="prd-section-item__desc">Live SLA tracking, a calculated resolution rate (Kadar Kes Selesai), an executive meeting summary view (Dashboard Mesyuarat), and print reporting (Cetak Laporan). Cases move immediately to their investigation panels, day-7 reminders fire automatically, and corrective actions are logged for the monthly management meeting.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">CORE FUNCTIONAL MODULES</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Executive Governance Dashboard</span>
              <span className="prd-section-item__desc">Monthly KPI centre showing Jumlah Aduan Diterima, Aduan Biasa (15-working-day SLA), Aduan Kompleks (30-day inquiry window), and the overall resolution rate — supported by a category donut chart (Pecahan Kategori Aduan) and a department bar chart (Taburan Aduan Mengikut Jabatan).</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Multi-Tier Global Filter Bar</span>
              <span className="prd-section-item__desc">Real-time slicing across Tahun, Bulan, Jabatan Berkaitan, and Kategori Aduan, with a one-click Reset Penapis.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Meeting Action Table</span>
              <span className="prd-section-item__desc">Perkara Utama Mesyuarat Pengurusan consolidates cases needing executive attention — Bil, ID and department, category (Soft Skill, Fasiliti, Pengurusan), issue title and summary, executive minutes, Tindakan Penambahbaikan, and a live Status Kes badge (Selesai, Dalam Siasatan).</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">04</span>
              <span className="prd-section-item__title">Complaint Registration Modal</span>
              <span className="prd-section-item__desc">Structured intake capturing a sequential reference ID (Auto-Jana ID, e.g. HPD/ADU/2026/049), category and sub-category, date and time received, related department, complaint title and summary, an amber-highlighted block for Hospital Director / Deputy Director directives, and investigation panel assignment enforcing the KKM minimum of two officers within a 7-day investigation window.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">05</span>
              <span className="prd-section-item__title">Notification &amp; Escalation Hub</span>
              <span className="prd-section-item__desc">Toolbar tracking linked KKM correspondence (Log Emel KKM, with badge counters) and proactive SLA escalation (Imbas Peringatan Mesra Hari Ke-7) to prevent governance breaches.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>Statutory SLA guardrails shown on screen — the 7-day preliminary investigation target and the 15-day resolution requirement for routine cases</li>
            <li>Executive direction injection — an isolated, role-restricted field for Director and Deputy Director minutes, kept inside the complaint record</li>
            <li>One-click sequential ID generator producing audit-ready case numbers in a uniform institutional format</li>
            <li>Meeting-centric ergonomics — core issues sit directly beside corrective actions, not raw data logs</li>
            <li>Role-based presentation layer with the active operational role displayed in a persistent header</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">GOVERNANCE &amp; SCOPE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>Handles sensitive patient grievances, medicolegal issues, and internal staff conduct records</li>
              <li>Full administrative access (Super Admin) is limited to designated complaint coordinators and executive hospital leadership</li>
              <li>Investigation timelines, panel appointments (minimum two officers for KKM inquiries), and corrective actions must follow national public healthcare complaint governance protocols (SOP KKM: 7 Hari Penyiasatan)</li>
            </ul>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">MANUAL vs DIGITAL — COMPARISON</h2>
          <div className="detail-table-wrap">
            <table className="detail-table">
              <thead>
                <tr>
                  <th>Evaluation Vector</th>
                  <th>Manual Complaint Logs</th>
                  <th style={{ color: ACCENT }}>Aduan HPD</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Complaint Register</td>
                  <td>Multiple channels, no single record</td>
                  <td>One governed register with auto-generated IDs</td>
                </tr>
                <tr>
                  <td>SLA Monitoring</td>
                  <td>Coordinators track each deadline by memory</td>
                  <td>Live tracker with automatic day-7 reminders</td>
                </tr>
                <tr>
                  <td>Investigation Panels</td>
                  <td>Assigned informally, minimum not enforced</td>
                  <td>Two-officer KKM minimum enforced at assignment</td>
                </tr>
                <tr>
                  <td>Management Meeting Prep</td>
                  <td>Cases and actions assembled by hand</td>
                  <td>Issues paired with corrective actions in one view</td>
                </tr>
                <tr>
                  <td>Resolution Reporting</td>
                  <td>Counted after the month closes</td>
                  <td>Resolution rate computed live on the dashboard</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">STRATEGIC IMPACT</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">⏳</span>
              <span className="prd-section-item__title">Deadlines Enforced by the System</span>
              <span className="prd-section-item__desc">Building the 7-day and 15-day windows into the workflow replaces individual vigilance with an automatic escalation path, reducing the chance of a governance breach.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🏛️</span>
              <span className="prd-section-item__title">Decisions, Not Data, at Management Meetings</span>
              <span className="prd-section-item__desc">Presenting each issue next to its executive minute and corrective action lets leadership decide on the case in front of them instead of reading through a log.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🗂️</span>
              <span className="prd-section-item__title">Audit-Ready Case Trail</span>
              <span className="prd-section-item__desc">Uniform case numbers, timestamps, panel appointments, and logged corrective actions give every complaint a traceable path from receipt to closure.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Unit Perhubungan Awam &amp; Pengurusan Aduan · Hospital Port Dickson, Kementerian Kesihatan Malaysia</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
