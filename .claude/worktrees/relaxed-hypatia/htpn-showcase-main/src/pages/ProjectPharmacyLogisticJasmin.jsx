import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#14b8a6'
const DEMO_URL = 'https://script.google.com/macros/s/AKfycby0b_HnO1djRuT6qBQNsg7PSzWFwOzdEcjZszgyZivYJNiCyJsnPe6dlUDCezZxDkKg/exec'

export default function ProjectPharmacyLogisticJasmin() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>Sistem Standard Items Pharmacy Logistic Ward Jasmin · HTPN HIO</title>
        <meta name="description" content="A cloud-based ward supply and stock monitoring system for ward nurses, pharmacy inventory managers, and logistics officers — real-time intake, dispatch, buffer thresholds, and stock balances aligned to KEW.PS-7 / KEW.PS-8 asset governance." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/pharmacy-logistic-jasmin" />
        <meta property="og:title" content="Pharmacy Logistic Ward Jasmin — Ward Inventory System · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/pharmacy-logistic-jasmin" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">Sistem Standard Items Pharmacy Logistic Ward Jasmin</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#35 · Management Productivity</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">Ward Pharmacy Logistics</span>
          <span className="detail-tag">KEW.PS Asset Governance</span>
          <span className="detail-tag">Bilingual (EN/MS)</span>
        </div>

        <p className="detail-subtitle">
          A cloud-based ward supply and stock monitoring interface for ward nurses, pharmacy inventory managers, and logistics officers — tracking real-time intake, dispatch, buffer thresholds, and stock balances in line with public sector inventory compliance guidelines (KEW.PS-7 / KEW.PS-8).
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
              <span className="spec-card-new__value">Back-Office Admin · Ward Logistics &amp; Nurse-Facing</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Tech Stack</span>
              <span className="spec-card-new__value">HTML5 / CSS3 / JavaScript + Google Apps Script</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Data Architecture</span>
              <span className="spec-card-new__value">Google Sheets linked database (Google Sheets Terpaut)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Compliance Mapping</span>
              <span className="spec-card-new__value">KEW.PS-7 · KEW.PS-8</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#4ade80' }}>Deployed · Ward Jasmin</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            Ward-level consumable and pharmacy stock is the operational floor beneath every clinical shift — yet it is routinely tracked on paper ledgers and ad-hoc spreadsheets. At Ward Jasmin, this produced delays and discrepancies that only surfaced once an item had already run short.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Invisible Buffer Breaches</span>
              <span className="prd-section-item__desc">Items falling below their immediate-action buffer level were only discovered during physical checks or at the point of need — leaving no lead time to reorder before a stockout affected care readiness.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Manual Balance Reconciliation</span>
              <span className="prd-section-item__desc">Current stock had to be recomputed by hand from brought-forward balances, receipts, and dispatches — an error-prone process repeated across shifts, with no single authoritative figure.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Audit Documentation Burden</span>
              <span className="prd-section-item__desc">Producing KEW.PS-compliant records for asset governance meant retroactively assembling ledgers from scattered notes, rather than exporting from a system that already held verified entries.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(20,184,166,0.15)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Access &amp; Initiation</span>
              <span className="prd-section-item__desc">Opened via a direct Google Apps Script deployment URL on ward workstations or connected tablets. Web access is wired straight to the linked Google Sheets database — zero local installation, no dedicated server overhead.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(20,184,166,0.15)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Active Task &amp; Processing</span>
              <span className="prd-section-item__desc">Immediate status dashboard on load, dynamic search by item name or code, status-based filtering, and new item registration through the "+ Tambah Item Baru" modal. Colour-coded alert metrics flag buffer shortages; date pickers capture receipt (Tarikh Masuk) and distribution (Tarikh Keluar) with automated balance computation.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(20,184,166,0.15)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Delivery &amp; Handover</span>
              <span className="prd-section-item__desc">Real-time synchronisation to the linked spreadsheet, one-click refresh (Segar Semula), CSV export (Eksport CSV), and direct print (Cetak) — yielding traceable consumable levels, mitigated stockout risk, and audit-ready KEW.PS records on demand.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">CORE FUNCTIONAL MODULES</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Executive Stock Metric Cards</span>
              <span className="prd-section-item__desc">Primary operational tallies at a glance — JUMLAH ITEM (SKU), the critical PARAS BUFFER (TINDAKAN SEGERA) warning count, BAWAH PARAS MIN, and PARAS OPTIMUM.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Action &amp; Navigation Toolbar</span>
              <span className="prd-section-item__desc">Quick triggers into formal governance forms (Borang KEW.PS-8 and its linked sheet data), ledger synchronisation (Segar Semula), data extraction (Eksport CSV), and physical documentation (Cetak).</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Real-Time Search &amp; Filtering</span>
              <span className="prd-section-item__desc">Live search input (Cari nama item atau kod…) paired with a categorical status dropdown (Semua Status) and a direct registration action for new entries.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">04</span>
              <span className="prd-section-item__title">Standard Item Inventory Ledger</span>
              <span className="prd-section-item__desc">Tabular ledger capturing the full item profile: BIL, PERIHAL ITEM, KOD / NO, BAKI BAWA HADAPAN, TARIKH MASUK and KEMASUKAN, TARIKH KELUAR and PENGELUARAN, BAKI STOK (SEMASA), plus MIN, BUFFER (SEGERA), and MAX safety thresholds.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>Real-time visual buffer indicators — red-highlighted metrics and dedicated table columns flag items needing urgent restock</li>
            <li>Bi-directional compliance mapping with built-in hooks referencing KEW.PS-7 and KEW.PS-8 asset tracking protocols</li>
            <li>High-contrast data architecture — blue for inbound stock, orange for outbound distribution, dark slate for current balance, red for buffer limits</li>
            <li>Synchronised cloud pipeline to Google Sheets, giving multi-user access across ward shifts without server overhead</li>
            <li>Direct administrative export ergonomics — top-bar CSV download and print layouts for zero-latency shift reports and audit sheets</li>
            <li>Bilingual interface blending Bahasa Malaysia administrative parameters with English medical terminology</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">GOVERNANCE &amp; SCOPE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>This operational tool regulates clinical and consumable stock reserves under KEW.PS asset governance</li>
              <li>Changes to stock ledgers directly affect supply chains and patient care readiness</li>
              <li>Entries must reflect verified physical audits and official dispatch documentation</li>
              <li>Centralised database replaces scattered paper ledgers and departmental spreadsheet registries</li>
            </ul>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ANALOG vs DIGITAL — COMPARISON</h2>
          <div className="detail-table-wrap">
            <table className="detail-table">
              <thead>
                <tr>
                  <th>Evaluation Vector</th>
                  <th>Paper Stock Ledgers</th>
                  <th style={{ color: ACCENT }}>Sistem Standard Items</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Buffer Breach Detection</td>
                  <td>Found during physical checks or at point of need</td>
                  <td>Flagged live on the dashboard with colour-coded alerts</td>
                </tr>
                <tr>
                  <td>Stock Balance</td>
                  <td>Recomputed by hand each shift</td>
                  <td>Automated computation from receipts and dispatches</td>
                </tr>
                <tr>
                  <td>Multi-Shift Access</td>
                  <td>Single physical ledger, one reader at a time</td>
                  <td>Concurrent cloud access across ward shifts</td>
                </tr>
                <tr>
                  <td>KEW.PS Audit Records</td>
                  <td>Retroactively assembled from scattered notes</td>
                  <td>One-click CSV export and print from live data</td>
                </tr>
                <tr>
                  <td>Item Lookup</td>
                  <td>Manual page-by-page search</td>
                  <td>Live search by item name or material code</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">STRATEGIC IMPACT</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">📦</span>
              <span className="prd-section-item__title">Stockout Risk Mitigation</span>
              <span className="prd-section-item__desc">Surfacing buffer breaches the moment they occur converts restocking from a reactive scramble into a scheduled action — protecting care readiness at ward level.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🧾</span>
              <span className="prd-section-item__title">Audit-Ready by Default</span>
              <span className="prd-section-item__desc">Because the ledger is maintained in the system rather than reconstructed for inspection, KEW.PS-compliant documentation becomes an export rather than a project.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">⏱️</span>
              <span className="prd-section-item__title">Reclaimed Nursing Hours</span>
              <span className="prd-section-item__desc">Automated balance computation and live search remove the repetitive arithmetic and manual lookups that consumed nursing and logistics time every shift.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Pharmacy Logistics &amp; Clinical Engineering Team · Ward Jasmin, Ministry of Health Malaysia</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
