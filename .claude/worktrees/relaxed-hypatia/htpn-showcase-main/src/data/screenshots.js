// Mobile landing-page screenshots (390px @2x WebP) in /public/screenshots
export const SCREENSHOT_SLUGS = new Set([
  'cardioflow',
  'clabsi-guard-pro',
  'dlp-form',
  'duty-rotator',
  'e-kehadiran',
  'ebl-estimator',
  'fetal-kick-chart',
  'growth-chart',
  'hirarc-portal',
  'hpp-osh-alert',
  'im-duty-planner',
  'incident-form',
  'iqc-glucometer',
  'klinik-diabetes-pintar',
  'klinik-reumatologi',
  'maternal-assessment',
  'medevac-portal',
  'medpulse-mar',
  'memory-clinic',
  'mental-wellbeing',
  'ot-scheduling',
  'patholab-pro',
  'pdf-editor',
  'pharmacy-logistic-jasmin',
  'physio-measure-pro',
  'pocket-nurse',
  'preconsult-gynae',
  'preconsult-obstetric',
  'roster-generator',
  'skin-diary',
  'tbis-10a1',
])

export function screenshotFor(detailPath = '') {
  const slug = detailPath.split('/').filter(Boolean).pop()
  return SCREENSHOT_SLUGS.has(slug) ? `/screenshots/${slug}.webp` : null
}
