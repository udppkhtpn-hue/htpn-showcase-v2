import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#34d399'
const DEMO_URL = 'https://u1.padletusercontent.com/uploads/padlet-uploads-usc1/6337192838/e3ae1f377bb5e23bc0342c8cffbcdadc/clinical_mar_medication_time_tracker.html?token=HkiZ1jL59LjVwzSeGM26NLweN4Tdii4YREEOI8Wa83FzLSekC2SAasplPjWKK9cn0NmIM1NJ7BJSx3K4T1RO8_VfK6HuF6yCSM-t6mRoY9pdOQ0kj_r6SPYAyHSViiEy8LYBY1Dh04MqiGr3RYFVwa_4oDm89kO6TL2pOn8Y5sEYKlH2uJgB_T_FVjWNhujmNtE7xgFz6OEN_Uhe_rtdfWg_sv_RtHuazedGy_i7SH1aBDs2BEFylq7u2xYzu7zqK17CXBDB7VoMxt4qWwY_0aFn3mgz2A743EESoXxHWUw='

export default function ProjectMedPulseMAR() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>MedPulse MAR — Medication Administration Record &amp; Safety System · HTPN HIO</title>
        <meta name="description" content="A digital medication administration and clinical safety web application for ward nurses, pharmacists, and medical officers — a live serving schedule with countdown alerts, dual-nurse sign-off, weight-based dose calculators, and printable MAR charts." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/medpulse-mar" />
        <meta property="og:title" content="MedPulse MAR — e-MAR & Safety System · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/medpulse-mar" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">MedPulse MAR — Medication Administration Record &amp; Dual-Sign Safety System</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#19 · Doctor's Journey</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">Inpatient e-MAR</span>
          <span className="detail-tag">Dual-Sign Safety</span>
          <span className="detail-tag">Dose Calculator</span>
        </div>

        <p className="detail-subtitle">
          A digital medication administration and clinical safety application for ward nurses, clinical pharmacists, and medical officers on bedside tablets, medication cart laptops, and nursing station monitors — addressing missed doses, unverified orders, and calculation errors during round-the-clock inpatient drug rounds.
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
              <span className="spec-card-new__label">Workflow Stream</span>
              <span className="spec-card-new__value">Ward Nurses · Medical Officers · Clinical Pharmacists</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Tech Stack</span>
              <span className="spec-card-new__value">HTML5 / CSS3 (dark &amp; light) / Vanilla JavaScript (ES6+)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Data Architecture</span>
              <span className="spec-card-new__value">Client-side state with MRN indexing and live dose computation</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Devices</span>
              <span className="spec-card-new__value">Bedside tablets · medication carts · nursing stations</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#4ade80' }}>Deployed · Ward 4A, Hospital Port Dickson</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            A medication round is a long chain of small, safety-critical steps — right patient, right drug, right dose, right route, right time — repeated for every patient across every shift. Paper charts show what was prescribed, but not what is due now, what has been missed, or whether the dose that was calculated is correct.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Missed and Late Doses</span>
              <span className="prd-section-item__desc">Nothing on a paper chart warns the nurse that a dose is approaching its window or has already been missed.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Unverified Orders and Allergies</span>
              <span className="prd-section-item__desc">Telephone or unendorsed orders and allergy information scattered across notes make it easy for an unsafe drug to reach the bedside.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Manual Dose Calculation</span>
              <span className="prd-section-item__desc">Weight-based doses and liquid volumes were worked out by hand at the bedside, where a slip in arithmetic becomes a dosing error.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(52,211,153,0.15)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Access &amp; Initiation</span>
              <span className="prd-section-item__desc">Opened from the hospital intranet or a clinical workstation browser. The nurse selects or searches the inpatient by MRN, and the patient header loads immediately: name, MRN, ward and bed, weight, pregnancy and lactation badges, and allergy profile. Nothing to install.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(52,211,153,0.15)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Active Task &amp; Processing</span>
              <span className="prd-section-item__desc">Nurses work through the Administration Schedule, check the endorsed orders, review pregnancy and lactation risk, or use the Dose Calculator. Status-driven cards, an amber due-window alert, category pill badges, audible reminders, and a Serve / Status modal guide each dose.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(52,211,153,0.15)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Delivery &amp; Handover</span>
              <span className="prd-section-item__desc">Tallies for Pending, Given, On Hold, Pt Refused, and Overdue / Missed update as doses are served, every action lands in the MAR History Log, and Print PDF / MAR Chart produces a physical chart for handover or transfer.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">CORE FUNCTIONAL MODULES</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Patient Safety Banner &amp; Navigation</span>
              <span className="prd-section-item__desc">Persistent header with the MRN switcher, a real-time clock, an audio alert toggle, dark and light themes, a Dose Calc shortcut, and the + Add Rx (MO Endorsed) trigger.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Patient Context Strip</span>
              <span className="prd-section-item__desc">Demographic summary (name, MRN, ward and bed, weight), highlighted pregnancy-trimester and breastfeeding chips, and a red allergy guardrail badge listing documented hypersensitivities with a quick + Add Allergy trigger.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Administration Schedule</span>
              <span className="prd-section-item__desc">The bedside tab for today's serving schedule: an amber alert for doses within 30 minutes of due or overdue, tally tiles for each status, itemised serving cards with route, frequency, risk category, scheduled time and feeding instructions, and status and drug filters.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">04</span>
              <span className="prd-section-item__title">Endorsed Medication Orders</span>
              <span className="prd-section-item__desc">A prescriber ledger of physician-signed orders showing route, frequency, dose, fixed serving times, pregnancy and lactation risk notes, clinical indication, daily maximum ceilings, and the endorsing doctor's name with MMC registration number, plus a + Prescribe New Rx trigger.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">05</span>
              <span className="prd-section-item__title">Dose &amp; Liquid Volume Calculator</span>
              <span className="prd-section-item__desc">Two panels: a weight-based mg/kg/dose calculator that auto-fills the patient's weight and honours an optional maximum single-dose cap, and a liquid concentration calculator solving desired dose over dose on hand times volume on hand, in mL.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">06</span>
              <span className="prd-section-item__title">MAR History Log &amp; Reporting</span>
              <span className="prd-section-item__desc">A log of previous administrations and a Print PDF / MAR Chart action for transfer or discharge packets.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>Obstetric and teratogenic flagging — high-contrast pregnancy and lactation badges stay visible on every screen</li>
            <li>Physician credential stamping binds each active order to the endorsing doctor's name and MMC number</li>
            <li>Context-aware math pulls the recorded patient weight into the calculator, removing a manual input step</li>
            <li>Proactive schedule alerts — amber due-window banners and a prominent overdue counter direct nursing attention to delayed doses</li>
            <li>Dual-nurse administration modals prompt sign-off on allergy checks, the five rights of medication administration, and co-signatures for high-risk drugs</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">GOVERNANCE &amp; SCOPE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>Every prescription needs valid Medical Officer endorsement with an active Malaysian Medical Council registration number before administration</li>
              <li>Dual-sign nurse verification and allergy screening are enforced in the workflow</li>
              <li>Doses given outside the scheduled window must be documented with a clinical justification</li>
            </ul>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">PAPER CHART vs MEDPULSE MAR — COMPARISON</h2>
          <div className="detail-table-wrap">
            <table className="detail-table">
              <thead>
                <tr>
                  <th>Evaluation Vector</th>
                  <th>Paper Medication Chart</th>
                  <th style={{ color: ACCENT }}>MedPulse MAR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Due Doses</td>
                  <td>Nurse checks times against the clock</td>
                  <td>Live schedule with countdown and overdue alerts</td>
                </tr>
                <tr>
                  <td>Order Authority</td>
                  <td>Signature, sometimes unreadable</td>
                  <td>Endorsing doctor and MMC number on every order</td>
                </tr>
                <tr>
                  <td>Allergy and Pregnancy Status</td>
                  <td>In the notes</td>
                  <td>Persistent badges beside every drug</td>
                </tr>
                <tr>
                  <td>Dose Arithmetic</td>
                  <td>Worked by hand</td>
                  <td>Calculator using the patient's recorded weight</td>
                </tr>
                <tr>
                  <td>High-Risk Drugs</td>
                  <td>Second check by convention</td>
                  <td>Co-signature built into the serve step</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">STRATEGIC IMPACT</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">⏰</span>
              <span className="prd-section-item__title">Fewer Missed Doses</span>
              <span className="prd-section-item__desc">Countdown alerts and an overdue counter put late doses in front of the nurse while there is still time to give them.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🛡️</span>
              <span className="prd-section-item__title">Safety Checks Built Into the Workflow</span>
              <span className="prd-section-item__desc">Allergy screening, MO endorsement, and co-signing happen as part of serving a dose rather than as a separate step that can be skipped.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🧮</span>
              <span className="prd-section-item__title">Calculation Errors Reduced</span>
              <span className="prd-section-item__desc">Letting the system do the weight-based and volume arithmetic removes a common source of dosing mistakes at the bedside.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Clinical Informatics &amp; Nursing Safety Division · Clinical Pharmacy &amp; Inpatient Nursing Division (Ward 4A), Hospital Port Dickson</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
