import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#fda4af'
const DEMO_URL = 'https://u1.padletusercontent.com/uploads/padlet-uploads-usc1/6240385831/ce479d0e5c05d1d5b1d8dcddf75cbd2c/IM_Roster.html?token=wUjQadwXkr4heQZxhyiKq0vhq_dAvtDGIoyPrhKKJYhB_aw7P9ejE6l1HhOu8JsVmx6jJiFHceEnNVtGoqD2VFTf_DpO1Gcu5v1PTz2MMTQC04HTVoZSxnvS8jYwOrYeRO8IGN7rXwbYSyXrjrmx8rCFQv9rgPFh3DLm9Yfx_LBvdu_TOWZD1jpuwTa1AL5AupiLgW2xbpeHU24VLoi5NcxOr1L2uf30SOLmPbG9wn1P9_KD22h41LzOv7pjs0hI'

export default function ProjectIMDutyPlanner() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>Internal Medicine Duty Planner — Specialist &amp; Consultant On-Call Roster · HTPN HIO</title>
        <meta name="description" content="An automated roster generator for specialist and consultant on-call shifts — it reads off-day requests from Google Forms, builds a conflict-free monthly schedule with anti-fatigue rules, tracks workload equity, and exports to PDF, Word, and CSV." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/im-duty-planner" />
        <meta property="og:title" content="Internal Medicine Duty Planner — On-Call Roster Engine · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/im-duty-planner" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">Internal Medicine Duty Planner — Specialist &amp; Consultant On-Call Roster Engine</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#48 · Management Productivity</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">On-Call Scheduling</span>
          <span className="detail-tag">Workload Equity</span>
          <span className="detail-tag">Anti-Fatigue Rules</span>
        </div>

        <p className="detail-subtitle">
          An automated roster generator for chief specialists, heads of department, and roster coordinators — reading requested off-days straight from Google Forms and building a conflict-free monthly on-call schedule that enforces fatigue safeguards and shows how evenly the load is spread.
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
              <span className="spec-card-new__value">Roster Administrators · Departmental Leadership</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Tech Stack</span>
              <span className="spec-card-new__value">Semantic HTML5 / responsive CSS3 / JavaScript (ES6+)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Data Handling</span>
              <span className="spec-card-new__value">Client-side session state with CSV and Google Form response parsing</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Exports</span>
              <span className="spec-card-new__value">Print / PDF · Word · CSV</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#4ade80' }}>Deployed · Department of Internal Medicine</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            A physician call roster has to satisfy several competing things at once: every slot staffed, no one on back-to-back calls, leave requests respected, and the burden of weekends and public holidays shared fairly. Building that by hand every month is slow and tends to generate disagreements.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Off-Day Requests Scattered Across Channels</span>
              <span className="prd-section-item__desc">Requested dates arrived through forms and messaging groups, and had to be collated manually before any scheduling could start.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Fatigue Rules Checked by Eye</span>
              <span className="prd-section-item__desc">Preventing back-to-back calls across a whole month relies on a coordinator spotting every consecutive assignment.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Fairness Hard to Demonstrate</span>
              <span className="prd-section-item__desc">Without a tally of weekday against weekend and holiday calls per doctor, questions about equity could not be answered with data.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(253,164,175,0.15)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Access &amp; Initiation</span>
              <span className="prd-section-item__desc">Opened from the hospital intranet or a web link in any desktop browser. There is no login, and it starts on the active planning month with the doctor directory preloaded and the fatigue rules switched on.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(253,164,175,0.15)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Active Task &amp; Processing</span>
              <span className="prd-section-item__desc">Coordinators manage the physician list, load off-call dates from a Google Form CSV or pasted text, and press Auto-Generate. Slots fill by rule across the specialist, consultant, and rheumatology tiers, with warning badges on weekends and public holidays, and the workload table recalculates after every manual dropdown change.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(253,164,175,0.15)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Delivery &amp; Handover</span>
              <span className="prd-section-item__desc">Print / PDF, Word Doc, and CSV exports produce the roster for notice boards, administrative review, and payroll calculation.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">CORE FUNCTIONAL MODULES</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Roster Parameter &amp; Deliverables Bar</span>
              <span className="prd-section-item__desc">Roster month and year, the call slot protocol (four calls on a weekday with Specialist 3 not used, five on a weekend or public holiday), the fatigue safeguard status, the three export buttons, a public holiday counter with a holiday list editor, and a Clear Assignments action.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Google Form Off-Day Ingestion</span>
              <span className="prd-section-item__desc">A dropzone for exported form CSVs and a text parser that accepts lines such as a name followed by dates or day numbers. A ledger shows each active off-call constraint with its own delete icon, Clear All, and an Apply To Scheduler action.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Doctor Directory &amp; Roles</span>
              <span className="prd-section-item__desc">Add a physician with a role, and manage a roster with colour-coded Specialist, Consultant, and Rheumatology badges. Specialists can take Specialist 1, 2, or 3 calls, consultants cover the Consultant call, and rheumatologists cover the Rheumatology slot.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">04</span>
              <span className="prd-section-item__title">Interactive Duty Schedule Grid</span>
              <span className="prd-section-item__desc">A row for every day with date, day, the five call columns, and a star to toggle public holiday status. Each slot is a dropdown that can be overridden by hand.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">05</span>
              <span className="prd-section-item__title">Workload Equity Table</span>
              <span className="prd-section-item__desc">Per physician: role, weekday calls, weekend and public holiday calls, total calls, blocked dates requested, and conflict violations with a pass mark — updating automatically with every change.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>An anti-fatigue constraint engine stops the same doctor being assigned consecutive calls</li>
            <li>Adaptive slot expansion — Specialist 3 is disabled on ordinary weekdays and opened for weekends and public holidays</li>
            <li>Multi-format ingestion accepts structured CSV files and unstructured text pasted from forms or messaging groups</li>
            <li>Equity figures are calculated in the browser with no server round trip, so weekend burden is visible while editing</li>
            <li>Three export formats cover notice boards, editable review documents, and payroll workings</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">GOVERNANCE &amp; SCOPE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>Enforces internal clinical governance and fatigue safeguards, including back-to-back call prevention</li>
              <li>Generated assignments cover Specialist 1, 2, and 3, Consultant, and Rheumatology calls for acute medical admissions</li>
              <li>Manual overrides and published schedules remain subject to final endorsement by the head of department</li>
            </ul>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">MANUAL vs AUTOMATED — COMPARISON</h2>
          <div className="detail-table-wrap">
            <table className="detail-table">
              <thead>
                <tr>
                  <th>Evaluation Vector</th>
                  <th>Hand-Built Roster</th>
                  <th style={{ color: ACCENT }}>Duty Planner</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Collecting Off-Days</td>
                  <td>Collated from forms and chats by hand</td>
                  <td>CSV or pasted text parsed in one step</td>
                </tr>
                <tr>
                  <td>Slot Assignment</td>
                  <td>Filled one cell at a time</td>
                  <td>Auto-Generate across all tiers</td>
                </tr>
                <tr>
                  <td>Back-to-Back Calls</td>
                  <td>Spotted by the coordinator</td>
                  <td>Prevented by the rule engine</td>
                </tr>
                <tr>
                  <td>Equity Check</td>
                  <td>Counted manually, if at all</td>
                  <td>Live weekday and weekend tally per doctor</td>
                </tr>
                <tr>
                  <td>Distribution</td>
                  <td>Retyped into other documents</td>
                  <td>PDF, Word, and CSV exports</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">STRATEGIC IMPACT</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">⚖️</span>
              <span className="prd-section-item__title">Fairness You Can Show</span>
              <span className="prd-section-item__desc">The workload table gives the department an objective record of who has carried how many weekday and weekend calls.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">😴</span>
              <span className="prd-section-item__title">Fatigue Protections Built In</span>
              <span className="prd-section-item__desc">Encoding the consecutive-call rule in the generator makes it a default rather than something a tired coordinator must remember.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">⏱️</span>
              <span className="prd-section-item__title">Hours Saved Each Month</span>
              <span className="prd-section-item__desc">Generating a first draft in moments leaves the coordinator to review and adjust rather than build from nothing.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Internal Medicine Clinical Informatics &amp; Roster Committee · Department of Internal Medicine, Ministry of Health Malaysia</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
