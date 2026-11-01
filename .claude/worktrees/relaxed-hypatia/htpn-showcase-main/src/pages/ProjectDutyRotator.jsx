import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#f0abfc'

export default function ProjectDutyRotator() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>Duty Rotator — Medical Officer On-Call Roster &amp; Conflict Scheduler · HTPN HIO</title>
        <meta name="description" content="An on-call duty planning and leave conflict logging application for medical officers and roster coordinators — declare unavailability before the roster is built, with an interactive holiday-annotated monthly calendar." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/duty-rotator" />
        <meta property="og:title" content="Duty Rotator — On-Call Roster Scheduler · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/duty-rotator" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">Duty Rotator — Medical Officer On-Call Roster &amp; Conflict Scheduler</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#43 · Management Productivity</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">Clinical Roster Scheduling</span>
          <span className="detail-tag">Leave Conflicts</span>
          <span className="detail-tag">Holiday Calendar</span>
        </div>

        <p className="detail-subtitle">
          An on-call duty planning and leave conflict application for medical officers and department roster coordinators — letting clinicians declare unavailability, leave, and training before assignments are finalised, so the monthly roster is built around real constraints instead of corrected afterwards.
        </p>

        <div className="detail-block">
          <div className="spec-cards">
            <div className="spec-card-new">
              <span className="spec-card-new__label">Pillar</span>
              <span className="spec-card-new__value" style={{ color: ACCENT }}>Management Productivity</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Workflow Stream</span>
              <span className="spec-card-new__value">Medical Officers · Roster Coordinators</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Tech Stack</span>
              <span className="spec-card-new__value">HTML5 / CSS3 / Vanilla JavaScript (ES6+)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Data Handling</span>
              <span className="spec-card-new__value">Client-side session state with cloud-sync capability</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Calendar</span>
              <span className="spec-card-new__value">Malaysian public and state holidays built in</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#4ade80' }}>Deployed · Hospital Cyberjaya</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            An on-call roster is only as good as the information behind it. If a doctor's leave or course dates reach the coordinator after the rota is drawn up, someone is double-booked and the whole month is reworked — often under time pressure, and often around public holidays when cover is thinnest.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Late Declarations</span>
              <span className="prd-section-item__desc">Leave and training commitments reached coordinators by message or word of mouth, after the draft roster was already circulating.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Clashes Found After Assignment</span>
              <span className="prd-section-item__desc">With constraints scattered across chats and notes, overlaps with on-call duty only surfaced once the roster had been published.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Holiday Weekends Overlooked</span>
              <span className="prd-section-item__desc">Public and state holidays that extend a weekend are easy to miss when planning by hand, leaving long stretches under-covered.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(240,171,252,0.15)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Access &amp; Initiation</span>
              <span className="prd-section-item__desc">Opened from the clinical intranet or a shared department link, with a role chosen from the top-right profile selector (Medical Officer). It loads straight into the calendar for the month being planned.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(240,171,252,0.15)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Active Task &amp; Processing</span>
              <span className="prd-section-item__desc">Doctors pick their name from the officer directory, choose the conflict type (such as Annual Leave), set start and end dates, add an optional reason, and press Save Conflict. A split-screen layout keeps the form beside the full monthly calendar.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(240,171,252,0.15)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Delivery &amp; Handover</span>
              <span className="prd-section-item__desc">The Logged Conflicts feed updates immediately and the calendar blocks the affected dates — giving planners clash-free visibility before they assign on-call duty.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">CORE FUNCTIONAL MODULES</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Header &amp; Role Selector</span>
              <span className="prd-section-item__desc">Application branding with a profile dropdown for switching between a doctor's own declarations and the roster coordinator view.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Conflict Logging Form</span>
              <span className="prd-section-item__desc">Medical Officer picker, Leave / Conflict Type, Start and End Date, an optional Reason / Course Title for context such as a CME course, conference, or personal emergency, and a high-contrast Save Conflict button.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Logged Conflicts Ledger</span>
              <span className="prd-section-item__desc">A sidebar with a running count, an explicit empty state when nothing has been logged, and an itemised list once entries exist.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">04</span>
              <span className="prd-section-item__title">Interactive Monthly Calendar</span>
              <span className="prd-section-item__desc">A Sunday-to-Saturday grid with month navigation, striped and shaded weekend columns, and red holiday badges placed in the matching date cells — for example the Sultan of Selangor's Birthday and Christmas Day.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>Input and visualisation sit side by side, so there is no modal jumping and feedback is instant</li>
            <li>Jurisdictional holiday integration pre-fills statutory and state public holidays, preventing assignment errors across long weekends</li>
            <li>Diagonal weekend striping draws the eye to the on-call days where roster friction is highest</li>
            <li>Explicit empty-state messaging separates "nothing logged" from "nothing loaded"</li>
            <li>An unobtrusive role switcher moves between individual doctor declarations and coordinator mode</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">GOVERNANCE &amp; SCOPE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>Conflicts logged here are scheduling preferences and leave requests, not automatic roster exemptions</li>
              <li>Final call rotations and leave approvals remain subject to minimum ward coverage rules, head-of-department endorsement, and public service circulars</li>
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
                  <th>Messages &amp; Notes</th>
                  <th style={{ color: ACCENT }}>Duty Rotator</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Declaring Leave</td>
                  <td>Told to the coordinator ad hoc</td>
                  <td>Logged by the doctor in a structured form</td>
                </tr>
                <tr>
                  <td>Seeing Clashes</td>
                  <td>After the roster is drafted</td>
                  <td>Blocked on the calendar before assignment</td>
                </tr>
                <tr>
                  <td>Public Holidays</td>
                  <td>Checked by hand</td>
                  <td>Pre-populated on the calendar</td>
                </tr>
                <tr>
                  <td>Overview of Constraints</td>
                  <td>Scattered across chats</td>
                  <td>One ledger with a running count</td>
                </tr>
                <tr>
                  <td>Roles</td>
                  <td>Everyone edits the same file</td>
                  <td>Separate doctor and coordinator views</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">STRATEGIC IMPACT</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">🗓️</span>
              <span className="prd-section-item__title">Rosters Built Around Real Availability</span>
              <span className="prd-section-item__desc">Collecting constraints first means the first draft already respects leave and training, instead of being repaired after publication.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">⚖️</span>
              <span className="prd-section-item__title">Fewer Disputes Over Cover</span>
              <span className="prd-section-item__desc">A visible, shared record of who declared what and when makes swap and cover conversations factual.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🚀</span>
              <span className="prd-section-item__title">Faster Roster Publication</span>
              <span className="prd-section-item__desc">With conflicts known up front, coordinators spend less time reworking the month and can publish earlier.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Medical Department &amp; Roster Committee · Hospital Cyberjaya, Ministry of Health Malaysia</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
