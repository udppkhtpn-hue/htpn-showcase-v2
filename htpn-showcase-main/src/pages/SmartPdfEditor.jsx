import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const DEMO_URL = 'https://notebookllm-slide-deck-text-editor.vercel.app/'
const ACCENT = '#6366f1'

const tools = [
  {
    icon: '↖',
    label: 'Select / Move',
    desc: 'Select and reposition any element on the slide canvas',
  },
  {
    icon: '[ ]',
    label: 'Region Select',
    desc: 'Draw a selection box around a region of the slide',
  },
  {
    icon: 'T',
    label: 'Text Tool',
    desc: 'Click any OCR-detected text element to edit it inline',
  },
  {
    icon: '◇',
    label: 'Eraser',
    desc: 'Remove or clear any element from the slide',
  },
]

const navFeatures = [
  'Collapsible left sidebar with page thumbnails',
  'All slides visible as numbered page previews',
  'Click any thumbnail to jump to that slide',
  'Undo / Redo buttons in toolbar',
  'Zoom in/out with percentage display (30%–100%+)',
  'Sidebar toggle to maximise the editing canvas',
]

const workflowFeatures = [
  'Upload PDF via "New PDF" button (top right)',
  'Gemini OCR scans each slide page automatically',
  'Edit text overlays on top of the original slide design',
  'Original slide visuals are preserved underneath',
  'Save edited version via "Save PDF" button',
]

export default function SmartPdfEditor() {
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
            <span className="card-num">#14</span>
            <span className="card-status status-live">Live</span>
            <span
              className="demo-badge"
              style={{ background: 'rgba(99,102,241,0.12)', color: ACCENT, borderColor: 'rgba(99,102,241,0.35)' }}
            >
              Live Tool · Vercel · Gemini AI
            </span>
          </div>
          <div className="project-page-title-row">
            <img src="/icon-pdf-editor.png" alt="Slide Deck OCR PDF Editor" className="project-page-logo" />
            <h1 className="project-page-title">Slide Deck OCR PDF Editor</h1>
          </div>
          <p className="project-page-subtitle">
            Dr Fairis's first vibe-coded app — AI-powered in-browser editor for NotebookLM slide deck PDFs
          </p>
          <p className="project-page-credit">
            Co-developed by Dr Fairis
          </p>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-btn"
            style={{ background: ACCENT }}
          >
            Open PDF Editor →
          </a>
          <p className="demo-note" style={{ color: 'var(--text-muted)' }}>
            Publicly accessible. No login required.
          </p>
        </div>

        {/* Tech specs */}
        <div className="project-page-specs">
          <div className="spec-card">
            <div className="spec-label">AI Engine</div>
            <div className="spec-value">Google Gemini</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Deployment</div>
            <div className="spec-value">Vercel</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Input</div>
            <div className="spec-value">PDF file upload</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Version</div>
            <div className="spec-value">v1.0</div>
          </div>
        </div>

        {/* What it is */}
        <div className="project-page-block">
          <h2 className="block-title">What it is</h2>
          <p className="block-text">
            A web-based PDF editor built specifically to solve a workflow gap with NotebookLM's AI-generated
            slide deck PDFs — which are visually rich but entirely uneditable after export. The app uses
            Google Gemini to perform OCR on each slide page, detecting all text and overlaying it as
            interactive, editable text boxes on top of the original design. Users can correct errors, update
            figures, or customise content — then save a new PDF — all without leaving the browser.
          </p>
        </div>

        {/* 4 toolbar tools */}
        <div className="project-page-block">
          <h2 className="block-title">Toolbar — 4 editing tools</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '0.75rem' }}>
            {tools.map(t => (
              <div key={t.label} className="metric-card" style={{ gap: '0.75rem', alignItems: 'flex-start' }}>
                <div style={{
                  minWidth: '36px', height: '36px', borderRadius: '8px',
                  background: ACCENT, color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '14px', fontWeight: 700, flexShrink: 0,
                }}>
                  {t.icon}
                </div>
                <div>
                  <div className="metric-title">{t.label}</div>
                  <div className="metric-sub">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation + Workflow */}
        <div className="project-page-block two-col">
          <div className="project-page-block-inner">
            <h2 className="block-title">Navigation &amp; layout</h2>
            <ul className="feature-list">
              {navFeatures.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
          <div className="project-page-block-inner">
            <h2 className="block-title">Workflow</h2>
            <ul className="feature-list">
              {workflowFeatures.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
        </div>

        {/* Why it was built */}
        <div className="project-page-block">
          <h2 className="block-title">Why it was built</h2>
          <p className="block-text">
            Built by Dr Fairis as a first vibe-coding project to address a specific personal workflow gap.
            NotebookLM generates visually rich AI slide decks as PDFs — but offers no way to edit the text
            after generation. This app uses Gemini to read the locked slide text via OCR and overlays
            editable text boxes on the canvas, allowing the presenter to correct errors, update figures, or
            customise content without regenerating the entire deck from scratch. Deployed publicly on Vercel —
            accessible to anyone, with no install required.
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
            Open PDF Editor →
          </a>
        </div>

      </main>
      <Footer />
    </>
  )
}
