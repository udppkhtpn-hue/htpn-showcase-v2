import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#fb7185'
const SCREENSHOTS = [
  { src: '/e-lampiran-d-app.webp', caption: 'Working build — FUKKM data source, form parameters, and live Lampiran D preview' },
]

export default function ProjectELampiranD() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>Sistem e-Lampiran D HPD — Drug Formulary Listing Application · HTPN HIO</title>
        <meta name="description" content="A digital formulary submission tool for specialists, clinical pharmacists, and the Pharmacy and Therapeutics Committee — auto-populating national formulary (FUKKM) data into an official Lampiran D form with PDF export and direct submission to DIS HPD." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/e-lampiran-d" />
        <meta property="og:title" content="Sistem e-Lampiran D HPD — Formulary Application · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/e-lampiran-d" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--dev">IN DEVELOPMENT</span>
          <h1 className="detail-title">Sistem e-Lampiran D HPD</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#15 · Doctor's Journey</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">Pharmacy Formulary</span>
          <span className="detail-tag">Drug Evaluation</span>
          <span className="detail-tag">Bilingual (MS/EN)</span>
        </div>

        <p className="detail-subtitle">
          A digital submission tool for requesting that a drug be listed on the Hospital Port Dickson formulary — used by medical specialists, clinical pharmacists, and the Pharmacy and Therapeutics Committee (JKUT) to produce an official Lampiran D application without manual drug listing, cross-referencing, or Budget Impact Analysis compilation.
        </p>

        <div className="detail-block">
          <div className="prd-block-inner prd-block-inner--accent">
            <p className="detail-subtitle" style={{ margin: 0 }}>
              <strong style={{ color: ACCENT }}>In development.</strong> This tool is still being built and has not yet been released for routine use by prescribers or the JKUT secretariat. The screenshot below is from the current working build.
            </p>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE WORKING BUILD</h2>
          <div className="detail-shots detail-shots--single">
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
              <span className="spec-card-new__value" style={{ color: ACCENT }}>Doctor's Journey</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Workflow Stream</span>
              <span className="spec-card-new__value">Prescriber-Facing · Hospital Pharmacy Administrative Review</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Tech Stack</span>
              <span className="spec-card-new__value">HTML5 / CSS3 / ES6+ JavaScript + AI-assisted drafting</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Formulary Data</span>
              <span className="spec-card-new__value">1,697 FUKKM records via Google Drive, with offline CSV fallback</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Output</span>
              <span className="spec-card-new__value">PDF download · email to DIS HPD</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#f59e0b' }}>In Development · Hospital Port Dickson</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            Getting a new medicine onto a hospital formulary means a prescriber must justify it against what is already available — its approved indications, who may prescribe it, how it compares on cost, and what it would do to the budget. Preparing that on a paper form is slow, and errors in the formulary data it depends on are easy to introduce.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Manual Drug Listing</span>
              <span className="prd-section-item__desc">Applicants re-typed generic names, strengths, indications, and prescriber categories from reference lists, introducing transcription errors into a formal committee submission.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Disconnected Formulary Cross-Referencing</span>
              <span className="prd-section-item__desc">Comparing a proposed drug against facility alternatives, unit prices, and annual treatment costs meant consulting separate documents by hand.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Burdensome Budget Impact Analysis</span>
              <span className="prd-section-item__desc">Compiling the clinical justification and BIA behind each request was tedious, and inconsistent formatting made committee review slower.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(251,113,133,0.15)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Access &amp; Initiation</span>
              <span className="prd-section-item__desc">Opened from the hospital intranet portal or a clinical web link, which connects to the national formulary database automatically. It reads 1,697 pre-indexed FUKKM drug records from Google Drive, or from a local CSV if offline, with no user registration.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(251,113,133,0.15)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Active Task &amp; Processing</span>
              <span className="prd-section-item__desc">The clinician searches and selects the generic drug, which fills in the FUKKM indications, dosage standards, and prescriber category on the digital Lampiran D. A split-screen layout keeps the parameter controls on the left and a live preview of the official form on the right.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(251,113,133,0.15)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Delivery &amp; Handover</span>
              <span className="prd-section-item__desc">One click compiles the PDF (Muat Turun PDF), and Emel ke DIS HPD forwards it to the pharmacy secretariat — a standardised application reaches the JKUT review panel with pre-validated pharmacological data and no formatting errors.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">CORE FUNCTIONAL MODULES</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">FUKKM Database Sync Engine</span>
              <span className="prd-section-item__desc">Shows sync health (1,697 records from Google Drive FUKKM), the default Drive file link, a manual sync trigger (Segerak Dari Google Drive), and an offline fallback uploader for a local CSV (Muat Naik / Kemas Kini Fail CSV Tempatan).</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Form Parameter Controller</span>
              <span className="prd-section-item__desc">The primary entry panel, where the user selects the generic drug name from a live-filtered, scrollable FUKKM list — for example Dapagliflozin, Semaglutide, or Tirzepatide.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Prescriber &amp; Indication Mapping</span>
              <span className="prd-section-item__desc">Extracts and presents the official formulary metadata: Indikasi dalam FUKKM, Kategori Preskriber as a visual badge (e.g. Kategori A*), Nama Dagangan, and the Indikasi yang Dicadangkan untuk Formulari HPD.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">04</span>
              <span className="prd-section-item__title">Standardised Document Canvas</span>
              <span className="prd-section-item__desc">The official Lampiran D layout: drug details (generic name with dosage form and strength, trade name, FUKKM indication and prescriber category, proposed indication), dose, frequency and duration of treatment, facility formulary alternatives with unit price and annual cost per patient (Rujukan Formulari Ubat HPD 2025), and a justification checklist covering therapeutic advantage, lower cost, and improved patient compliance.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">05</span>
              <span className="prd-section-item__title">Clinical Decision &amp; Dispatch Utilities</span>
              <span className="prd-section-item__desc">Top-bar actions for AI-assisted clinical and budget evaluation (Bantuan Klinikal &amp; BIA), PDF compilation, and direct transmission to DIS HPD.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>Split-pane synchronous emulation — data entry on the left, a live rendering of the formal paper form on the right</li>
            <li>Automated pharmacological population pulls generic formulations, indications, and prescriber restrictions straight from indexed national data, removing transcription errors</li>
            <li>Dual-source resilience — cloud fetching from Google Drive with local CSV ingestion, so the tool works if connectivity drops</li>
            <li>Integrated AI pharmacoeconomic support for drafting Budget Impact Analyses and clinical justifications</li>
            <li>Zero-friction submission — formatted PDF and direct routing to DIS HPD, without a mail client or printing</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">GOVERNANCE &amp; SCOPE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>Submissions are formal requests for inclusion in the Hospital Port Dickson Medication Formulary (Formulari Ubat HPD) under JKUT</li>
              <li>Proposed indications, prescriber categories (e.g. Kategori A*), and dosing regimens must follow current Ministry of Health therapeutic frameworks and certified institutional formulary guidelines</li>
              <li>AI-assisted output supports drafting only — clinical and financial claims remain the applicant's responsibility</li>
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
                  <th>Paper Lampiran D</th>
                  <th style={{ color: ACCENT }}>Sistem e-Lampiran D</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Drug Details</td>
                  <td>Typed by hand from reference lists</td>
                  <td>Auto-populated from 1,697 FUKKM records</td>
                </tr>
                <tr>
                  <td>Prescriber Category</td>
                  <td>Looked up and copied</td>
                  <td>Pulled from the national formulary as a badge</td>
                </tr>
                <tr>
                  <td>Budget Impact Analysis</td>
                  <td>Compiled separately</td>
                  <td>AI-assisted drafting inside the workflow</td>
                </tr>
                <tr>
                  <td>Review Format</td>
                  <td>Varies by applicant</td>
                  <td>One standardised official layout</td>
                </tr>
                <tr>
                  <td>Submission</td>
                  <td>Print and deliver by hand</td>
                  <td>PDF download and direct email to DIS HPD</td>
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
              <span className="prd-section-item__title">Cleaner Submissions for the Committee</span>
              <span className="prd-section-item__desc">Pre-validated data and a single standard layout mean JKUT reviews the clinical case rather than correcting formatting and transcription errors.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">⚡</span>
              <span className="prd-section-item__title">Faster Preparation for Specialists</span>
              <span className="prd-section-item__desc">Selecting a drug fills most of the form, so prescribers spend their time on justification instead of copying reference data.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">💰</span>
              <span className="prd-section-item__title">Cost Comparison Built In</span>
              <span className="prd-section-item__desc">Placing the proposed drug beside formulary alternatives with unit and annual costs puts the financial argument in front of the committee from the first page.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Urusetia JKUT (Jawatankuasa Ubat dan Terapeutik) · Jabatan Farmasi, Hospital Port Dickson, Kementerian Kesihatan Malaysia</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
