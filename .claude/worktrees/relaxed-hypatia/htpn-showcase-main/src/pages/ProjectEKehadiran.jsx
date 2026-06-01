import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

export default function ProjectEKehadiran() {
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
      <Helmet>
        <title>Sistem E-Kehadiran Kursus — Digital Training Log · HTPN HIO</title>
        <meta name="description" content="A centralized, paperless attendance registration and analytics portal for hospital staff training at HTPN — replacing manual logs with instant IC validation, automatic age calculation, and an administrative tracking dashboard." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/e-kehadiran" />
        <meta property="og:title" content="Sistem E-Kehadiran Kursus — HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/e-kehadiran" />
      </Helmet>

      <div className="detail-container">
        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        {/* Header */}
        <header className="detail-header">
          <img src="/HTPN CIO logo.jpg" alt="HTPN Healthcare Intelligence Office" className="detail-cio-logo" />
          <div className="detail-meta-row">
            <span className="detail-num">#19</span>
            <span className="detail-status detail-status--live">LIVE</span>
            <span className="detail-category">Management Productivity</span>
          </div>
          <h1 className="detail-title">Sistem E-Kehadiran Kursus</h1>
          <p className="detail-subtitle">Digital Training Log</p>
          <p className="detail-desc">
            A centralized, paperless attendance registration and analytics portal for hospital staff training — replacing fragmented manual logs with instant IC validation, automatic age calculation, and a role-based administrative tracking dashboard.
          </p>
          <div className="detail-tags">
            {['Human Resources & Administration', 'Role-Based Dashboard', 'Bilingual'].map(t => (
              <span key={t} className="detail-tag">{t}</span>
            ))}
          </div>
          <p className="detail-credit">
            <span>Unit Pengurusan & JPPOBG · Jabatan Pentadbiran HTPN</span>
          </p>
        </header>

        <hr className="detail-divider" />

        {/* Problem Statement */}
        <section className="rich-section">
          <h2 className="rich-section__title">The Problem</h2>
          <p className="rich-section__lead">
            Continuous professional development and course attendance are mandatory parameters for public healthcare staff compliance, credentialing, and annual promotion tracking within the Ministry of Health (KKM) framework. At HTPN, this relied entirely on pen-and-paper registration sheets and isolated spreadsheets managed by individual department supervisors.
          </p>
          <div className="rich-problems">
            {[
              {
                num: '01',
                title: 'Data Fragmentation',
                desc: 'Training metrics were trapped within separate silos across clinical and non-clinical units, preventing a unified hospital-wide overview for management.',
              },
              {
                num: '02',
                title: 'High Human Error Rates',
                desc: 'Manual transcription led to misspelled names, invalid IC numbers, and missing records — undermining the integrity of compliance data.',
              },
              {
                num: '03',
                title: 'Severe Administrative Backlogs',
                desc: 'Compiling mandatory annual training summaries for KKM required weeks of manual data compilation, chasing physical sign-in files, and re-keying records into master lists.',
              },
            ].map(p => (
              <div key={p.num} className="rich-problem-card">
                <span className="rich-problem-num">{p.num}</span>
                <div>
                  <h3 className="rich-problem-title">{p.title}</h3>
                  <p className="rich-problem-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="detail-divider" />

        {/* System Architecture */}
        <section className="rich-section">
          <h2 className="rich-section__title">System Architecture & Features</h2>
          <p className="rich-section__lead">
            A mobile-first dual-portal ecosystem that fully digitizes the course attendance lifecycle — from registration to reporting.
          </p>

          <div className="rich-dual-portal">
            {/* Staff Portal */}
            <div className="rich-portal-card">
              <div className="rich-portal-badge rich-portal-badge--staff">Staf / Peserta Portal</div>
              <h3 className="rich-portal-title">Front-End Registration Interface</h3>
              <ul className="rich-feature-list">
                <li>High-contrast, touch-optimized input cards for fast field entry on mobile or kiosk terminals</li>
                <li>Generates unique, session-specific <strong>QR codes</strong> — staff scan to open registration directly on their personal browsers</li>
                <li><strong>Umur Automatik</strong> — real-time age calculation derived instantly from the IC number structural pattern</li>
                <li>Bilingual interface (Bahasa Malaysia / English) for inclusive access across all staff roles</li>
              </ul>
            </div>

            {/* Admin Portal */}
            <div className="rich-portal-card">
              <div className="rich-portal-badge rich-portal-badge--admin">Pentadbir / Admin Portal</div>
              <h3 className="rich-portal-title">Back-End Management Panel</h3>
              <ul className="rich-feature-list">
                <li>Filter entire attendance logs by <strong>Year</strong>, <strong>Course Type</strong>, <strong>Session Title</strong>, or <strong>Department</strong></li>
                <li>Live tracking metrics: Total Attendees, Total Course Types, Active Departments</li>
                <li>One-click <strong>CSV export</strong> for KKM compliance audits — turning weeks of compilation into seconds</li>
                <li>Authenticated admin login wall preventing unauthorized access to staff database registry</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="detail-divider" />

        {/* Data Privacy */}
        <section className="rich-section">
          <h2 className="rich-section__title">Data Privacy & Governance</h2>
          <p className="rich-section__lead">
            Built for a public healthcare ecosystem under strict PDPA and Ministry of Health data safety standards.
          </p>
          <div className="rich-privacy-grid">
            {[
              {
                icon: '🔐',
                title: 'Secured Access',
                desc: 'The administrator dashboard is sealed behind a dedicated authentication wall — preventing unauthorized access to the staff database registry.',
              },
              {
                icon: '🫥',
                title: 'IC Masking',
                desc: 'IC numbers use automatic background masking ("95010101XXXX") to shield personal data from nearby public sight during active field entry.',
              },
              {
                icon: '🛡️',
                title: 'Zero-Leak Pipeline',
                desc: 'No image caching or personal data trails are held exposed on unsecured browser structures — entries route directly into structured, secure database tables.',
              },
            ].map(p => (
              <div key={p.title} className="rich-privacy-card">
                <span className="rich-privacy-icon">{p.icon}</span>
                <h3 className="rich-privacy-title">{p.title}</h3>
                <p className="rich-privacy-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="detail-divider" />

        {/* Impact */}
        <section className="rich-section">
          <h2 className="rich-section__title">Measurable Impact</h2>
          <div className="rich-impact-grid">
            {[
              {
                icon: '📊',
                title: 'One-Click Reporting',
                desc: 'Built-in CSV export turns a multi-week data compilation marathon into a single-click spreadsheet download for immediate compliance audits.',
              },
              {
                icon: '⏱️',
                title: 'Admin Time Recovered',
                desc: 'Removes the daily administrative burden from department supervisors — returning clinical heads and administrators to primary operational duties.',
              },
              {
                icon: '🎯',
                title: 'Targeted Training Allocation',
                desc: 'Real-time graphical distribution trends show exactly which units are lagging behind training targets — enabling proactive educational interventions.',
              },
            ].map(i => (
              <div key={i.title} className="rich-impact-card">
                <span className="rich-impact-icon">{i.icon}</span>
                <h3 className="rich-impact-title">{i.title}</h3>
                <p className="rich-impact-desc">{i.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
