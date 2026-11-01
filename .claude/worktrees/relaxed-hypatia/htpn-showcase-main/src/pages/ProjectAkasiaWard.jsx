import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#22c55e'
const DEMO_URL = 'https://sites.google.com/view/akasia-oh-akasia/full-page-embed'

export default function ProjectAkasiaWard() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>Akasia Ward (Medical) — MO Task &amp; Ward Round Manager · HTPN HIO</title>
        <meta name="description" content="A real-time clinical joblist and patient tracker for Medical Officers and house officers on inpatient medical wards — bed-by-bed task boards, STAT countdown timers, and 5 PM handover analytics." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/akasia-ward" />
        <meta property="og:title" content="Akasia Ward — MO Task & Ward Round Manager · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/akasia-ward" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">Akasia Ward (Medical) — MO Task &amp; Ward Round Manager</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#14 · Doctor's Journey</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">Inpatient Ward Management</span>
          <span className="detail-tag">Task Triage</span>
          <span className="detail-tag">Shift Handover</span>
        </div>

        <p className="detail-subtitle">
          A real-time clinical joblist and patient tracker for Medical Officers and house officers conducting daily ward rounds on inpatient medical wards — closing the communication gap between morning rounds and the 5:00 PM shift handover.
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
              <span className="spec-card-new__value" style={{ color: ACCENT }}>Doctor's Journey</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Users</span>
              <span className="spec-card-new__value">Medical Officers · House Officers · Ward Supervisors</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Tech Stack</span>
              <span className="spec-card-new__value">HTML5 / CSS3 / ES6+ JavaScript + Custom Web Embed</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Data Architecture</span>
              <span className="spec-card-new__value">Client-side state with mobile sync pairing (Sync Phone)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Devices</span>
              <span className="spec-card-new__value">Tablets · laptops · ward workstation carts</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#4ade80' }}>Deployed · Akasia Ward, Hospital Port Dickson</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            Ward rounds generate a stream of small, time-sensitive jobs — trace this result, cross-match that blood, repeat the imaging — spread across every bed. Carried in a doctor's head or on scraps of paper, those jobs slip between the morning round and the evening handover.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Task Slippage Between Rounds and Handover</span>
              <span className="prd-section-item__desc">Jobs raised on the morning round had no shared list, so items were forgotten or duplicated by the time the 5:00 PM handover arrived.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Urgent Orders Without a Clock</span>
              <span className="prd-section-item__desc">STAT investigations carry a one-hour expectation, but nothing made the remaining time visible, so urgent work competed on equal footing with routine tasks.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Ambiguous Ownership</span>
              <span className="prd-section-item__desc">When a task was done, there was no record of who did it or when — leading to repeat investigations and unclear accountability for the night team.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(34,197,94,0.15)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Access &amp; Initiation</span>
              <span className="prd-section-item__desc">Opened in the browser on the ward intranet or a mobile workstation. The clinician selects or registers the active Medical Officer profile (Active MO / + Add MO), then pre-populates the ward's beds in seconds by dragging in a CSV roster (Batch Upload) — no installation.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(34,197,94,0.15)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Active Task &amp; Processing</span>
              <span className="prd-section-item__desc">At the bedside, tasks are created per patient card from quick presets or free text (+ Add Joblist Task), given a priority tier, and ticked off as rounds progress. The card-based board shows live STAT countdown timers, with completed items struck through and stamped with the completing doctor's name and time.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(34,197,94,0.15)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Delivery &amp; Handover</span>
              <span className="prd-section-item__desc">The 5 PM Analytics modal summarises the shift, and Download / Export PDF prints a single-click handover report — so the night call team starts with no lingering STAT orders, verified task attribution, and a quantified ward completion rate.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">CORE FUNCTIONAL MODULES</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Shift Header &amp; 5:00 PM Countdown</span>
              <span className="prd-section-item__desc">Persistent banner with ward identity, a live cutoff timer (5:00 PM Cutoff Remaining / Past 5 PM Cutoff), a theme toggle, a night-mode switch, and a Sync Phone pairing trigger.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Ward KPI Telemetry</span>
              <span className="prd-section-item__desc">Live tiles for Total Patients, STAT Tasks, Pending Tasks, Completed Tasks, and overall Completion Rate.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Ward Filter &amp; Bed Sorter</span>
              <span className="prd-section-item__desc">Universal search by name, RN, or bed, with ascending and descending bed sorting.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">04</span>
              <span className="prd-section-item__title">Bed-Centric Patient Cards</span>
              <span className="prd-section-item__desc">One card per bed showing bed number, name, RN, age, and IC, with a pending-task checklist (task, time added, priority badge, remaining time), a completed-task ledger, an empty state when cleared, and a discharge trigger.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">05</span>
              <span className="prd-section-item__title">Task Creation Wizard</span>
              <span className="prd-section-item__desc">A modal scoped to the bed and patient, with a STAT (urgent, one hour) or Non-Urgent (5 PM) priority toggle, a dropdown of standard tasks such as blood tracings, cross-matches, and imaging, and a free-text field for ad-hoc notes.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">06</span>
              <span className="prd-section-item__title">Admission &amp; Bulk Ingestion</span>
              <span className="prd-section-item__desc">Add New Patient captures bed number, name, IC / passport, MRN / RN, and age; Daily Patient List Upload accepts a drag-and-drop CSV roster (Bed, Name, IC, MRN, Age) with a downloadable sample.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">07</span>
              <span className="prd-section-item__title">Shift Handover Analytics</span>
              <span className="prd-section-item__desc">End-of-day modal with total, completed, and pending tasks, the STAT clearance ratio, an overall progress bar, and a breakdown of tasks completed per Medical Officer.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>Active STAT countdown timers — red badge chips with a live meter for the one-hour investigation window</li>
            <li>Audit-stamped accountability — completed tasks carry the doctor's identity and exact time, preventing repeat work and unclear ownership</li>
            <li>Cutoff-driven shift design centred on the 5:00 PM boundary, with a countdown and an analytics modal built for evening handover</li>
            <li>Bedside ergonomics — task presets and CSV roster import minimise typing for fast touchscreen use during rounds</li>
            <li>Multi-device sync — Sync Phone mirrors live joblists between the nursing station monitor and phones carried along the corridor</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">GOVERNANCE &amp; SCOPE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>Coordinates bedside task management, diagnostic tracing, and patient handover</li>
              <li>Supplements — does not replace — the physical case notes and electronic medical record charting</li>
              <li>All urgent (STAT) clinical orders must follow ward protocol and direct specialist supervision</li>
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
                  <th>Paper Joblists</th>
                  <th style={{ color: ACCENT }}>MO Task &amp; Ward Round Manager</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Task Capture</td>
                  <td>Written on scraps or held in memory</td>
                  <td>Per-bed cards with quick-select presets</td>
                </tr>
                <tr>
                  <td>Urgent Orders</td>
                  <td>No visible deadline</td>
                  <td>Live one-hour STAT countdown on the card</td>
                </tr>
                <tr>
                  <td>Completion Record</td>
                  <td>Crossed out, owner unknown</td>
                  <td>Struck through with doctor name and time</td>
                </tr>
                <tr>
                  <td>Roster Setup</td>
                  <td>Rewritten by hand each day</td>
                  <td>CSV upload populates the whole ward</td>
                </tr>
                <tr>
                  <td>Handover</td>
                  <td>Verbal summary, items missed</td>
                  <td>Analytics and one-click PDF report</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">STRATEGIC IMPACT</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">⏱️</span>
              <span className="prd-section-item__title">No Forgotten STAT Orders at Handover</span>
              <span className="prd-section-item__desc">Because every urgent item carries a visible clock and appears in the handover report, nothing urgent crosses into the night shift unseen.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🧾</span>
              <span className="prd-section-item__title">Clear Attribution</span>
              <span className="prd-section-item__desc">Time-stamped, named completions remove the ambiguity that causes duplicate investigations and unclear follow-up.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">📈</span>
              <span className="prd-section-item__title">Measurable Ward Throughput</span>
              <span className="prd-section-item__desc">Completion percentages and per-MO breakdowns turn the daily round from an informal routine into something the team can review and improve.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Medical Department &amp; Clinical Informatics Team · Akasia Ward (Medical), Hospital Port Dickson</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
