export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/logo.jpg" alt="HTPN Logo" />
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--gold)' }}>
              AI Team HTPN Kajang
            </div>
            <div className="footer-text">Hospital Tengku Permaisuri Norashikin · Kajang, Selangor</div>
          </div>
        </div>
        <div className="footer-copy">© 2026 HTPN Kajang · Kementerian Kesihatan Malaysia</div>
      </div>
    </footer>
  )
}
