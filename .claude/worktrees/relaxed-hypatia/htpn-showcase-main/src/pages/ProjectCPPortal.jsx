import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#ec4899'
const SCREENSHOTS = [
  { src: '/cp-dashboard.webp', caption: 'Hospital C&P Monitoring Dashboard — workforce KPIs, department distribution, and designation mix' },
  { src: '/cp-eform.webp', caption: 'Application for Clinical Privileges e-Form — Appendix AHP CP1 & CP1(a), page 1 of 5' },
]

export default function ProjectCPPortal() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>Credentialing &amp; Privileging (C&amp;P) Monitoring Portal &amp; e-Form · HTPN HIO</title>
        <meta name="description" content="A centralised credentialing surveillance and application suite for Hospital Port Dickson — real-time expiry dashboards, automated 6-month notifications with HOD escalation, and a 5-page standard privilege e-Form." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/cp-portal" />
        <meta property="og:title" content="C&P Monitoring Portal & e-Form · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/cp-portal" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">Credentialing &amp; Privileging (C&amp;P) Monitoring Portal &amp; e-Form</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#44 · Management Productivity</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">Clinical Governance</span>
          <span className="detail-tag">Credentialing &amp; Privileging</span>
          <span className="detail-tag">Expiry Surveillance</span>
        </div>

        <p className="detail-subtitle">
          A centralised credentialing surveillance and application suite for clinical privileging committee members, heads of department, and healthcare practitioners — removing the governance blind spot of expired clinical scopes and paper-based renewal delays across multidisciplinary hospital staff.
        </p>

        <div className="detail-block">
          <div className="prd-block-inner prd-block-inner--accent">
            <p className="detail-subtitle" style={{ margin: 0 }}>
              <strong style={{ color: ACCENT }}>Live and operational.</strong> This is not a prototype — the screenshots below are taken from the portal in active use by the Clinical Privileging Committee at Hospital Port Dickson.
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
              <span className="spec-card-new__value">Hybrid — Practitioner e-Form &amp; Committee Review</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Tech Stack</span>
              <span className="spec-card-new__value">HTML5 / CSS3 / JavaScript + Google Apps Script</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Data Architecture</span>
              <span className="spec-card-new__value">Relational structure synced to a Google Sheet DB</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Standard Form</span>
              <span className="spec-card-new__value">Appendix AHP CP1 &amp; CP1(a) · 5 pages</span>
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
            Clinical privileges have a validity period, and practising beyond it is a medicolegal violation. Across a few hundred clinicians in many professions, knowing who is current, who is about to lapse, and who already has is hard to see from paper files.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Expired Scopes Going Unnoticed</span>
              <span className="prd-section-item__desc">With records spread across paper files and spreadsheets, lapses surfaced only when someone happened to check — leaving a risk of uncredentialed clinical service.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Renewal Delays</span>
              <span className="prd-section-item__desc">Paper-based renewal meant applications reached the committee late, so privileges expired while the paperwork was still moving.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Weak Supervisory Visibility</span>
              <span className="prd-section-item__desc">Heads of department were not systematically told when their staff were approaching expiry, so escalation depended on individual reminders.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(236,72,153,0.15)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Access &amp; Initiation</span>
              <span className="prd-section-item__desc">Opened through the hospital intranet portal, with role switching between User (View Only) and Admin, and launch points for the application e-Form and the Notification Center. Nothing to install — it connects live to the Google Sheet DB with automated caching.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(236,72,153,0.15)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Active Task &amp; Processing</span>
              <span className="prd-section-item__desc">Committee leads and heads of department review practitioner privilege lists and expiry countdowns, trigger reminders, and search by name, staff ID, or department. Applicants complete the standardised five-page digital privilege form. High-contrast badges mark each record Valid, Expiring Soon, or EXPIRED.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(236,72,153,0.15)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Delivery &amp; Handover</span>
              <span className="prd-section-item__desc">Multi-recipient escalation sends e-Form links, emails with the head of department copied, and WhatsApp alerts. Records export to CSV, and the five-page form compiles for official print (Print Preview, 5 Pages) — giving timely renewals and accreditation-ready audit records.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">CORE FUNCTIONAL MODULES</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">C&amp;P Monitoring Dashboard</span>
              <span className="prd-section-item__desc">Executive surveillance view with global KPI cards (total personnel, VALID beyond six months, and the urgent count of six months or fewer / expired), unit breakdown cards for Doctors, Nursing Unit, AMO Unit, Allied Health, and Pharmacy, plus a stacked bar chart of C&amp;P distribution by clinical department and a donut chart by staff designation and unit.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Privilege Master Registry</span>
              <span className="prd-section-item__desc">Granular register of credential holders — holder details (name, verification badge, IC, staff ID, official email), department and position, privilege scope, date granted, duration, expiry date, and C&amp;P status (Valid, Expiring Soon with days remaining, EXPIRED) — with row actions to view the e-Form, dispatch an email, and log a note.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Clinical Privileges e-Form</span>
              <span className="prd-section-item__desc">Digital version of Appendix AHP CP1 &amp; CP1(a), capturing department and ward, personal details, and a single-choice staff category across Specialist, Visiting Specialist, Medical Officer, Nursing Unit, AMO Unit, Pharmacist, Occupational Therapist, Physiotherapist, Diagnostic Radiographer, and MLT — with a Print Preview (5 Pages) action for sign-off.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">04</span>
              <span className="prd-section-item__title">Expiry Notification &amp; Escalation Console</span>
              <span className="prd-section-item__desc">A six-month threshold surveillance modal that enforces a mandatory head-of-department carbon copy on every alert. It offers search by name, staff ID, or email, a department filter, an overdue ledger showing days left or overdue, e-Form, Email &amp; CC, and WhatsApp actions per row, and a batch Auto-Dispatch All Reminders &amp; CC HODs button.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>Automated supervisory escalation — every practitioner notification is bound to the respective department head's official email</li>
            <li>Multi-channel dispatch — e-Form link, formatted email, and WhatsApp available as one-click actions on every row</li>
            <li>Dynamic six-month warning window sorts records into safe, expiring, and overdue, with a numeric alert badge for non-compliant staff on load</li>
            <li>Regulatory document emulation — the physical Ministry credentialing form becomes a responsive wizard with an integrated five-page print engine</li>
            <li>Role-gated access — read-only inspection is separated from administrative changes in the header</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">GOVERNANCE &amp; SCOPE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>Practising beyond an approved privilege validity period is a medicolegal violation</li>
              <li>Privilege scopes and renewals require verification by registered specialists</li>
              <li>Approval requires official endorsement by the Hospital Director and the Clinical Privileging Committee, following Ministry of Health credentialing guidelines</li>
            </ul>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">PAPER vs DIGITAL — COMPARISON</h2>
          <div className="detail-table-wrap">
            <table className="detail-table">
              <thead>
                <tr>
                  <th>Evaluation Vector</th>
                  <th>Paper &amp; Spreadsheet Files</th>
                  <th style={{ color: ACCENT }}>C&amp;P Monitoring Portal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Expiry Detection</td>
                  <td>Found when someone checks the file</td>
                  <td>Six-month window with live status badges</td>
                </tr>
                <tr>
                  <td>Renewal Application</td>
                  <td>Paper form routed by hand</td>
                  <td>Five-page digital e-Form with print preview</td>
                </tr>
                <tr>
                  <td>HOD Visibility</td>
                  <td>Depends on individual reminders</td>
                  <td>HOD copied automatically on every alert</td>
                </tr>
                <tr>
                  <td>Reminder Channels</td>
                  <td>Phone call or memo</td>
                  <td>E-Form link, email, and WhatsApp in one click</td>
                </tr>
                <tr>
                  <td>Audit Readiness</td>
                  <td>Assembled before accreditation</td>
                  <td>CSV export and live registry at any time</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">STRATEGIC IMPACT</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">🛡️</span>
              <span className="prd-section-item__title">Uncredentialed Practice Prevented</span>
              <span className="prd-section-item__desc">Surfacing expiries months ahead gives practitioners time to renew before a scope lapses, removing the medicolegal exposure of unrecognised expiry.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🏥</span>
              <span className="prd-section-item__title">Accreditation-Ready by Default</span>
              <span className="prd-section-item__desc">A live registry and exportable records replace last-minute file assembly when surveyors or the committee ask for the credentialing position.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🤝</span>
              <span className="prd-section-item__title">Accountability Through Escalation</span>
              <span className="prd-section-item__desc">Copying heads of department on every alert makes renewal a shared supervisory responsibility rather than an individual one.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Hospital Port Dickson Clinical Privileging Committee · Hospital Port Dickson, Ministry of Health Malaysia</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
