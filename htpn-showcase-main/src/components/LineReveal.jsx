import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function LineReveal({ children, className = '', tag: Tag = 'p', delay = 0 }) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    gsap.fromTo(el,
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0,
        duration: 0.6,
        ease: 'power2.out',
        delay,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      }
    )
    return () => ScrollTrigger.getAll().filter(t => t.vars.trigger === el).forEach(t => t.kill())
  }, [delay])

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
