import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#818cf8'

export default function ProjectMentalWellbeing() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>Mental Wellbeing Monitoring Portal — HTPN HIO</title>
        <meta name="description" content="A high-frequency, 100% anonymous mental wellness pulse tool for UKKP HTPN — replacing once-a-year screenings with monthly departmental morale tracking to catch clinical burnout early." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/mental-wellbeing" />
        <meta property="og:title" content="Mental Wellbeing Monitoring Portal — HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/mental-wellbeing" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">Mental Wellbeing Monitoring Portal</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#20 · Management Productivity</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">Occupational Health (UKKP)</span>
          <span className="detail-tag">Self-Screening</span>
          <span className="detail-tag">Anonymized Pulse Analytics</span>
        </div>

        <p className="detail-subtitle">
          A high-frequency, 100% anonymous mental wellness pulse tool developed for the Occupational Safety and Health Unit (UKKP) — replacing reactive, once-a-year mental health screenings with proactive, monthly departmental morale tracking to catch clinical burnout early.
        </p>

        <div className="detail-block">
          <div className="spec-cards">
            <div className="spec-card-new">
              <span className="spec-card-new__label">Pillar</span>
              <span className="spec-card-new__value" style={{ color: ACCENT }}>Management Productivity</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Screening Frequency</span>
              <span className="spec-card-new__value">Monthly Pulse Checks</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Anonymity</span>
              <span className="spec-card-new__value">100% — No identity tracking</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Screening Tools</span>
              <span className="spec-card-new__value">Whooley Depression · Anxiety Scale</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#4ade80' }}>Deployed · Monthly Active</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            MOH mandates annual health screenings for hospital personnel — but a 12-month interval is too slow to respond to active clinical burnout. Frontline healthcare teams navigate intense, shift-based stressors that can compromise workplace wellness within weeks.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Fear of Being Singled Out</span>
              <span className="prd-section-item__desc">Healthcare professionals avoid screening tools if they believe a high-risk result will cause them to be personally identified, reported, or routed to mandatory counseling.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Fragmented Team Insights</span>
              <span className="prd-section-item__desc">Hospital directors lack a real-time aggregated mechanism to measure collective morale or systemic mental workload of specific acute zones (ICU, Emergency Department) over time.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Workplace Stigma</span>
              <span className="prd-section-item__desc">Analog forms and tracked internal surveys see critically low participation due to deeply ingrained career security concerns among clinical personnel.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">SCREENING PIPELINE — 2 SECTIONS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">A</span>
              <span className="prd-section-item__title">Whooley Depression Screening</span>
              <span className="prd-section-item__desc">Uses the clinically validated 2-item Whooley matrix to check for indicators of low mood or anhedonia over the past month. Fast, evidence-based, and internationally recognised.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">B</span>
              <span className="prd-section-item__title">Anxiety Screening</span>
              <span className="prd-section-item__desc">Deploys a fast, localized scoring gradient to assess symptoms of persistent nervousness and uncontrollable worry over a 2-week window.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">KEY FEATURES</h2>
          <ul className="detail-features">
            <li>Mobile-optimized — staff check in discretely from personal smartphones between shifts</li>
            <li>Captures only non-identifying metadata: Unit, Job Title, Age — no names or IC numbers</li>
            <li>Instant personal "Screening Summary" displayed directly in the browser viewport</li>
            <li>Localized coping strategies and "Minda Sihat Lifestyle" wellness toolkit</li>
            <li>Built-in Print / PDF export for personal record keeping</li>
            <li>UKKP admin dashboard shows aggregate morale trends per unit — never individual results</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">PRIVACY &amp; GOVERNANCE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>100% absolute anonymity — no data pipeline capable of recording individual identities</li>
              <li>UKKP collects exclusively macro-level, group-aggregated analytics per unit cohort</li>
              <li>Explicit clinical disclaimer: not a diagnostic engine, does not replace formal medical assessment</li>
              <li>Safe-haven framework designed to eliminate participation stigma and drive honest responses</li>
            </ul>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">LEGACY vs DIGITAL — COMPARISON</h2>
          <div className="detail-table-wrap">
            <table className="detail-table">
              <thead>
                <tr>
                  <th>Evaluation Vector</th>
                  <th>Legacy Annual Screening</th>
                  <th style={{ color: ACCENT }}>Digital UKKP Portal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tracking Frequency</td>
                  <td>Annual (once every 12 months)</td>
                  <td>Monthly pulse checks</td>
                </tr>
                <tr>
                  <td>Data Visibility</td>
                  <td>Delayed — manual collation</td>
                  <td>Instant aggregate trends</td>
                </tr>
                <tr>
                  <td>Staff Privacy</td>
                  <td>None — identities tracked</td>
                  <td>100% anonymity</td>
                </tr>
                <tr>
                  <td>Intervention Strategy</td>
                  <td>Reactive — after burnout occurs</td>
                  <td>Proactive — dynamic rota adjustments</td>
                </tr>
                <tr>
                  <td>Participation Friction</td>
                  <td>High — career stigma concerns</td>
                  <td>Zero — safe-haven framework</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">STRATEGIC IMPACT</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">📈</span>
              <span className="prd-section-item__title">Monthly Morale Visualizations</span>
              <span className="prd-section-item__desc">Empowers UKKP and HTPN leadership to observe a high-frequency monthly trajectory of clinical morale across different hospital wings — transforming workforce optimization.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🛡️</span>
              <span className="prd-section-item__title">Proactive Burnout Interventions</span>
              <span className="prd-section-item__desc">Instead of waiting for a crisis, UKKP can dynamically support an entire unit — shifting schedules or adjusting rota structures if a department's aggregate index flags a sharp monthly spike.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">✅</span>
              <span className="prd-section-item__title">Safe-Haven Participation</span>
              <span className="prd-section-item__desc">By guaranteeing zero personal exposure, the app eliminates fear of stigma — unlocking high response rates and delivering accurate, honest data from our most critical clinical zones.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Unit Keselamatan dan Kesihatan Pekerjaan (UKKP) · Hospital Tengku Permaisuri Norashikin</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
