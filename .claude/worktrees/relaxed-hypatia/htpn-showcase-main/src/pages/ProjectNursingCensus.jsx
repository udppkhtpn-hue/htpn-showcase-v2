import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#38bdf8'
const SCREENSHOTS = [
  { src: '/nursing-census-app.webp', caption: 'Shift census dashboard — occupancy KPIs and the eight-ward movement matrix' },
]
const DEMO_URL = 'https://sites.google.com/moh.gov.my/cencushpdnursing/full-page-embed'

export default function ProjectNursingCensus() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>Laporan Harian Kejururawatan HPD — Nursing Daily Census · HTPN HIO</title>
        <meta name="description" content="A shift-by-shift inpatient census, bed occupancy, and nursing workforce tracking application for Hospital Port Dickson — official Bed Occupancy Rates, ward movement matrices, and shift nursing ratios with print and CSV export." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/nursing-census" />
        <meta property="og:title" content="Laporan Harian Kejururawatan HPD — Nursing Census · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/nursing-census" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">Laporan Harian Kejururawatan Hospital Port Dickson</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#41 · Management Productivity</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">Nursing Bed Census</span>
          <span className="detail-tag">Workforce Governance</span>
          <span className="detail-tag">Bahasa Malaysia</span>
        </div>

        <p className="detail-subtitle">
          A shift-by-shift inpatient census, bed occupancy, and nursing workforce tracker for matrons, ward sisters, and hospital management — replacing paper-based shift handovers with live Bed Occupancy Rates, ward movement figures, and nursing ratios across the Pagi, Petang, and Malam shifts.
        </p>

        <div className="detail-block">
          <div className="detail-block__cta">
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="detail-demo-btn" style={{ background: ACCENT, color: '#0a0a0a' }}>
              Open Demo →
            </a>
          </div>
        </div>

        <div className="detail-block">
          <div className="prd-block-inner prd-block-inner--accent">
            <p className="detail-subtitle" style={{ margin: 0 }}>
              <strong style={{ color: ACCENT }}>Live and operational.</strong> This is not a prototype — the screenshot below is taken from the system in active use by the Nursing Division at Hospital Port Dickson.
            </p>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE SYSTEM IN USE</h2>
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
              <span className="spec-card-new__value" style={{ color: ACCENT }}>Management Productivity</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Workflow Stream</span>
              <span className="spec-card-new__value">Back-Office Admin · Nursing Supervisor &amp; Ward Sister</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Tech Stack</span>
              <span className="spec-card-new__value">HTML5 / CSS3 / JavaScript + Google Sites full-page embed</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Coverage</span>
              <span className="spec-card-new__value">8 main wards · 3 shifts daily</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Bed Baselines</span>
              <span className="spec-card-new__value">117 official · 135 operational</span>
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
            Bed availability changes every shift, and the figures that drive placement decisions — how many patients, how many empty beds, how many nurses — have to be gathered ward by ward. On paper, that count is slow to assemble and already stale by the time it reaches management.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Paper Shift Handovers</span>
              <span className="prd-section-item__desc">Each ward's census was recorded on paper and consolidated by hand at the changeover, so the hospital-wide picture lagged behind the wards.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Delayed Bed Management Reporting</span>
              <span className="prd-section-item__desc">Emergency triage and the Bed Management Unit needed current availability, but received it only after manual tallying — delaying patient placement.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Two Definitions of Capacity</span>
              <span className="prd-section-item__desc">The official gazetted bed count and the beds physically in use differ, and calculating occupancy against both by hand left leadership with an incomplete view of pressure on the wards.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(56,189,248,0.15)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Access &amp; Initiation</span>
              <span className="prd-section-item__desc">Opened through institutional single sign-on or a direct URL on the KKM intranet. Nothing to install — the page initialises the current date, day, and active shift (Pagi 7am–2pm) and synthesises the census tallies on load.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(56,189,248,0.15)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Active Task &amp; Processing</span>
              <span className="prd-section-item__desc">Supervisors switch between shifts, register special alerts (+ Kes Khas, + Pesakit Berjangkit, + Kes DIL), update individual ward ledgers (+ Kemaskini Wad), and record on-duty staff (+ Staf KKM). Occupancy rates recalculate instantly against both capacity baselines, with colour-coded alert blocks and a discipline filter across the eight main wards.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(56,189,248,0.15)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Delivery &amp; Handover</span>
              <span className="prd-section-item__desc">The eight-ward census is computed live, with one-click Cetak (print) and CSV download. Current bed availability reaches executive leadership and emergency triage without delay, and inter-shift handovers carry accurate figures.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">CORE FUNCTIONAL MODULES</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Shift &amp; Temporal Control Bar</span>
              <span className="prd-section-item__desc">Date selector, day badge, shift toggles for Pagi (7am–2pm), Petang (2pm–9pm), and Malam (9pm–7am), plus quick triggers for + Kemaskini Wad and + Staf KKM.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Critical Incident &amp; Category Triggers</span>
              <span className="prd-section-item__desc">Status buttons for urgent patient flags — + Kes Khas, + Pesakit Berjangkit (infectious cases), and + Kes DIL (Dangerously Ill List) — alongside the Cetak and CSV export tools.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Executive Census &amp; Capacity Dashboard</span>
              <span className="prd-section-item__desc">Live telemetry for total current patients with the previous shift's carry-forward, Bed Occupancy Rate against the 117 official and 135 operational beds, remaining empty beds on each baseline, admissions and discharges for the shift (including AOR and deaths), staff and special-case counters, and nurses on duty split by grade.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">04</span>
              <span className="prd-section-item__title">Ward Census Ledger &amp; Movement Matrix</span>
              <span className="prd-section-item__desc">A filterable matrix across Akasia, Bakawali, Cempaka, Dahlia, SCN, NICU, Jasmin, and ICU / CCU, covering official and non-official bed capacity, carry-forward, admissions and transfers in, transfers out, discharge types (D/C, AOR, ABSC, Kematian, T/O Hosp), shift headcount, dual BOR percentages, main discipline (Med, Surg, Ortho, O&amp;G), and nurses deployed by grade.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>Dual bed-capacity engines compute occupancy against the official gazetted count and the operational count, separating the theoretical limit from physical capacity</li>
            <li>High-alert indicators flag any ward over 100% occupancy in red, so overcrowding is visible at a glance</li>
            <li>Discharges are broken into quality-relevant categories — routine, absconded, against medical advice, transfer to another hospital, and mortality</li>
            <li>Nursing staff counts sit inside each ward row, grouped by grade, for direct nurse-to-patient evaluation</li>
            <li>A discipline filter isolates medical, surgical, paediatric, or maternity wards quickly</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">GOVERNANCE &amp; SCOPE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>Serves as the official nursing census record for bed occupancy reporting and workforce allocation</li>
              <li>Figures inform the hospital Bed Management Unit and infection control audits</li>
              <li>Admission, transfer, discharge, and fatality reconciliations must reflect verified ward register entries</li>
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
                  <th>Paper Census Sheets</th>
                  <th style={{ color: ACCENT }}>Laporan Harian Kejururawatan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hospital-Wide Count</td>
                  <td>Consolidated by hand after each shift</td>
                  <td>Computed live across eight wards</td>
                </tr>
                <tr>
                  <td>Occupancy Rate</td>
                  <td>Calculated against one capacity figure</td>
                  <td>Both official and operational baselines at once</td>
                </tr>
                <tr>
                  <td>Overcrowding Visibility</td>
                  <td>Noticed on review</td>
                  <td>Wards over 100% flagged in red</td>
                </tr>
                <tr>
                  <td>Nursing Ratios</td>
                  <td>Staffing and census kept separately</td>
                  <td>Staff by grade inside each ward row</td>
                </tr>
                <tr>
                  <td>Reporting</td>
                  <td>Copied and relayed to management</td>
                  <td>One-click print and CSV download</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">STRATEGIC IMPACT</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">🛏️</span>
              <span className="prd-section-item__title">Faster Patient Placement</span>
              <span className="prd-section-item__desc">Current bed availability is visible to triage and bed management as soon as a ward updates, shortening the wait between a bed becoming free and a patient being placed in it.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">📊</span>
              <span className="prd-section-item__title">An Honest Picture of Capacity</span>
              <span className="prd-section-item__desc">Showing occupancy against both official and operational beds gives leadership the real pressure on the wards rather than a single flattering or alarming number.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🔁</span>
              <span className="prd-section-item__title">Reliable Inter-Shift Handover</span>
              <span className="prd-section-item__desc">Each shift starts from the previous shift's recorded carry-forward, so handovers rest on one shared set of figures.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Unit Kejururawatan (Nursing Division) · Hospital Port Dickson, Kementerian Kesihatan Malaysia</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
