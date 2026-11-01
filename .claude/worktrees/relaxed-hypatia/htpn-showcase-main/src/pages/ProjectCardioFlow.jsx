import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#5eead4'
const DEMO_URL = 'https://u1.padletusercontent.com/uploads/padlet-uploads-usc1/6232590786/8987f1a69403e6985365eebbc68b17fd/cardioflowHFclinic.html?token=wUjQadwXkr4heQZxhyiKq0vhq_dAvtDGIoyPrhKKJYhB_aw7P9ejE6l1HhOu8JsVmx6jJiFHceEnNVtGoqD2VFTf_DpO1Gcu5v1PTz2MMTSFLYj-DrVzuwvj822ZXk7rb3XAtsETsLa65Br4d3kVQRLTaCaq5Mb47VUW0dlCKT-sP_doIWBFSlfMIFUWZ7oEIlu7ISMfVk6Cyn_XPNldKvhXhCL1Nc5uggCmr_gUVXP79sSbHnhEy_gXY5jeEwod52F2KqKXYihpy15LaKmizw=='

export default function ProjectCardioFlow() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>CardioFlow — HF Clinic Portal · HTPN HIO</title>
        <meta name="description" content="A multi-user intake and triage app for heart failure clinics — a four-step patient intake wizard, a self-care knowledge quiz, nursing vitals and fluid assessment, and a standardised clinical note exported as text for the hospital information system." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/cardioflow" />
        <meta property="og:title" content="CardioFlow — HF Clinic Portal · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/cardioflow" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">CardioFlow — HF Clinic Portal</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#09 · Patient's Journey</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">Heart Failure Triage</span>
          <span className="detail-tag">Self-Care Quiz</span>
          <span className="detail-tag">HIS-Ready Note</span>
        </div>

        <p className="detail-subtitle">
          A multi-user clinical intake and triage application for heart failure outpatients, cardiology triage nurses, and medical officers — replacing lengthy verbal clerking with a patient intake wizard, a self-care knowledge quiz, nursing vitals and fluid assessment, and a standardised note that can be pasted straight into the hospital information system.
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
              <span className="spec-card-new__value">Patient Intake &amp; Quiz · Nurse Triage Vitals · Clinician Note</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Tech Stack</span>
              <span className="spec-card-new__value">Semantic HTML5 / responsive CSS3 / Vanilla JavaScript (ES6+)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Data Handling</span>
              <span className="spec-card-new__value">Client-side session state with text file export</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Access</span>
              <span className="spec-card-new__value">Clinic URL, entrance QR standee, or waiting-room tablet</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#4ade80' }}>Deployed · Heart Failure Clinic</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            A heart failure clinic visit depends on recognising early congestion and checking that the patient knows how to look after themselves — weighing daily, limiting salt, and calling when weight jumps. Gathering that history verbally is long, symptoms are easily under-reported, and the nurse's measurements are often copied by hand into the record.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Lengthy Verbal Clerking</span>
              <span className="prd-section-item__desc">Heart failure history — diagnosis year, ejection fraction, class, admissions, and comorbidities — took time better spent on assessment.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Untracked Congestion Symptoms</span>
              <span className="prd-section-item__desc">Signs such as needing extra pillows, waking breathless, or increasing leg swelling were not captured consistently before the doctor saw the patient.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Hidden Self-Care Knowledge Gaps</span>
              <span className="prd-section-item__desc">Whether a patient understood fluid, salt, and weight-gain advice was rarely tested, so teaching was generic rather than targeted.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(94,234,212,0.15)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Access &amp; Initiation</span>
              <span className="prd-section-item__desc">Patients reach it by a QR standee or a waiting-room tablet, while nurses and doctors switch between the Intake, Quiz, Nurse, and Ask CPG tabs. It opens straight onto step 1 with no download or login.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(94,234,212,0.15)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Active Task &amp; Processing</span>
              <span className="prd-section-item__desc">Patients complete a four-stage intake — Demographics, HF History, Complications, and Lifestyle with current symptoms — then a short knowledge quiz. In parallel, the nurse records vitals and a volume assessment. A single-card form, a progress stepper, tap-friendly tiles, and Back / Next Step buttons keep it simple, with the patient's identifiers pinned at the top.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(94,234,212,0.15)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Delivery &amp; Handover</span>
              <span className="prd-section-item__desc">Patient-reported history and nursing measurements merge into one note preview. Download .txt for HIS produces a plain text file for pasting into the record, and Export Quiz Gaps for Doctor lists what the patient got wrong, so the doctor can counsel on exactly that.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">CORE FUNCTIONAL MODULES</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Header &amp; Role Navigation</span>
              <span className="prd-section-item__desc">Portal branding with the Intake, Quiz, Nurse, and Ask CPG selectors.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Step 1 — Demographics</span>
              <span className="prd-section-item__desc">Full name, medical record number, age, and biological sex.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Step 2 — Heart Failure History</span>
              <span className="prd-section-item__desc">Year of diagnosis, last known LVEF, current NYHA functional class, and the number of heart failure admissions in the past twelve months.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">04</span>
              <span className="prd-section-item__title">Step 3 — Comorbidities</span>
              <span className="prd-section-item__desc">Tiles for atrial fibrillation, hypertension, type 2 diabetes, chronic kidney disease, and ischaemic heart disease.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">05</span>
              <span className="prd-section-item__title">Step 4 — Lifestyle &amp; Symptoms</span>
              <span className="prd-section-item__desc">Smoking status, salt restriction adherence, and a symptom checklist covering orthopnoea, paroxysmal nocturnal dyspnoea, and recent increase in leg swelling.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">06</span>
              <span className="prd-section-item__title">Heart Failure Knowledge Quiz</span>
              <span className="prd-section-item__desc">Questions on daily fluid allowance, what to do after rapid weight gain, and why salt matters, with a header button that exports only the knowledge gaps for the doctor.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">07</span>
              <span className="prd-section-item__title">Nursing Station — Vitals &amp; Fluid Assessment</span>
              <span className="prd-section-item__desc">Blood pressure, heart rate, SpO2, respiratory rate, weight and height, plus dropdowns for jugular venous pressure and pitting oedema.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">08</span>
              <span className="prd-section-item__title">Structured Note Generator</span>
              <span className="prd-section-item__desc">Combines intake and nursing data into an integrated text summary with a one-click export for the hospital information system.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>A persistent context header keeps the patient's name, MRN, age, and sex visible across every step</li>
            <li>A four-stage progress stepper with a teal fill gives patients a clear picture of what remains</li>
            <li>Role tabs bring the patient, nurse, and doctor touchpoints under one URL</li>
            <li>A self-care literacy loop chains a quiz after symptom entry and sends the gaps to the clinician</li>
            <li>The text export is built for copy-and-paste into legacy hospital systems, with no backend integration required</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">GOVERNANCE &amp; SCOPE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>A pre-consultation triage, self-care assessment, and nursing vitals capture tool aligned with the national Clinical Practice Guidelines on Heart Failure</li>
              <li>Self-reported NYHA class, LVEF, and symptoms do not replace specialist evaluation</li>
              <li>Signs of severe congestion or haemodynamic instability need immediate escalation to emergency care</li>
              <li>The exported text file contains patient identifiers — handle and delete it as a clinical record</li>
            </ul>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">VERBAL vs DIGITAL — COMPARISON</h2>
          <div className="detail-table-wrap">
            <table className="detail-table">
              <thead>
                <tr>
                  <th>Evaluation Vector</th>
                  <th>Verbal Clerking</th>
                  <th style={{ color: ACCENT }}>CardioFlow</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>History Taking</td>
                  <td>Asked aloud in the consultation</td>
                  <td>Four-step intake completed beforehand</td>
                </tr>
                <tr>
                  <td>Congestion Symptoms</td>
                  <td>Reported if remembered</td>
                  <td>Checklist for orthopnoea, PND, and swelling</td>
                </tr>
                <tr>
                  <td>Self-Care Knowledge</td>
                  <td>Assumed or asked informally</td>
                  <td>Short quiz with gaps exported to the doctor</td>
                </tr>
                <tr>
                  <td>Nurse Measurements</td>
                  <td>Written down and re-typed</td>
                  <td>Entered once and merged into the note</td>
                </tr>
                <tr>
                  <td>Record Entry</td>
                  <td>Manual transcription into the HIS</td>
                  <td>Text file ready to paste</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">STRATEGIC IMPACT</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">🫀</span>
              <span className="prd-section-item__title">Congestion Risk Seen Early</span>
              <span className="prd-section-item__desc">Symptoms, weight, and the nurse's fluid assessment come together before the doctor's review, so risk is visible at the start of the visit.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🎓</span>
              <span className="prd-section-item__title">Education Aimed at the Gap</span>
              <span className="prd-section-item__desc">Knowing which self-care points a patient missed lets the clinician teach those, instead of repeating everything.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">📝</span>
              <span className="prd-section-item__title">Less Transcription</span>
              <span className="prd-section-item__desc">A ready-made note removes the re-typing of history and vitals into the hospital record.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Cardiology Specialty Service &amp; Digital Health Working Group · National Medical Services, Kementerian Kesihatan Malaysia</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
