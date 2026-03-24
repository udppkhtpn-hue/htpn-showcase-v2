import AnimatedCounter from './AnimatedCounter'

export default function Hero() {
  return (
    <div className="hero" id="hero">

      {/* ── Left Column: Text Content ── */}
      <div className="hero-left">
        <div className="hero-eyebrow">
          <span className="hero-dot"></span>
          AI Team · Est. 2024 · Kajang, Selangor
        </div>

        <img className="hero-logo" src="/logo.jpg" alt="HTPN Logo" />

        <h1 className="hero-title">
          HTPN<br />
          <span className="hero-title-accent">Digital</span><br />
          Transformation
        </h1>

        <p className="hero-tagline">Hospital Tengku Permaisuri Norashikin</p>

        <p className="hero-desc">
          Homegrown digital solutions built by clinicians, for clinicians.
          Empowering HTPN with AI-assisted tools, real-time dashboards, and
          workflow automation — transforming a 135-year-old institution into a
          model of modern, frontline-led digital healthcare.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="hero-btn hero-btn-primary">
            Explore Solutions
          </a>
          <a href="#about" className="hero-btn hero-btn-ghost">
            Meet the Team →
          </a>
        </div>
      </div>

      {/* ── Right Column: Teal + Stats ── */}
      <div className="hero-right">
        <div className="hero-img-overlay"></div>

        <div className="hero-stats-grid">
          <div className="hero-stat">
            <div className="hero-stat-num">
              <AnimatedCounter to={16} duration={1600} />
            </div>
            <div className="hero-stat-label">Active Tools</div>
          </div>

          <div className="hero-stat hero-stat--amber">
            <div className="hero-stat-num">135</div>
            <div className="hero-stat-label">Year-Old Institution</div>
          </div>

          <div className="hero-stat hero-stat--purple">
            <div className="hero-stat-num">
              <AnimatedCounter to={5} suffix="+" duration={1200} />
            </div>
            <div className="hero-stat-label">Workshops Nationwide</div>
          </div>

          <div className="hero-stat hero-stat--red">
            <div className="hero-stat-num">MOH</div>
            <div className="hero-stat-label">Government Hospital</div>
          </div>
        </div>

        <div className="hero-highlight-card">
          <div className="hero-highlight-icon">🏥</div>
          <div>
            <div className="hero-highlight-title">Kajang, Selangor, Malaysia</div>
            <div className="hero-highlight-desc">
              Clinician-built tools deployed and running in a real government hospital
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
