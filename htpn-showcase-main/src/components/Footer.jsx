import '../styles/footer.css'

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img src="/logo.jpg" alt="HTPN Logo" />
          <span className="footer__brand-text">HTPN AI Team</span>
        </div>

        <nav className="footer__links">
          {[
            ['Projects',   'projects'],
            ['Pipeline',   'pipeline'],
            ['About',      'about'],
            ['Contact',    'contact'],
          ].map(([label, id]) => (
            <button key={id} className="footer__link" onClick={() => scrollTo(id)}>{label}</button>
          ))}
        </nav>

        <div className="footer__right">
          <div>© 2025 HTPN AI Team</div>
          <div>Ministry of Health Malaysia</div>
          <div>Hospital Tengku Permaisuri Norashikin</div>
        </div>
      </div>

      <div className="footer__divider" />

      <p className="footer__tagline">
        Advancing Digital Health · Built from the Ward Up.
      </p>
    </footer>
  )
}
