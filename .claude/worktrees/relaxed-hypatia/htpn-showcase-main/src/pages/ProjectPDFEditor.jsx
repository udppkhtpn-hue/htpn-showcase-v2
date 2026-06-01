import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#6366f1'

export default function ProjectPDFEditor() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <div className="detail-container">
        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">Slide Deck OCR PDF Editor</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#17 · Management Productivity</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">AI Vision</span>
          <span className="detail-tag">Gemini</span>
          <span className="detail-tag">Productivity</span>
          <span className="detail-tag">PDF</span>
          <span className="detail-tag">OCR</span>
        </div>

        <p className="detail-subtitle">AI-powered in-browser editor for NotebookLM slide deck PDFs — uses Gemini OCR to unlock text in visually rich but uneditable exported slide decks.</p>

        <div className="detail-block">
          <div className="spec-cards">
            <div className="spec-card-new">
              <span className="spec-card-new__label">Journey</span>
              <span className="spec-card-new__value" style={{ color: ACCENT }}>Management Productivity</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">AI Engine</span>
              <span className="spec-card-new__value">Google Gemini</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Deployment</span>
              <span className="spec-card-new__value">Vercel</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Input</span>
              <span className="spec-card-new__value">PDF file upload</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value">Live · Public Access</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <a
            href="https://notebookllm-slide-deck-text-editor.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="detail-demo-btn"
            style={{ background: ACCENT, color: '#ffffff' }}
          >
            Open App →
          </a>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">The Problem It Solves</h2>
          <p className="detail-block__text">NotebookLM generates AI-powered presentation slides that are visually rich but entirely uneditable after export. This tool was built to fill that specific gap — allowing text to be edited directly in the browser without regenerating the entire deck.</p>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">How It Works</h2>
          <ol className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-num">01</span>
              <div>
                <span className="prd-section-title">Upload PDF</span>
                <span className="prd-section-desc">Click "New PDF" to upload your NotebookLM slide deck.</span>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">02</span>
              <div>
                <span className="prd-section-title">Gemini OCR</span>
                <span className="prd-section-desc">Gemini automatically scans each slide and detects all text regions.</span>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">03</span>
              <div>
                <span className="prd-section-title">Edit Text</span>
                <span className="prd-section-desc">Click any detected text region to edit it inline on the original design.</span>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">04</span>
              <div>
                <span className="prd-section-title">Original Preserved</span>
                <span className="prd-section-desc">The original visual design is preserved beneath the text overlays.</span>
              </div>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-num">05</span>
              <div>
                <span className="prd-section-title">Save</span>
                <span className="prd-section-desc">Click "Save PDF" to download the edited version.</span>
              </div>
            </li>
          </ol>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">Toolbar — 4 Tools</h2>
          <div className="prd-features">
            <div className="prd-feature">
              <span className="prd-feature__title">Select / Move</span>
              <span className="prd-feature__desc">Reposition elements freely on the canvas.</span>
            </div>
            <div className="prd-feature">
              <span className="prd-feature__title">Region Select</span>
              <span className="prd-feature__desc">Draw a selection box around any region of the slide.</span>
            </div>
            <div className="prd-feature">
              <span className="prd-feature__title">Text Tool</span>
              <span className="prd-feature__desc">Edit OCR-detected text inline — click any text to edit.</span>
            </div>
            <div className="prd-feature">
              <span className="prd-feature__title">Eraser</span>
              <span className="prd-feature__desc">Remove or clear unwanted elements from slides.</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">Navigation Features</h2>
          <ul className="detail-features">
            <li>Collapsible left sidebar with numbered page thumbnails</li>
            <li>Thumbnail-based slide navigation</li>
            <li>Zoom control (30%–100%+)</li>
            <li>Undo/Redo functionality</li>
            <li>Sidebar toggle to maximise canvas</li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Built By</span>
            <span className="prd-credit-box__value">Built by Dr Fairis · AI Team HTPN Kajang · Dr Fairis's first vibe-coded app</span>
          </div>
        </div>
      </div>
      <SiteNavigator />
      <Footer />
    </div>
  )
}
