import { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function ProjectRow({ project, index }) {
  const rowRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const el = rowRef.current
    if (!el) return

    gsap.fromTo(
      el.querySelectorAll('.project-row__meta, .project-row__title, .project-row__category, .project-row__desc, .project-row__credit, .project-row__tags, .project-row__cta, .project-row__visual'),
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.07,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      }
    )

    return () => ScrollTrigger.getAll().forEach(t => {
      if (t.vars?.scrollTrigger?.trigger === el) t.kill()
    })
  }, [])

  const handleClick = () => {
    sessionStorage.removeItem('scrollTo')
    navigate(project.detailPath)
  }

  const creditStr = [
    project.credit?.by,
    project.credit?.aiTeam,
    project.credit?.coAuthor,
  ].filter(Boolean).join(', ') + (project.credit?.dept ? ` · ${project.credit.dept}` : '')

  return (
    <div ref={rowRef} className="project-row" onClick={handleClick}>
      <div className="project-row__left">
        <div className="project-row__meta">
          <span className="project-row__num">{project.num}</span>
          <span className="project-row__badge project-row__badge--live">LIVE</span>
        </div>

        <h2 className="project-row__title">{project.title}</h2>
        <p className="project-row__category">{project.categoryLabel}</p>
        <p className="project-row__desc">{project.desc}</p>
        {creditStr && <p className="project-row__credit">By {creditStr}</p>}

        <div className="project-row__tags">
          {project.tags?.map(tag => (
            <span key={tag} className="project-row__tag">{tag}</span>
          ))}
        </div>

        <button className="project-row__cta" onClick={(e) => { e.stopPropagation(); handleClick() }}>
          View Project →
        </button>
      </div>

      <div className="project-row__right">
        <div
          className="project-row__visual"
          style={{ borderColor: project.accent ? `${project.accent}22` : undefined }}
        >
          {project.iconType === 'image' && project.icon ? (
            <img src={project.icon} alt="" className="project-row__icon-img" />
          ) : project.icon ? (
            <span className="project-row__icon">{project.icon}</span>
          ) : (
            <span
              className="project-row__icon"
              style={{ fontFamily: 'monospace', fontSize: '14px', color: 'var(--muted)', opacity: 0.3 }}
            >
              {project.num}
            </span>
          )}
          {project.accent && (
            <div
              style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                height: '2px',
                background: project.accent,
                opacity: 0.6,
              }}
            />
          )}
        </div>
      </div>
    </div>
  )
}
