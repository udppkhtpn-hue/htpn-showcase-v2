import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'
import ProjectScreenshot from '../components/ProjectScreenshot'

const ACCENT = '#6366f1'
const DEMO_URL = 'https://zairulezwan-oss.github.io/Minda-Trek/'
const VIDEO_URL = 'https://drive.google.com/file/d/1ekmwuXKfJ1JEHvPF1zHW2dt8fKG1Tlez/preview'

export default function ProjectMindaTrek() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>Minda Trek — Home Activity Program for Children (Occupational Therapy) · HTPN HIO</title>
        <meta name="description" content="A home-based occupational therapy app for children aged 5 to 12, with 11 game-style activities, star rewards, a daily screen-time guide and progress reports for parents, used under the direction of the child's occupational therapist." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/minda-trek" />
        <meta property="og:title" content="Minda Trek · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/minda-trek" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">Minda Trek</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#14 · Patient's Journey</p>
        </div>

        <ProjectScreenshot />

        <div className="detail-meta">
          <span className="detail-tag">Paediatric Occupational Therapy</span>
          <span className="detail-tag">Home Program</span>
          <span className="detail-tag">Bahasa Malaysia</span>
        </div>

        <p className="detail-subtitle">
          Minda Trek ("Program Aktiviti di Rumah", or Home Program Activity) is a home-based occupational therapy app for children aged 5 to 12. It offers 11 game-style activities, each tied to a skill area, with star rewards and progress reports for parents. It is designed to be used under the direction of the child's occupational therapist and does not replace therapy.
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
                title="Minda Trek demo video"
                allow="autoplay"
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
              <span className="spec-card-new__label">Audience</span>
              <span className="spec-card-new__value">Children aged 5 to 12, with a parent or guardian supervising</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Used Under</span>
              <span className="spec-card-new__value">Direction of a qualified occupational therapist</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Framework</span>
              <span className="spec-card-new__value">Based on the Occupational Therapy Practice Framework, 4th edition (OTPF-4), as stated in the app</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Activities</span>
              <span className="spec-card-new__value">11, across cognitive, fine motor, maths, logic, executive function, attention, self-care, social, behaviour, concept and visual perception skills</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Levels</span>
              <span className="spec-card-new__value">Three levels per activity (Tahap 1 green, Tahap 2 yellow, Tahap 3 red)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Language</span>
              <span className="spec-card-new__value">Mainly Bahasa Malaysia, with an English toggle</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#4ade80' }}>Live · Version 2.0 · Occupational Therapy HTPN Team</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            Occupational therapy for children depends on practice between clinic visits, and families need something engaging, safe and guided.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Practice at Home Is Hard to Keep Up</span>
              <span className="prd-section-item__desc">Children lose interest in repetitive exercises, and parents are unsure what to do between sessions.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Little Visibility of Progress</span>
              <span className="prd-section-item__desc">Parents and therapists have few simple records of what a child practised and how they did.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Screen Time Worries</span>
              <span className="prd-section-item__desc">Parents want a structured activity with a clear daily limit, not open-ended game time.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(99,102,241,0.18)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Start and Read the Guide</span>
              <span className="prd-section-item__desc">A five-step "Cara Guna" (How to Use) guide explains profiles, activities, stars, parent reports and the two-hour daily screen-time guide.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(99,102,241,0.18)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Accept the Guidance</span>
              <span className="prd-section-item__desc">Users read a guide and disclaimer (medical use, parental supervision, screen time, data, therapist direction) and agree before using the app.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(99,102,241,0.18)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Create a Child Profile</span>
              <span className="prd-section-item__desc">Choose an animal avatar, enter a name, age (5 to 12) and gender, and set a 4-digit parent PIN. Several children can have profiles.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(99,102,241,0.18)', color: ACCENT }}>04</span>
              <span className="prd-section-item__title">Play Activities</span>
              <span className="prd-section-item__desc">Choose from 11 activities. Each has three levels, shown with a green, yellow and red legend, and earns stars and points for correct answers.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(99,102,241,0.18)', color: ACCENT }}>05</span>
              <span className="prd-section-item__title">Watch Screen Time</span>
              <span className="prd-section-item__desc">A session timer shows time used against the two-hour guide, with a warning at 90 minutes.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(99,102,241,0.18)', color: ACCENT }}>06</span>
              <span className="prd-section-item__title">Review Progress</span>
              <span className="prd-section-item__desc">"Laporan" (Reports) shows sessions, scores and time, a score-by-activity chart, and skill-area progress by day, week or month, with a print button.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(99,102,241,0.18)', color: ACCENT }}>07</span>
              <span className="prd-section-item__title">Manage Settings</span>
              <span className="prd-section-item__desc">Edit the profile, view screen-time use, read the About section or reset the data.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE 11 ACTIVITIES</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Main Ingat-Ingat</span>
              <span className="prd-section-item__desc">Memory matching (cognitive).</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Conteng Bijak</span>
              <span className="prd-section-item__desc">Tracing letters and shapes (fine motor).</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Kira Laju!</span>
              <span className="prd-section-item__desc">Quick counting (maths).</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">04</span>
              <span className="prd-section-item__title">Jodoh-Jodohkan</span>
              <span className="prd-section-item__desc">Matching and logical reasoning (logic).</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">05</span>
              <span className="prd-section-item__title">Susun Sifu</span>
              <span className="prd-section-item__desc">Sorting by group (executive function).</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">06</span>
              <span className="prd-section-item__title">Tangkap Cepat!</span>
              <span className="prd-section-item__desc">Attention and focus.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">07</span>
              <span className="prd-section-item__title">Aku Boleh!</span>
              <span className="prd-section-item__desc">Self-care and activities of daily living.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">08</span>
              <span className="prd-section-item__title">Fikir Dulu</span>
              <span className="prd-section-item__desc">Conflict resolution (social skills).</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">09</span>
              <span className="prd-section-item__title">Boleh &amp; Tidak Boleh</span>
              <span className="prd-section-item__desc">Rules and behaviour.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">10</span>
              <span className="prd-section-item__title">Tahu Tak Tahu?</span>
              <span className="prd-section-item__desc">Size, colour and shape concepts.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">11</span>
              <span className="prd-section-item__title">Mata Tajam</span>
              <span className="prd-section-item__desc">Following paths (visual perception).</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>Eleven activities, each linked to a skill area</li>
            <li>Three difficulty levels per activity</li>
            <li>Star and points rewards</li>
            <li>Multiple child profiles with a parent PIN</li>
            <li>Daily screen-time guide with a timer and warnings</li>
            <li>Progress reports by activity and skill area, in day, week and month views, which can be printed</li>
            <li>Sound toggle and Bahasa Malaysia / English switch</li>
            <li>Works in a phone browser</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">GOVERNANCE &amp; SCOPE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>The app states that it is not a medical diagnostic tool, that activities should follow the occupational therapist's instructions, that levels should not be changed without consulting the therapist, and that parents must supervise children</li>
              <li>The app states that data is stored locally only (on the device), refers to the Personal Data Protection Act 2010 (PDPA), and offers a "reset data" option in Settings</li>
              <li>It cites the American Academy of Pediatrics guidance for the two-hour daily screen-time limit</li>
            </ul>
          </div>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Occupational Therapy HTPN Team · Healthcare Intelligence Office HTPN</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
