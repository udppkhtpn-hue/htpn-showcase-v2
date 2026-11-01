import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#2dd4bf'
const DEMO_URL = 'https://script.google.com/macros/s/AKfycbxSYgRH_BC3mqP-IH9880PCQSmp1ro9uA4Wfp9OpfR976T-xfh8GzHMSVMqxJQiXl5cyw/exec'

export default function ProjectIQCGlucometer() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>IQC Glucometer POCT — Daily Internal Quality Control · HTPN HIO</title>
        <meta name="description" content="A daily internal quality control tracking and surveillance platform for point-of-care glucometers — shift-by-shift QC against active lot targets, ward compliance boards, Levey-Jennings charts, and corrective action registers." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/iqc-glucometer" />
        <meta property="og:title" content="IQC Glucometer POCT — Quality Control · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/iqc-glucometer" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">IQC Glucometer POCT — Kawalan Kualiti Dalaman Harian</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#39 · Management Productivity</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">POCT Quality Control</span>
          <span className="detail-tag">Device Safety</span>
          <span className="detail-tag">Bahasa Malaysia</span>
        </div>

        <p className="detail-subtitle">
          An internal quality control tracking and surveillance platform for ward nurses, medical laboratory technologists, and hospital POCT coordinators — verifying every bedside glucometer against the active control lot before it is used on a patient, with automatic pass/fail evaluation and a documented corrective action trail.
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
              <span className="spec-card-new__value">Nurse Daily QC Entry · Coordinator &amp; MLT Review</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Tech Stack</span>
              <span className="spec-card-new__value">HTML5 / CSS / JavaScript (ES6+) + cloud sync engine</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Data Architecture</span>
              <span className="spec-card-new__value">Cloud database with client-side sync and Excel serial import</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Wards Monitored</span>
              <span className="spec-card-new__value">8 hospital wards and units</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#4ade80' }}>Deployed · Hospital Port Dickson</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            A glucometer that reads wrongly gives a nurse a wrong number at the bedside, and insulin and hypoglycaemia decisions follow from it. Daily quality control is what proves a meter is safe to use — but when it is done on paper across many wards, nobody can see which devices have been checked today, or which have drifted.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Unverified Meters in Use</span>
              <span className="prd-section-item__desc">Without a shared daily record, bedside tests could be run on a glucometer that had not passed QC that day.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Manual Pass/Fail Judgement</span>
              <span className="prd-section-item__desc">Staff compared control readings against the lot's acceptable range by hand, so out-of-range results could be misread or missed.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">No Hospital-Wide View</span>
              <span className="prd-section-item__desc">Coordinators could not see ward compliance or failure trends without collecting paper sheets, which made corrective action slow and audit preparation heavy.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(45,212,191,0.15)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Access &amp; Initiation</span>
              <span className="prd-section-item__desc">Opened from the hospital intranet or a browser bookmark, showing the date, sync status, and tools for importing device serial numbers in bulk. The active control lot's reference ranges are already on screen, so no manual lookup is needed.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(45,212,191,0.15)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Active Task &amp; Processing</span>
              <span className="prd-section-item__desc">Staff pick the ward, then the glucometer serial number registered to it, confirm the shift, and enter the Level 1 (Normal) and Level 2 (High) control readings. Target chips show each level's mean and range, and a status badge moves from Menunggu to pass or fail as the values are entered.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(45,212,191,0.15)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Delivery &amp; Handover</span>
              <span className="prd-section-item__desc">Results sync to the ward compliance board, feed the Levey-Jennings charts, and log any failed device in the corrective action register — clearing meters for patient use, isolating faulty ones quickly, and leaving audit-ready records.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">CORE FUNCTIONAL MODULES</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Navigation &amp; Device Ingestion Hub</span>
              <span className="prd-section-item__desc">Persistent bar with the Data Entry, Monitoring Dashboard, and Records &amp; Corrective Actions views, a live clock and sync indicator, Excel serial import (Import No. Siri), and a settings modal.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Active IQC Lot Reference Banner</span>
              <span className="prd-section-item__desc">Julat Rujukan Lot IQC Aktif publishes the official targets: Tahap 1 (Normal) with a mean of 6.8 mmol/L and a range of 5.5–8.1, and Tahap 2 (Tinggi) with a mean of 16.4 mmol/L and a range of 13.8–19.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Daily IQC Data Entry Form</span>
              <span className="prd-section-item__desc">Captures ward or unit (with a + Urus Wad/Siri configuration modal), the ward's glucometer count, the serial number from a cascading dropdown, test date, shift, and the staff name and employee number.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">04</span>
              <span className="prd-section-item__title">Dual-Level QC Reading Input</span>
              <span className="prd-section-item__desc">Separate cards for the Normal and High control solutions, each taking a decimal reading in mmol/L with its own live status indicator.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">05</span>
              <span className="prd-section-item__title">Monitoring &amp; Compliance Dashboard</span>
              <span className="prd-section-item__desc">KPI tiles for total IQC records, Pass rate, Fail rate, and today's ward compliance, plus a status grid for the eight wards and units (Dewan Bedah, ICU / CCU, Jabatan Kecemasan, Klinik Pakar Aras 2, Wad 1A, Wad 1B, Wad Bersalin, Wad Kanak-Kanak) showing deployed devices and Lulus, Gagal, or Belum Uji pills.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">06</span>
              <span className="prd-section-item__title">Quality Charts &amp; Corrective Action Tracker</span>
              <span className="prd-section-item__desc">A Levey-Jennings chart (Carta Kawalan Kualiti) plotting readings against the minimum, mean, and maximum limits, filterable by single ward or all-ward matrix, alongside a Tindakan Pembetulan Terkini feed that logs failed QC events needing corrective action.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>Cascading device selection — choosing a ward recalculates its glucometer count and limits the serial dropdown to devices registered there</li>
            <li>Inline reference comparison keeps the control lot's mean and limits pinned in view, removing transcription confusion</li>
            <li>Dual-state live validation gives instant feedback on each control level before the form is submitted</li>
            <li>Hospital-wide compliance grid shows unit-by-unit status so missing ward entries are caught before the afternoon handover</li>
            <li>Batch asset ingestion lets biomedical or laboratory staff onboard glucometers from a spreadsheet upload</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">GOVERNANCE &amp; SCOPE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>Daily internal quality control is mandatory before a glucometer is used on patients (Wajib harian sebelum ujian pesakit)</li>
              <li>An out-of-range result (Fail) requires immediate quarantine of the device and a documented corrective action</li>
              <li>Records support national laboratory accreditation and clinical governance standards</li>
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
                  <th>Paper QC Sheets</th>
                  <th style={{ color: ACCENT }}>IQC Glucometer POCT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Pass / Fail Decision</td>
                  <td>Reading compared by hand to the lot range</td>
                  <td>Evaluated automatically against active targets</td>
                </tr>
                <tr>
                  <td>Today's Compliance</td>
                  <td>Known only after sheets are collected</td>
                  <td>Live ward-by-ward board</td>
                </tr>
                <tr>
                  <td>Failed Devices</td>
                  <td>Reported informally</td>
                  <td>Logged in the corrective action register</td>
                </tr>
                <tr>
                  <td>Trend Detection</td>
                  <td>Plotted manually, if at all</td>
                  <td>Levey-Jennings charts by ward</td>
                </tr>
                <tr>
                  <td>Device Register</td>
                  <td>Maintained separately per ward</td>
                  <td>Bulk Excel import with ward-scoped serials</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">STRATEGIC IMPACT</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">🛡️</span>
              <span className="prd-section-item__title">Safer Bedside Glucose Testing</span>
              <span className="prd-section-item__desc">A meter's QC status is visible before it is used, so a failed device is quarantined instead of producing readings that guide insulin decisions.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">📋</span>
              <span className="prd-section-item__title">Audit-Ready Without Preparation</span>
              <span className="prd-section-item__desc">Entries, trends, and corrective actions accumulate as the work is done, so accreditation evidence exists without a separate compilation effort.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🔍</span>
              <span className="prd-section-item__title">Gaps Found the Same Day</span>
              <span className="prd-section-item__desc">The ward grid shows which units have not yet recorded QC, so coordinators can chase omissions before the day ends rather than after.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Makmal Patologi &amp; Unit Kawalan Kualiti POCT · Hospital Port Dickson, Kementerian Kesihatan Malaysia</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
