import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import ProjectGynaePreConsult from './pages/ProjectGynaePreConsult'
import ProjectObstetricPreConsult from './pages/ProjectObstetricPreConsult'
import ProjectFetalKickChart from './pages/ProjectFetalKickChart'
import ProjectSkinDiary from './pages/ProjectSkinDiary'
import ProjectOTScheduling from './pages/ProjectOTScheduling'
import ProjectGynaeCensus from './pages/ProjectGynaeCensus'
import ProjectEBLEstimator from './pages/ProjectEBLEstimator'
import ProjectTherapyAI from './pages/ProjectTherapyAI'
import ProjectEDDashboard from './pages/ProjectEDDashboard'
import ProjectDLPDashboard from './pages/ProjectDLPDashboard'
import ProjectRosterGenerator from './pages/ProjectRosterGenerator'
import ProjectCGRForm from './pages/ProjectCGRForm'
import ProjectDLPForm from './pages/ProjectDLPForm'
import ProjectPortalAktiviti from './pages/ProjectPortalAktiviti'
import ProjectIncidentForm from './pages/ProjectIncidentForm'
import ProjectPDFEditor from './pages/ProjectPDFEditor'
import ProjectEKehadiran from './pages/ProjectEKehadiran'
import PipelineDetail from './pages/PipelineDetail'
import PipelineAmr from './pages/PipelineAmr'
import PipelineFacialAI from './pages/PipelineFacialAI'
import PipelineVirtualClinic from './pages/PipelineVirtualClinic'
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
        <Route path="/projects/preconsult-gynae" element={<ProjectGynaePreConsult />} />
        <Route path="/projects/preconsult-obstetric" element={<ProjectObstetricPreConsult />} />
        <Route path="/projects/fetal-kick-chart" element={<ProjectFetalKickChart />} />
        <Route path="/projects/skin-diary" element={<ProjectSkinDiary />} />
        <Route path="/projects/ot-scheduling" element={<ProjectOTScheduling />} />
        <Route path="/projects/gynae-census" element={<ProjectGynaeCensus />} />
        <Route path="/projects/ebl-estimator" element={<ProjectEBLEstimator />} />
        <Route path="/projects/therapy-ai" element={<ProjectTherapyAI />} />
        <Route path="/projects/ed-dashboard" element={<ProjectEDDashboard />} />
        <Route path="/projects/dlp-dashboard" element={<ProjectDLPDashboard />} />
        <Route path="/projects/roster-generator" element={<ProjectRosterGenerator />} />
        <Route path="/projects/cgr-form" element={<ProjectCGRForm />} />
        <Route path="/projects/dlp-form" element={<ProjectDLPForm />} />
        <Route path="/projects/portal-aktiviti" element={<ProjectPortalAktiviti />} />
        <Route path="/projects/incident-form" element={<ProjectIncidentForm />} />
        <Route path="/projects/pdf-editor" element={<ProjectPDFEditor />} />
        <Route path="/projects/e-kehadiran" element={<ProjectEKehadiran />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/pipeline/amr" element={<PipelineAmr />} />
        <Route path="/pipeline/facial-scan-ai" element={<PipelineFacialAI />} />
        <Route path="/pipeline/prison-virtual-clinic" element={<PipelineVirtualClinic />} />
        <Route path="/pipeline/:slug" element={<PipelineDetail />} />
        <Route path="/in-development/:slug" element={<InDevelopmentDetail />} />
      </Routes>
    </>
  )
}
