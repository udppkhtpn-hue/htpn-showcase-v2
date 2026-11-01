import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#f9a8d4'
const DEMO_URL = 'https://u1.padletusercontent.com/uploads/padlet-uploads-usc1/6235190338/f88ab602f8ffbb430e6fcec6d4a5e76d/rheumatology_pre_consultation_app.html?token=wUjQadwXkr4heQZxhyiKq0vhq_dAvtDGIoyPrhKKJYhB_aw7P9ejE6l1HhOu8JsVmx6jJiFHceEnNVtGoqD2VFTf_DpO1Gcu5v1PTz2MMTTR9DdFDjHfGeB_l2Orw2TPAWx2bAK40S7qd_gmjkAvMjJV7kyXocZEovwuB4EW_KjdZeSGMTuo2qLjI047kVtA0CtNsVrwLIxhrO_bHjgpcO_zalSfItwqbQH7EB8HWAyuNNhu7xhkYiKvX0iCzM_Pz5bM0---a4oBRqZC8QdY4UxpG5FgzwoSzD1WE6hrUXE='

export default function ProjectKlinikReumatologi() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>Klinik Reumatologi — Pre-Consultation Assessment · HTPN HIO</title>
        <meta name="description" content="A patient-facing triage and disease activity app for rheumatology outpatients — vitals, multi-system symptom screening, pain score, morning stiffness, medication regimen, and adherence collected before the consultation, in English and Bahasa Malaysia." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/klinik-reumatologi" />
        <meta property="og:title" content="Klinik Reumatologi — Pre-Consultation Assessment · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/klinik-reumatologi" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">Klinik Reumatologi — Pre-Consultation Assessment</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#08 · Patient's Journey</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">Rheumatology Triage</span>
          <span className="detail-tag">Disease Activity</span>
          <span className="detail-tag">Bilingual (EN/MS)</span>
        </div>

        <p className="detail-subtitle">
          A patient-facing triage and disease activity app for rheumatology outpatients and clinic screening nurses on phones and waiting-room tablets — collecting identification, vitals, symptom checklists, pain score, morning stiffness, current medicines, and adherence before the consultation instead of relying on recall during it.
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
              <span className="spec-card-new__value">Patient Self-Assessment · Screening Nurse Vitals</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Tech Stack</span>
              <span className="spec-card-new__value">Semantic HTML5 / responsive CSS3 / Vanilla JavaScript (ES6+)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Data Handling</span>
              <span className="spec-card-new__value">Client-side session state, serialised step by step</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Languages</span>
              <span className="spec-card-new__value">English with a Bahasa Malaysia (BM) toggle</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#4ade80' }}>Deployed · Rheumatology Clinic</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            Rheumatology visits turn on details a patient finds hard to recall on the spot: how bad the pain was this month, how long the morning stiffness lasted, which drugs and doses they are on, and how many doses they actually missed. Gathering that verbally eats consultation time and the answers drift with memory.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Recall-Dependent History</span>
              <span className="prd-section-item__desc">Pain, stiffness, and flare symptoms were reported from memory in a short appointment, so they were inconsistent between visits.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Incomplete Drug Histories</span>
              <span className="prd-section-item__desc">Patients on several immunosuppressants and biologics often could not name their drugs and doses accurately when asked.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Hidden Non-Adherence</span>
              <span className="prd-section-item__desc">Missed doses were rarely volunteered face to face, which made it harder to tell whether a flare reflected the disease or the way medicines were being taken.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(249,168,212,0.15)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Access &amp; Initiation</span>
              <span className="prd-section-item__desc">Patients scan a QR standee in the waiting hall or use a clinic triage tablet. No install or account — the form opens on Patient Info with a one-tap BM language toggle and fields for the clinic reference or folder number.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(249,168,212,0.15)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Active Task &amp; Processing</span>
              <span className="prd-section-item__desc">Patient and nurse move through step-locked screens for identity, vitals, diagnosis, symptoms, pain and stiffness, medicines, and adherence. A live progress bar, a 0–10 pain slider, full-width symptom chips, a repeatable medication block, and Back / Next Step buttons keep it clear.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(249,168,212,0.15)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Delivery &amp; Handover</span>
              <span className="prd-section-item__desc">The disease activity measures, current DMARD and biologic schedule, and safety flags are compiled into a structured handover, so the rheumatologist sees the patient-reported picture on opening the consultation, with flares and missed doses highlighted.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">CORE FUNCTIONAL MODULES</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Progress &amp; Language Bar</span>
              <span className="prd-section-item__desc">Clinic identity, the current section label, a completion percentage, and the BM toggle.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Patient Particulars</span>
              <span className="prd-section-item__desc">Name as per IC or passport, IC or passport number, an optional clinic RN number, age, and gender.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Vital Signs &amp; Measurements</span>
              <span className="prd-section-item__desc">A screening desk step for blood pressure, pulse, temperature, height, and weight.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">04</span>
              <span className="prd-section-item__title">Primary Condition</span>
              <span className="prd-section-item__desc">Single-choice cards for Rheumatoid Arthritis, Systemic Lupus Erythematosus, Psoriatic Arthritis, Ankylosing Spondylitis / Axial SpA, Gout / Hyperuricaemia, and Osteoarthritis.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">05</span>
              <span className="prd-section-item__title">Multi-System Symptom Screening</span>
              <span className="prd-section-item__desc">A two-column checklist across thirteen flare indicators, including joint pain and swelling, severe fatigue, facial rash, sun sensitivity, mouth ulcers, hair fall, Raynaud's, dry eyes or mouth, red painful eyes, fever, chest pain or breathlessness, and frothy urine or leg swelling, plus a required free-text reason for the visit.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">06</span>
              <span className="prd-section-item__title">Pain Score &amp; Morning Stiffness</span>
              <span className="prd-section-item__desc">A 0–10 slider with live numeric and descriptive feedback (for example 3 / 10 – Mild Pain) and a green-to-red track, plus stiffness duration cards from none to longer periods to help separate inflammatory from mechanical burden.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">07</span>
              <span className="prd-section-item__title">Medication Regimen</span>
              <span className="prd-section-item__desc">A repeatable medicine and dose block, with a tip card listing common agents to reduce spelling errors.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">08</span>
              <span className="prd-section-item__title">Adherence &amp; Safety</span>
              <span className="prd-section-item__desc">Pill-style cards covering the past four weeks, from never missing a dose to missing doses most weeks, under supportive wording that encourages honest answers.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>An interactive pain gauge gives real-time numeric and descriptive feedback, improving the precision of patient-reported outcomes</li>
            <li>A dynamic multi-drug builder with a tip card of standard regimens helps patients record medicines correctly</li>
            <li>A high-density autoimmune triage grid lets a systemic review cover many red-flag domains quickly</li>
            <li>Sequential breadcrumbs and persistent Back / Next buttons prevent premature submission</li>
            <li>Non-judgmental adherence wording — "doctors need to know real compliance to make safe prescribing decisions" — encourages candid reporting of missed doses</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">GOVERNANCE &amp; SCOPE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>An adjunct pre-assessment screening tool for rheumatology outpatient consultations</li>
              <li>Self-reported pain, stiffness, and adherence do not replace physical joint examination, laboratory inflammatory markers, or the physician's clinical judgment</li>
              <li>Identification details are entered into the form, so a shared tablet should be cleared between patients</li>
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
                  <th>Verbal History</th>
                  <th style={{ color: ACCENT }}>Klinik Reumatologi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Pain Reporting</td>
                  <td>Described from memory</td>
                  <td>Recorded on a 0–10 slider before the visit</td>
                </tr>
                <tr>
                  <td>Morning Stiffness</td>
                  <td>Estimated aloud</td>
                  <td>Chosen from standard duration bands</td>
                </tr>
                <tr>
                  <td>Medication List</td>
                  <td>Recalled, often incomplete</td>
                  <td>Entered drug by drug with doses</td>
                </tr>
                <tr>
                  <td>Adherence</td>
                  <td>Rarely volunteered</td>
                  <td>Asked in a supportive, structured way</td>
                </tr>
                <tr>
                  <td>Systemic Review</td>
                  <td>Covered as time allows</td>
                  <td>Same thirteen-point checklist for every patient</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">STRATEGIC IMPACT</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">🔥</span>
              <span className="prd-section-item__title">Flares Visible at the Start of the Visit</span>
              <span className="prd-section-item__desc">Symptom, pain, and stiffness data are in front of the rheumatologist at the beginning, so the consultation starts with the disease activity picture.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">💊</span>
              <span className="prd-section-item__title">Safer Prescribing Decisions</span>
              <span className="prd-section-item__desc">An accurate drug list and honest adherence picture help the clinician decide whether a flare calls for a change in treatment or support with taking it.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">⏱️</span>
              <span className="prd-section-item__title">Consultation Time for Examination</span>
              <span className="prd-section-item__desc">With history gathered in the waiting hall, appointment time goes to the joint examination and shared decisions.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Rheumatology Specialty Service &amp; Clinical Informatics Working Group · National Medical Services, Kementerian Kesihatan Malaysia</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
