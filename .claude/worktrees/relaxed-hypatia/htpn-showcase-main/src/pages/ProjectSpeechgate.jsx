import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'
import ProjectScreenshot from '../components/ProjectScreenshot'

const ACCENT = '#10b981'
const DEMO_URL = 'https://speechgatehtpn.vercel.app/'
const VIDEO_URL = 'https://www.youtube.com/embed/rOzqxuat0Tc'

export default function ProjectSpeechgate() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>SpeechGate — Speech-Language Therapy Screening &amp; Referral · HTPN HIO</title>
        <meta name="description" content="An online screening and referral form for the Speech-Language Therapy Unit, HTPN: patients or parents report a concern in about three minutes, answer guided questions, and receive a reference number and an estimated waiting priority." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/speechgate" />
        <meta property="og:title" content="SpeechGate · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/speechgate" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">SpeechGate</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#16 · Patient's Journey</p>
        </div>

        <ProjectScreenshot />

        <div className="detail-meta">
          <span className="detail-tag">Speech-Language Therapy</span>
          <span className="detail-tag">Referral Intake</span>
          <span className="detail-tag">Bahasa Malaysia / English</span>
        </div>

        <p className="detail-subtitle">
          SpeechGate is an online screening and referral form for the Speech-Language Therapy Unit, Rehabilitation Medicine Department, HTPN. Patients or parents report a speech or language concern, answer a few guided questions, and receive a reference number and an estimated waiting priority. No account is needed.
        </p>

        <div className="detail-block">
          <div className="detail-block__cta">
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="detail-demo-btn" style={{ background: ACCENT, color: '#fff' }}>
              Open Demo →
            </a>
          </div>
        </div>

        <div className="detail-block">
          <figure className="detail-video">
            <div className="detail-video__frame">
              <iframe
                src={VIDEO_URL}
                title="SpeechGate demo video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <figcaption className="detail-shot__caption">Demo video of the app</figcaption>
          </figure>
        </div>

        <div className="detail-block">
          <div className="spec-cards">
            <div className="spec-card-new">
              <span className="spec-card-new__label">Users</span>
              <span className="spec-card-new__value">Patients, and parents or guardians of children with speech or language concerns</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Time to Complete</span>
              <span className="spec-card-new__value">About 3 minutes</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Account</span>
              <span className="spec-card-new__value">None needed for the patient form; the admin view needs a password</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Form</span>
              <span className="spec-card-new__value">Four steps (Maklumat, Masalah, Saringan, Keputusan)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Output</span>
              <span className="spec-card-new__value">Reference number, priority result and estimated waiting time, and a status check</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Language</span>
              <span className="spec-card-new__value">Bahasa Melayu and English, with a toggle in the header</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#4ade80' }}>Live · Speech-Language Therapy Unit, HTPN</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            Speech and language therapy waiting lists are long, and families need a clear way in.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Referrals Arrive on Paper or by Phone</span>
              <span className="prd-section-item__desc">Details are missed, and the unit spends time chasing them.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Families Do Not Know Where They Stand</span>
              <span className="prd-section-item__desc">Without a reference number, they ring to ask about waiting times.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Priority Is Hard to Judge</span>
              <span className="prd-section-item__desc">The unit needs a simple, consistent way to sort urgent cases from routine ones.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(16,185,129,0.2)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Prepare</span>
              <span className="prd-section-item__desc">The landing page lists what to have ready: the patient's MyKid, IC or passport number, two phone numbers, and an optional referral letter.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(16,185,129,0.2)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Fill in Details (Maklumat)</span>
              <span className="prd-section-item__desc">Full name as on the ID, ID type, age, gender, two phone numbers, who referred them, and an optional referral letter upload (PDF, JPG or PNG).</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(16,185,129,0.2)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Choose the Main Problem (Masalah)</span>
              <span className="prd-section-item__desc">The patient or parent picks one main concern.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(16,185,129,0.2)', color: ACCENT }}>04</span>
              <span className="prd-section-item__title">Answer Screening Questions (Saringan)</span>
              <span className="prd-section-item__desc">A short set of questions that helps rank priority.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(16,185,129,0.2)', color: ACCENT }}>05</span>
              <span className="prd-section-item__title">See the Result (Keputusan)</span>
              <span className="prd-section-item__desc">The outcome is shown, and a reference number is issued.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(16,185,129,0.2)', color: ACCENT }}>06</span>
              <span className="prd-section-item__title">Check Status Later (Semak Status Rujukan)</span>
              <span className="prd-section-item__desc">Enter the reference number (for example TPB-260101-1234) to see the referral status.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(16,185,129,0.2)', color: ACCENT }}>07</span>
              <span className="prd-section-item__title">Unit View</span>
              <span className="prd-section-item__desc">A password-protected dashboard shows total submissions, counts by priority (Segera, Biasa, Lambat), a breakdown by problem, and a table of recent referrals.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ESTIMATED WAITING TIMES</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1rem' }}>
            As shown on the app's landing page, which notes that the appointment time and priority depend on the referral letter.
          </p>
          <ul className="detail-features">
            <li>Segera (urgent): 1 to 2 months</li>
            <li>Biasa (normal): 3 months</li>
            <li>Lambat (slow): 4 months or more</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>No account, about three minutes</li>
            <li>Bilingual interface</li>
            <li>Guided four-step form with back and next</li>
            <li>Optional referral letter upload</li>
            <li>Reference number and status lookup</li>
            <li>Priority-based waiting estimate</li>
            <li>Contact details for the unit (phone, email, office hours)</li>
            <li>Admin dashboard with priority distribution and problem breakdown</li>
            <li>Designed for phones, with a bottom menu (Utama, Borang, Status, Admin)</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">GOVERNANCE &amp; SCOPE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>The form collects the patient's full name, ID number, age, gender and two phone numbers, and can take a referral letter</li>
            </ul>
          </div>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Unit Terapi Pertuturan-Bahasa · Jabatan Perubatan Rehabilitasi · HTPN Kajang</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
