import { Component, Suspense, lazy } from 'react'

const Lanyard = lazy(() => import('./Lanyard'))

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback || null
    }
    return this.props.children
  }
}

// Fallback — static card if WebGL / physics fails
function DirectorCardFallback() {
  return (
    <div style={{
      maxWidth: '260px',
      margin: '0 auto',
      background: 'linear-gradient(160deg,#0a0d14,#111a28)',
      border: '1.5px solid rgba(245,197,24,0.4)',
      borderRadius: '14px',
      overflow: 'hidden',
    }}>
      <img
        src="/director.png"
        alt="Dr Hj Muhd Siv Azhar Merican"
        style={{ width: '100%', display: 'block' }}
      />
      <div style={{ padding: '0.9rem 1rem', textAlign: 'center' }}>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#f5c518', marginBottom: '0.3rem' }}>
          Pengarah Hospital
        </div>
        <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#e8f4ff', lineHeight: 1.3 }}>
          Dr Hj Muhd Siv Azhar Merican bin Abdullah
        </div>
      </div>
    </div>
  )
}

export default function LanyardBoundary() {
  return (
    <ErrorBoundary fallback={<DirectorCardFallback />}>
      <Suspense fallback={<DirectorCardFallback />}>
        <Lanyard />
      </Suspense>
    </ErrorBoundary>
  )
}
