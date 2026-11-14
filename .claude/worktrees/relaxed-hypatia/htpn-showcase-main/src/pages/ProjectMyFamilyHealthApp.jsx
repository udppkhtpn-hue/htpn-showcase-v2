import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'
import ProjectScreenshot from '../components/ProjectScreenshot'

const ACCENT = '#8b5cf6'
const VIDEO_URL = 'https://drive.google.com/file/d/1-LuzckF5CtRXaYJG4M858fSClQnk-Q4m/preview'
const IOS_URL = 'https://apps.apple.com/my/app/my-family-health-app/id6757536193'
const ANDROID_URL = 'https://play.google.com/store/apps/details?id=com.myfamilyhealth.app&hl=en'

export default function ProjectMyFamilyHealthApp() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>My Family Health App — Family Health Monitoring App · HTPN HIO</title>
        <meta name="description" content="A free mobile app, created by a family medicine specialist, for recording blood pressure and blood sugar, medication reminders, asthma tracking and a family group, on iOS and Android." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/my-family-health-app" />
        <meta property="og:title" content="My Family Health App · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/my-family-health-app" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">My Family Health App</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#03 · Patient's Journey</p>
        </div>

        <ProjectScreenshot />

        <div className="detail-meta">
          <span className="detail-tag">Family Health</span>
          <span className="detail-tag">BP &amp; Blood Sugar</span>
          <span className="detail-tag">iOS &amp; Android</span>
        </div>

        <p className="detail-subtitle">
          My Family Health App is a free mobile app created by a family medicine specialist. Families use it to record blood pressure and blood sugar, get medication reminders, track asthma, keep a food diary and share health information, so that a parent can look after children and an adult child can help elderly parents from one app.
        </p>

        <div className="detail-block">
          <div className="detail-block__cta" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <a href={IOS_URL} target="_blank" rel="noopener noreferrer" className="detail-demo-btn" style={{ background: ACCENT, color: '#0a0a0a' }}>
              Download on the App Store
            </a>
            <a href={ANDROID_URL} target="_blank" rel="noopener noreferrer" className="detail-demo-btn" style={{ background: ACCENT, color: '#0a0a0a' }}>
              Get it on Google Play
            </a>
          </div>
        </div>

        <div className="detail-block">
          <figure className="detail-video">
            <div className="detail-video__frame">
              <iframe
                src={VIDEO_URL}
                title="My Family Health App preview video"
                allow="autoplay"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <figcaption className="detail-shot__caption">Preview video of the app</figcaption>
          </figure>
        </div>

        <div className="detail-block">
          <div className="spec-cards">
            <div className="spec-card-new">
              <span className="spec-card-new__label">Platforms</span>
              <span className="spec-card-new__value">iPhone and iPad (iOS/iPadOS 15.5 or later) and Android</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Languages</span>
              <span className="spec-card-new__value">English, Malay and Simplified Chinese (App Store listing)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Price</span>
              <span className="spec-card-new__value">Free on the App Store (the Play listing did not show a price)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Created By</span>
              <span className="spec-card-new__value">A family medicine specialist</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Modules</span>
              <span className="spec-card-new__value">Info · Wellness · BP · Sugar · Asthma · Family · Task (the seven tabs in the app)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#4ade80' }}>Live on the App Store and Google Play</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            Chronic conditions such as hypertension, diabetes and asthma are managed at home, mostly by families, and the information that clinicians need is hard to collect.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Scattered Home Readings</span>
              <span className="prd-section-item__desc">Blood pressure and sugar readings end up in notebooks or phones, so patterns are hard to see before a clinic visit.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Missed Medication and Warning Signs</span>
              <span className="prd-section-item__desc">Without reminders or alerts, doses are missed and dangerous readings go unnoticed.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Family Carers Have No Shared View</span>
              <span className="prd-section-item__desc">Parents caring for children and adult children caring for elderly parents often cannot see their relatives' readings or help log them.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">APP SCREENS</h2>
          <div className="detail-gallery">
            <figure className="detail-screenshot">
              <div className="detail-screenshot__frame">
                <img src="/screenshots/my-family-health-app-bp.webp" alt="Screen from the app showing a table of blood pressure readings by date, with day and night columns, colour-coded results and a My Clinic BP section" width="390" height="800" loading="lazy" />
              </div>
              <figcaption>Blood pressure log — table of readings by date, with day (6AM–6PM) and night (6PM–6AM) columns, colour-coded results, and a "My Clinic BP" section.</figcaption>
            </figure>
            <figure className="detail-screenshot">
              <div className="detail-screenshot__frame">
                <img src="/screenshots/my-family-health-app-sugar.webp" alt="Screen from the app showing a table of blood sugar readings before and after meals and at bedtime, with food and insulin options and a My HbA1c section" width="390" height="800" loading="lazy" />
              </div>
              <figcaption>Blood sugar log — a table of readings before and after breakfast, lunch, dinner and bedtime, with options to show food and insulin and a "My HbA1c" section.</figcaption>
            </figure>
            <figure className="detail-screenshot">
              <div className="detail-screenshot__frame">
                <img src="/screenshots/my-family-health-app-asthma.webp" alt="Screen from the app showing a log of asthma episodes with severity, symptoms, treatment and triggers, and an asthma action plan" width="390" height="800" loading="lazy" />
              </div>
              <figcaption>Asthma episodes — a log of episodes with severity, symptoms, treatment and triggers, plus an asthma action plan.</figcaption>
            </figure>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(139,92,246,0.18)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Record</span>
              <span className="prd-section-item__desc">Log blood pressure (with pulse), blood sugar by meal time, asthma episodes with symptoms, treatment and triggers, and daily tasks.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(139,92,246,0.18)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Review</span>
              <span className="prd-section-item__desc">See readings in a table or calendar with colour-coded results; blood pressure is also shown by day and night.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(139,92,246,0.18)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Get Reminders and Alerts</span>
              <span className="prd-section-item__desc">Medication reminders and alerts for dangerous readings.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(139,92,246,0.18)', color: ACCENT }}>04</span>
              <span className="prd-section-item__title">Share with Family</span>
              <span className="prd-section-item__desc">Add family members to a family group, set medication reminders for them, review their records and help log their data, with their consent.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(139,92,246,0.18)', color: ACCENT }}>05</span>
              <span className="prd-section-item__title">Learn</span>
              <span className="prd-section-item__desc">The Info tab carries health education posts, and the daily panel tracks tasks, points and weekly exercise targets (aerobic minutes, strength sessions, active days).</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(139,92,246,0.18)', color: ACCENT }}>06</span>
              <span className="prd-section-item__title">Share with the Clinic</span>
              <span className="prd-section-item__desc">Share reports, manage appointments and communicate with healthcare providers.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>Blood pressure and blood sugar monitoring with reminders, alerts for dangerous results, trend analysis and colour-coded feedback</li>
            <li>Medication management with reminders</li>
            <li>Food diary with an AI calorie and salt estimator (App Store listing)</li>
            <li>Asthma and respiratory care: action plans, trigger and inhaler tracking, inhaler technique and emergency care guidance</li>
            <li>Family health system: parents can monitor children, adult children can help elderly parents</li>
            <li>Smart family notifications for missed medications, dangerous readings or emergencies</li>
            <li>Care coordination: sharing reports, managing appointments and communicating with healthcare providers</li>
            <li>Simple games involving light physical activity, memory and fine motor skills</li>
            <li>A guided 4-7-8 breathing exercise for relaxation</li>
            <li>English, Malay and Simplified Chinese (App Store), with text-size and read-aloud controls visible in the app</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">PRIVACY &amp; GOVERNANCE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>
                For what the app collects and how it is handled, see the privacy details on each store listing:{' '}
                <a href={IOS_URL} target="_blank" rel="noopener noreferrer" style={{ color: ACCENT }}>App Store (App Privacy)</a>
                {' · '}
                <a href={ANDROID_URL} target="_blank" rel="noopener noreferrer" style={{ color: ACCENT }}>Google Play (Data safety)</a>
              </li>
              <li>Family members' data is shared only with their consent</li>
              <li>The app supports health self-management and does not replace advice from a doctor</li>
            </ul>
          </div>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Created By</span>
            <span className="prd-credit-box__value">Dr Low Tiong Lim</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
