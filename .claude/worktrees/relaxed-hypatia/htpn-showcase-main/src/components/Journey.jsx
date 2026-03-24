import { milestones, upcomingInvitations } from '../data/journey'
import AnimatedCounter from './AnimatedCounter'

export default function Journey() {
  return (
    <section className="journey-section" id="journey">
      <div className="section-label">05 — Our Journey</div>
      <h2 className="section-title">Beyond HTPN</h2>
      <p className="section-desc">
        From our own wards to hospital networks across Malaysia — the AI Team HTPN has grown into a
        recognised voice in clinical AI adoption and digital health education.
      </p>

      <div className="journey-grid">
        {/* Left: milestones */}
        <div className="milestone-list">
          {milestones.map((m, i) => (
            <div className="milestone" key={i}>
              <div className={`milestone-dot ${m.dot !== 'cyan' ? m.dot : ''}`}></div>
              <div
                className="milestone-text"
                dangerouslySetInnerHTML={{ __html: m.text }}
              />
            </div>
          ))}
        </div>

        {/* Right: stats + upcoming */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ fontSize: '2rem' }}>🎓</div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.25rem' }}>Workshops Conducted</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--cyan)', lineHeight: 1 }}>
                <AnimatedCounter to={5} suffix="+" duration={1500} />
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Across Malaysia</div>
            </div>
          </div>

          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ fontSize: '2rem' }}>🏛️</div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.25rem' }}>Conferences &amp; Presentations</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--gold)', lineHeight: 1 }}>
                <AnimatedCounter to={3} duration={1200} />
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>National &amp; International</div>
            </div>
          </div>

          <div style={{ background: 'var(--surface)', border: '1px solid rgba(192,132,252,0.2)', borderRadius: '12px', padding: '1.25rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(to right, #c084fc, transparent)' }}></div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#c084fc', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Upcoming Invitations
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {upcomingInvitations.map(inv => (
                <div key={inv.title} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '1.1rem' }}>{inv.icon}</span>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{inv.title}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text3)' }}>{inv.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
