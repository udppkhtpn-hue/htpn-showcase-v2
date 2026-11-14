import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'
import ProjectScreenshot from '../components/ProjectScreenshot'

const ACCENT = '#0891b2'
const DEMO_URL = 'https://demo-iris.kualitihsas.app/login'
const VIDEO_URL = 'https://canva.link/bc14nmots28thpk'

export default function ProjectIrisIncidentReporting() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>IRIS — Incident Reporting Information System (Hospital Shah Alam) · HTPN HIO</title>
        <meta name="description" content="An online system for reporting patient safety and general incidents in hospital, using the Ministry of Health incident form (IR 2.0/2017), with roles for reporters, Heads of Department and admins. Demo with synthetic data." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/iris-incident-reporting" />
        <meta property="og:title" content="IRIS — Incident Reporting Information System · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/iris-incident-reporting" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--pipeline">DEMO</span>
          <h1 className="detail-title">IRIS — Incident Reporting Information System</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#64 · Management Productivity</p>
        </div>

        <ProjectScreenshot />

        <div className="detail-meta">
          <span className="detail-tag">Patient Safety</span>
          <span className="detail-tag">Incident Reporting</span>
          <span className="detail-tag">Hospital Shah Alam</span>
        </div>

        <p className="detail-subtitle">
          IRIS ("Empowering Patient Safety") is an online system for reporting incidents in hospital. Staff complete the Ministry of Health Patient Safety Incident Reporting Form (IR 2.0/2017) on screen, and the report goes to their Head of Department and to the admin team. This demo was built for the HTPN × MPC Productivity Intelligence Innovathon 2026 and uses synthetic data only.
        </p>

        <div className="detail-block">
          <div className="detail-block__cta" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="detail-demo-btn" style={{ background: ACCENT, color: '#fff' }}>
              Open Demo →
            </a>
            <a href={VIDEO_URL} target="_blank" rel="noopener noreferrer" className="detail-demo-btn" style={{ background: 'transparent', color: ACCENT, border: `1px solid ${ACCENT}` }}>
              Watch demo video →
            </a>
          </div>
          <p className="detail-shot__caption" style={{ marginTop: '0.75rem' }}>
            The demo sign-in page has "Enter as Reporter", "Enter as HOD" and "Enter as Admin" buttons.
          </p>
        </div>

        <div className="detail-block">
          <div className="spec-cards">
            <div className="spec-card-new">
              <span className="spec-card-new__label">Users</span>
              <span className="spec-card-new__value">Reporters (any staff), Heads of Department, Admin</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Form</span>
              <span className="spec-card-new__value">Ministry of Health Patient Safety Incident Reporting Form, IR 2.0/2017</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Incident Types</span>
              <span className="spec-card-new__value">Actual incidents and near misses; 20+ listed examples such as medication error, patient fall and wrong-site surgery, plus general (non-patient-safety) incidents</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Languages</span>
              <span className="spec-card-new__value">English, with the form fillable in Bahasa Malaysia</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Access</span>
              <span className="spec-card-new__value">Sign-in with demo quick login for the Reporter, HOD and Admin roles</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#C8B89A' }}>Demo (synthetic data) · Version 2.0.0</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            Incident reporting depends on paper forms and slow handovers, so learning from near misses is delayed.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Paper Forms Get Lost or Arrive Incomplete</span>
              <span className="prd-section-item__desc">Required details are missed and reports wait on a desk.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Reports Take Time to Reach the Right Person</span>
              <span className="prd-section-item__desc">The Head of Department needs to see an incident early.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Little Follow-Up</span>
              <span className="prd-section-item__desc">Without a tracking record, it is hard to see which incidents are open or what was done.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(8,145,178,0.2)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Sign In</span>
              <span className="prd-section-item__desc">Staff sign in by email and password, or use the demo quick login for the Reporter, HOD or Admin role.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(8,145,178,0.2)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Start a Report</span>
              <span className="prd-section-item__desc">From the dashboard, choose "Submit New IR". A reminder offers to save progress as a draft at any time.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(8,145,178,0.2)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Complete Section A</span>
              <span className="prd-section-item__desc">Facility, patient name, date and time of incident, patient IC or passport number and registration number, gender, status, age, diagnosis, patient type and location, departments involved, type of incident (actual or near miss, chosen from a list of examples), and a description (what, who, where, how, up to 2,000 characters). A note asks reporters to summarise key facts and avoid pasting full clinical notes.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(8,145,178,0.2)', color: ACCENT }}>04</span>
              <span className="prd-section-item__title">Record the Outcome and Action</span>
              <span className="prd-section-item__desc">Patient outcome (none, mild, moderate, severe, death, cannot be determined) and the immediate action taken.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(8,145,178,0.2)', color: ACCENT }}>05</span>
              <span className="prd-section-item__title">Sign and Verify</span>
              <span className="prd-section-item__desc">Reporter's designation, name and date, an acknowledgement that the report is accurate, and a human check (switched off in the demo).</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(8,145,178,0.2)', color: ACCENT }}>06</span>
              <span className="prd-section-item__title">Attach and Route</span>
              <span className="prd-section-item__desc">Optional supporting documents; optional change of the department that gives the first Head of Department acknowledgement. A copy is automatically forwarded to the reporter's Head of Department.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(8,145,178,0.2)', color: ACCENT }}>07</span>
              <span className="prd-section-item__title">Submit to Admin</span>
              <span className="prd-section-item__desc">The report is submitted, and the reporter can follow it under "My Cases" and "My Drafts".</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>Online version of the Ministry of Health incident form</li>
            <li>Save draft and share draft with other users</li>
            <li>Upload documents, with optional supporting files on each report</li>
            <li>Role dashboards for Reporter, Head of Department and Admin</li>
            <li>My Cases, My Drafts and Prescription Slip notifications for reporters</li>
            <li>Workflow guide ("Manual Pengurusan Pelaporan Insiden"), user manual and bug reporting inside the app</li>
            <li>Multi-factor authentication option</li>
            <li>Satisfaction rating and suggestions box</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">GOVERNANCE &amp; SCOPE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>As shown in the app: the site is labelled "DEMO ENVIRONMENT — Synthetic data only."</li>
              <li>The form asks for the patient's name, IC or passport number, registration number and diagnosis. In a real system these are sensitive details</li>
              <li>The login page states that the website is monitored and all activities are logged</li>
              <li>Multi-factor authentication can be turned on from the dashboard</li>
            </ul>
          </div>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">UPRSK HSAS · Patient Safety Unit · Hospital Shah Alam</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
