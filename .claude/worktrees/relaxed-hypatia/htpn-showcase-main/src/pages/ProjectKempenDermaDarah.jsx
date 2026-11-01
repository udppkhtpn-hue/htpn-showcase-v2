import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#b91c1c'
const DEMO_URL = 'https://sites.google.com/moh.gov.my/blood-bank-registry-hpd/full-page-embed'

export default function ProjectKempenDermaDarah() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>Kempen Derma Darah — Donor Registration &amp; Collection Registry · HTPN HIO</title>
        <meta name="description" content="A dual-portal blood donation registration, triage, and collection tracking system for blood bank officers, screening nurses, and public donors — QR self-registration, real-time screening tallies, and blood bag barcode traceability." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/kempen-derma-darah" />
        <meta property="og:title" content="Kempen Derma Darah — Donor Registration Registry · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/kempen-derma-darah" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">Kempen Derma Darah</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#04 · Patient's Journey</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">Blood Donation Registry</span>
          <span className="detail-tag">Field Triage</span>
          <span className="detail-tag">Bahasa Malaysia</span>
        </div>

        <p className="detail-subtitle">
          A dual-portal blood donation registration, triage, and collection tracking system used by blood bank officers, screening nurses, and public donors during mobile and hospital donation drives — removing paper intake bottlenecks and manual eligibility tracking at the point of registration.
        </p>

        <div className="detail-block">
          <div className="detail-block__cta">
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="detail-demo-btn" style={{ background: ACCENT, color: '#fff' }}>
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
              <span className="spec-card-new__value">Hybrid — Donor Self-Registration &amp; Clinician Triage Portal</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Tech Stack</span>
              <span className="spec-card-new__value">HTML5 / Modern CSS / Vanilla JavaScript + Custom Embed</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Data Architecture</span>
              <span className="spec-card-new__value">Cloud-linked Drive Registry with browser-side caching</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Donor Access</span>
              <span className="spec-card-new__value">Counter QR standee → mobile browser</span>
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
            A donation drive is a high-throughput queue with a clinical gate in the middle. Donors arrive in bursts, each needs a declaration captured and eligibility screened before phlebotomy, and every bag drawn must be traceable back to the person who gave it. Run on paper, each of those steps becomes a bottleneck at exactly the moment volume peaks.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Paper Intake Bottlenecks</span>
              <span className="prd-section-item__desc">Every donor completed a physical declaration form at the counter, creating queues at reception during peak arrival periods and leaving staff transcribing handwriting rather than screening donors.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Repeated Data Entry for Returning Donors</span>
              <span className="prd-section-item__desc">Regular donors re-declared the same demographics and blood type at every drive, with no lookup against prior records — slowing intake and introducing transcription variance between visits.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Manual Eligibility and Volume Tallying</span>
              <span className="prd-section-item__desc">Screening outcomes and collected volumes were counted by hand at the end of a session, so drive leads had no live picture of how many donors were pending screening, deferred, or already drawn.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(185,28,28,0.15)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Access &amp; Initiation</span>
              <span className="prd-section-item__desc">Donors scan a printed counter standee or tabletop QR code (Kod QR Kaunter / Papar &amp; Cetak Standee QR) on their own phones, while counter staff load the Portal Pentadbir on desktop workstations. No app download — it opens in any mobile browser, with instant returning-donor lookup by IC or passport number.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(185,28,28,0.15)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Active Task &amp; Processing</span>
              <span className="prd-section-item__desc">Donors complete the digital declaration (Borang Penderma) across personal identification and donation history. Counter staff concurrently monitor the live pipeline, search entries with a quick-filter key (Ctrl + K), and conduct on-site screening — supported by predictive auto-fill, colour-coded eligibility badges (Layak, Tidak Layak, Belum Disaring), and direct blood bag volume toggles.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(185,28,28,0.15)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Delivery &amp; Handover</span>
              <span className="prd-section-item__desc">Real-time sync to the cloud registry, automatic computation of total collected volume in litres, and one-click extraction via Eksport CSV — giving immediate handover from reception to the screening officer, full traceability from donor IC to blood bag barcode, and no wait for paper collation.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">CORE FUNCTIONAL MODULES</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Counter QR &amp; Standee Distribution Hub</span>
              <span className="prd-section-item__desc">On-screen and printable display banner (Papar &amp; Cetak Standee QR) generating high-visibility desk QR codes that route donors into self-registration on their own mobile browsers.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Executive Drive Metrics &amp; Volume Tracker</span>
              <span className="prd-section-item__desc">Live drive counters — Jumlah Penderma (total registered), Belum Disaring (pending triage), Layak Menderma (eligible), Tidak Layak (deferred), Beg 350ml / 450ml (bags drawn), and aggregated Jumlah Isipadu in litres.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Rapid Search &amp; Barcode Lookup Console</span>
              <span className="prd-section-item__desc">Keyboard-accessible (Ctrl + K) query system with targeted scopes — Semua, Nama Sahaja, No. KP / Pasport, Kod Bar Beg — plus dropdown filters for blood group, eligibility status, and donor category.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">04</span>
              <span className="prd-section-item__title">Digital Donor Registration Intake</span>
              <span className="prd-section-item__desc">Two-tier capture wizard. Section 1 (Maklumat Pengenalan &amp; Diri): Nama Penuh, No. KP / Pasport / ID, Bangsa, Nombor Telefon, Alamat Emel, Alamat Kediaman. Section 2 (Maklumat Rekod Pendermaan Darah): Kumpulan Darah, Kategori Penderma, Tarikh Pendermaan Terakhir.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">05</span>
              <span className="prd-section-item__title">Active Registry &amp; Phlebotomy Ledger</span>
              <span className="prd-section-item__desc">Donor roster showing Nama &amp; Pengenalan, Darah &amp; Kategori, today's status badge, assigned Beg &amp; Barkod (volume and serial), cumulative Pendermaan count, direct contact links (Hubungi), and row-level view, edit, and delete actions.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>Dual-surface architecture — public self-service intake and administrative triage write to one shared data source</li>
            <li>Rapid returning-donor lookup auto-fills prior demographics and blood type the moment an IC or name is typed</li>
            <li>Physical barcode integration links each digital record to its collection bag by serial (e.g. BB26904128 at 450ml)</li>
            <li>Real-time volume engine derives total litres drawn from cumulative 350ml / 450ml bag capacities</li>
            <li>Keyboard-first administrative ergonomics with Ctrl + K instant retrieval for high-throughput registration desks</li>
            <li>Colour-coded eligibility badges make screening state legible across the whole queue at a glance</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">GOVERNANCE &amp; SCOPE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>Donor registration data, medical screening indicators, and blood bag identification codes are regulated under national clinical transfusion governance</li>
              <li>Pre-donation declarations must be verified by registered medical screening personnel prior to phlebotomy</li>
              <li>The digital form captures declarations — it does not substitute for clinical eligibility assessment</li>
              <li>Barcode linkage maintains an auditable chain from donor identity to collected unit</li>
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
                  <th>Paper Intake Forms</th>
                  <th style={{ color: ACCENT }}>Kempen Derma Darah</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Donor Registration</td>
                  <td>Queue at counter to complete a form</td>
                  <td>QR scan, self-registration on own phone</td>
                </tr>
                <tr>
                  <td>Returning Donors</td>
                  <td>Full re-declaration every drive</td>
                  <td>Auto-fill from prior record on IC entry</td>
                </tr>
                <tr>
                  <td>Eligibility Status</td>
                  <td>Noted on the form, counted at session end</td>
                  <td>Live colour-coded badges across the queue</td>
                </tr>
                <tr>
                  <td>Volume Collected</td>
                  <td>Tallied by hand after the drive</td>
                  <td>Computed continuously in litres</td>
                </tr>
                <tr>
                  <td>Bag Traceability</td>
                  <td>Manual cross-reference of form to bag label</td>
                  <td>Barcode bound to donor record at point of draw</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">STRATEGIC IMPACT</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">⚡</span>
              <span className="prd-section-item__title">Reception Throughput Unblocked</span>
              <span className="prd-section-item__desc">Moving declaration capture onto the donor's own device turns reception from a transcription desk into a verification step — the queue advances at screening speed rather than handwriting speed.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🔗</span>
              <span className="prd-section-item__title">End-to-End Unit Traceability</span>
              <span className="prd-section-item__desc">Binding the bag barcode to the donor record at the moment of draw gives transfusion services an auditable chain of custody without a separate reconciliation pass.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">📊</span>
              <span className="prd-section-item__title">Live Operational Picture</span>
              <span className="prd-section-item__desc">Drive leads can see pending screenings, deferrals, and collected volume as the session runs — allowing staffing and targets to be adjusted mid-drive instead of reviewed afterwards.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Blood Bank &amp; Transfusion Services Unit · Hospital Port Dickson, Ministry of Health Malaysia</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
