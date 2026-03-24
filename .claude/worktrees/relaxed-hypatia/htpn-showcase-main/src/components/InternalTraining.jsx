import { trainingItems } from '../data/training'

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
    </section>
  )
}
