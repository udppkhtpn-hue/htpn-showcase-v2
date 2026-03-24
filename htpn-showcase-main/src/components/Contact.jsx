export default function Contact() {
  return (
    <section style={{ position: 'relative', zIndex: 1, padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div className="section-label">06 — Contact</div>
      <h2 className="section-title">Get In Touch</h2>
      <p style={{ color: 'var(--text2)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
        Interested in our work, want to collaborate, or looking to bring an AI workshop to your hospital?
        Reach out to the team.
      </p>

      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        {/* Email */}
        <a href="mailto:aiteam@htpnkajang.gov.my" style={{ textDecoration: 'none', flex: 1, minWidth: '240px' }}>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '14px', padding: '1.5rem 1.75rem', display: 'flex', alignItems: 'center', gap: '1.25rem', position: 'relative', overflow: 'hidden', transition: 'border-color 0.3s, box-shadow 0.3s' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(to right, var(--cyan), transparent)' }}></div>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0,180,255,0.1)', border: '1px solid rgba(0,180,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', flexShrink: 0 }}>✉️</div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--cyan)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Email</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)' }}>aiteam@htpnkajang.gov.my</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text3)', marginTop: '0.15rem' }}>AI Team HTPN Kajang</div>
            </div>
          </div>
        </a>

        {/* Phone */}
        <a href="tel:0388133333" style={{ textDecoration: 'none', flex: 1, minWidth: '240px' }}>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '14px', padding: '1.5rem 1.75rem', display: 'flex', alignItems: 'center', gap: '1.25rem', position: 'relative', overflow: 'hidden', transition: 'border-color 0.3s, box-shadow 0.3s' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(to right, var(--gold), transparent)' }}></div>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(245,197,24,0.1)', border: '1px solid rgba(245,197,24,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', flexShrink: 0 }}>📞</div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Phone</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)' }}>03-8813 3333</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text3)', marginTop: '0.15rem' }}>Hospital Tengku Permaisuri Norashikin</div>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}
