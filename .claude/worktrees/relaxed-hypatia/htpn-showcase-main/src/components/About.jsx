export default function About() {
  return (
    <section id="about">
      <div className="section-label">04 — About</div>
      <h2 className="section-title">Clinician-Built.<br />Hospital-Ready.</h2>
      <p className="section-desc">
        A homegrown innovation unit powered by frontline insight and the technical
        know-how to ship real solutions fast.
      </p>

      <div className="about-layout">

        {/* ── Left: Text body ── */}
        <div className="about-body">
          <p>
            Under the leadership and mentorship of our hospital director, the AI Team at HTPN
            Kajang has been empowered to innovate from within — translating frontline ideas into
            real, deployable digital solutions that serve patients and staff alike.
          </p>
          <p>
            The AI Team at HTPN Kajang is an internal innovation unit dedicated to building
            practical digital solutions that address real frontline problems — designed and
            deployed by the people who use them daily.
          </p>
          <p>
            Our approach is deeply collaborative. The innovation unit works directly with
            clinicians and hospital departments across HTPN — it is the frontline personnel who
            identify the problems and drive the solutions, while the AI Team contributes the
            technical know-how in vibe coding, automation, and AI-assisted development.
          </p>
          <p>
            Operating within Malaysia's MOH infrastructure and leveraging Google Workspace, our
            tools are PDPA-compliant, mobile-first, and built to serve both clinical and
            administrative needs — without waiting for top-down procurement.
          </p>
          <p>
            From a 135-year-old government hospital, we're proving that meaningful digital
            transformation starts at the ward level.
          </p>

          {/* Stats */}
          <div className="about-stats-row">
            <div className="about-stat-item">
              <div className="about-stat-num">11+</div>
              <div className="about-stat-label">Tools Deployed</div>
            </div>
            <div className="about-stat-item">
              <div className="about-stat-num amber">MOH</div>
              <div className="about-stat-label">Government Hospital</div>
            </div>
            <div className="about-stat-item">
              <div className="about-stat-num green">Kajang</div>
              <div className="about-stat-label">Selangor, Malaysia</div>
            </div>
          </div>
        </div>

        {/* ── Right: Director + Team photos ── */}
        <div className="about-right">
          <div className="director-card">
            <img
              className="director-card-img"
              src="/director.png"
              alt="Dr Hj Muhd Siv Azhar Merican"
            />
            <div className="director-card-label">
              <div className="director-role">Pengarah Hospital</div>
              <div className="director-name">
                Dr Hj Muhd Siv Azhar Merican bin Abdullah
              </div>
            </div>
          </div>

          <div className="team-photo-wrap">
            <img src="/team.jpg" alt="AI Team HTPN Kajang" />
            <div className="team-photo-caption">AI Team HTPN Kajang</div>
            <div className="team-photo-names">
              <span>Dr Ferwahn Fairis</span>
              <span>Dr Naim bin Abdul Malek</span>
              <span>Dr Muhammad Syafiz bin Ruzain</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
