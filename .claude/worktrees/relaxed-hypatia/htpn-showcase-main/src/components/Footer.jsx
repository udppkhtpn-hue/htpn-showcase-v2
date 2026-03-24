export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div>
        <div className="footer__logo">HTPN <span>AI</span> Team</div>
        <p className="footer__tagline">
          Clinician-built digital tools<br />
          Hospital Tengku Permaisuri Norashikin<br />
          Kajang, Selangor
        </p>
      </div>

      <div className="footer__links">
        <button className="footer__link" onClick={() => scrollTo('projects')}>Projects</button>
        <button className="footer__link" onClick={() => scrollTo('pipeline')}>Innovation Pipeline</button>
        <button className="footer__link" onClick={() => scrollTo('about')}>About</button>
        <button className="footer__link" onClick={() => scrollTo('in-development')}>In Development</button>
        <button className="footer__link" onClick={() => scrollTo('contact')}>Contact</button>
      </div>

      <div className="footer__copy">
        © {new Date().getFullYear()} HTPN AI Team<br />
        Built with purpose.
      </div>
    </footer>
  )
}
