export default function Ticker() {
  const items = [
    'PATIENT JOURNEY', 'DOCTOR\'S JOURNEY', 'MANAGEMENT PRODUCTIVITY',
    '16 TOOLS DEPLOYED', 'KAJANG', 'SELANGOR', 'MOH MALAYSIA',
    'DIGITAL HEALTH', 'BUILT FROM THE WARD', 'AI TEAM HTPN',
    'PATIENT JOURNEY', 'DOCTOR\'S JOURNEY', 'MANAGEMENT PRODUCTIVITY',
    '16 TOOLS DEPLOYED', 'KAJANG', 'SELANGOR', 'MOH MALAYSIA',
    'DIGITAL HEALTH', 'BUILT FROM THE WARD', 'AI TEAM HTPN',
  ]
  return (
    <div className="ticker">
      <div className="ticker__track">
        {items.map((item, i) => (
          <span key={i} className={`ticker__item${i % 4 === 0 ? ' ticker__item--accent' : ''}`}>
            {item} ·
          </span>
        ))}
      </div>
    </div>
  )
}
