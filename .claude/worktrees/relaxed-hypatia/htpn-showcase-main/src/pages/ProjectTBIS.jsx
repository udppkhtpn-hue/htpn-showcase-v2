import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#fdba74'
const DEMO_URL = 'https://u1.padletusercontent.com/uploads/padlet-uploads-usc1/6344013405/dbf2d9f4aed82e4c235a021702df9584/simulasi_cetakan_tbis_10a_1.html?token=HkiZ1jL59LjVwzSeGM26NLweN4Tdii4YREEOI8Wa83FzLSekC2SAasplPjWKK9cn0NmIM1NJ7BJSx3K4T1RO8_VfK6HuF6yCSM-t6mRoY9qwYwgH2JKTM5sFLe0-cwRb_GekKOGCECPkmwjYM0XvP_dsksSbFXWC4Uof0oslxJ8vhkyCQcyS-D1mPZqGekAf9oe_RQvLBUOD9rbzPr-khq9Gm60pRgsv_CBcZHhLGAH-PBRe1yESgAC3SOCc8cIX84SneNdfKmrcj-V1lSbsGg=='

export default function ProjectTBIS() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>TBIS 10A-1 Digital — TB Notification &amp; Episode Form · HTPN HIO</title>
        <meta name="description" content="A digital reproduction of the five-page Borang TBIS 10A-1 (Pindaan 2024) tuberculosis notification — guided data capture with validation, a printable five-page dossier, and email dispatch to district health authorities." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/tbis-10a1" />
        <meta property="og:title" content="TBIS 10A-1 Digital — TB Notification Form · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/tbis-10a1" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">TBIS 10A-1 Digital — Borang Notifikasi Rawatan &amp; Episod Tibi</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#20 · Doctor's Journey</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">TB Notification</span>
          <span className="detail-tag">Disease Surveillance</span>
          <span className="detail-tag">Bahasa Malaysia</span>
        </div>

        <p className="detail-subtitle">
          A digital reproduction of the five-page Borang TBIS 10A-1 (Pindaan 2024) for medical officers, clinic doctors, and TB surveillance nurses — replacing a handwritten, error-prone statutory register with a guided, validated form that prints as the official schedule or is sent to district health inspectors by email.
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
              <span className="spec-card-new__value">Clinician-Facing · Public Health Notification Desk</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Tech Stack</span>
              <span className="spec-card-new__value">Semantic HTML5 / responsive CSS (document emulation) / ES6+ JavaScript</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Data Handling</span>
              <span className="spec-card-new__value">Client-side state, browser cache, and email dispatch</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Form</span>
              <span className="spec-card-new__value">TBIS 10A-1 (Pindaan 2024) · 5 pages</span>
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
            Tuberculosis is a notifiable disease, and the notification is a long, structured form — demographics, risk factors, Mantoux results, laboratory findings, case definition, treatment, and a list of contacts. Filled by hand across five pages, it is easy to leave a field blank or illegible, and every gap delays the public health response.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Incomplete Surveillance Returns</span>
              <span className="prd-section-item__desc">Handwritten forms regularly reached the TB sector with mandatory sections missing, forcing follow-up before the case could be processed.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Cross-Reference Rules Overlooked</span>
              <span className="prd-section-item__desc">Some answers on the form trigger an instruction elsewhere in the TBIS schedule set. On paper, those rules are easy to miss.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Slow Handoff to Field Teams</span>
              <span className="prd-section-item__desc">Paper had to be physically delivered or scanned before health inspectors could begin contact tracing, so tracing started later than it needed to.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(253,186,116,0.15)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Access &amp; Initiation</span>
              <span className="prd-section-item__desc">Opened from a health intranet bookmark or a clinic browser straight into the paginated dossier. There is nothing to install, a Data Contoh button preloads a sample case for orientation, and Kosongkan clears the form.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(253,186,116,0.15)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Active Task &amp; Processing</span>
              <span className="prd-section-item__desc">Clinicians move through five sequential tabs: Data Asas &amp; Alamat, Sejarah Klinikal &amp; Mantoux, Makmal &amp; X-Ray, Episod &amp; Diagnosa, and Senarai Kontak &amp; Pelapor. The form follows the official paper layout, with validation prompts, Ya / Tidak chips for comorbidities, numeric steppers, and patient identifiers carried across pages.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(253,186,116,0.15)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Delivery &amp; Handover</span>
              <span className="prd-section-item__desc">Cetak Borang (5 Muka Surat) prints the official schedule, and Hantar E-mel &amp; Simpan sends the notification package to the health authority — giving a complete return that reaches field teams without delay.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE FIVE PAGES</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Pusat Rawatan &amp; Data Asas</span>
              <span className="prd-section-item__desc">The initiating and continuing treatment centres, patient demographics (name, register number, IC or passport, gender, age, weight, marital status, migration duration), address with a landmark and phone number, and primary and secondary occupation.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Sejarah Penyakit &amp; Mantoux</span>
              <span className="prd-section-item__desc">A Ya / Tidak matrix across twelve comorbidity and risk markers plus a free-text field, an amber callout telling health inspectors how to cross-reference positive risks with the related TBIS schedule, and the BCG scar and Mantoux test record with reading date, induration, interpretation, and reaction flags.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Makmal &amp; X-Ray</span>
              <span className="prd-section-item__desc">Microbiological findings — sputum microscopy, molecular assays, culture, and drug sensitivity — and the chest radiograph classification.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">04</span>
              <span className="prd-section-item__title">Episod &amp; Diagnosa</span>
              <span className="prd-section-item__desc">The definitive clinical classification, anatomical site (pulmonary or extrapulmonary), case definition (new, relapse, retreatment after default or failure), and the prescribed anti-TB regimen.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">05</span>
              <span className="prd-section-item__title">Senarai Kontak &amp; Pelapor</span>
              <span className="prd-section-item__desc">A table of household and workplace contacts for screening, with the reporting medical officer's credentials, registration number, and sign-off timestamp.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>Exact regulatory emulation — reproduces the typography, crests, and section labelling of the official TBIS 10A-1 (Pindaan 2024) schedule</li>
            <li>Inline amber guidance callouts above affected fields carry the cross-referencing rules so they are not omitted</li>
            <li>A five-part progress tracker with clear page indicators removes navigation ambiguity across a long statutory form</li>
            <li>Binary Ya / Tidak chips let clinicians complete twelve risk screenings with minimal mouse movement</li>
            <li>Dual output — a print stylesheet for the paper record and a direct digital route to the health authority</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">GOVERNANCE &amp; SCOPE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>Tuberculosis is a statutory notifiable disease under the Prevention and Control of Infectious Diseases Act 1988 (Act 342)</li>
              <li>Clinical risk factors, Mantoux measurements, and contact lists must be verified by designated medical personnel and registered health inspectors</li>
              <li>The form carries identifiable patient data — it should be completed and sent only through authorised workstations and channels</li>
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
                  <th>Paper TBIS 10A-1</th>
                  <th style={{ color: ACCENT }}>TBIS 10A-1 Digital</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Completeness</td>
                  <td>Blank or illegible fields discovered later</td>
                  <td>Guided pages with validation prompts</td>
                </tr>
                <tr>
                  <td>Cross-Reference Rules</td>
                  <td>Easy to overlook</td>
                  <td>Amber callouts beside the affected fields</td>
                </tr>
                <tr>
                  <td>Comorbidity Screening</td>
                  <td>Ticking boxes across a dense page</td>
                  <td>Ya / Tidak chips for each of twelve markers</td>
                </tr>
                <tr>
                  <td>Submission</td>
                  <td>Physical delivery or scanning</td>
                  <td>Print or email dispatch in one click</td>
                </tr>
                <tr>
                  <td>Format</td>
                  <td>Copied by hand from the schedule</td>
                  <td>Faithful digital copy of the 2024 amendment</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">STRATEGIC IMPACT</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">✅</span>
              <span className="prd-section-item__title">Complete Notifications the First Time</span>
              <span className="prd-section-item__desc">Structured pages and validation reduce returns sent back for missing data, so cases enter surveillance sooner.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🔎</span>
              <span className="prd-section-item__title">Earlier Contact Tracing</span>
              <span className="prd-section-item__desc">Because the contact list travels with the notification, health inspectors can begin screening household and workplace contacts without waiting for paperwork.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">📄</span>
              <span className="prd-section-item__title">Official Format Preserved</span>
              <span className="prd-section-item__desc">The print output matches the statutory schedule, so digital completion does not change what reviewers receive.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Bahagian Kawalan Penyakit (Sektor Tibi / Kusta) · Kementerian Kesihatan Malaysia · Hospital Cyberjaya</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
