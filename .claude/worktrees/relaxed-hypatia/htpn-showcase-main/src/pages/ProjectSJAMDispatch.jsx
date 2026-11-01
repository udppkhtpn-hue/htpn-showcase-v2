import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#fbbf24'
const SCREENSHOTS = [
  { src: '/sjam-dashboard.webp', caption: 'Operational Dashboard — dispatch KPIs, priority mix, peak hours, and top conditions' },
  { src: '/sjam-booking-form.webp', caption: 'New Booking Entry — touch-optimised intake with GPS lock and vital sign steppers' },
]

export default function ProjectSJAMDispatch() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>SJAM KPW Dispatch &amp; Analytics — Pre-Hospital Care Database · HTPN HIO</title>
        <meta name="description" content="An ambulance dispatch operations, pre-hospital triage registry, and patient handover system for St. John Ambulance of Malaysia in the Wilayah Persekutuan — live fleet metrics, a touch-optimised booking form with GPS lock, and structured SBAR handover." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/sjam-dispatch" />
        <meta property="og:title" content="SJAM KPW Dispatch & Analytics · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/sjam-dispatch" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">SJAM KPW Dispatch &amp; Analytics — Wilayah Persekutuan Pre-Hospital Care Database</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#47 · Management Productivity</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">Ambulance Dispatch</span>
          <span className="detail-tag">Fleet Analytics</span>
          <span className="detail-tag">SBAR Handover</span>
        </div>

        <p className="detail-subtitle">
          An ambulance dispatch, pre-hospital triage registry, and patient handover system for emergency medical dispatchers, crew leads, and duty officers — replacing manual radio call logging, paper vitals, and fragmented handover reporting with live fleet metrics and a structured SBAR summary.
        </p>

        <div className="detail-block">
          <div className="prd-block-inner prd-block-inner--accent">
            <p className="detail-subtitle" style={{ margin: 0 }}>
              <strong style={{ color: ACCENT }}>Live and operational.</strong> This is not a prototype — the screenshots below are taken from the system in use by the St. John Ambulance of Malaysia Wilayah Persekutuan pre-hospital care and dispatch division.
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
              <span className="spec-card-new__value">Dispatcher Analytics · Paramedic and Crew Intake &amp; Handover</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Tech Stack</span>
              <span className="spec-card-new__value">Semantic HTML5 / responsive CSS3 / Vanilla JavaScript (ES6+)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Data Architecture</span>
              <span className="spec-card-new__value">Client-side session state synchronised with a cloud pre-hospital database</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Devices</span>
              <span className="spec-card-new__value">Dispatch desk displays · vehicle-mounted tablets</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#4ade80' }}>Deployed · SJAM Wilayah Persekutuan</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            An ambulance service runs on information that changes by the minute — where the patient is, how sick they are, which crew has the job, and where they are going. When that lives on a radio log and paper forms, dispatchers cannot see the whole operation, and the handover at the emergency department depends on what the crew remembers to say.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Manual Radio Call Logging</span>
              <span className="prd-section-item__desc">Calls were written down as they came in, so the day's picture of cases, crews, and destinations only existed after someone collated it.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Paper Vitals Documentation</span>
              <span className="prd-section-item__desc">Vital signs were recorded by hand in a moving vehicle, where legibility and completeness suffer.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Unstructured Handover</span>
              <span className="prd-section-item__desc">Verbal handovers at the receiving hospital varied by crew and by shift, and details were easily lost or misheard.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(251,191,36,0.15)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Access &amp; Initiation</span>
              <span className="prd-section-item__desc">Opened from an ambulance terminal browser, a dispatch desk link, or a tablet on a vehicle mount. There is nothing to install, and it starts with the live clock, database connection indicator, and a Quick Fill Demo shortcut for orientation.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(251,191,36,0.15)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Active Task &amp; Processing</span>
              <span className="prd-section-item__desc">Dispatchers log new bookings in the touch-friendly New Booking Entry form, follow every job in the Transfer Queue &amp; Database, and watch the Operational Dashboard. A tabbed command bar with a live case-count badge, stepper controls for vitals, GPS locking, and one-tap trip status changes (Pending, In-Transit, Completed) keep entry fast.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(251,191,36,0.15)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Delivery &amp; Handover</span>
              <span className="prd-section-item__desc">The record compiles into the Patient Summary (SBAR) tab, with Export CSV for the raw database — so the receiving emergency team gets a standardised Situation, Background, Assessment, and Recommendation instead of a verbal summary.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">CORE FUNCTIONAL MODULES</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Operational Header &amp; Navigation</span>
              <span className="prd-section-item__desc">A persistent top rail with branding, the system clock in Malaysian time, and the four views: Operational Dashboard, New Booking Entry, Transfer Queue &amp; Database, and Patient Summary (SBAR).</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Dispatch Intelligence &amp; Transfer Analytics</span>
              <span className="prd-section-item__desc">KPI cards for total cases, in-transit, completed, critical or urgent, O2 / life support, and average age, plus a transfer priority donut chart, a 24-hour peak dispatch hours chart, ranked top medical conditions, destination hospital traffic, and crew lead case load and completion — with time and crew filters, Export CSV, and Reset DB.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Patient Transfer Registration Form</span>
              <span className="prd-section-item__desc">A touch- and dictation-optimised form in three parts: patient details and priority, routing with a GPS Lock on both pickup origin and destination facility, and vital signs and clinical impression with stepper controls for blood pressure, pulse, SpO2, respiratory rate, GCS, and temperature, followed by chief complaint and allergy history fields.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">04</span>
              <span className="prd-section-item__title">Transfer Queue &amp; Database Ledger</span>
              <span className="prd-section-item__desc">A table of every case showing reference ID, patient profile, priority badge, clinical indication, assigned crew lead, pickup and receiving facility, live trip status, and row actions to view, edit, or delete.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">05</span>
              <span className="prd-section-item__title">Standardised Clinical Handover</span>
              <span className="prd-section-item__desc">A Situation-Background-Assessment-Recommendation module that formats vitals, chief complaint, and transport interventions into a consistent handover for the receiving ward.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>Large increment and decrement targets on vital sign inputs reduce input friction inside a moving ambulance cabin</li>
            <li>One-touch GPS locking stamps pickup and destination coordinates into the record without searching a map</li>
            <li>Triage priority is colour-coded — red for Emergency, amber for Urgent, grey for Non-Emergency, soft blue for Event Standby</li>
            <li>A dedicated SBAR tab standardises communication between paramedics and receiving teams</li>
            <li>Destination facilities for the Klang Valley hospital network are preconfigured for routing</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">GOVERNANCE &amp; SCOPE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>Manages real-time emergency and non-emergency pre-hospital patient data</li>
              <li>Triage priority and vital signs must be recorded by certified emergency medical personnel</li>
              <li>Inter-hospital transport must follow national pre-hospital care governance and medical direction frameworks</li>
              <li>Records include patient names, identity numbers, and clinical details, so access and exports should be restricted to authorised staff</li>
            </ul>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">RADIO &amp; PAPER vs DISPATCH SYSTEM — COMPARISON</h2>
          <div className="detail-table-wrap">
            <table className="detail-table">
              <thead>
                <tr>
                  <th>Evaluation Vector</th>
                  <th>Radio Log &amp; Paper Forms</th>
                  <th style={{ color: ACCENT }}>SJAM KPW Dispatch</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Operational Picture</td>
                  <td>Compiled after the shift</td>
                  <td>Live dashboard of cases, crews, and priorities</td>
                </tr>
                <tr>
                  <td>Vital Signs</td>
                  <td>Handwritten en route</td>
                  <td>Touch steppers on a vehicle tablet</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>Described verbally</td>
                  <td>GPS Lock on origin and destination</td>
                </tr>
                <tr>
                  <td>Handover</td>
                  <td>Verbal, varies by crew</td>
                  <td>Structured SBAR summary</td>
                </tr>
                <tr>
                  <td>Trip Status</td>
                  <td>Radio updates to the desk</td>
                  <td>One-tap status in a shared queue</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">STRATEGIC IMPACT</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">🚨</span>
              <span className="prd-section-item__title">A Real-Time View of the Fleet</span>
              <span className="prd-section-item__desc">Dispatchers see active jobs, priority mix, and crew load as they change, rather than reconstructing them from a log.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🏥</span>
              <span className="prd-section-item__title">Cleaner Handover to the Emergency Department</span>
              <span className="prd-section-item__desc">A standard SBAR format reduces miscommunication and shortens the time between arrival and patient offloading.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">📈</span>
              <span className="prd-section-item__title">Data for Planning</span>
              <span className="prd-section-item__desc">Peak-hour, destination, and condition analytics give the service evidence for crew scheduling and hospital liaison.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">St. John Ambulance of Malaysia (SJAM) · Wilayah Persekutuan Pre-Hospital Care &amp; Dispatch Division</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
