import { useRef, useEffect } from 'react'

function drawJaggedLine(ctx, x1, y1, x2, y2, roughness, depth) {
  if (depth === 0) {
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    return
  }
  const mx = (x1 + x2) / 2 + (Math.random() - 0.5) * roughness
  const my = (y1 + y2) / 2 + (Math.random() - 0.5) * roughness
  drawJaggedLine(ctx, x1, y1, mx, my, roughness * 0.55, depth - 1)
  drawJaggedLine(ctx, mx, my, x2, y2, roughness * 0.55, depth - 1)
}

function getPerimeterPoint(pos, w, h, pad) {
  const topW = w - 2 * pad
  const sideH = h - 2 * pad
  const perimeter = 2 * topW + 2 * sideH
  const p = ((pos % perimeter) + perimeter) % perimeter

  if (p < topW)                    return [pad + p,          pad]
  if (p < topW + sideH)            return [w - pad,          pad + (p - topW)]
  if (p < 2 * topW + sideH)        return [w - pad - (p - topW - sideH), h - pad]
  return                                  [pad,               h - pad - (p - 2 * topW - sideH)]
}

export default function ElectricBorder({ children, color = '#f5c518', className = '' }) {
  const canvasRef      = useRef(null)
  const wrapperRef     = useRef(null)
  const canvasWrapRef  = useRef(null)
  const layersRef      = useRef(null)
  const offsetRef      = useRef(0)
  const animRef        = useRef(null)
  const activeRef      = useRef(false)

  useEffect(() => {
    const canvas  = canvasRef.current
    const wrapper = wrapperRef.current
    if (!canvas || !wrapper) return

    const ctx = canvas.getContext('2d')
    const pad = 12

    const resize = () => {
      const r = wrapper.getBoundingClientRect()
      canvas.width  = r.width  + pad * 2
      canvas.height = r.height + pad * 2
    }
    resize()

    const ro = new ResizeObserver(resize)
    ro.observe(wrapper)

    // Fade the canvas layer in/out smoothly
    const setActive = (val) => {
      activeRef.current = val
      const op = val ? '1' : '0'
      if (canvasWrapRef.current) canvasWrapRef.current.style.opacity = op
      if (layersRef.current)     layersRef.current.style.opacity     = op
    }

    // Detect touch/mobile (devices that can't hover)
    const isMobile = window.matchMedia('(hover: none)').matches

    let cleanup = () => {}

    if (isMobile) {
      // Mobile: trigger when 40% of the card scrolls into view
      const io = new IntersectionObserver(
        ([entry]) => setActive(entry.isIntersecting),
        { threshold: 0.4 }
      )
      io.observe(wrapper)
      cleanup = () => io.disconnect()
    } else {
      // Desktop: trigger on hover only
      const onEnter = () => setActive(true)
      const onLeave = () => setActive(false)
      wrapper.addEventListener('mouseenter', onEnter)
      wrapper.addEventListener('mouseleave', onLeave)
      cleanup = () => {
        wrapper.removeEventListener('mouseenter', onEnter)
        wrapper.removeEventListener('mouseleave', onLeave)
      }
    }

    const NUM_ARCS  = 3
    const ARC_FRAC  = 0.18
    const ROUGHNESS = 10
    const DEPTH     = 4

    const animate = () => {
      animRef.current = requestAnimationFrame(animate)

      if (!activeRef.current) {
        // Clear canvas so nothing shows when inactive
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        return
      }

      const w = canvas.width
      const h = canvas.height
      const perimeter = 2 * (w - 2 * pad) + 2 * (h - 2 * pad)

      ctx.clearRect(0, 0, w, h)

      for (let i = 0; i < NUM_ARCS; i++) {
        const startPos = (offsetRef.current + (i * perimeter) / NUM_ARCS) % perimeter
        const endPos   = startPos + perimeter * ARC_FRAC

        const STEPS = 10
        const pts = []
        for (let s = 0; s <= STEPS; s++) {
          pts.push(getPerimeterPoint(startPos + (endPos - startPos) * (s / STEPS), w, h, pad))
        }

        // outer glow pass
        ctx.save()
        ctx.shadowColor = color
        ctx.shadowBlur  = 18
        ctx.strokeStyle = color
        ctx.lineWidth   = 1.8
        ctx.globalAlpha = 0.75

        for (let s = 0; s < STEPS; s++) {
          ctx.beginPath()
          drawJaggedLine(ctx, pts[s][0], pts[s][1], pts[s+1][0], pts[s+1][1], ROUGHNESS, DEPTH)
          ctx.stroke()
        }
        ctx.restore()

        // bright white core
        ctx.save()
        ctx.shadowColor = '#ffffff'
        ctx.shadowBlur  = 6
        ctx.strokeStyle = '#ffffff'
        ctx.lineWidth   = 0.8
        ctx.globalAlpha = 0.45

        for (let s = 0; s < STEPS; s++) {
          ctx.beginPath()
          drawJaggedLine(ctx, pts[s][0], pts[s][1], pts[s+1][0], pts[s+1][1], ROUGHNESS * 0.7, DEPTH - 1)
          ctx.stroke()
        }
        ctx.restore()
      }

      offsetRef.current = (offsetRef.current + 1.5) % perimeter
    }

    animate()

    return () => {
      cancelAnimationFrame(animRef.current)
      ro.disconnect()
      cleanup()
    }
  }, [color])

  return (
    <div
      ref={wrapperRef}
      className={`electric-border ${className}`}
      style={{ '--electric-border-color': color }}
    >
      <div
        ref={canvasWrapRef}
        className="eb-canvas-container"
        style={{ opacity: 0, transition: 'opacity 0.35s ease' }}
      >
        <canvas ref={canvasRef} className="eb-canvas" />
      </div>
      <div
        ref={layersRef}
        className="eb-layers"
        style={{ opacity: 0, transition: 'opacity 0.35s ease' }}
      >
        <div className="eb-glow-1" style={{ borderColor: color }} />
        <div className="eb-glow-2" style={{ borderColor: color }} />
        <div className="eb-background-glow" style={{ background: `linear-gradient(-30deg, ${color}, transparent, ${color}33)` }} />
      </div>
      <div className="eb-content">{children}</div>
    </div>
  )
}
