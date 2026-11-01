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
import ProjectMentalWellbeing from './pages/ProjectMentalWellbeing'
import ProjectMedMovePro from './pages/ProjectMedMovePro'
import ProjectMedevacPortal from './pages/ProjectMedevacPortal'
import ProjectHirarcPortal from './pages/ProjectHirarcPortal'
import ProjectPhlebotomyBooking from './pages/ProjectPhlebotomyBooking'
import ProjectPhysioMeasurePro from './pages/ProjectPhysioMeasurePro'
import ProjectHppOshAlert from './pages/ProjectHppOshAlert'
import ProjectSistemEbooking from './pages/ProjectSistemEbooking'
import ProjectPharmacyLogisticJasmin from './pages/ProjectPharmacyLogisticJasmin'
import ProjectPsikiatriHPD from './pages/ProjectPsikiatriHPD'
import ProjectKempenDermaDarah from './pages/ProjectKempenDermaDarah'
import ProjectOTLeaveRegister from './pages/ProjectOTLeaveRegister'
import ProjectAduanHPD from './pages/ProjectAduanHPD'
import ProjectVehicleBookingHPD from './pages/ProjectVehicleBookingHPD'
import ProjectAkasiaWard from './pages/ProjectAkasiaWard'
import ProjectCPPortal from './pages/ProjectCPPortal'
import ProjectELampiranD from './pages/ProjectELampiranD'
import ProjectNursingCensus from './pages/ProjectNursingCensus'
import ProjectMaternalAssessment from './pages/ProjectMaternalAssessment'
import ProjectIQCGlucometer from './pages/ProjectIQCGlucometer'
import ProjectPocketNurse from './pages/ProjectPocketNurse'
import ProjectMedPulseMAR from './pages/ProjectMedPulseMAR'
import ProjectTBIS from './pages/ProjectTBIS'
import ProjectDutyRotator from './pages/ProjectDutyRotator'
import ProjectPathoLabPro from './pages/ProjectPathoLabPro'
import ProjectSJAMDispatch from './pages/ProjectSJAMDispatch'
import ProjectKlinikDiabetes from './pages/ProjectKlinikDiabetes'
import ProjectMemoryClinic from './pages/ProjectMemoryClinic'
import ProjectIMDutyPlanner from './pages/ProjectIMDutyPlanner'
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
        <Route path="/projects/mental-wellbeing" element={<ProjectMentalWellbeing />} />
        <Route path="/projects/medmove-pro" element={<ProjectMedMovePro />} />
        <Route path="/projects/medevac-portal" element={<ProjectMedevacPortal />} />
        <Route path="/projects/hirarc-portal" element={<ProjectHirarcPortal />} />
        <Route path="/projects/phlebotomy-booking" element={<ProjectPhlebotomyBooking />} />
        <Route path="/projects/physio-measure-pro" element={<ProjectPhysioMeasurePro />} />
        <Route path="/projects/hpp-osh-alert" element={<ProjectHppOshAlert />} />
        <Route path="/projects/sistem-ebooking" element={<ProjectSistemEbooking />} />
        <Route path="/projects/pharmacy-logistic-jasmin" element={<ProjectPharmacyLogisticJasmin />} />
        <Route path="/projects/psikiatri-hpd" element={<ProjectPsikiatriHPD />} />
        <Route path="/projects/kempen-derma-darah" element={<ProjectKempenDermaDarah />} />
        <Route path="/projects/ot-leave-register" element={<ProjectOTLeaveRegister />} />
        <Route path="/projects/aduan-hpd" element={<ProjectAduanHPD />} />
        <Route path="/projects/vehicle-booking-hpd" element={<ProjectVehicleBookingHPD />} />
        <Route path="/projects/akasia-ward" element={<ProjectAkasiaWard />} />
        <Route path="/projects/cp-portal" element={<ProjectCPPortal />} />
        <Route path="/projects/e-lampiran-d" element={<ProjectELampiranD />} />
        <Route path="/projects/nursing-census" element={<ProjectNursingCensus />} />
        <Route path="/projects/maternal-assessment" element={<ProjectMaternalAssessment />} />
        <Route path="/projects/iqc-glucometer" element={<ProjectIQCGlucometer />} />
        <Route path="/projects/pocket-nurse" element={<ProjectPocketNurse />} />
        <Route path="/projects/medpulse-mar" element={<ProjectMedPulseMAR />} />
        <Route path="/projects/tbis-10a1" element={<ProjectTBIS />} />
        <Route path="/projects/duty-rotator" element={<ProjectDutyRotator />} />
        <Route path="/projects/patholab-pro" element={<ProjectPathoLabPro />} />
        <Route path="/projects/sjam-dispatch" element={<ProjectSJAMDispatch />} />
        <Route path="/projects/klinik-diabetes-pintar" element={<ProjectKlinikDiabetes />} />
        <Route path="/projects/memory-clinic" element={<ProjectMemoryClinic />} />
        <Route path="/projects/im-duty-planner" element={<ProjectIMDutyPlanner />} />
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
