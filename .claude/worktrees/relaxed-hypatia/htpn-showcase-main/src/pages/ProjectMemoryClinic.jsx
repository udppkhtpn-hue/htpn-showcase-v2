import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#c084fc'
const DEMO_URL = 'https://u1.padletusercontent.com/uploads/padlet-uploads-usc1/6234605902/7efdf6f274e0132216df8df3b23220d6/geriatric_memory_clinic_pre_consultation_form.html?token=wUjQadwXkr4heQZxhyiKq0vhq_dAvtDGIoyPrhKKJYhB_aw7P9ejE6l1HhOu8JsVmx6jJiFHceEnNVtGoqD2VFTf_DpO1Gcu5v1PTz2MMTTOH5V6I3SqoKHS_yN60nkyeZptLBC-KTRwdDM8muW-AfqbrCJtGVX-yNIQ_A6BMXad3u1K7DE0NNaKwn4wdBKBKfXHg2Ryfrf3tTt6ZVMsNlZGKjY2rxwEtqpAKRMhnMSK3JVAaUEB5gf-2T961MjUIsrf8hCJBFtir3eQJL46niLjhNnUuqktBIRRNG8bYak='

export default function ProjectMemoryClinic() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>Memory Clinic Intake — Geriatric Cognitive Clerking (CPG Aligned) · HTPN HIO</title>
        <meta name="description" content="A pre-consultation cognitive assessment and clerking tool for memory clinics — collecting informant history, symptom progression, and education-adjusted baselines while patients wait, then producing a summary aligned with the Malaysian CPG on Dementia." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/memory-clinic" />
        <meta property="og:title" content="Memory Clinic Intake — Geriatric Clerking · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/memory-clinic" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">Memory Clinic Intake — Geriatric Cognitive Clerking (CPG Aligned)</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#07 · Patient's Journey</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">Geriatric Cognitive Screening</span>
          <span className="detail-tag">Informant History</span>
          <span className="detail-tag">Bilingual (EN/MS)</span>
        </div>

        <p className="detail-subtitle">
          A pre-consultation cognitive assessment and clerking tool for geriatricians, psychogeriatric clinic nurses, patients, and their family caregivers — collecting collateral history, symptom progression, and education-adjusted baselines while the patient waits, and presenting it as a summary aligned with the Malaysian Clinical Practice Guidelines on Dementia.
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
              <span className="spec-card-new__value">Caregiver &amp; Patient Collateral · Clinician Pre-Consultation Clerking</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Tech Stack</span>
              <span className="spec-card-new__value">Semantic HTML5 / responsive CSS3 / Vanilla JavaScript (ES6+)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Data Handling</span>
              <span className="spec-card-new__value">Client-side session state, serialised across the steps</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Languages</span>
              <span className="spec-card-new__value">English with a Bahasa Malaysia (BM) toggle</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#4ade80' }}>Deployed · Memory Clinic</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            A memory clinic assessment depends on a good history — and the person best placed to give it is often not the patient but a spouse or child who has watched the change. Taking that history by hand at the start of a consultation is long, and the patient may be anxious, forgetful, or unable to describe what has changed.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Long Manual Clerking</span>
              <span className="prd-section-item__desc">Geriatric clerking is detailed, and doing it face to face lengthened every new-patient appointment.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Unreliable Single-Source History</span>
              <span className="prd-section-item__desc">A patient's own account of their memory is often incomplete, so a collateral history from a carer is essential but easy to take inconsistently.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Education Affects Scoring</span>
              <span className="prd-section-item__desc">Cognitive test cut-offs depend on years of schooling, which junior staff may not consider unless the question is asked up front.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(192,132,252,0.15)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Access &amp; Initiation</span>
              <span className="prd-section-item__desc">The informant or patient scans a QR code at reception or is given a tablet. The welcome screen opens at once with a language toggle and the first question, who is completing the assessment — no install or sign-up.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(192,132,252,0.15)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Active Task &amp; Processing</span>
              <span className="prd-section-item__desc">Users move through step-locked screens covering the informant's relationship, patient profile, formal education, the main reason for referral, when symptoms began, how they have progressed, and which cognitive domains are affected. Card-style choices with small icons, a live percentage progress bar, and clinical guidance notes under the questions keep it clear.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(192,132,252,0.15)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Delivery &amp; Handover</span>
              <span className="prd-section-item__desc">The answers, clinical flags, and timeline are compiled into a structured clerking summary aligned with the dementia guideline, so the consulting physician starts with the baseline history and cues for the differential.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">CORE FUNCTIONAL MODULES</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Welcome &amp; Informant</span>
              <span className="prd-section-item__desc">Records who is completing the assessment — the patient, a spouse or partner, a son or daughter, or a son- or daughter-in-law — and notes why a reliable informant history matters.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Patient Identification &amp; Age/Gender</span>
              <span className="prd-section-item__desc">Name, NRIC or passport, contact number, age, and gender chips.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Formal Education Level</span>
              <span className="prd-section-item__desc">Four schooling tiers from none to post-secondary, with a callout that fewer than six years of schooling in Malaysia changes the normal cut-offs for common cognitive tests.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">04</span>
              <span className="prd-section-item__title">Chief Concern &amp; Onset</span>
              <span className="prd-section-item__desc">The main reason for the visit — such as repeating questions, getting lost, trouble with money or medication, or personality change — and a timeline from under three months to more than two years, which helps separate recent-onset confusion from progressive decline.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">05</span>
              <span className="prd-section-item__title">Pattern of Progression</span>
              <span className="prd-section-item__desc">Gradual worsening, stepwise drops, or day-to-day fluctuation, each with a note on the clinical picture it can point to.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">06</span>
              <span className="prd-section-item__title">Cognitive Domains Assessment</span>
              <span className="prd-section-item__desc">A tick-all checklist of DSM-5 domains: short-term memory, language and word-finding, visuospatial orientation, and executive function.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>Step-locked flow shows one concept at a time with a clear progress percentage, avoiding overload for elderly patients and families</li>
            <li>Amber clinical advisory banners above the questions give point-of-care guidance for junior doctors and nurses</li>
            <li>Full-width tappable cards with icons make the form easy to use on phones and tablets</li>
            <li>Malaysian context is built in — NRIC formats, bilingual wording, and local education milestones such as SPM</li>
            <li>Progression patterns are linked to the classic clinical pictures at intake, so the clinician has hypotheses before the consultation begins</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">GOVERNANCE &amp; SCOPE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>An adjunct screening and pre-clerking instrument that follows the CPG Management of Dementia (3rd Edition) and DSM-5 criteria</li>
              <li>Self-reported or informant-reported history does not establish a diagnosis</li>
              <li>Functional decline patterns and cut-off interpretations must be validated by a registered medical practitioner</li>
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
                  <th>Clerking in the Room</th>
                  <th style={{ color: ACCENT }}>Memory Clinic Intake</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Informant History</td>
                  <td>Taken during the consultation</td>
                  <td>Entered by the carer while waiting</td>
                </tr>
                <tr>
                  <td>Education Baseline</td>
                  <td>May be overlooked</td>
                  <td>Asked early, with the cut-off warning shown</td>
                </tr>
                <tr>
                  <td>Symptom Timeline</td>
                  <td>Reconstructed from conversation</td>
                  <td>Structured onset and progression choices</td>
                </tr>
                <tr>
                  <td>Cognitive Domains</td>
                  <td>Asked as time allows</td>
                  <td>Standard checklist for every patient</td>
                </tr>
                <tr>
                  <td>Consultation Start</td>
                  <td>Begins with history-taking</td>
                  <td>Begins with a summary note</td>
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
              <span className="prd-section-item__title">Shorter Intake, Better Use of Specialist Time</span>
              <span className="prd-section-item__desc">The geriatrician starts from a prepared history and can spend the visit on examination and discussion with the family.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">👪</span>
              <span className="prd-section-item__title">Carers' Voices Captured</span>
              <span className="prd-section-item__desc">The people who see the decline day to day get a structured way to describe it, rather than being asked to recall it in a few minutes.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🧭</span>
              <span className="prd-section-item__title">Guideline-Aligned Clerking</span>
              <span className="prd-section-item__desc">Every new patient is asked the same core questions, which makes assessments more consistent between clinicians.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Geriatric &amp; Psychogeriatric Clinical Care Informatics Team · Hospital Port Dickson / National Medical Services KKM</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
