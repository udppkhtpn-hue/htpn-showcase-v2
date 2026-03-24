import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Pipeline from './components/Pipeline'
import About from './components/About'
import Journey from './components/Journey'
import InternalTraining from './components/InternalTraining'
import Contact from './components/Contact'
import Footer from './components/Footer'
import DlpDashboard from './pages/DlpDashboard'
import EdDashboard from './pages/EdDashboard'
import CgrForm from './pages/CgrForm'
import RosterGenerator from './pages/RosterGenerator'
import GynaeForm from './pages/GynaeForm'
import SmartPdfEditor from './pages/SmartPdfEditor'
import OtScheduling from './pages/OtScheduling'
import TherapyAI from './pages/TherapyAI'
import EblEstimator from './pages/EblEstimator'
import PreConsultGynae from './pages/PreConsultGynae'
import PreConsultObstetric from './pages/PreConsultObstetric'
import FetalKickChart from './pages/FetalKickChart'
import DlpForm from './pages/DlpForm'
import SkinDiary from './pages/SkinDiary'
import PortalAktiviti from './pages/PortalAktiviti'
import IncidentForm from './pages/IncidentForm'
import ScrollToTop from './components/ScrollToTop'

function Divider() {
  return <div className="divider" />
}

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Divider />
      <Projects />
      <Divider />
      <Pipeline />
      <Divider />
      <About />
      <Divider />
      <Journey />
      <Divider />
      <InternalTraining />
      <Divider />
      <Contact />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/projects/dlp-dashboard" element={<DlpDashboard />} />
      <Route path="/projects/ed-dashboard" element={<EdDashboard />} />
      <Route path="/projects/cgr-form" element={<CgrForm />} />
      <Route path="/projects/roster-generator" element={<RosterGenerator />} />
      <Route path="/projects/gynae-census" element={<GynaeForm />} />
      <Route path="/projects/pdf-editor" element={<SmartPdfEditor />} />
      <Route path="/projects/ot-scheduling" element={<OtScheduling />} />
      <Route path="/projects/therapy-ai" element={<TherapyAI />} />
      <Route path="/projects/ebl-estimator" element={<EblEstimator />} />
      <Route path="/projects/preconsult-gynae" element={<PreConsultGynae />} />
      <Route path="/projects/preconsult-obstetric" element={<PreConsultObstetric />} />
      <Route path="/projects/fetal-kick-chart" element={<FetalKickChart />} />
      <Route path="/projects/dlp-form" element={<DlpForm />} />
      <Route path="/projects/skin-diary" element={<SkinDiary />} />
      <Route path="/projects/portal-aktiviti" element={<PortalAktiviti />} />
      <Route path="/projects/incident-form" element={<IncidentForm />} />
    </Routes>
    </>
  )
}
