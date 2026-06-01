import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#00c9a7'

export default function ProjectEDDashboard() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <div className="detail-container">
        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">Dashboard ED</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#12 · Management Productivity</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">Emergency Dept</span>
          <span className="detail-tag">Bed Capacity</span>
          <span className="detail-tag">Patient Status</span>
          <span className="detail-tag">Real-Time</span>
        </div>

        <p className="detail-subtitle">Real-time patient status and bed capacity monitoring for Jabatan Kecemasan &amp; PAC at HTPN Kajang.</p>

        <div className="detail-block">
          <div className="spec-cards">
            <div className="spec-card-new">
              <span className="spec-card-new__label">Journey</span>
              <span className="spec-card-new__value" style={{ color: ACCENT }}>Management Productivity</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Platform</span>
              <span className="spec-card-new__value">Google Apps Script</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Refresh</span>
              <span className="spec-card-new__value">Every 5 minutes</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value">Live · MOH Domain</span>
            </div>
          </div>
        </div>

        {/* No public demo — MOH domain only */}
        <div className="detail-block">
          <p className="detail-block__text" style={{ fontSize: '12px', color: 'rgba(245,245,240,0.5)', marginTop: '8px' }}>Demo scoped to MOH Google Workspace domain — not publicly accessible.</p>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">What It Does</h2>
          <p className="detail-block__text">A web application serving two audiences: family members tracking loved ones' treatment status in Emergency Department (ED) or Patient Assessment Centre (PAC), and hospital staff monitoring real-time bed occupancy and waiting queues across clinical zones.</p>
          <p className="detail-block__text" style={{ marginTop: '12px', fontSize: '13px', color: 'rgba(245,245,240,0.55)' }}>Uses dummy data only. Pending approval from JKNS &amp; KKM before live deployment.</p>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">Two Audiences</h2>
          <div className="prd-two-col">
            <div className="prd-block-inner">
              <h3>👨‍👩‍👧 Family Members</h3>
              <p>Search by IC number, passport, or patient name (min 4 chars). IC numbers masked (PDPA-compliant). Returns current treatment status in ED or PAC.</p>
            </div>
            <div className="prd-block-inner prd-block-inner--accent">
              <h3>🏥 Clinical Staff</h3>
              <p>Live bed count per zone vs normal capacity. Colour-coded progress bars. Crisis bed activation badges. Average waiting times per zone. Coverage: Bangunan Utama, WCC, PAC.</p>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">Zones Covered</h2>
          <ol className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-num">01</span>
              <div>
                <span className="prd-section-title">Zon Merah — Bangunan Utama</span>
                <span className="prd-section-desc">Red Zone critical care beds</span>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">02</span>
              <div>
                <span className="prd-section-title">Zon Kuning — Bangunan Utama</span>
                <span className="prd-section-desc">Yellow Zone intermediate care beds</span>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">03</span>
              <div>
                <span className="prd-section-title">Zon Hijau — Bangunan Utama</span>
                <span className="prd-section-desc">Green Zone ambulatory patients with queue timer</span>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">04</span>
              <div>
                <span className="prd-section-title">Bilik Pemerhatian — WCC</span>
                <span className="prd-section-desc">Observation room at Women &amp; Child Centre</span>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">05</span>
              <div>
                <span className="prd-section-title">Bilik Asma — WCC</span>
                <span className="prd-section-desc">Asthma room at Women &amp; Child Centre</span>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">06</span>
              <div>
                <span className="prd-section-title">PAC — Ibu Mengandung (WCC)</span>
                <span className="prd-section-desc">Maternity PAC at Women &amp; Child Centre</span>
              </div>
            </li>
          </ol>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">Key Features</h2>
          <ul className="detail-features">
            <li>Crisis alert banner activated when "mod krisis" triggered (red warning)</li>
            <li>Separate queue counters per zone</li>
            <li>Language: Bahasa Melayu</li>
            <li>Backend: Google Sheets with 5-minute auto-refresh</li>
            <li>PDPA-compliant — IC numbers masked in display</li>
            <li>Scoped to MOH Google Workspace domain</li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Built By</span>
            <span className="prd-credit-box__value">Co-developed by Dr Naim · AI Team HTPN Kajang</span>
          </div>
        </div>
      </div>
      <SiteNavigator />
      <Footer />
    </div>
  )
}
