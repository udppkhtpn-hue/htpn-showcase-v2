import { useRef, useState } from 'react'

const SLOTS = 6

export default function GalleryStrip({ label = 'Screenshot' }) {
  const trackRef = useRef(null)
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 })
  const [current, setCurrent] = useState(1)

  const onMouseDown = (e) => {
    drag.current = {
      active: true,
      startX: e.pageX - trackRef.current.offsetLeft,
      scrollLeft: trackRef.current.scrollLeft,
    }
    trackRef.current.style.cursor = 'grabbing'
  }

  const onMouseMove = (e) => {
    if (!drag.current.active) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    const walk = (x - drag.current.startX) * 1.2
    trackRef.current.scrollLeft = drag.current.scrollLeft - walk
    const idx = Math.round(trackRef.current.scrollLeft / 262) + 1
    setCurrent(Math.max(1, Math.min(SLOTS, idx)))
  }

  const endDrag = () => {
    drag.current.active = false
    if (trackRef.current) trackRef.current.style.cursor = 'grab'
  }

  return (
    <div className="gallery-strip">
      <div className="gallery-strip__header">
        <span className="gallery-strip__label">{label}</span>
        <span className="gallery-strip__counter">{current} / {SLOTS}</span>
      </div>
      <div
        ref={trackRef}
        className="gallery-strip__track"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        style={{ overflowX: 'hidden' }}
      >
        {Array.from({ length: SLOTS }).map((_, i) => (
          <div key={i} className="gallery-strip__slot">
            {label} {i + 1}
          </div>
        ))}
      </div>
    </div>
  )
}
