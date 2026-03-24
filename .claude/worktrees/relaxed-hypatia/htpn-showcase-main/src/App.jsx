import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import PipelineDetail from './pages/PipelineDetail'
import InDevelopmentDetail from './pages/InDevelopmentDetail'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    if (!sessionStorage.getItem('scrollTo')) {
      window.scrollTo(0, 0)
    }
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/pipeline/:slug" element={<PipelineDetail />} />
        <Route path="/in-development/:slug" element={<InDevelopmentDetail />} />
      </Routes>
    </>
  )
}
