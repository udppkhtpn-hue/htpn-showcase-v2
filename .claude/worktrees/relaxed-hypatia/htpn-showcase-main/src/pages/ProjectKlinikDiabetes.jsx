import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#4ade80'
const DEMO_URL = 'https://u1.padletusercontent.com/uploads/padlet-uploads-usc1/6235213298/4203b221d029fee1f851754fa0800d9e/diabetic_clinic_pre_consultation_app_latest.html?token=wUjQadwXkr4heQZxhyiKq0vhq_dAvtDGIoyPrhKKJYhB_aw7P9ejE6l1HhOu8JsVmx6jJiFHceEnNVtGoqD2VFTf_DpO1Gcu5v1PTz2MMTSVVgMGi6_KhxV3wxoFXui2gASddOrz1fNSA774g3at6geWB8hov8ZJhsN5h5tBA_iIJnVw5L0IFjxRQ67HqRsRH9siEsVW-xImJjXsJS8P5lYJHR5XFbLpRCdtHhKfNK7q8byoSWevmR1RigDV7piet5fy1Lr9ZKJMmCgseeHldKhRZ1GNN1yVl9a6ak3zDGU='

export default function ProjectKlinikDiabetes() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>Klinik Diabetes Pintar — Pre-Consultation &amp; Waiting-Room Screening · HTPN HIO</title>
        <meta name="description" content="A digital pre-consultation triage and self-screening app for diabetic outpatients — a ten-step wizard collecting vitals, diabetic control history, glycaemic symptoms, and organ complications while patients wait, producing a structured clinical summary." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/klinik-diabetes-pintar" />
        <meta property="og:title" content="Klinik Diabetes Pintar — Pre-Consultation Form · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/klinik-diabetes-pintar" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">Klinik Diabetes Pintar — Borang Pra-Konsultasi &amp; Saringan Menunggu</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#06 · Patient's Journey</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">Diabetes Triage</span>
          <span className="detail-tag">Waiting-Room Screening</span>
          <span className="detail-tag">Bahasa Malaysia</span>
        </div>

        <p className="detail-subtitle">
          A digital pre-consultation triage and self-screening app for diabetic outpatients and clinic triage nurses — collecting vitals, diabetic control history, acute glycaemic episodes, organ complications, and the patient's own questions before the doctor's consultation, so the visit starts from a prepared note instead of a rushed review.
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
              <span className="spec-card-new__value">Patient Self-Assessment · Nurse Triage &amp; Vitals</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Tech Stack</span>
              <span className="spec-card-new__value">Semantic HTML5 / responsive CSS3 / Vanilla JavaScript (ES6+)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Data Handling</span>
              <span className="spec-card-new__value">Client-side session state, serialised across the wizard steps</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Access</span>
              <span className="spec-card-new__value">Waiting-area QR standee or clinic tablet</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#4ade80' }}>Deployed · Diabetes Outpatient Clinic</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            A diabetes review has a lot to cover — control, symptoms, complications, medicines, and lifestyle — and a short consultation to do it in. Patients often forget what they meant to ask, and the doctor spends the visit gathering history that could have been collected while the patient waited.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Rushed Consultations</span>
              <span className="prd-section-item__desc">Routine history-taking consumed consultation time that was needed for decisions about treatment.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Forgotten Complaints</span>
              <span className="prd-section-item__desc">Patients left with questions unasked and symptoms unmentioned, especially acute low and high sugar episodes between visits.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Dead Waiting Time</span>
              <span className="prd-section-item__desc">Time in the waiting hall was not used for anything that helped the eventual consultation or the patient's understanding of their condition.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(74,222,128,0.15)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Access &amp; Initiation</span>
              <span className="prd-section-item__desc">Patients scan a QR standee in the waiting hall with their own phones, or triage staff hand them a clinic tablet. No download or login — the session starts at once, with a demo option and a CPG assistant shortcut (Tanya CPG) in the toolbar.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(74,222,128,0.15)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Active Task &amp; Processing</span>
              <span className="prd-section-item__desc">A ten-stage wizard (Langkah 1 / 10 and onwards) collects demographics, nurse-recorded vitals, disease duration, low and high sugar symptoms, and complication history. Tap-friendly symptom chips, CPG target benchmarks beside the fields, and Kembali / Seterusnya buttons keep it simple for older patients.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(74,222,128,0.15)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Delivery &amp; Handover</span>
              <span className="prd-section-item__desc">The last stage, Ringkasan, turns the answers into an organised clinical note and risk summary. The doctor reads it on opening the consultation, which reduces data entry during the face-to-face visit.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE TEN STEPS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Pesakit</span>
              <span className="prd-section-item__desc">Full name, NRIC or passport, age, gender chips, ethnicity, and a phone number for SMS and records.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Triage &amp; Vitals</span>
              <span className="prd-section-item__desc">A nursing station step tagged for the nurse: systolic and diastolic blood pressure, heart rate, weight, height, waist circumference for BMI and central obesity, and the capillary glucose reading with its testing condition.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Sejarah DM</span>
              <span className="prd-section-item__desc">How long the patient has had diabetes, the last HbA1c with the national target shown beside it, and whether they have a home glucometer.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">04</span>
              <span className="prd-section-item__title">Gejala Gula</span>
              <span className="prd-section-item__desc">Toggle chips for low-sugar symptoms such as tremors, sweating, palpitations, and confusion, and high-sugar symptoms such as frequent night urination, thirst, weight loss, and blurred vision.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">05</span>
              <span className="prd-section-item__title">Komplikasi</span>
              <span className="prd-section-item__desc">Screening across the main target-organ areas — heart and vessels, kidneys, eyes, and nerves and feet — including the date of the last eye examination and any current foot ulcer.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">06–10</span>
              <span className="prd-section-item__title">Ubat &amp; Insulin · Gaya Hidup · Kuiz Menunggu · Soalan Dr · Ringkasan</span>
              <span className="prd-section-item__desc">Medication and insulin adherence, lifestyle factors, an educational waiting-room quiz, the patient's questions for the doctor, and the consolidated summary note.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>A ten-step guided flow breaks a long clinical history into small steps, which prevents fatigue for elderly or non-technical patients</li>
            <li>Wide pill-style tiles replace small checkboxes for easy tapping on phones and tablets</li>
            <li>Clinical Practice Guideline benchmarks, such as the HbA1c target and the hypoglycaemia cut-off, sit inside the input hints and teach as the patient answers</li>
            <li>A waiting-room quiz and CPG assistant put dwell time to use</li>
            <li>Formal Bahasa Malaysia is paired with everyday descriptions of symptoms to help patients understand what is being asked</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">GOVERNANCE &amp; SCOPE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>A pre-consultation triage and screening instrument based on the Malaysian Clinical Practice Guidelines for Type 2 Diabetes Mellitus</li>
              <li>Self-reported symptoms and complications must be validated by the attending Medical Officer and diabetes educators before any change to treatment or insulin doses</li>
              <li>Identification details are entered into the form, so a tablet should be cleared between patients</li>
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
                  <th>History in the Consultation</th>
                  <th style={{ color: ACCENT }}>Klinik Diabetes Pintar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>History Taking</td>
                  <td>Asked aloud during the visit</td>
                  <td>Collected in the waiting hall</td>
                </tr>
                <tr>
                  <td>Patient Questions</td>
                  <td>Often forgotten</td>
                  <td>Written in the Soalan Dr step</td>
                </tr>
                <tr>
                  <td>Complication Screening</td>
                  <td>Depends on time available</td>
                  <td>Same target-organ checklist for every patient</td>
                </tr>
                <tr>
                  <td>Guideline Targets</td>
                  <td>Known to the clinician only</td>
                  <td>Shown to the patient beside each field</td>
                </tr>
                <tr>
                  <td>Doctor's Preparation</td>
                  <td>Starts when the patient enters</td>
                  <td>Structured summary ready on arrival</td>
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
              <span className="prd-section-item__title">Consultation Time for Decisions</span>
              <span className="prd-section-item__desc">With routine history already captured, the visit can focus on interpreting results and adjusting treatment.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🔍</span>
              <span className="prd-section-item__title">Fewer Missed Complications</span>
              <span className="prd-section-item__desc">A fixed screening set prompts eye, kidney, nerve, foot, and heart questions that might otherwise be skipped when the clinic is busy.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🎓</span>
              <span className="prd-section-item__title">Patients Better Informed</span>
              <span className="prd-section-item__desc">Guideline targets and an educational quiz turn waiting time into a small amount of health education.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Diabetes Clinical Care Team &amp; Primary Care Informatics · Hospital Port Dickson, Kementerian Kesihatan Malaysia</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
