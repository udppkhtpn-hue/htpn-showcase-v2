import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    // Only on desktop
    if (window.matchMedia('(pointer: coarse)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = 0, my = 0
    let rx = 0, ry = 0
    let raf

    const onMove = (e) => { mx = e.clientX; my = e.clientY }

    const tick = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(tick)
    }

    const onHoverIn = () => document.body.classList.add('hovering')
    const onHoverOut = () => document.body.classList.remove('hovering')

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button, [role="button"]').forEach(el => {
      el.addEventListener('mouseenter', onHoverIn)
      el.addEventListener('mouseleave', onHoverOut)
    })

    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <div className="cursor" style={{ pointerEvents: 'none' }}>
      <div ref={dotRef} className="cursor__dot" style={{ position: 'fixed', top: 0, left: 0 }} />
      <div ref={ringRef} className="cursor__ring" style={{ position: 'fixed', top: 0, left: 0 }} />
    </div>
  )
}
