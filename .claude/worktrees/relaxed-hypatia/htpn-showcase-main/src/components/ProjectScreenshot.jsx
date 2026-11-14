import { useLocation } from 'react-router-dom'
import { screenshotFor } from '../data/screenshots'

// Phone-framed landing-page screenshot shown at the top of an explainer page.
export default function ProjectScreenshot() {
  const { pathname } = useLocation()
  const src = screenshotFor(pathname)
  if (!src) return null
  return (
    <figure className="detail-screenshot">
      <div className="detail-screenshot__frame">
        <img src={src} alt="Mobile view of the app landing page" width="390" height="704" loading="eager" />
      </div>
      <figcaption>Mobile view — app landing page</figcaption>
    </figure>
  )
}
