import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'
import ProjectScreenshot from '../components/ProjectScreenshot'

const ACCENT = '#f87171'
const DEMO_URL = 'https://resushero-code-blue.vercel.app/'

export default function ProjectResusHero() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>ResusHero (BLS) — Code Blue Training Game · HTPN HIO</title>
        <meta name="description" content="A bilingual educational game for adult Basic Life Support based on the MOH Malaysia BLS Training Manual (2023): role-based cardiac arrest scenarios, a 110 bpm compression rhythm game, AED sequence training, and a scored debrief." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/resushero" />
        <meta property="og:title" content="ResusHero (BLS) — Code Blue · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/resushero" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--pipeline">PROTOTYPE</span>
          <h1 className="detail-title">ResusHero (BLS) — Code Blue</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#25 · Clinician's Journey</p>
        </div>

        <ProjectScreenshot />

        <div className="detail-meta">
          <span className="detail-tag">BLS Training</span>
          <span className="detail-tag">Gamified Learning</span>
          <span className="detail-tag">Bilingual</span>
        </div>

        <p className="detail-subtitle">
          An educational game for adult Basic Life Support, based on the MOH Malaysia BLS Training Manual, 2nd Edition (2023). Players choose a rescuer role and work through realistic in-hospital and out-of-hospital cardiac arrests step by step, following the DRSABCD sequence. Every decision gets instant feedback with a reference to the manual. Chest compressions are played as a rhythm game, and each scenario ends with a scored debrief. Available in Bahasa Melayu and English.
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
              <span className="spec-card-new__value">Nurses, medical officers, paramedics, and trained members of the public</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Reference</span>
              <span className="spec-card-new__value">MOH Malaysia BLS Training Manual, 2nd Edition (2023)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Languages</span>
              <span className="spec-card-new__value">Bahasa Melayu · English</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Platform</span>
              <span className="spec-card-new__value">Web app · phone, tablet, or computer</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#C8B89A' }}>Prototype · Version 0.3</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            BLS is a skill people learn once and then rarely use. Certification courses happen every few years, but the sequence and the quality of CPR fade between them, and ward staff seldom get the chance to rehearse the first critical minutes of a Code Blue before a real one happens.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Skills Fade Between Courses</span>
              <span className="prd-section-item__desc">Steps and their order are forgotten in the months after certification, just when a real arrest may happen.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Little Chance to Rehearse</span>
              <span className="prd-section-item__desc">Mannequin practice needs equipment, a trainer, and protected time, which are hard to find on a busy ward.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Compression Quality Is Hard to Feel</span>
              <span className="prd-section-item__desc">Keeping to 100–120 compressions a minute is difficult to judge without feedback, and errors in sequence go unnoticed until a real resuscitation.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(248,113,113,0.15)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Access &amp; Initiation</span>
              <span className="prd-section-item__desc">The game opens in any browser. A Training Aid Only notice comes first: it is not a substitute for certified BLS training, not for use in a real emergency, and in Malaysia the number to call is 999 (MERS). The player then chooses a rescuer role and customises their character.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(248,113,113,0.15)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Active Task &amp; Processing</span>
              <span className="prd-section-item__desc">In each scenario the player makes timed decisions along the DRSABCD sequence: Danger, Response, Shout for help, Airway, Breathing, Circulation, Defibrillation. A tracker and a live monitor strip show progress. Wrong choices are corrected on the spot with a citation to the manual. Compressions are tapped in time with a 110 bpm beat, and the AED steps must be done in the right order.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(248,113,113,0.15)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Delivery &amp; Handover</span>
              <span className="prd-section-item__desc">Each scenario ends with a debrief listing sequence errors, decision delays, compression rate within target, effective ventilations, and total time, scored from one to three stars, with options to replay or move on to the next scenario.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">CORE FUNCTIONAL MODULES</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Role-Based Rescuers</span>
              <span className="prd-section-item__desc">Staff Nurse, Medical Officer, Paramedic, or Member of the Public. Each role changes which scenarios can be attempted and how the victim is assessed: clinical staff check a carotid pulse, while bystanders call 999 (MERS) and recognise abnormal breathing without a pulse check.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Scenario Library</span>
              <span className="prd-section-item__desc">In-hospital and out-of-hospital arrests with shockable and non-shockable rhythms, including a witnessed ward collapse, a lone rescuer in a shopping mall facing agonal breathing, and an unresponsive patient after a seizure on a night shift.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">DRSABCD Decision Engine</span>
              <span className="prd-section-item__desc">Timed multiple-choice decisions at each step, with immediate feedback that explains the correct action and cites the relevant page or table of the 2023 manual.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">04</span>
              <span className="prd-section-item__title">Compression Rhythm Game</span>
              <span className="prd-section-item__desc">Tap a pad, or press the spacebar, in time with music set at exactly 110 bpm, with a live rate against the 100–120/min target and reminders on depth (5–6 cm), full recoil, and keeping interruptions short.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">05</span>
              <span className="prd-section-item__title">AED Sequence Trainer</span>
              <span className="prd-section-item__desc">Switch on, attach pads, clear for analysis, shock while everyone stands clear, then resume CPR immediately — followed by reassessment every two minutes with a switch of compressor.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">06</span>
              <span className="prd-section-item__title">Debrief &amp; Star Scoring</span>
              <span className="prd-section-item__desc">Sequence errors, decision delays over 15 seconds, the percentage of compressions within rate, effective breaths, and total time, scored as ★ complete, ★★ no sequence errors, and ★★★ with compression rate of at least 75% and both breaths effective.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>Every decision is tied to a citation in the MOH 2023 BLS manual, so the game teaches the national standard rather than generic advice</li>
            <li>Role-aware scenarios reflect real differences between clinical staff and lay rescuers</li>
            <li>Compressions are trained by rhythm and sound, building the 100–120/min tempo in a way that sticks</li>
            <li>Fully bilingual in Bahasa Melayu and English, with sound that can be switched on or off</li>
            <li>Inclusive characters, with choices of skin tone, attire, and headwear including tudung and surgical cap</li>
            <li>Runs in a browser with no installation, account, or mannequin needed</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">GOVERNANCE &amp; SCOPE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>A training aid only: it does not replace certified BLS training or hands-on practice on a mannequin</li>
              <li>Not for use during a real emergency; in Malaysia, call 999 (MERS)</li>
              <li>No patient data is involved, and character names are optional</li>
              <li>Content follows the MOH Malaysia BLS Training Manual, 2nd Edition (2023), MOH/P/PAK/523.23(GU)-e</li>
            </ul>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">TRADITIONAL vs DIGITAL — COMPARISON</h2>
          <div className="detail-table-wrap">
            <table className="detail-table">
              <thead>
                <tr>
                  <th>Evaluation Vector</th>
                  <th>Course &amp; Mannequin Only</th>
                  <th style={{ color: ACCENT }}>ResusHero (BLS)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Practice Frequency</td>
                  <td>Every few years at recertification</td>
                  <td>Anytime, on any device</td>
                </tr>
                <tr>
                  <td>Feedback</td>
                  <td>From an instructor, when one is present</td>
                  <td>Instant, with a manual citation</td>
                </tr>
                <tr>
                  <td>Compression Rhythm</td>
                  <td>Judged by feel</td>
                  <td>Trained to a 110 bpm beat</td>
                </tr>
                <tr>
                  <td>Scenarios</td>
                  <td>Limited by class time</td>
                  <td>Ward and community arrests, by role</td>
                </tr>
                <tr>
                  <td>Performance Record</td>
                  <td>Pass or fail</td>
                  <td>Scored debrief for every scenario</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">STRATEGIC IMPACT</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">❤️</span>
              <span className="prd-section-item__title">Stronger Code Blue Readiness</span>
              <span className="prd-section-item__desc">Regular, low-effort rehearsal keeps the DRSABCD sequence fresh for ward staff between certification courses.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🎯</span>
              <span className="prd-section-item__title">Better-Quality CPR</span>
              <span className="prd-section-item__desc">Rhythm-based practice and scored feedback reinforce the compression rate and the AED steps that matter most for survival.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🌏</span>
              <span className="prd-section-item__title">Reaches Beyond the Hospital</span>
              <span className="prd-section-item__desc">Lay rescuer scenarios and a bilingual interface make the game suitable for community and public BLS awareness.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Dr Luqman · HTPN</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
