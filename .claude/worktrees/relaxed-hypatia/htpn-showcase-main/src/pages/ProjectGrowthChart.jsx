import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'
import ProjectScreenshot from '../components/ProjectScreenshot'

const ACCENT = '#7dd3fc'
const DEMO_URL = 'https://growthchart.netlify.app'

export default function ProjectGrowthChart() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>Clinical Growth Chart App — WHO &amp; CDC Paediatric Growth Charting · HTPN HIO</title>
        <meta name="description" content="An installable web app for clinicians that plots a child's weight, length or height, BMI and head circumference against WHO or CDC reference curves, with a mid-parental target height, growth analysis, and PDF or PNG export." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/growth-chart" />
        <meta property="og:title" content="Clinical Growth Chart App · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/growth-chart" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">Clinical Growth Chart App</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#30 · Clinician's Journey</p>
        </div>

        <ProjectScreenshot />

        <div className="detail-meta">
          <span className="detail-tag">Paediatric Growth</span>
          <span className="detail-tag">WHO &amp; CDC Standards</span>
          <span className="detail-tag">Installable PWA</span>
        </div>

        <p className="detail-subtitle">
          A web growth charting tool for clinicians that plots a child's measurements against WHO or CDC reference standards — weight, length or height, BMI, and head circumference — with a mid-parental target height curve, a growth analysis, and charts that export to PDF or PNG. It installs on a phone, tablet, or computer as a progressive web app.
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
              <span className="spec-card-new__value" style={{ color: ACCENT }}>Clinician's Journey</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Users</span>
              <span className="spec-card-new__value">Clinicians caring for infants, children, and teenagers</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Reference Standards</span>
              <span className="spec-card-new__value">WHO · CDC</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Age Groups</span>
              <span className="spec-card-new__value">Infant 0–2 · Toddler 2–5 · Child / Teen 5–20 years</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Platform</span>
              <span className="spec-card-new__value">Progressive web app · Windows, Mac, Android, iPhone / iPad</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#4ade80' }}>Live · Version 1.14.1</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            Growth is one of the most important signs in child health, but plotting it well is fiddly. Paper charts have to be the right standard for the child's age, points are plotted by hand, prematurity has to be corrected for, and a child's growth only means something when set against where their parents' heights suggest they should end up.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Hand-Plotted Paper Charts</span>
              <span className="prd-section-item__desc">Measurements were plotted manually on printed charts, where small errors in reading age or value move a child across a centile line.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Choosing and Switching Standards</span>
              <span className="prd-section-item__desc">The right reference — WHO or CDC — and the right chart for each age band had to be picked by the clinician every time.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">No Target to Compare Against</span>
              <span className="prd-section-item__desc">Working out a mid-parental target height and drawing it on the chart is rarely done in a busy clinic, so a child's trajectory lacks its most useful reference point.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(125,211,252,0.15)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Access &amp; Initiation</span>
              <span className="prd-section-item__desc">Opened in a browser or installed to the home screen or desktop as a progressive web app, with install instructions for Windows, Mac, Android, and iPhone or iPad.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(125,211,252,0.15)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Active Task &amp; Processing</span>
              <span className="prd-section-item__desc">The clinician enters the patient's name and ID, prematurity and gestational age where relevant, sex, age group, the WHO or CDC reference, both parents' heights, and clinical notes. Measurements are plotted on the matching charts, and the parents' heights give a mid-parental target height drawn as a target growth curve.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(125,211,252,0.15)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Delivery &amp; Handover</span>
              <span className="prd-section-item__desc">Charts export as PDF or PNG, optionally with data sheets and copyable measurement tables, and a QR code moves a patient's data to another device.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">CORE FUNCTIONAL MODULES</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Patient Profile &amp; Context</span>
              <span className="prd-section-item__desc">Name and ID number, prematurity with gestational age in weeks, sex, age group (infant 0–2, toddler 2–5, or child and teen 5–20 years), reference standard, parents' heights in centimetres, and clinical notes.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Growth Charts</span>
              <span className="prd-section-item__desc">Weight-for-age (0–24 months), length or height-for-age, BMI-for-age, and head circumference-for-age, plotted against the selected reference curves.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Mid-Parental Target Height</span>
              <span className="prd-section-item__desc">An estimate of target adult height from the parents' heights, drawn as a target growth curve so the child's trajectory can be read against it.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">04</span>
              <span className="prd-section-item__title">Growth Analysis</span>
              <span className="prd-section-item__desc">A dedicated analysis section alongside the charts.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">05</span>
              <span className="prd-section-item__title">Data Import, Export &amp; Transfer</span>
              <span className="prd-section-item__desc">Import and scan patient data, clear one patient or all of them, export charts as PDF or PNG with optional data sheets and measurement tables, and generate a QR code to move a patient to another device.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">06</span>
              <span className="prd-section-item__title">Guidance Pages</span>
              <span className="prd-section-item__desc">About, User Guide, and Terms &amp; Disclaimer pages, plus device install instructions.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>Two international reference standards in one tool, with the clinician choosing WHO or CDC per patient</li>
            <li>Prematurity is captured with gestational age, so plotting can account for a preterm start</li>
            <li>A mid-parental target curve turns a single plotted point into a comparison with the expected trajectory</li>
            <li>Installs as a progressive web app on every major platform, so it behaves like a native app at the bedside or in clinic</li>
            <li>QR-code transfer moves a patient between devices without a central server</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">GOVERNANCE &amp; SCOPE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>The app states that patient data stays on the device and is kept only for the current session</li>
              <li>Exported PDFs, PNGs, and QR codes carry identifiable patient details and should be handled as clinical records</li>
              <li>A clinical aid — growth interpretation and any referral decision remain with the treating clinician; see the app's Terms &amp; Disclaimer</li>
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
                  <th>Paper Growth Charts</th>
                  <th style={{ color: ACCENT }}>Clinical Growth Chart App</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Plotting</td>
                  <td>By hand on a printed chart</td>
                  <td>Plotted automatically from entered values</td>
                </tr>
                <tr>
                  <td>Reference Standard</td>
                  <td>One printed standard per chart</td>
                  <td>WHO or CDC, chosen per patient</td>
                </tr>
                <tr>
                  <td>Target Height</td>
                  <td>Rarely calculated in clinic</td>
                  <td>Mid-parental target drawn as a curve</td>
                </tr>
                <tr>
                  <td>Sharing</td>
                  <td>Photocopy or a photo of the chart</td>
                  <td>PDF or PNG export, or QR transfer</td>
                </tr>
                <tr>
                  <td>Access</td>
                  <td>Wherever the paper is</td>
                  <td>Installed on phone, tablet, or computer</td>
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
              <span className="prd-section-item__title">More Accurate Growth Assessment</span>
              <span className="prd-section-item__desc">Automatic plotting against the correct reference removes the small manual errors that can shift a child across a centile line.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🎯</span>
              <span className="prd-section-item__title">Growth Read in Context</span>
              <span className="prd-section-item__desc">Seeing the child's curve beside a mid-parental target makes it easier to tell normal short or tall stature from faltering growth.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">📤</span>
              <span className="prd-section-item__title">Easy to Share and Document</span>
              <span className="prd-section-item__desc">Exported charts and data sheets can go into referral letters and case notes without redrawing.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Dr Azwan Faiz · FMS Pahang</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
