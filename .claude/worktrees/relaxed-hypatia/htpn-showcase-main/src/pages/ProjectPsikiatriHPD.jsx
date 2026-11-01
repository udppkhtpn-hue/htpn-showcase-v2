import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#8b5cf6'
const DEMO_URL = 'https://script.google.com/a/macros/moh.gov.my/s/AKfycbxuF_4YPrF7yo56zQhTLeuLaj0wlt3go7ZmoquSfA2F7DfheCmH7noAUOFIZIkXe_5_/exec'

export default function ProjectPsikiatriHPD() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>Jabatan Psikiatri &amp; Kesihatan Mental (HPD) — Department Dashboard · HTPN HIO</title>
        <meta name="description" content="An administrative and operations tracking dashboard for the Psychiatry and Mental Health Department of Hospital Port Dickson — centralising APC, NSR, C&P credential compliance, CPD training records, staff leave, and departmental budget tracking." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/psikiatri-hpd" />
        <meta property="og:title" content="Jabatan Psikiatri &amp; Kesihatan Mental (HPD) — Department Dashboard · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/psikiatri-hpd" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">Jabatan Psikiatri &amp; Kesihatan Mental (HPD)</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#30 · Management Productivity</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">Hospital Administration</span>
          <span className="detail-tag">Credential Compliance</span>
          <span className="detail-tag">Bilingual (EN/MS)</span>
        </div>

        <p className="detail-subtitle">
          An administrative and operations tracking dashboard for the Psychiatry and Mental Health Department of Hospital Port Dickson — giving department heads, administrative coordinators, and clinical supervisors centralised visibility over professional credentials, training progress, and departmental budget.
        </p>

        <div className="detail-block">
          <div className="detail-block__cta">
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="detail-demo-btn" style={{ background: ACCENT, color: '#0a0a0a' }}>
              Open Demo →
            </a>
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
              <span className="spec-card-new__value">Back-Office Admin · Clinician-Facing Operations Tracking</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Tech Stack</span>
              <span className="spec-card-new__value">HTML5 / CSS3 / JavaScript + Google Apps Script</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Data Architecture</span>
              <span className="spec-card-new__value">Google Workspace cloud, processed client-side in browser</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Tracked Registers</span>
              <span className="spec-card-new__value">APC · NSR · C&amp;P · CPD · Leave · Budget</span>
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
            A clinical department carries a continuous compliance load — practising certificates expire, specialist registrations must stay current, CPD hours accumulate against targets, and budget allocation is drawn down across a financial year. Tracked across separate spreadsheets, none of it is visible at a glance, and lapses surface late.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Credential Expiry Blind Spots</span>
              <span className="prd-section-item__desc">Annual Practising Certificate and specialist register status lived in separate manual records, so an approaching expiry was only caught if someone thought to check the right file at the right time.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Fragmented Compliance Picture</span>
              <span className="prd-section-item__desc">CPD attainment, APC validity, NSR standing, and C&amp;P status were each tracked independently — leaving no single view of whether the department as a whole was operationally compliant.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Disconnected Budget Oversight</span>
              <span className="prd-section-item__desc">Expenditure against allocation was reconciled separately from personnel and training activity, despite training spend being a direct driver of both.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(139,92,246,0.15)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Access &amp; Initiation</span>
              <span className="prd-section-item__desc">Navigation to the Google Apps Script web app URL from any browser, authenticated through organisational credentials. No downloads or installation — the dashboard loads with executive and department-wide operational summaries already populated.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(139,92,246,0.15)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Active Task &amp; Processing</span>
              <span className="prd-section-item__desc">Movement across tabs — APC, NSR, Training, Staff Leave, Budget — with live data queries and record updates through modals. Tabbed UI pairs data tables with bar graphs and progress meters, plus single-click actions like "Toggle Status" and "Add Entry".</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(139,92,246,0.15)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Delivery &amp; Handover</span>
              <span className="prd-section-item__desc">Instant cloud write-back to the database, with the high-level position reflected in the Executive Overview — letting administrative and clinical leads verify compliance immediately rather than assembling it from spreadsheets.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">CORE FUNCTIONAL MODULES</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Executive Overview</span>
              <span className="prd-section-item__desc">High-level visual KPIs — CPD Met (%), APC Valid (%), NSR Status, C&amp;P Valid (%), total staff count, and Budget Spent (%) — with sub-visuals for Budget Allocation vs Expenditure and a clinical governance status tracker.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Training Tracker</span>
              <span className="prd-section-item__desc">Visual and historical record of training attended by department staff: Nama Staff, Jawatan, Nama Kursus / CME, Tarikh, Tempat, and accumulated Kumulatif Hari.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">APC Status</span>
              <span className="prd-section-item__desc">Dedicated panel for Annual Practising Certificate tracking — Name, MMC No, APC Number, Expiry date, and status indicator, with quick actions such as "Toggle Status".</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">04</span>
              <span className="prd-section-item__title">NSR Verification</span>
              <span className="prd-section-item__desc">National Specialist Register list view mapping active certified specialists in the department, with explicit alerting when no matching specialist records are present.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">05</span>
              <span className="prd-section-item__title">Quick-Action Dialog</span>
              <span className="prd-section-item__desc">Triggered via "Add Entry" — a central routing hub for Add New Staff Detail, Record Training, Update APC, File Leave, Log Expenditure, and Tambah Waran (Peruntukan).</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>Consolidated dashboard merging licensing metrics (CPD, APC, NSR, C&amp;P), personnel counts, and budgeting into one executive view</li>
            <li>Multimodal data capture — a single "Add Entry" button funnels every write operation through one modal, avoiding multi-tiered navigation</li>
            <li>Micro-state feedback — tables carry explicit placeholder states to distinguish missing parameters from a genuinely empty register</li>
            <li>Clean horizontal primary navigation bridging six operation-critical workflows in one interface</li>
            <li>Bilingual interface blending technical medical designations with Malay administrative parameters (Tambah Waran / Peruntukan, Kumulatif Hari)</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">GOVERNANCE &amp; SCOPE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>Contains confidential personnel, licensing, and financial tracking metrics</li>
              <li>Access restricted to authorised administrative and clinical leadership</li>
              <li>Designed for internal clinical operations and governance</li>
              <li>Data handling complies with healthcare and public service operational guidelines</li>
            </ul>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">MANUAL vs DASHBOARD — COMPARISON</h2>
          <div className="detail-table-wrap">
            <table className="detail-table">
              <thead>
                <tr>
                  <th>Evaluation Vector</th>
                  <th>Separate Spreadsheets</th>
                  <th style={{ color: ACCENT }}>Department Dashboard</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Credential Expiry</td>
                  <td>Caught only on manual inspection</td>
                  <td>Surfaced as a live validity percentage and status flag</td>
                </tr>
                <tr>
                  <td>Compliance Picture</td>
                  <td>Four registers tracked independently</td>
                  <td>CPD, APC, NSR, and C&amp;P unified in one overview</td>
                </tr>
                <tr>
                  <td>Record Updates</td>
                  <td>Direct spreadsheet edits, no validation</td>
                  <td>Structured modals routed through one entry point</td>
                </tr>
                <tr>
                  <td>Budget Visibility</td>
                  <td>Reconciled separately from staffing activity</td>
                  <td>Allocation vs expenditure shown beside personnel metrics</td>
                </tr>
                <tr>
                  <td>Leadership Reporting</td>
                  <td>Manually assembled ahead of each review</td>
                  <td>Executive Overview current on load</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">STRATEGIC IMPACT</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">🪪</span>
              <span className="prd-section-item__title">Credential Lapses Caught Early</span>
              <span className="prd-section-item__desc">Making APC and NSR validity a standing dashboard figure rather than a file to be checked turns credential compliance from a periodic audit into a continuous signal.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">📊</span>
              <span className="prd-section-item__title">One Source for Governance Review</span>
              <span className="prd-section-item__desc">Department heads enter clinical governance reviews with compliance, training, and budget already reconciled in a single view — removing the pre-meeting assembly work entirely.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">💷</span>
              <span className="prd-section-item__title">Budget Tied to Activity</span>
              <span className="prd-section-item__desc">Presenting expenditure alongside training and personnel metrics makes the relationship between CPD spend and compliance attainment legible at the point of decision.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Full-Stack &amp; UX Team · Jabatan Psikiatri &amp; Kesihatan Mental, Hospital Port Dickson, Ministry of Health Malaysia</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
