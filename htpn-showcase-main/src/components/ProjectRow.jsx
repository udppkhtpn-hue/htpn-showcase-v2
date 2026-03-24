import { useLayoutEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function ProjectRow({ project, idx, journeyLabel, basePath = '/projects', ctaLabel = 'VIEW PROJECT' }) {
  const rowRef = useRef(null)
  const navigate = useNavigate()

  useLayoutEffect(() => {
    const row = rowRef.current
    if (!row) return

    const title = row.querySelector('.project-row__title')
    const desc = row.querySelector('.project-row__desc')
    const credit = row.querySelector('.project-row__credit')
    const tags = row.querySelector('.project-row__tags')
    const cta = row.querySelector('.cta-arrow')
    const img = row.querySelector('.img-placeholder')

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: row,
        start: 'top 80%',
        once: true,
      }
    })

    tl.fromTo(title, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 0.1)
      .fromTo(desc,  { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 0.3)
      .fromTo(credit,{ opacity: 0 },        { opacity: 1, duration: 0.5 }, 0.55)
      .fromTo(tags,  { opacity: 0 },        { opacity: 1, duration: 0.4 }, 0.65)
      .fromTo(cta,   { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, 0.75)
      .fromTo(img,   { opacity: 0 },        { opacity: 1, duration: 0.6 }, 0.2)

    return () => tl.scrollTrigger?.kill()
  }, [])

  const handleClick = () => {
    const anchor = basePath.includes('pipeline') ? '#pipeline'
                 : basePath.includes('in-development') ? '#in-development'
                 : '#projects'
    sessionStorage.setItem('scrollTo', anchor)
    navigate(`${basePath}/${project.slug || project.detailPath?.split('/').pop()}`)
  }

  return (
    <div ref={rowRef} className="project-row">
      <div className="project-row__left">
        <div className="project-row__meta">
          {journeyLabel && <span className="project-row__journey">( {journeyLabel} )</span>}
          {project.num && <span className="project-row__num">{project.num}</span>}
        </div>

        <h3 className="project-row__title">{project.title}</h3>

        <p className="project-row__desc">{project.desc}</p>

        {project.credit && (
          <>
            <div className="project-row__credit-label">Built by</div>
            <div className="project-row__credit">{project.credit}</div>
          </>
        )}

        {project.tags?.length > 0 && (
          <div className="project-row__tags">
            {project.tags.map(tag => (
              <span key={tag} className="project-row__tag">{tag}</span>
            ))}
          </div>
        )}

        <button className="cta-arrow" onClick={handleClick} aria-label={ctaLabel}>
          <div className="cta-arrow__circle">
            <ArrowIcon />
          </div>
          {ctaLabel} →
        </button>
      </div>

      <div className="project-row__right">
        <div className="img-placeholder" style={project.accent ? { borderColor: `${project.accent}30` } : {}}>
          {project.image
            ? <img src={project.image} alt={project.title} />
            : <span className="img-placeholder__label">[ Add screenshot here ]</span>
          }
        </div>
      </div>
    </div>
  )
}
