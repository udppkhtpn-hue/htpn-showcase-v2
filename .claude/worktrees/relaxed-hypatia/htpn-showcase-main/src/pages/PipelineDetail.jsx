import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import GalleryStrip from '../components/GalleryStrip'
import SiteNavigator from '../components/SiteNavigator'
import { pipelineItems } from '../data/pipeline'
import '../styles/detail.css'

export default function PipelineDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  const item = pipelineItems.find(p => p.detailPath === `/pipeline/${slug}`)

  if (!item) return (
    <div className="detail-page">
      <div className="detail-container">
        <button className="detail-back" onClick={() => navigate('/')}>← Back</button>
        <p style={{ color: 'var(--muted)' }}>Pipeline item not found.</p>
      </div>
      <Footer />
    </div>
  )

  const handleBack = () => {
    sessionStorage.setItem('scrollTo', '#pipeline')
    navigate('/')
  }

  return (
    <div className="detail-page">
      <div className="detail-container">
        <button className="detail-back" onClick={handleBack}>← Back to Pipeline</button>

        <header className="detail-header">
          <div className="detail-meta">
            <span className="detail-journey">( Innovation Pipeline )</span>
            <span className="detail-badge detail-badge--pipeline">ON THE HORIZON</span>
          </div>

          <h1 className="detail-title">
            <span style={{ marginRight: '16px' }}>{item.icon}</span>
            {item.title}
          </h1>
          <p className="detail-subtitle">{item.desc}</p>

          <span className="detail-demo-btn detail-demo-btn--disabled">Demo coming soon</span>
        </header>

        {item.video && (
          <div className="detail-video-wrap">
            <video
              src={item.video}
              controls
              autoPlay
              muted
              loop
              playsInline
              className="detail-video"
            />
          </div>
        )}

        <GalleryStrip label="Concept Visual" images={item.conceptImages} />

        <div className="spec-cards">
          <div className="spec-card-new">
            <div className="spec-card-new__label">Category</div>
            <div className="spec-card-new__value" style={{ color: '#C8B89A' }}>Innovation Pipeline</div>
          </div>
          <div className="spec-card-new">
            <div className="spec-card-new__label">Tags</div>
            <div className="spec-card-new__value">{item.tags?.join(' · ')}</div>
          </div>
          <div className="spec-card-new">
            <div className="spec-card-new__label">Status</div>
            <div className="spec-card-new__value" style={{ color: '#C8B89A' }}>On the Horizon</div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">The Vision</h2>
          <p className="detail-block__text">{item.desc}</p>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">Expected Outcomes</h2>
          <ul className="detail-features">
            {item.tags?.map(tag => <li key={tag}>{tag}</li>)}
          </ul>
        </div>

        <div className="detail-block__cta">
          <button className="detail-back" onClick={handleBack}>← Back to Pipeline</button>
        </div>
      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
