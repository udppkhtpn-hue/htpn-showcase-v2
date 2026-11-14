import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'
import ProjectScreenshot from '../components/ProjectScreenshot'

const ACCENT = '#ef4444'
const DEMO_URL = 'https://clabsi-guard-pro.vercel.app/'

export default function ProjectClabsiGuardPro() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>CLABSI Guard Pro — CLABSI Prevention Training &amp; Certification · HTPN HIO</title>
        <meta name="description" content="A web training app for central line-associated bloodstream infection (CLABSI) prevention at HTPN: slot booking, learning modules, a timed quiz with a 90% pass mark, practical (OSCE) tracking, certificates, and a coordinator dashboard." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/clabsi-guard-pro" />
        <meta property="og:title" content="CLABSI Guard Pro · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/clabsi-guard-pro" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">CLABSI Guard Pro</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#62 · Management Productivity</p>
        </div>

        <ProjectScreenshot />

        <div className="detail-meta">
          <span className="detail-tag">Infection Prevention &amp; Control</span>
          <span className="detail-tag">Training &amp; Certification</span>
          <span className="detail-tag">Timed Quiz</span>
        </div>

        <p className="detail-subtitle">
          A web-based training app for central line-associated bloodstream infection (CLABSI) prevention, built for the Infection Prevention &amp; Control Unit at Hospital Tengku Permaisuri Norashikin. Staff book a training slot, complete learning modules and a timed quiz, and receive a certificate after passing theory and practical assessment, while a coordinator dashboard manages slots, records and feedback.
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
              <span className="spec-card-new__label">Audience</span>
              <span className="spec-card-new__value">Medical Officers, Staff Nurses, House Officers and other clinical staff</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Pass Requirement</span>
              <span className="spec-card-new__value">Theory quiz 90% minimum, plus practical (OSCE) status Passed</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Quiz Rules</span>
              <span className="spec-card-new__value">120 seconds per question; unanswered questions count as incorrect</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Output</span>
              <span className="spec-card-new__value">Certificate with certificate number and optional Google Drive link</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">User Roles</span>
              <span className="spec-card-new__value">Staff / Participant · Coordinator</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#4ade80' }}>Live · HTPN IPC Unit</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            Central line-associated bloodstream infections are preventable, but prevention depends on every clinician applying the insertion and maintenance bundle correctly. Running the training that supports this means juggling several moving parts.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Manual Training Logistics</span>
              <span className="prd-section-item__desc">Booking training sessions, assigning trainers and tracking who has attended depended on messages and paper lists, which made it hard to know who was due or still pending.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Scattered Assessment Records</span>
              <span className="prd-section-item__desc">Theory scores, practical (OSCE) outcomes and certificates were held in separate places, so confirming a staff member's competency status took time.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Inconsistent Reinforcement</span>
              <span className="prd-section-item__desc">Without reminders and a standard quiz, learning was not reinforced and certification was hard to evidence at audit.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(239,68,68,0.15)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Enter &amp; Enable Reminders</span>
              <span className="prd-section-item__desc">Staff open the app, and can switch on OSCE and training reminders (on iPhone the app must first be added to the Home Screen).</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(239,68,68,0.15)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Book a Slot</span>
              <span className="prd-section-item__desc">Staff enter name, phone number and role (MO, Staff Nurse, HO or Other) to reserve an available training slot.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(239,68,68,0.15)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Learn</span>
              <span className="prd-section-item__desc">Staff work through video modules, each with a summary image, prepared by the coordinator.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(239,68,68,0.15)', color: ACCENT }}>04</span>
              <span className="prd-section-item__title">Take the Quiz</span>
              <span className="prd-section-item__desc">A timed quiz with a 90% pass mark and 120 seconds per question.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(239,68,68,0.15)', color: ACCENT }}>05</span>
              <span className="prd-section-item__title">Practical Assessment</span>
              <span className="prd-section-item__desc">The coordinator records the OSCE result as Pending, Passed or Failed.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(239,68,68,0.15)', color: ACCENT }}>06</span>
              <span className="prd-section-item__title">Feedback &amp; Certificate</span>
              <span className="prd-section-item__desc">After passing theory and practical, staff complete a short feedback form to generate their certificate.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">COORDINATOR DASHBOARD MODULES</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Training</span>
              <span className="prd-section-item__desc">Manage modules, video titles and links, and summary images hosted on Google Drive, Imgur or ImgBB; edit quiz questions.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Booking</span>
              <span className="prd-section-item__desc">View bookings and update slots: time, up to two trainers, and status Available or Booked.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Register Staff</span>
              <span className="prd-section-item__desc">Full name, IC number, email, phone, unique Register ID, role, theory score (%), practical status, optional dates and certificate link.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">04</span>
              <span className="prd-section-item__title">References &amp; Contact</span>
              <span className="prd-section-item__desc">Reference material for staff and contact details for the IPC Unit.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">05</span>
              <span className="prd-section-item__title">Feedback &amp; Certificates</span>
              <span className="prd-section-item__desc">Edit feedback questions, record certificate numbers, view feedback, and delete a feedback entry so staff can redo it.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>Bilingual interface, English with Malay labels</li>
            <li>Role-based entry for staff and coordinator</li>
            <li>Slot booking with up to two assigned trainers per session</li>
            <li>Timed theory quiz with automatic scoring and a 90% pass mark</li>
            <li>Practical (OSCE) tracking: Pending, Passed, Failed</li>
            <li>Certificate generation after theory, practical and feedback are complete</li>
            <li>Reminder notifications for OSCE and training sessions</li>
            <li>Editable video modules, quiz questions and feedback form</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">GOVERNANCE &amp; SCOPE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>The coordinator register holds staff details such as IC number, email and phone, so access to it should be limited to the IPC Unit</li>
              <li>Training content is published under the Infection Prevention &amp; Control Unit of HTPN, with Dr. Aneesa Tharek credited as author</li>
              <li>Version shown in the app: V2025</li>
            </ul>
          </div>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Dr. Aneesa Tharek · Infection Prevention &amp; Control (IPC) Unit</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
