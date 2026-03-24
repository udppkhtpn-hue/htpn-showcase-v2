import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const DEMO_URL = 'https://therapy-ai-pipeline-eidzkvy7zqqucyufuuhxiq.streamlit.app'
const ACCENT = '#ef4444'

const specs = [
  { label: 'Platform', value: 'Streamlit (Python)' },
  { label: 'Purpose', value: 'Feasibility & validity testing' },
  { label: 'Audio limit', value: '200MB per file' },
  { label: 'Languages', value: 'English, BM, Auto-detect' },
]

const workflow = [
  {
    num: '1',
    color: '#6366f1',
    label: 'Patient Details',
    desc: 'Patient ID, Session Number, Therapist ID, Session Date — anonymised identifiers only. No personal data stored.',
  },
  {
    num: '2',
    color: '#0ea5a0',
    label: 'Session Input — 3 input modes',
    desc: null,
    modes: [
      { name: 'Audio Recording', detail: 'Upload session audio (.ogg, .wav, .mp3, .m4a, .mp4 / max 200MB). Audio deleted immediately after transcription.' },
      { name: 'Upload Image / Referral Letter', detail: 'Upload a referral letter or clinical image for AI to extract information.' },
      { name: 'Paste Transcript', detail: 'Paste a pre-existing text transcript directly. Session language selectable: English, Bahasa Malaysia, or Auto-detect.' },
    ],
  },
  {
    num: '3',
    color: '#ef4444',
    label: 'Run AI Analysis',
    desc: 'Single button triggers the full AI pipeline — transcription (if audio), structured note generation, risk stratification, and clinical summary.',
  },
  {
    num: '4–5',
    color: '#10b981',
    label: 'AI Outputs',
    desc: 'Structured clinical transcript, automated session notes (SOAP format), risk stratification (low / medium / high), key themes and presenting complaints, and recommendations — all requiring clinician review before filing.',
  },
  {
    num: '6',
    color: '#f59e0b',
    label: 'Feedback — Validity & Feasibility',
    desc: 'Clinician rates AI output validity (1–5) and clinical feasibility (1–5). Also captures: clinician role, most useful features, suggestions, and general comments. Feedback sent directly to Dr Naim. No patient data included.',
  },
]

const privacyPoints = [
  'No patient records stored at any point',
  'Audio deleted immediately after transcription',
  'Only anonymised feedback retained',
  'All AI outputs require clinician review before filing',
  'Explicitly does not replace clinical judgement',
]

const metricsPoints = [
  'Total visitors counter',
  'Total AI analyses run counter',
  "Today's date displayed",
  'Feedback goes directly to Dr Naim for research',
]

export default function TherapyAI() {
  return (
    <>
      <Navbar />
      <main className="project-page">

        {/* Back */}
        <div className="project-page-back">
          <Link to="/#projects" className="back-link">← Back to Projects</Link>
        </div>

        {/* Header */}
        <div className="project-page-header">
          <div className="project-page-meta">
            <span className="card-num">#08</span>
            <span className="card-status status-live">Live</span>
            <span className="demo-badge" style={{ background: 'rgba(239,68,68,0.12)', color: ACCENT, borderColor: 'rgba(239,68,68,0.35)' }}>
              Demo · Streamlit
            </span>
          </div>
          <div className="project-page-title-row">
            <img src="/icon-therapy.png" alt="TherapyAI" className="project-page-logo" />
            <h1 className="project-page-title">TherapyAI</h1>
          </div>
          <p className="project-page-subtitle">
            Automated Clerking, Transcription &amp; Risk Stratification for Psychological Therapy Sessions
          </p>
          <p className="project-page-credit">
            Co-developed by Dr Naim
          </p>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-btn"
            style={{ background: ACCENT }}
          >
            Open Demo →
          </a>
          <p className="demo-note">
            Research demo — for feasibility &amp; validity testing. Not yet in clinical deployment.
          </p>
        </div>

        {/* Tech specs */}
        <div className="project-page-specs">
          {specs.map(s => (
            <div key={s.label} className="spec-card">
              <div className="spec-label">{s.label}</div>
              <div className="spec-value">{s.value}</div>
            </div>
          ))}
        </div>

        {/* What it is */}
        <div className="project-page-block">
          <h2 className="block-title">What it is</h2>
          <p className="block-text">
            An AI-powered clinical assistant for psychological therapy and counselling sessions at HTPN.
            It automates the most time-consuming parts of a therapy clerk's workflow — transcribing session
            audio, generating structured clinical notes, and stratifying patient risk — so that the clinician
            can focus on the patient rather than documentation. Built by Dr Naim's team as a research demo
            to test feasibility and clinical validity before full deployment.
          </p>
        </div>

        {/* 6-step workflow */}
        <div className="project-page-block">
          <h2 className="block-title">6-step workflow</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {workflow.map(step => (
              <div key={step.num} className="metric-card" style={{ gap: '0.75rem', alignItems: 'flex-start' }}>
                <div style={{
                  minWidth: '36px', height: '36px', borderRadius: '50%',
                  background: step.color, color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '13px', fontWeight: 600, flexShrink: 0,
                }}>
                  {step.num}
                </div>
                <div style={{ flex: 1 }}>
                  <div className="metric-title">{step.label}</div>
                  {step.desc && <div className="metric-sub">{step.desc}</div>}
                  {step.modes && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginTop: '0.4rem' }}>
                      {step.modes.map(m => (
                        <div key={m.name} className="metric-sub">
                          <span style={{ color: 'var(--text1)', fontWeight: 500 }}>{m.name}</span> — {m.detail}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy + Metrics */}
        <div className="project-page-block two-col">
          <div
            className="project-page-block-inner"
            style={{ border: `1px solid rgba(239,68,68,0.35)`, borderRadius: '12px', padding: '1.25rem', background: 'rgba(239,68,68,0.04)' }}
          >
            <h2 className="block-title" style={{ color: ACCENT }}>Privacy &amp; safety by design</h2>
            <ul className="feature-list">
              {privacyPoints.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
          <div className="project-page-block-inner">
            <h2 className="block-title">Live usage metrics shown</h2>
            <ul className="feature-list">
              {metricsPoints.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
        </div>

        {/* Who it is for */}
        <div className="project-page-block">
          <h2 className="block-title">Who it is for &amp; research context</h2>
          <p className="block-text">
            Designed for psychiatrists, psychologists, counsellors, and therapists at HTPN. This demo is
            specifically a research instrument — clinicians use it on real or simulated sessions, then rate
            the AI outputs, providing Dr Naim's team with validity and feasibility data to determine whether
            full clinical deployment is appropriate. The three input modes (audio, image/referral, typed
            transcript) allow testing across different real-world scenarios a therapist might encounter.
          </p>
        </div>

        {/* CTA */}
        <div className="project-page-cta">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-btn"
            style={{ background: ACCENT }}
          >
            Open Demo →
          </a>
        </div>

      </main>
      <Footer />
    </>
  )
}
