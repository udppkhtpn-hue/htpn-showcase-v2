import { useEffect, useRef, useState } from 'react'

export default function AnimatedCounter({ to, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true

          const steps = 60
          const increment = to / steps
          const interval = duration / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= to) {
              setCount(to)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, interval)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [to, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}
