import { pipelineItems } from '../data/pipeline'

export default function Pipeline() {
  return (
    <section id="pipeline">
      <div className="section-label">03 — Future Vision</div>
      <h2 className="section-title">Innovation Pipeline</h2>
      <p className="section-desc">
        Bold frontier projects that position HTPN Kajang at the leading edge of hospital technology in Malaysia.
      </p>
      <div className="pipeline-cards">
        {pipelineItems.map(item => (
          <div className="pipeline-card" key={item.title}>
            <div className="card-header">
              <span className="card-num" style={{ color: '#a78bfa' }}>Pipeline</span>
              <span className="card-status status-pipeline">Planned</span>
            </div>
            <div className="card-icon">{item.icon}</div>
            <div className="card-title" style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              {item.title}
            </div>
            <div className="card-desc" style={{ fontSize: '0.875rem', color: 'var(--text2)', lineHeight: 1.65 }}>
              {item.desc}
            </div>
            <div className="card-tags">
              {item.tags.map(tag => (
                <span key={tag} className="tag" style={{ borderColor: 'rgba(192,132,252,0.2)', color: '#a78bfa' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
