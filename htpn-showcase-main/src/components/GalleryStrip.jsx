import { useRef, useState, useEffect } from 'react'

const SLIDES = 6

export default function GalleryStrip({ slides, label = 'Screenshot' }) {
  const trackRef = useRef(null)
  const [current, setCurrent] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragStart = useRef(null)
  const scrollStart = useRef(null)

  const total = slides?.length || SLIDES

  const scrollTo = (idx) => {
    const track = trackRef.current
    if (!track) return
    const slideW = track.children[0]?.offsetWidth + 12 || 0
    track.scrollTo({ left: idx * slideW, behavior: 'smooth' })
    setCurrent(idx)
  }

  const prev = () => scrollTo(Math.max(0, current - 1))
  const next = () => scrollTo(Math.min(total - 1, current + 1))

  // Drag scroll
  const onMouseDown = (e) => {
    setIsDragging(false)
    dragStart.current = e.clientX
    scrollStart.current = trackRef.current?.scrollLeft || 0
  }

  const onMouseMove = (e) => {
    if (dragStart.current === null) return
    const dx = e.clientX - dragStart.current
    if (Math.abs(dx) > 4) setIsDragging(true)
    if (trackRef.current) trackRef.current.scrollLeft = scrollStart.current - dx
  }

  const onMouseUp = () => { dragStart.current = null }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const onScroll = () => {
      const slideW = track.children[0]?.offsetWidth + 12 || 1
      setCurrent(Math.round(track.scrollLeft / slideW))
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div>
      <div
        className="gallery-strip"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        <div ref={trackRef} className="gallery-strip__track" style={{ overflowX: 'auto', scrollbarWidth: 'none' }}>
          {Array.from({ length: total }).map((_, i) => (
            <div key={i} className="gallery-slide">
              {slides?.[i]?.src
                ? <img src={slides[i].src} alt={slides[i].alt || `${label} ${i + 1}`} draggable="false" />
                : <span className="gallery-slide__label">{label} {i + 1}</span>
              }
            </div>
          ))}
        </div>
      </div>
      <div className="gallery-controls">
        <button className="gallery-arrow" onClick={prev} aria-label="Previous">
          <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </svg>
        </button>
        <button className="gallery-arrow" onClick={next} aria-label="Next">
          <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
            <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </svg>
        </button>
        <span className="gallery-counter">({String(current + 1).padStart(2, '0')}) of ({String(total).padStart(2, '0')})</span>
      </div>
    </div>
  )
}
