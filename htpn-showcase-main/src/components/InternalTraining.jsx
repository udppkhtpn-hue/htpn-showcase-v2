import { trainingItems } from '../data/training'
import GalleryStrip from './GalleryStrip'

const TRAINING_PHOTOS = [
  { src: '/img_1.jpg', alt: 'Training session 1' },
  { src: '/img_2.jpg', alt: 'Training session 2' },
  { src: '/img_3.png', alt: 'Training session 3' },
  { src: '/img_4.jpg', alt: 'Training session 4' },
  { src: '/img_5.jpg', alt: 'Training session 5' },
]

export default function InternalTraining() {
  return (
    <section style={{ position: 'relative', zIndex: 1, padding: '4rem 2rem 5rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div className="section-label">05b — Internal Training</div>
      <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
        Building Capacity Within
      </h2>
      <p style={{ color: 'var(--text2)', maxWidth: '600px', marginBottom: '2.5rem', lineHeight: 1.7 }}>
        Beyond deploying tools, the AI Team runs a structured internal training programme — bringing AI
        literacy directly to clinical and administrative staff at HTPN.
      </p>

      <div className="training-grid">
        {trainingItems.map(item => (
          <div
            key={item.num}
            className={`training-card${item.highlight ? ' training-card--highlight' : ''}`}
          >
            <div className="training-num">{item.num}</div>
            <div className="training-info">
              <div className="training-title">
                {item.title} — <span className="training-dept">{item.dept}</span>
              </div>
              <div className="training-date">
                {item.date}
                {item.recent && (
                  <span style={{ color: 'var(--green)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginLeft: '0.5rem' }}>
                    Most Recent
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="training-gallery">
        <div className="training-gallery__label">Photos from the field</div>
        <GalleryStrip slides={TRAINING_PHOTOS} label="Training" />
      </div>
    </section>
  )
}
