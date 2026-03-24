import './GlitchText.css'

export default function GlitchText({ text, speed = 1, className = '' }) {
  const afterDuration = `${3 / speed}s`
  const beforeDuration = `${2 / speed}s`

  return (
    <span
      className={`glitch ${className}`}
      data-text={text}
      style={{
        '--after-duration': afterDuration,
        '--before-duration': beforeDuration,
      }}
    >
      {text}
    </span>
  )
}
