import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const DEMO_URL = '/skin-diary.html'
const ACCENT = '#3b82f6'

export default function ProjectSkinDiary() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">Skin Diary Generator</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#04 · Doctor's Journey</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">Pharmacy</span>
          <span className="detail-tag">Dermatology</span>
          <span className="detail-tag">Patient Education</span>
          <span className="detail-tag">Bilingual</span>
          <span className="detail-tag">Offline</span>
        </div>

        <p className="detail-subtitle">
          Pharmacy tool that instantly generates personalised, bilingual instruction sheets for prescribed dermatology topical creams — eliminating manual handwriting with a fully offline, print-ready app.
        </p>

        <div className="detail-block">
          <div className="spec-cards">
            <div className="spec-card-new">
              <span className="spec-card-new__label">Journey</span>
              <span className="spec-card-new__value" style={{ color: ACCENT }}>Doctor's Journey</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Tech Stack</span>
              <span className="spec-card-new__value">React 18 + Tailwind CSS</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Output</span>
              <span className="spec-card-new__value">Print-ready PDF handout</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#0ea5e9' }}>Live · Deployed</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <div className="detail-block__cta">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="detail-demo-btn"
              style={{ background: ACCENT, color: '#0a0a0a' }}
            >
              Open Demo →
            </a>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ol className="prd-workflow">
            <li>
              <strong>Enter Patient Details</strong> — Input patient name and MRN. Select the prescribed topical medications from the built-in library.
            </li>
            <li>
              <strong>Live Preview</strong> — The app generates a bilingual instruction sheet in real time — body diagram, medication table, and FTU diagram for steroid creams.
            </li>
            <li>
              <strong>Print &amp; Handout</strong> — Print directly from the browser. No data is retained. Patient leaves with a personalised, print-ready instruction sheet.
            </li>
          </ol>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">MEDICATION LIBRARY</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__title">Aqueous Cream (Bath)</span>
              <span className="prd-section-item__desc">Standard emollient bath substitute</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__title">Cetrimide 1% Shampoo</span>
              <span className="prd-section-item__desc">Antiseptic scalp treatment</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__title">Aqueous Cream + 25% Glycerine</span>
              <span className="prd-section-item__desc">Moisturising emollient</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__title">White Soft Paraffin (Vaseline)</span>
              <span className="prd-section-item__desc">Occlusive emollient barrier</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__title">Fusidic Acid Cream</span>
              <span className="prd-section-item__desc">Topical antibiotic for skin infections</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__title">BVC 1:4 (Steroid Cream)</span>
              <span className="prd-section-item__desc">Betamethasone valerate combination</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__title">Hydrocortisone 1% Cream</span>
              <span className="prd-section-item__desc">Mild topical corticosteroid</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__title">Zinc Oxide Cream</span>
              <span className="prd-section-item__desc">Protective barrier cream</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">KEY FEATURES</h2>
          <ul className="detail-features">
            <li>Steroid medications automatically trigger FTU (Fingertip Unit) dosing diagram</li>
            <li>Body diagram (front &amp; back) with labeled application zones</li>
            <li>Bilingual output — English and Bahasa Malaysia</li>
            <li>Medication table with frequencies and application instructions</li>
            <li>Generator credit and date auto-included</li>
            <li>No backend, no data storage — fully offline and private</li>
            <li>Works on any device with a browser</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">CLINICAL IMPACT</h2>
          <p className="detail-block__text">
            Incorrect topical cream application is a primary cause of treatment failure in dermatology. Personalised, illustrated instruction sheets improve patient adherence and reduce re-presentation rates — generated in seconds at the point of dispensing.
          </p>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Built By</span>
            <span className="prd-credit-box__value">Pn Hanim · Farmasi · Paediatric Dermatology, Hospital Tengku Permaisuri Norashikin</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
