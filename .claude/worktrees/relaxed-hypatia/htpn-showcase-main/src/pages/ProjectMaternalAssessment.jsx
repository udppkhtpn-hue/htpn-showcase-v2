import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#f472b6'
const DEMO_URL = 'https://u1.padletusercontent.com/uploads/padlet-uploads-usc1/6434245946/01387dc94a25948affbaaad2cc8166a0/assessment_center_registration_2.html?token=quOajtxDJdFG2NIra7AK6ZZkGLaHIu1wxlfEI8EoIKptNzYQ_ALl1Rs3kNVVVlPfBv4mTOBvAJafK7sE7GEsV_WdLOyVMThyVkI9U4hprxiFZtuYsYuAzMEbetS7iTRS1XvgBiI2d0WmLV9Tz0C3MlKUZE0D7ji__kKcilyU_UvUi6zZFuWlrRIhrmBjeu6o_UOT9uM-jJSY1ZSPNoo89rlLLP4TROCjJfdgHqNFXgE6gxJaUsNaxz7DdtAzVZVo_LYf4teM_WJ5-SJBb-ht1g=='

export default function ProjectMaternalAssessment() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>Maternal Assessment Center — Patient Registration Portal · HTPN HIO</title>
        <meta name="description" content="A digital triage intake application for expectant mothers and obstetric nurses — a mobile self-registration form that turns demographic, obstetric, and antenatal details into a scannable QR code for instant counter intake." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/maternal-assessment" />
        <meta property="og:title" content="Maternal Assessment Center — Registration Portal · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/maternal-assessment" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">Maternal Assessment Center — Patient Registration Portal</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#05 · Patient's Journey</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">Obstetric Triage</span>
          <span className="detail-tag">QR Handoff</span>
          <span className="detail-tag">Self-Registration</span>
        </div>

        <p className="detail-subtitle">
          A digital intake application used by expectant mothers, triage midwives, and obstetric nurses on phones and clinic tablets — replacing repetitive handwriting of maternal histories during urgent assessment visits with a short form that produces a scannable QR code for the triage counter.
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
              <span className="spec-card-new__value" style={{ color: ACCENT }}>Patient's Journey</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Workflow Stream</span>
              <span className="spec-card-new__value">Patient Self-Registration · Nurse &amp; Clinician Counter Triage</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Tech Stack</span>
              <span className="spec-card-new__value">HTML5 / CSS3 / Vanilla JavaScript + client-side QR generator</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Data Handling</span>
              <span className="spec-card-new__value">Client-side only — no database; data travels in the QR code</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Access</span>
              <span className="spec-card-new__value">Entrance QR standee or clinic check-in tablet</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#4ade80' }}>Deployed · Maternal Assessment Center</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            A woman arriving for urgent maternal assessment is asked, first, to repeat her whole obstetric history — identification, parity, dates, booking measurements — to staff who then copy it into a registry by hand. The information is essential, but the transcription happens at exactly the moment speed matters most.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Slow Handwritten Intake</span>
              <span className="prd-section-item__desc">Maternal histories were written into physical registries during admission, adding minutes of clerical work before assessment could begin.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Repeated Questions at the Counter</span>
              <span className="prd-section-item__desc">Staff asked each patient the same demographic and obstetric questions, which is tiring for the mother and takes triage staff away from clinical observation.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Transcription Errors</span>
              <span className="prd-section-item__desc">Copying IC numbers, dates, and haemoglobin values by hand introduces mistakes into a record that later clinical decisions rely on.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(244,114,182,0.15)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Access &amp; Initiation</span>
              <span className="prd-section-item__desc">Expectant mothers scan a QR standee at reception with their own phones, or use a check-in tablet. No app download and no account — the form opens straight in the mobile browser.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(244,114,182,0.15)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Active Task &amp; Processing</span>
              <span className="prd-section-item__desc">The patient completes one structured page covering identification, obstetric history, and current antenatal details. A vertical layout, example placeholders (such as the IC format), numeric steppers for Gravida and Para, date pickers for LMP and EDD, and dropdowns for blood group and viral screening keep entry quick and consistent.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(244,114,182,0.15)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Delivery &amp; Handover</span>
              <span className="prd-section-item__desc">Tapping Generate QR Code turns the answers into an on-screen QR code. A midwife or triage nurse scans it with a handheld 2D scanner, filling the triage workstation without retyping.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">CORE FUNCTIONAL MODULES</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Personal Details</span>
              <span className="prd-section-item__desc">Full name as per IC, IC number in Malaysian NRIC format, year married, and blood group.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Obstetric History</span>
              <span className="prd-section-item__desc">Gravida (total pregnancies) and Para (previous births) as incremental inputs, plus LMP and EDD date pickers, with the estimated delivery date able to be calculated automatically.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Current Antenatal Info</span>
              <span className="prd-section-item__desc">ANC number, booking weight and height, booking and latest haemoglobin, and viral screening status.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">04</span>
              <span className="prd-section-item__title">QR Payload Generation</span>
              <span className="prd-section-item__desc">A full-width button that checks the form is complete, encodes the data in a standard schema, and displays a high-density QR code for rapid counter ingestion.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>Contactless data pipeline — details pass from the patient's phone to the triage screen through a QR code, with no cloud login and no database sync</li>
            <li>Maternal-health visual identity with a soft pink header and accents suited to antenatal environments</li>
            <li>Example placeholders on every field (e.g. 11/01/2026, 12.0, 65.5) reduce formatting errors for non-technical users</li>
            <li>Three grouped cards — Personal Details, Obstetric History, Current Antenatal Info — prevent overload when a patient is distressed</li>
            <li>Full-width sticky action button designed for one-handed thumb use on a phone</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">GOVERNANCE &amp; SCOPE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>Captures preliminary maternal-fetal metrics and personal identification records</li>
              <li>QR data must be checked against the antenatal red book (Buku Rekod Kesihatan Ibu) and physical identification by registered nursing or medical staff before examination and admission</li>
              <li>The code carries the patient's details on her own screen, so it should be shown only at the triage counter</li>
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
                  <th>Handwritten Registry</th>
                  <th style={{ color: ACCENT }}>Registration Portal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Who Enters the Data</td>
                  <td>Staff, transcribing the patient's answers</td>
                  <td>The patient, on her own phone</td>
                </tr>
                <tr>
                  <td>Counter Time</td>
                  <td>Minutes of questions and writing</td>
                  <td>One scan fills the triage workstation</td>
                </tr>
                <tr>
                  <td>Entry Errors</td>
                  <td>Handwriting and copying mistakes</td>
                  <td>Structured fields with format examples</td>
                </tr>
                <tr>
                  <td>Installation</td>
                  <td>Not applicable</td>
                  <td>None — opens in the mobile browser</td>
                </tr>
                <tr>
                  <td>Staff Focus</td>
                  <td>Clerical work first</td>
                  <td>Clinical verification first</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">STRATEGIC IMPACT</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">⚡</span>
              <span className="prd-section-item__title">Faster Route to Assessment</span>
              <span className="prd-section-item__desc">Moving data entry to the patient while she waits removes the clerical step from the critical path of an urgent obstetric visit.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🩺</span>
              <span className="prd-section-item__title">Staff Time Returned to Care</span>
              <span className="prd-section-item__desc">Midwives and nurses spend the counter interaction verifying and examining instead of transcribing.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🔒</span>
              <span className="prd-section-item__title">No Central Store to Protect</span>
              <span className="prd-section-item__desc">Because the information stays on the patient's device and in the QR code, there is no registration database to secure, sync, or lose.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Obstetric &amp; Gynaecology (O&amp;G) Clinical Informatics Team · Maternal Assessment Center, Hospital Port Dickson</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
