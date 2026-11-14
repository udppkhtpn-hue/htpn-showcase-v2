import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'
import ProjectScreenshot from '../components/ProjectScreenshot'

const ACCENT = '#a3e635'
const DEMO_URL = 'https://script.google.com/a/macros/moh.gov.my/s/AKfycbwldFm73vLM8dGNidZAIvZCaoq9rcOPbHbGhfMD_nnhjfSyqLlCRHdt0b0VStPNExwYSQ/exec'

export default function ProjectAMSRoundManager() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>AMS Round Manager Pro — Antimicrobial Stewardship Round Workflow · HTPN HIO</title>
        <meta name="description" content="A Google Workspace system for HTPN's antimicrobial stewardship rounds: pre-round case entry, round execution, a searchable registry of closed cases, attendance, and committee-ready analytics." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/ams-round-manager" />
        <meta property="og:title" content="AMS Round Manager Pro · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/ams-round-manager" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">AMS Round Manager Pro</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#24 · Clinician's Journey</p>
        </div>

        <ProjectScreenshot />

        <div className="detail-meta">
          <span className="detail-tag">Antimicrobial Stewardship</span>
          <span className="detail-tag">Round Workflow</span>
          <span className="detail-tag">Google Workspace</span>
        </div>

        <p className="detail-subtitle">
          A complete management system for HTPN's antimicrobial stewardship (AMS) rounds, built on Google Workspace. It takes the whole round workflow — from first identifying a case to the final committee report — out of paper forms and scattered chat groups and into one shared system. Cases are entered before the round, worked through by the AMS team on the day, and turned automatically into analytics ready for presentation.
        </p>

        <div className="detail-block">
          <div className="detail-block__cta">
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="detail-demo-btn" style={{ background: ACCENT, color: '#0a0a0a' }}>
              Open Demo →
            </a>
            <p className="detail-shot__caption" style={{ marginTop: '0.75rem' }}>Sign-in with an MOH (moh.gov.my) Google account is required.</p>
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
              <span className="spec-card-new__value">AMS team members, pharmacists, and clinicians taking part in AMS rounds</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Platform</span>
              <span className="spec-card-new__value">Google Workspace web app · restricted to MOH (moh.gov.my) accounts</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Workflow</span>
              <span className="spec-card-new__value">Part A (pre-round entry) · Part B (round execution)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#4ade80' }}>Live · Version 1.3</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            AMS rounds depend on good case information reaching the team before the round, and on the outcome of every review being captured afterwards. When this runs on paper forms and chat messages, cases get lost between wards, review outcomes are recorded inconsistently, and preparing figures for the AMS committee means counting by hand.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Paper Forms and Chat Groups</span>
              <span className="prd-section-item__desc">Case referrals and patient details were passed around on paper and in messaging groups, with no single list of which cases were waiting for review.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Inconsistent Case Documentation</span>
              <span className="prd-section-item__desc">Antibiotic history, risk factors, and septic parameters were captured in different ways by different people, making reviews slower and harder to compare.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Manual Committee Reporting</span>
              <span className="prd-section-item__desc">Counting cases by ward, antibiotic, and review criterion, and working out acceptance rates, had to be done by hand before every committee meeting.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(163,230,53,0.15)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Access &amp; Initiation</span>
              <span className="prd-section-item__desc">The team opens the app in a browser with their MOH Google account. The Overview shows total cases, rounds pending, and cases completed, with a pending queue listing each patient, ward, antibiotic under review, and date.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(163,230,53,0.15)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Active Task &amp; Processing</span>
              <span className="prd-section-item__desc">Before the round, Part A captures the patient's details, antibiotic history, the antibiotic(s) for review, the review criterion, treatment phase, risk factors, and septic parameters. During the round, Part B opens each pending case, records whether the round was conducted, and documents the review outcome.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(163,230,53,0.15)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Delivery &amp; Handover</span>
              <span className="prd-section-item__desc">Closed cases move to Done Cases, where they can be searched and filtered. The Analytics hub turns them into charts for any year and month range, ready to present at AMS committee meetings.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">CORE FUNCTIONAL MODULES</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Overview &amp; Pending Queue</span>
              <span className="prd-section-item__desc">Headline counts of total, pending, and completed cases, and an execution queue of cases waiting for the next AMS round.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Part A — Pre-Round Entry</span>
              <span className="prd-section-item__desc">Patient details and ward; antibiotic history; antibiotic(s) for the AMS round; review criteria; treatment phase; risk factors including invasive devices (CBD, CVC, chest tube, dialysis catheter, ETT, surgical drain) and co-morbidities (such as DM, HPT, IHD, and CCF); and septic parameters, entered by hand or using a scan option.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Part B — Round Execution</span>
              <span className="prd-section-item__desc">Each pending case is opened from a list, the round is marked as conducted or not, and the review outcome is recorded against the case.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">04</span>
              <span className="prd-section-item__title">Done Cases Registry</span>
              <span className="prd-section-item__desc">A searchable history of closed cases, with filters for date, month, year, ward, antibiotic, criterion, and AMS acceptance.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">05</span>
              <span className="prd-section-item__title">Analytics — Presentation Hub</span>
              <span className="prd-section-item__desc">Filters by year and month range, and toggles between all referred cases and conducted rounds only. Shows cases referred, AMS conducted, and AMS not conducted; charts for acceptance review, initiation justification, and empirical versus definitive treatment; and breakdowns by ward, antibiotics audited, and selection criteria (for example empirical carbapenem, all cases on vancomycin, and ceftriaxone from day 3 onwards).</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">06</span>
              <span className="prd-section-item__title">Attendance, Feedback &amp; Guidance</span>
              <span className="prd-section-item__desc">Round attendance logged by date, name, and designation; built-in feedback and problem reporting; and an About page, disclaimer, privacy statement, and onboarding tutorial.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>A two-stage Part A / Part B design that mirrors how an AMS round actually runs: prepare first, then review at the bedside</li>
            <li>Structured fields for risk factors and septic parameters, so every case is documented the same way</li>
            <li>Analytics update straight from case records, so committee figures need no separate tallying</li>
            <li>Built on Google Workspace within the MOH domain, with no extra infrastructure to run</li>
            <li>Attendance tracking puts participation in the round alongside its clinical output</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">GOVERNANCE &amp; SCOPE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>Access is limited to signed-in MOH (moh.gov.my) Google accounts</li>
              <li>Case records contain identifiable patient details (name and IC) and are handled under institutional patient confidentiality policies and the regulations on Government Official Secrets, as the app's privacy statement sets out</li>
              <li>A support tool for stewardship workflow and documentation — clinical decisions and patient management remain with the treating team, as stated in the app's disclaimer</li>
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
                  <th>Paper &amp; Chat Groups</th>
                  <th style={{ color: ACCENT }}>AMS Round Manager Pro</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Case Referral</td>
                  <td>Paper forms and chat messages</td>
                  <td>Structured Part A entry</td>
                </tr>
                <tr>
                  <td>Pending Cases</td>
                  <td>Tracked informally</td>
                  <td>Live pending queue</td>
                </tr>
                <tr>
                  <td>Documentation</td>
                  <td>Varies between people</td>
                  <td>Same fields for every case</td>
                </tr>
                <tr>
                  <td>Case History</td>
                  <td>Paper files</td>
                  <td>Searchable, filterable registry</td>
                </tr>
                <tr>
                  <td>Committee Report</td>
                  <td>Counted by hand</td>
                  <td>Live charts by period</td>
                </tr>
                <tr>
                  <td>Attendance</td>
                  <td>Sign-in sheet</td>
                  <td>Logged in the app</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">STRATEGIC IMPACT</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">🧭</span>
              <span className="prd-section-item__title">Every Case Accounted For</span>
              <span className="prd-section-item__desc">A single pending queue means no referred case is lost between wards and the AMS round.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">💊</span>
              <span className="prd-section-item__title">Stronger Antimicrobial Stewardship</span>
              <span className="prd-section-item__desc">Consistent documentation of antibiotics, criteria, and treatment phase makes it easier to spot inappropriate use and act on it.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">📊</span>
              <span className="prd-section-item__title">Committee-Ready Data</span>
              <span className="prd-section-item__desc">Acceptance, justification, and empirical-versus-definitive figures are available for any period at the click of a filter.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">AMS HTPN · Pegawai Farmasi Kenny Tuang Ling Ee · Healthcare Intelligence Office HTPN</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
