import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import GalleryStrip from '../components/GalleryStrip'
import SiteNavigator from '../components/SiteNavigator'
import { inDevelopmentItems } from '../data/inDevelopment'
import '../styles/detail.css'

export default function InDevelopmentDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  const item = inDevelopmentItems.find(p => p.slug === slug)

  if (!item) return (
    <div className="detail-page">
      <div className="detail-container">
        <button className="detail-back" onClick={() => navigate('/')}>← Back</button>
        <p style={{ color: 'var(--muted)' }}>Item not found.</p>
      </div>
      <Footer />
    </div>
  )

  const handleBack = () => {
    sessionStorage.setItem('scrollTo', '#in-development')
    navigate('/')
  }

  return (
    <div className="detail-page">
      <div className="detail-container">
        <button className="detail-back" onClick={handleBack}>← Back to In Development</button>

        <header className="detail-header">
          <div className="detail-meta">
            <span className="detail-journey">( In Development )</span>
            <span className="detail-num">{item.num}</span>
            <span className="detail-badge detail-badge--dev">COMING SOON</span>
          </div>

          <h1 className="detail-title">
            <span style={{ marginRight: '16px' }}>{item.icon}</span>
            {item.title}
          </h1>
          <p className="detail-subtitle">{item.desc}</p>
        </header>

        <GalleryStrip label="Coming Soon" />

        <div className="spec-cards">
          <div className="spec-card-new">
            <div className="spec-card-new__label">Category</div>
            <div className="spec-card-new__value" style={{ color: '#8A9BA8' }}>In Development</div>
          </div>
          <div className="spec-card-new">
            <div className="spec-card-new__label">Tags</div>
            <div className="spec-card-new__value">{item.tags?.join(' · ')}</div>
          </div>
          <div className="spec-card-new">
            <div className="spec-card-new__label">Status</div>
            <div className="spec-card-new__value" style={{ color: '#8A9BA8' }}>Coming Soon</div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">About This Project</h2>
          <p className="detail-block__text">{item.desc}</p>
        </div>

        <div className="detail-block__cta">
          <button className="detail-back" onClick={handleBack}>← Back to In Development</button>
        </div>
      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
