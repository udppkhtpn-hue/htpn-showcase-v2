import GlitchText from './GlitchText'

export default function Hero() {
  return (
    <div className="hero" id="hero" style={{
      backgroundImage: 'url(/hospital.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(5,10,15,0.6)',
        zIndex: 0,
      }}></div>
      <div className="hero-glow" style={{ zIndex: 1 }}></div>
      <div className="hero-glow2" style={{ zIndex: 1 }}></div>
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img className="hero-logo" src="/logo.jpg" alt="HTPN Logo" />
        <div className="hero-badge">AI Team HTPN Kajang · Est. 2024</div>
        <h1>
          <span className="gold">
            <GlitchText text="HTPN Digital" speed={0.5} />
          </span>
          <br />
          <span className="gold">
            <GlitchText text="Transformation" speed={0.4} />
          </span>
        </h1>
        <p className="hero-sub">Hospital Tengku Permaisuri Norashikin · Kajang</p>
        <p className="hero-desc">
          Homegrown digital solutions built by clinicians, for clinicians. Empowering HTPN with
          AI-assisted tools, real-time dashboards, and workflow automation — transforming a
          135-year-old institution into a model of modern, frontline-led digital healthcare.
        </p>
        <div className="hero-scroll-hint">
          <div className="hero-scroll-line"></div>
          <span>Scroll to explore</span>
        </div>
      </div>
    </div>
  )
}
