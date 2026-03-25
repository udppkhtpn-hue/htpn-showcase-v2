import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const DEMO_URL = '/obstetric-preconsult.html'
const ACCENT = '#e8547a'

export default function ProjectObstetricPreConsult() {
  const navigate = useNavigate()

  useEffect(() => {
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  const handleBack = () => {
    sessionStorage.setItem('scrollTo', '#projects')
    navigate('/')
  }

  return (
    <div className="detail-page">
      <div className="detail-container">

        {/* Back */}
        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        {/* Header */}
        <header className="detail-header">
          <div className="detail-meta">
            <span className="detail-journey">( Patient's Journey )</span>
            <span className="detail-num">#02</span>
            <span className="detail-badge detail-badge--live">LIVE</span>
          </div>

          <h1 className="detail-title">AntenatalClerk — Obstetric Pre-Consultation</h1>

          <p className="detail-subtitle">
            Mobile-first antenatal clerking form — patients complete 32 structured steps on their own
            phone via QR code while waiting, giving the doctor a full obstetric history before the
            consultation begins.
          </p>

          <p className="detail-credit">
            Co-developed by Dr Koghila, Dr Liyana · O&amp;G Dept, HTPN
          </p>

          <div className="detail-disclaimer">
            ⚠️ This tool supports clinical decision-making and does not replace professional clinical judgment.
          </div>

          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer"
            className="detail-demo-btn" style={{ background: ACCENT, color: '#0a0a0a' }}>
            Open Demo →
          </a>

          <div className="prd-tags" style={{ marginTop: '20px' }}>
            {['Patient App', 'Obstetrics', 'Bilingual', 'Offline-capable'].map(tag => (
              <span key={tag} className="prd-tag">{tag}</span>
            ))}
          </div>
        </header>

        {/* Spec Cards */}
        <div className="spec-cards">
          <div className="spec-card-new">
            <div className="spec-card-new__label">Journey</div>
            <div className="spec-card-new__value" style={{ color: ACCENT }}>Patient's Journey</div>
          </div>
          <div className="spec-card-new">
            <div className="spec-card-new__label">Tech Stack</div>
            <div className="spec-card-new__value">Vanilla JS + HTML</div>
          </div>
          <div className="spec-card-new">
            <div className="spec-card-new__label">Languages</div>
            <div className="spec-card-new__value">English + Bahasa Malaysia</div>
          </div>
          <div className="spec-card-new">
            <div className="spec-card-new__label">Status</div>
            <div className="spec-card-new__value" style={{ color: 'var(--teal)' }}>Live · Deployed</div>
          </div>
        </div>

        {/* Metrics */}
        <div className="detail-block">
          <h2 className="detail-block__title">By the Numbers</h2>
          <div className="prd-metrics">
            <div className="prd-metric">
              <div className="prd-metric__value">32</div>
              <div className="prd-metric__label">Question Steps</div>
              <div className="prd-metric__sub">Structured sequential flow</div>
            </div>
            <div className="prd-metric">
              <div className="prd-metric__value">5–8 min</div>
              <div className="prd-metric__label">Completion Time</div>
              <div className="prd-metric__sub">Average patient completion</div>
            </div>
            <div className="prd-metric">
              <div className="prd-metric__value">8</div>
              <div className="prd-metric__label">Clinical Domains</div>
              <div className="prd-metric__sub">Covering full obstetric history</div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="detail-block">
          <h2 className="detail-block__title">How It Works</h2>
          <div className="prd-workflow">
            <div className="prd-workflow-step">
              <div className="prd-workflow-step__num">01</div>
              <div className="prd-workflow-step__title">QR Code Access</div>
              <p className="prd-workflow-step__desc">
                Staff shares QR code. Patient scans and opens the form directly on their own phone — no
                app install or login needed.
              </p>
            </div>
            <div className="prd-workflow-step">
              <div className="prd-workflow-step__num">02</div>
              <div className="prd-workflow-step__title">32-Step Clerking</div>
              <p className="prd-workflow-step__desc">
                Patient answers 32 structured questions across 8 clinical domains, one question per screen,
                with bilingual support throughout.
              </p>
            </div>
            <div className="prd-workflow-step">
              <div className="prd-workflow-step__num">03</div>
              <div className="prd-workflow-step__title">Output &amp; Handover</div>
              <p className="prd-workflow-step__desc">
                Full structured record with print, clipboard copy, and file download. Doctor receives
                complete obstetric history before consultation.
              </p>
            </div>
          </div>
        </div>

        {/* 8 Clinical Domains */}
        <div className="detail-block">
          <h2 className="detail-block__title">8 Clinical Domains</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-num">01</span>
              <div>
                <div className="prd-section-title">Patient Details (Steps 1–7)</div>
                <p className="prd-section-desc">
                  Name, IC, age, race, religion, clinic, height/weight with BMI using Asian cut-offs
                </p>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">02</span>
              <div>
                <div className="prd-section-title">Pregnancy Dates (Steps 8–9)</div>
                <p className="prd-section-desc">
                  LMP with auto-calculated EDD and gestational age; optional ultrasound EDD
                </p>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">03</span>
              <div>
                <div className="prd-section-title">Blood &amp; Infectious Screening (Steps 10–15)</div>
                <p className="prd-section-desc">
                  Blood group, Rhesus, HIV, Hepatitis B, VDRL/Syphilis, GBS status
                </p>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">04</span>
              <div>
                <div className="prd-section-title">Allergies (Steps 16–17)</div>
                <p className="prd-section-desc">
                  Food and medication allergies with conditional free-text fields
                </p>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">05</span>
              <div>
                <div className="prd-section-title">Medical, Mental Health &amp; Surgery (Steps 18–23)</div>
                <p className="prd-section-desc">
                  Conditions (HTN, DM, Asthma, Thyroid, Heart, Cancer), mental health, medications,
                  surgical history, family history
                </p>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">06</span>
              <div>
                <div className="prd-section-title">Obstetric History (Steps 24–27)</div>
                <p className="prd-section-desc">
                  Gravida number, per-birth details, miscarriages, ectopic pregnancies, period regularity,
                  contraception history
                </p>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">07</span>
              <div>
                <div className="prd-section-title">Social History (Steps 28–31)</div>
                <p className="prd-section-desc">
                  Occupation, household income, lifestyle factors (smoking, alcohol, drugs)
                </p>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">08</span>
              <div>
                <div className="prd-section-title">Summary &amp; Output (Step 32)</div>
                <p className="prd-section-desc">
                  Structured record with print, clipboard copy, and file download options
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Key Features */}
        <div className="detail-block">
          <h2 className="detail-block__title">Key Features</h2>
          <ul className="detail-features">
            <li>Bilingual language selection on first open with in-app toggle</li>
            <li>One question per screen — large tap targets for accessibility</li>
            <li>Auto-calculations for EDD, gestational age, and BMI</li>
            <li>Conditional sub-fields for sensitive topics</li>
            <li>Progress bar and step counter; back button on every step</li>
            <li>Covers sensitive topics (HIV, VDRL, mental health, income) with non-judgmental framing</li>
            <li>No backend storage or data transmission — fully offline-capable</li>
          </ul>
        </div>

        {/* Output Options */}
        <div className="detail-block">
          <h2 className="detail-block__title">Output &amp; Handover Options</h2>
          <div className="prd-output-list">
            {[
              'Doctor copy language selection',
              'Print for paper records',
              'Clipboard copy',
              'Text file download',
              'No backend storage',
            ].map(item => (
              <span key={item} className="prd-output-item">{item}</span>
            ))}
          </div>
        </div>

        {/* Credit */}
        <div className="detail-block">
          <div className="prd-credit-box">
            <div className="prd-credit-box__label">Built By</div>
            <div className="prd-credit-box__value">
              Dr Koghila, Dr Liyana · O&amp;G Dept, Hospital Tengku Permaisuri Norashikin
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="detail-block__cta">
          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer"
            className="detail-demo-btn" style={{ background: ACCENT, color: '#0a0a0a' }}>
            Open Demo →
          </a>
          <button className="detail-back" onClick={handleBack}>← Back to Projects</button>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
