const ITEMS = [
  'HTPN Healthcare Intelligence Office',
  'Hospital Tengku Permaisuri Norashikin',
  '16+ Live Tools',
  'Built by Clinicians',
  'Innovation Pipeline',
  'O&G · Anaesthesia · Emergency',
  'AI · Automation · Digital Health',
  'Putrajaya · Malaysia',
]

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className="ticker">
      <div className="ticker__track">
        {doubled.map((item, i) => (
          <span key={i} className="ticker__item">
            <span className="ticker__dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
