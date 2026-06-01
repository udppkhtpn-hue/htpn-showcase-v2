import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#e11d48'
const DEMO_URL = 'https://script.google.com/a/macros/moh.gov.my/s/AKfycbzwx3OSqzyZHYN_DsBBs0AOS86W_kV35D53miL01NJ9cqutox26F4yYCI8ek0-Pk4hk/exec'

export default function ProjectPhlebotomyBooking() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>Hospital Marudi Phlebotomy Appointment System · HTPN HIO</title>
        <meta name="description" content="A highly scalable booking platform for manual hospital ecosystems — allowing ward and outpatient staff to pre-schedule phlebotomy slots, ensuring blood results are fully ready before the patient's specialist consultation." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/phlebotomy-booking" />
        <meta property="og:title" content="Hospital Marudi Phlebotomy Appointment System · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/phlebotomy-booking" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">Hospital Marudi Phlebotomy Appointment System</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#24 · Patient's Journey</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">Outpatient Pre-Consultation</span>
          <span className="detail-tag">Pre-Analytical Optimization</span>
          <span className="detail-tag">Scalable SaaS Architecture</span>
        </div>

        <p className="detail-subtitle">
          A highly scalable booking platform designed for manual hospital ecosystems — allowing ward and outpatient staff to pre-schedule phlebotomy slots, ensuring blood sample results are fully ready before the patient's upcoming specialist consultation.
        </p>

        <div className="detail-block">
          <div className="detail-block__cta">
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="detail-demo-btn" style={{ background: ACCENT, color: '#ffffff' }}>
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
              <span className="spec-card-new__label">Booking By</span>
              <span className="spec-card-new__value">Ward Staff · Outpatient Desk</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Lab Panels</span>
              <span className="spec-card-new__value">FBC · FBS · RP · LFT · FLP · UFEME</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Architecture</span>
              <span className="spec-card-new__value">Scalable SaaS — Multi-Facility Ready</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#4ade80' }}>Deployed · Hospital Marudi</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            In manual public hospital environments, coordinating pre-consultation blood draws introduces significant friction into the outpatient specialist journey. Patients are given physical lab request forms and must queue at the phlebotomy counter on untracked days — with no guarantee results will be ready in time.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">"Result Not Ready" Consultations</span>
              <span className="prd-section-item__desc">Without a synchronized scheduling buffer, patients often have blood drawn too close to their specialist appointments — forcing doctors to consult without vital lab results and creating redundant wasted clinic visits.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Crowding & Peak Bottlenecks</span>
              <span className="prd-section-item__desc">Outpatient blood-draw counters suffer massive early-morning patient surges — inflating wait times and placing immense structural strain on laboratory staff.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">No Pre-Arrival Tracking</span>
              <span className="prd-section-item__desc">Wards discharging patients with upcoming follow-ups have no mechanism to pre-book blood tracking windows — resulting in missed tests and fragmented patient monitoring.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">BOOKING SYSTEM ARCHITECTURE</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(225,29,72,0.15)', color: ACCENT }}>P</span>
              <span className="prd-section-item__title">Patient Information Module</span>
              <span className="prd-section-item__desc">Captures Patient Name (full name as per IC), Patient IC / ID Number, and primary Clinical Diagnosis (e.g., Type 2 Diabetes Mellitus). Clear step-by-step layout optimized for fast, zero-training data entry.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(225,29,72,0.15)', color: ACCENT }}>S</span>
              <span className="prd-section-item__title">Staff Audit Module</span>
              <span className="prd-section-item__desc">Enforces accountability by capturing the booking officer's Staff Name and Position / Department (e.g., SN, Ward 1) — building a clear audit trail for every reservation and pre-analytical tracking.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(225,29,72,0.15)', color: ACCENT }}>L</span>
              <span className="prd-section-item__title">Specimen Type Routing Engine</span>
              <span className="prd-section-item__desc">Rapid-selection checkbox grid for lab panels: <strong>FBC</strong> (Full Blood Count), <strong>FBS</strong> (Fasting Blood Sugar), <strong>RP</strong> (Renal Profile), <strong>LFT</strong> (Liver Function Test), <strong>FLP</strong> (Fasting Lipid Profile), <strong>UFEME</strong>, and custom OTHERS. Date selector binds the draw to an operationally sound timeline before the specialist consult.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(225,29,72,0.15)', color: ACCENT }}>A</span>
              <span className="prd-section-item__title">Admin Portal</span>
              <span className="prd-section-item__desc">Isolated administrative access allowing laboratory personnel and clinic administrators to monitor upcoming daily workloads, manage slot availability, and download aggregated sampling manifests.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">KEY FEATURES</h2>
          <ul className="detail-features">
            <li>Pre-arrival phlebotomy scheduling by ward or outpatient desk staff</li>
            <li>Specimen type checkbox grid covering 6 standard lab panels + custom requests</li>
            <li>Date selector to align blood draw with specialist consultation timeline</li>
            <li>Staff audit trail — every booking linked to logging officer name and department</li>
            <li>Admin portal for daily workload monitoring and sampling manifest downloads</li>
            <li>Scalable SaaS architecture — deployable across multiple manual peripheral hospitals</li>
            <li>Zero training required — clear step-by-step booking layout</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">PRIVACY &amp; GOVERNANCE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>Every reservation linked to Staff Name and Department for full pre-analytical traceability</li>
              <li>Scalable data isolation — each hospital hosts its own registry without cross-contaminating neighboring facility records</li>
              <li>Patient IC numbers handled via encrypted session structures — compliant with PDPA</li>
            </ul>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ANALOG vs DIGITAL — COMPARISON</h2>
          <div className="detail-table-wrap">
            <table className="detail-table">
              <thead>
                <tr>
                  <th>Evaluation Vector</th>
                  <th>Analog Manual Open-Queue</th>
                  <th style={{ color: ACCENT }}>Digital Phlebotomy Engine</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Consultation Readiness</td>
                  <td>High risk of results missing during consult</td>
                  <td>Guaranteed lab results ready on time</td>
                </tr>
                <tr>
                  <td>Phlebotomy Workload</td>
                  <td>Volatile morning surges causing congestion</td>
                  <td>Smooth, scheduled patient distribution</td>
                </tr>
                <tr>
                  <td>Ward Discharge Pipeline</td>
                  <td>Verbal instructions given to patients</td>
                  <td>Immediate pre-booked blood draw appointment</td>
                </tr>
                <tr>
                  <td>Data Traceability</td>
                  <td>Paper logs prone to loss or misplacement</td>
                  <td>Searchable digital records with staff tracking</td>
                </tr>
                <tr>
                  <td>Administrative Delay</td>
                  <td>Chasing lost results across labs</td>
                  <td>Instant booking confirmation tied to specific tests</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">STRATEGIC IMPACT</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">🩸</span>
              <span className="prd-section-item__title">Eliminating "Result Not Ready" Incidents</span>
              <span className="prd-section-item__desc">Pre-scheduling blood draws ensures lab results are fully completed before the patient steps into the specialist room — entirely wiping out redundant clinic consults.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">⏱️</span>
              <span className="prd-section-item__title">Drastic Reduction in Counter Wait Times</span>
              <span className="prd-section-item__desc">Spreading bookings across controlled daily intervals flattens the peak morning surge — shifting the outpatient experience from a chaotic queue to an efficient timed appointment.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🏥</span>
              <span className="prd-section-item__title">Seamless Continuum of Care from Wards</span>
              <span className="prd-section-item__desc">Ward staff can book post-discharge phlebotomy slots at the patient's bedside — closing the loop on transitional care and protecting patient safety.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Hospital Marudi · HTPN AI Knowledge-Sharing Network</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
