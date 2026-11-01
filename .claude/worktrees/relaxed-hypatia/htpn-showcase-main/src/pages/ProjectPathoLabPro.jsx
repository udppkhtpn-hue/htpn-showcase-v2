import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#93c5fd'
const DEMO_URL = 'https://u1.padletusercontent.com/uploads/padlet-uploads-usc1/138452377/594b9ad19e76d1e0624900cd01f78811/patholab_pro_workload_dashboard__1_.html?token=HkiZ1jL59LjVwzSeGM26NLweN4Tdii4YREEOI8Wa83FzLSekC2SAasplPjWKK9cn0NmIM1NJ7BJSx3K4T1RO8_VfK6HuF6yCSM-t6mRoY9rsSi9Vj3CIca-8ZVa5e0Oz3NtgCY38UmwZ4fGp9yFRPfetQMchreHIZOhKj87pph9w5NxZgRJjpJT7iBLa7fUk5fSBv1FkYKQKpR13P5_rcRW1sD7ngsWQuu420OOrDC4x6cyy3CfykIPmZxckT11xrSIxPmN9RT9HggjJtNXkpOia5uxN2jpR72lyT8iuH4k='

export default function ProjectPathoLabPro() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>PathoLab Pro — Anatomic Pathology Workload Tracking · HTPN HIO</title>
        <meta name="description" content="A laboratory workload analytics and spreadsheet processing application for anatomic pathology — real-time specimen and slide tallies, a session audit log, formatted report copy, CSV export, and in-browser editing of on-call spreadsheets." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/patholab-pro" />
        <meta property="og:title" content="PathoLab Pro — Pathology Workload Tracking · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/patholab-pro" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">PathoLab Pro — Anatomic Pathology Workload Tracking &amp; Laboratory Data Management</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#44 · Management Productivity</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">Laboratory Informatics</span>
          <span className="detail-tag">Workload Surveillance</span>
          <span className="detail-tag">Bilingual (EN/MS)</span>
        </div>

        <p className="detail-subtitle">
          A laboratory workload analytics and spreadsheet processing application for medical laboratory technologists, anatomic pathologists, and laboratory managers — replacing paper tally books and shift registers with real-time specimen metrics and in-browser editing of on-call request spreadsheets.
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
              <span className="spec-card-new__value" style={{ color: ACCENT }}>Management Productivity</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Workflow Stream</span>
              <span className="spec-card-new__value">MLTs · Pathologists · Laboratory Managers</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Tech Stack</span>
              <span className="spec-card-new__value">Semantic HTML5 / responsive CSS / Vanilla JavaScript (ES6+)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Data Handling</span>
              <span className="spec-card-new__value">Client-side session state with XLSX / XLS / CSV import and export</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Disciplines</span>
              <span className="spec-card-new__value">Histopatologi · Sitologi · Fine Needle Aspiration</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#4ade80' }}>Deployed · Cyberjaya Hospital Pathology</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            A pathology laboratory has to account for what it does — cases received, samples handled, slides prepared — across several sub-disciplines and care settings. Counted on paper tally sheets and collated after each shift, those numbers arrive late and differ from person to person.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Paper Tally Books</span>
              <span className="prd-section-item__desc">Workload was recorded by hand across fragmented registers, so a day's total depended on someone adding it up.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Post-Round Collation</span>
              <span className="prd-section-item__desc">Returns for on-call shifts and management reports were assembled afterwards from several sources, which invited transcription errors.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Spreadsheet Rosters Needing Office Software</span>
              <span className="prd-section-item__desc">Duty staff had to open full spreadsheet applications just to check or change an on-call request sheet.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(147,197,253,0.15)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Access &amp; Initiation</span>
              <span className="prd-section-item__desc">Opened from the laboratory intranet or a workstation browser, showing the active operator profile and the date. A session starts at once with a live status indicator, and Reset Form clears it.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(147,197,253,0.15)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Active Task &amp; Processing</span>
              <span className="prd-section-item__desc">Staff log specimen metrics for histopathology, cytology, and fine needle aspiration with numeric steppers, add individual patient records through + Add Patient, or load an on-call roster sheet into the Sheet Manager by drag and drop.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(147,197,253,0.15)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Delivery &amp; Handover</span>
              <span className="prd-section-item__desc">Copy Report puts a formatted summary on the clipboard, Export Log (CSV) downloads the raw data, Print Summary produces a report layout, and Export Edited Data saves a modified spreadsheet — so shift returns and handovers are immediate.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">CORE FUNCTIONAL MODULES</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Navigation &amp; Identity Sidebar</span>
              <span className="prd-section-item__desc">A left rail with the Workload Entry, Session Summary, and Sheet Manager tabs and an active operator badge.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Top Control Bar</span>
              <span className="prd-section-item__desc">View title, date, and the global Copy Report and Reset Form actions.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Workload KPI Counters</span>
              <span className="prd-section-item__desc">Live tiles for Total Lab Cases, Total Lab Samples, and Cyto + FNAC Slides, with a status pill confirming data entry is active.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">04</span>
              <span className="prd-section-item__title">Histopathology Module</span>
              <span className="prd-section-item__desc">Numeric entry for the number of cases and the number of samples received.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">05</span>
              <span className="prd-section-item__title">Cytology Module</span>
              <span className="prd-section-item__desc">Gynaecological cytology (Pap smear cases) and non-gynae specimens split by Pleural, Peritoneal, Pericardial, CSF, BAL, Urine, Sputum, and Others, with inpatient and outpatient sample and slide tracking, automatic totals, and + Add Patient.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">06</span>
              <span className="prd-section-item__title">Fine Needle Aspiration Module</span>
              <span className="prd-section-item__desc">Total cases, specimens, ultrasound-guided slides, and stained slides, with inpatient and outpatient allocation and inline patient entry.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">07</span>
              <span className="prd-section-item__title">Session Summary &amp; Audit Log</span>
              <span className="prd-section-item__desc">Summary cards for histopathology, cytology, and FNAC totals, plus a transaction register showing time, patient name, department, details, and type, with CSV export and print.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">08</span>
              <span className="prd-section-item__title">In-Browser Spreadsheet Editor</span>
              <span className="prd-section-item__desc">A Sheet Manager with a dropzone for XLSX, XLS, and CSV files, direct cell editing, Clear Grid, and Export Edited Data, with a clear empty state until a file is loaded.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>Real-time cross-discipline totals update across the cards as inputs change</li>
            <li>Granular specimen categorisation for non-gynae cytology follows standard diagnostic anatomical pathways</li>
            <li>Inpatient and outpatient slicing inside cytology and FNAC supports accurate care-setting reporting for workload distribution</li>
            <li>Zero-footprint spreadsheet ingestion parses XLSX, XLS, and CSV in the browser, so staff can inspect and edit on-call rosters without an office suite</li>
            <li>One-click Copy Report serialises the shift summary for pasting into laboratory chats</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">GOVERNANCE &amp; SCOPE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>Specimen tallies and slide allocations inform laboratory staffing and turnaround-time surveillance</li>
              <li>Entries must correspond to verified laboratory accession numbers</li>
              <li>Spreadsheet changes must keep audit-trail integrity and follow Malaysian public healthcare laboratory governance guidelines</li>
              <li>Patient names appear in the session log, so exports and printed summaries should be handled as confidential records</li>
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
                  <th>Paper Tally Books</th>
                  <th style={{ color: ACCENT }}>PathoLab Pro</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Daily Totals</td>
                  <td>Added up by hand</td>
                  <td>Computed live across all disciplines</td>
                </tr>
                <tr>
                  <td>Shift Return</td>
                  <td>Assembled afterwards</td>
                  <td>Copy Report in one click</td>
                </tr>
                <tr>
                  <td>On-Call Spreadsheets</td>
                  <td>Need an office application</td>
                  <td>Edited directly in the browser</td>
                </tr>
                <tr>
                  <td>Care-Setting Split</td>
                  <td>Noted inconsistently</td>
                  <td>Separate inpatient and outpatient counters</td>
                </tr>
                <tr>
                  <td>Records for Review</td>
                  <td>Photocopied registers</td>
                  <td>CSV export and print-ready summary</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">STRATEGIC IMPACT</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">📊</span>
              <span className="prd-section-item__title">Workload Evidence on Demand</span>
              <span className="prd-section-item__desc">Case, sample, and slide numbers are available the moment a shift ends, supporting staffing discussions with data rather than recollection.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🔁</span>
              <span className="prd-section-item__title">Cleaner Shift Handover</span>
              <span className="prd-section-item__desc">A formatted summary pasted into the team chat replaces a verbal run-through of what was received and processed.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🧾</span>
              <span className="prd-section-item__title">Fewer Transcription Errors</span>
              <span className="prd-section-item__desc">Entering counts once and deriving totals removes the repeated re-copying between registers and reports.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Laboratory Management &amp; Health Informatics Team · Jabatan Patologi, Cyberjaya Hospital</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
