import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#f5c518'

export default function ProjectDLPDashboard() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <div className="detail-container">
        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">Dashboard DLP</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#10 · Management Productivity</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">DLP</span>
          <span className="detail-tag">Facilities</span>
          <span className="detail-tag">Women &amp; Child Centre</span>
          <span className="detail-tag">Streamlit</span>
        </div>

        <p className="detail-subtitle">AI-driven Defect Liability Period tracking and risk management dashboard for WCC — Women &amp; Child Centre.</p>

        <div className="detail-block">
          <div className="spec-cards">
            <div className="spec-card-new">
              <span className="spec-card-new__label">Journey</span>
              <span className="spec-card-new__value" style={{ color: ACCENT }}>Management Productivity</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Platform</span>
              <span className="spec-card-new__value">Streamlit (Python)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Data Source</span>
              <span className="spec-card-new__value">Google Sheets (live CSV)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Refresh</span>
              <span className="spec-card-new__value">Every 60 seconds</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value">Live · Deployed</span>
            </div>
          </div>
        </div>

        {/* Internal use only — no public demo */}
        <div className="detail-block">
          <p className="detail-block__text" style={{ fontSize: '12px', color: 'rgba(245,245,240,0.5)', marginTop: '8px' }}>Internal use only — not publicly accessible.</p>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">What It Is</h2>
          <p className="detail-block__text">A real-time monitoring system for the Warranty &amp; Contract Control team managing defects in a new Ministry of Health facility during its post-handover Defect Liability Period (through November 22, 2026).</p>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">Key Metrics</h2>
          <div className="prd-metrics">
            <div className="prd-metric">
              <span className="prd-metric__value" style={{ color: ACCENT }}>4,610</span>
              <span className="prd-metric__label">Total Defects</span>
              <span className="prd-metric__sub">Across 10 floors and 13+ departments</span>
            </div>
            <div className="prd-metric">
              <span className="prd-metric__value" style={{ color: ACCENT }}>614</span>
              <span className="prd-metric__label">Pending Defects</span>
              <span className="prd-metric__sub">Mostly Public category (455) and Electrical (68)</span>
            </div>
            <div className="prd-metric">
              <span className="prd-metric__value" style={{ color: ACCENT }}>79.8%</span>
              <span className="prd-metric__label">Active Status</span>
              <span className="prd-metric__sub">Operational breakdown</span>
            </div>
            <div className="prd-metric">
              <span className="prd-metric__value" style={{ color: ACCENT }}>13</span>
              <span className="prd-metric__label">Departments</span>
              <span className="prd-metric__sub">Covered in analysis</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">9 Analytics Sections</h2>
          <ol className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-num">01</span>
              <div>
                <span className="prd-section-title">Defect Count by Floor</span>
                <span className="prd-section-desc">Multi-select filters</span>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">02</span>
              <div>
                <span className="prd-section-title">Defect Count by Department</span>
                <span className="prd-section-desc">13 departments</span>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">03</span>
              <div>
                <span className="prd-section-title">Category Pie Chart</span>
                <span className="prd-section-desc">Public 52.1%, Electrical, Mechanical, ICT, Biomedical</span>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">04</span>
              <div>
                <span className="prd-section-title">Defect Category by Level</span>
                <span className="prd-section-desc">Stacked bar chart</span>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">05</span>
              <div>
                <span className="prd-section-title">Defect Category by Department</span>
                <span className="prd-section-desc">Cross-tabulated</span>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">06</span>
              <div>
                <span className="prd-section-title">Pending Defects</span>
                <span className="prd-section-desc">Operational status donut chart</span>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">07</span>
              <div>
                <span className="prd-section-title">Service Disruption</span>
                <span className="prd-section-desc">Days lost per ward by location</span>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">08</span>
              <div>
                <span className="prd-section-title">Clinical Incidence Reports</span>
                <span className="prd-section-desc">Linked to defects</span>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">09</span>
              <div>
                <span className="prd-section-title">ANOVA Statistical Analysis</span>
                <span className="prd-section-desc">Across operational status groups</span>
              </div>
            </li>
          </ol>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">AI Features</h2>
          <ul className="detail-features">
            <li>Auto-generated narrative insights per visualization</li>
            <li>Chi-square testing and Cramér's V interpretation</li>
            <li>ANOVA statistical analysis with automatic commentary</li>
            <li>Pattern detection across departments and categories</li>
            <li>Highlighted recommendations in colored callouts</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">Embedded Workflows</h2>
          <ul className="detail-features">
            <li>DLP WCC user flowchart (defect reporting and escalation)</li>
            <li>PTS complaint flow (Pneumatic Tube System)</li>
            <li>Engineering unit contact numbers (HIJG)</li>
            <li>JHR form submission process for non-urgent defects</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">Tech Stack</h2>
          <div className="prd-tech">
            <span className="prd-tech-item">Streamlit</span>
            <span className="prd-tech-item">Python</span>
            <span className="prd-tech-item">Google Sheets</span>
            <span className="prd-tech-item">Gemini AI</span>
            <span className="prd-tech-item">ANOVA</span>
            <span className="prd-tech-item">Chi-Square</span>
          </div>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Built By</span>
            <span className="prd-credit-box__value">Co-developed by Dr Naim · CC Yati · Unit Pembangunan &amp; Perolehan · HTPN Kajang</span>
          </div>
          <p className="detail-block__text" style={{ fontSize: '12px', color: 'rgba(245,245,240,0.5)', marginTop: '10px' }}>This is a study prototype connected to live facility data. Contains no patient information.</p>
        </div>
      </div>
      <SiteNavigator />
      <Footer />
    </div>
  )
}
