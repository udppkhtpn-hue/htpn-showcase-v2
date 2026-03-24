export default function Contact() {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-inner">
        <div className="section-label">06 — Contact</div>
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Interested in our work, want to collaborate, or looking to bring an AI
          workshop to your hospital? Reach out to the team.
        </p>

        <div className="contact-cards">
          <a href="mailto:aiteam@htpnkajang.gov.my" className="contact-card">
            <div className="contact-icon">✉️</div>
            <div>
              <div className="contact-type">Email</div>
              <div className="contact-value">aiteam@htpnkajang.gov.my</div>
              <div className="contact-sub">AI Team HTPN Kajang</div>
            </div>
          </a>

          <a href="tel:0388133333" className="contact-card">
            <div className="contact-icon">📞</div>
            <div>
              <div className="contact-type">Phone</div>
              <div className="contact-value">03-8813 3333</div>
              <div className="contact-sub">Hospital Tengku Permaisuri Norashikin</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
