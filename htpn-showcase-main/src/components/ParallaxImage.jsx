import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function ParallaxImage({ src, alt = '', speed = 0.3, className = '', style = {} }) {
  const wrapRef = useRef(null)
  const imgRef = useRef(null)

  useLayoutEffect(() => {
    const wrap = wrapRef.current
    const img = imgRef.current
    if (!wrap || !img) return

    const pct = speed * 100
    gsap.fromTo(img,
      { yPercent: -pct / 2 },
      {
        yPercent: pct / 2,
        ease: 'none',
        scrollTrigger: {
          trigger: wrap,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    )
    return () => ScrollTrigger.getAll().filter(t => t.vars.trigger === wrap).forEach(t => t.kill())
  }, [speed])

  return (
    <div ref={wrapRef} className={className} style={{ overflow: 'hidden', ...style }}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        style={{ width: '100%', height: `${100 + speed * 100}%`, objectFit: 'cover', willChange: 'transform' }}
      />
    </div>
  )
}
