import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * Reveals text word-by-word as the user scrolls through the element.
 * Mirrors the untold.site scroll-driven text animation.
 */
export default function ScrollRevealText({ text, className = '', cursor = false, start = 'top 78%', end = 'bottom 30%' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Split into word spans
    const words = text.split(' ')
    el.innerHTML = words
      .map(w => `<span class="srv-word"><span class="srv-inner">${w}</span></span>`)
      .join(' ')

    if (cursor) {
      el.insertAdjacentHTML('beforeend', '<span class="srv-cursor">|</span>')
    }

    const inners = el.querySelectorAll('.srv-inner')

    const ctx = gsap.context(() => {
      gsap.fromTo(
        inners,
        { opacity: 0.08, y: 6 },
        {
          opacity: 1,
          y: 0,
          ease: 'none',
          stagger: { each: 0.4, from: 'start' },
          scrollTrigger: {
            trigger: el,
            start,
            end,
            scrub: 1.5,
          },
        }
      )
    }, ref)

    return () => ctx.revert()
  }, [text, cursor, start, end])

  return <p ref={ref} className={`srv ${className}`} />
}
