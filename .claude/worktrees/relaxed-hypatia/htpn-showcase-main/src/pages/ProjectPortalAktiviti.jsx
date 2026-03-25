import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#7c3aed'

export default function ProjectPortalAktiviti() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <div className="detail-container">
        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">Portal Aktiviti JPPOBG</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#15 · Management Productivity</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">O&amp;G</span>
          <span className="detail-tag">Reporting</span>
          <span className="detail-tag">Social Media</span>
          <span className="detail-tag">Annual Report</span>
        </div>

        <p className="detail-subtitle">Central activity portal for all JPPOBG sub-committees across Malaysia — one submission flow that auto-generates a formal annual report for KKM and ready-to-post content for Facebook, Instagram, and TikTok.</p>

        <div className="detail-block">
          <div className="spec-cards">
            <div className="spec-card-new">
              <span className="spec-card-new__label">Journey</span>
              <span className="spec-card-new__value" style={{ color: ACCENT }}>Management Productivity</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Platform</span>
              <span className="spec-card-new__value">Web App (React)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Backend</span>
              <span className="spec-card-new__value">Cloud sync — all devices</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value">Live · Deployed</span>
            </div>
          </div>
        </div>

        {/* Live on CodeSandbox — note instead of standard demo button */}
        <div className="detail-block">
          <p className="detail-block__text" style={{ fontSize: '12px', color: 'rgba(245,245,240,0.5)', marginTop: '8px' }}>Live on CodeSandbox — accessible via shared link.</p>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">What It Solves</h2>
          <p className="detail-block__text">Centralises activity documentation previously requiring separate emails, Word files, and manual caption writing — into one submission flow serving a live dashboard, formal KKM annual report, and social media content simultaneously.</p>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">Three Tabs</h2>
          <ol className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-num">T1</span>
              <div>
                <span className="prd-section-title">Borang (Activity Submission)</span>
                <span className="prd-section-desc">Activity title, sub-committee (13 options), activity type (10 categories), dates, state (16 states), participant count, location, objectives, highlights, summary, minimum 1 photo required.</span>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">T2</span>
              <div>
                <span className="prd-section-title">Dashboard</span>
                <span className="prd-section-desc">Card view with filters by year/month/unit, edit capabilities, "Jana Konten" social media generator, cloud storage indicator.</span>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">T3</span>
              <div>
                <span className="prd-section-title">Laporan (Annual Report)</span>
                <span className="prd-section-desc">Year selection (2024–2028), formal header, activity statistics, full narratives with photos, single-click PDF export for KKM submission.</span>
              </div>
            </li>
          </ol>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">Social Media Generator</h2>
          <div className="prd-features">
            <div className="prd-feature">
              <span className="prd-feature__title">Facebook</span>
              <span className="prd-feature__desc">Formal official posts with complete program details and copy button.</span>
            </div>
            <div className="prd-feature">
              <span className="prd-feature__title">Instagram</span>
              <span className="prd-feature__desc">Emoji-enhanced captions with hashtags and copy function.</span>
            </div>
            <div className="prd-feature">
              <span className="prd-feature__title">TikTok</span>
              <span className="prd-feature__desc">Brief punchy captions with achievement emojis and trending hashtags (#JPPOBG #MyGynae #OandGMalaysia).</span>
            </div>
            <div className="prd-feature">
              <span className="prd-feature__title">KKM Report</span>
              <span className="prd-feature__desc">Single-click PDF export formatted for official KKM annual submission.</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">Activity Types</h2>
          <div className="prd-tech">
            <span className="prd-tech-item">CME/CPD</span>
            <span className="prd-tech-item">Workshops</span>
            <span className="prd-tech-item">Seminars</span>
            <span className="prd-tech-item">Awareness Programs</span>
            <span className="prd-tech-item">Meetings</span>
            <span className="prd-tech-item">Outreach</span>
            <span className="prd-tech-item">Training</span>
            <span className="prd-tech-item">Site Visits</span>
            <span className="prd-tech-item">Courses</span>
            <span className="prd-tech-item">Other</span>
          </div>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Built By</span>
            <span className="prd-credit-box__value">Built by Dr Anita Rina bt Ali · O&amp;G Dept · Fraterniti O&amp;G KKM</span>
          </div>
        </div>
      </div>
      <SiteNavigator />
      <Footer />
    </div>
  )
}
