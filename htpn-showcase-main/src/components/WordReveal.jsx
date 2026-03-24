import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function WordReveal({ children, className = '', tag: Tag = 'h2', delay = 0 }) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const words = el.querySelectorAll('.word-inner')
    gsap.fromTo(words,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
        delay,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          once: true,
        },
      }
    )
    return () => ScrollTrigger.getAll().filter(t => t.vars.trigger === el).forEach(t => t.kill())
  }, [delay])

  // Wrap each word
  const text = typeof children === 'string' ? children : ''
  const lines = text.split('\n')

  return (
    <Tag ref={ref} className={`section__headline ${className}`}>
      {lines.map((line, li) => (
        <span key={li} style={{ display: 'block' }}>
          {line.split(' ').map((word, wi) => (
            <span key={wi} className="word">
              <span className="word-inner">{word}</span>
            </span>
          ))}
          {li < lines.length - 1 && ' '}
        </span>
      ))}
    </Tag>
  )
}
