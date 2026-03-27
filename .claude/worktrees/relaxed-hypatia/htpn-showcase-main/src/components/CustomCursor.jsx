import { useEffect, useRef } from 'react'
import '../styles/home.css'

// Only render on true pointer devices (not touch/mobile)
const isTouch = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const wrapRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const raf = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`
      }
      if (wrapRef.current) {
        wrapRef.current.style.opacity = '1'
      }
    }

    const onEnter = () => wrapRef.current?.classList.add('cursor--hover')
    const onLeave = () => wrapRef.current?.classList.remove('cursor--hover')

    const lerp = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12
      ring.current.y += (pos.current.y - ring.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%,-50%)`
      }
      raf.current = requestAnimationFrame(lerp)
    }

    raf.current = requestAnimationFrame(lerp)
    document.addEventListener('mousemove', onMove)

    const targets = document.querySelectorAll('a, button, [data-cursor]')
    targets.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    const obs = new MutationObserver(() => {
      const newTargets = document.querySelectorAll('a, button, [data-cursor]')
      newTargets.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    })
    obs.observe(document.body, { childList: true, subtree: true })

    return () => {
      cancelAnimationFrame(raf.current)
      document.removeEventListener('mousemove', onMove)
      obs.disconnect()
    }
  }, [])

  if (isTouch) return null

  return (
    <div ref={wrapRef} className="cursor" style={{ opacity: 0 }}>
      <div ref={dotRef} className="cursor__dot" />
      <div ref={ringRef} className="cursor__ring" />
    </div>
  )
}
