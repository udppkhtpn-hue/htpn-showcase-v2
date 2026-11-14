// Mobile landing-page screenshots (390px @2x WebP) in /public/screenshots
export const SCREENSHOT_SLUGS = new Set([
  'cardioflow',
  'clabsi-guard-pro',
  'dlp-form',
  'duty-rotator',
  'e-kehadiran',
  'ebl-estimator',
  'family-cancer-risk-assistant',
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
  'minda-trek',
  'my-family-health-app',
  'patholab-pro',
  'pbac-tracker',
  'pdf-editor',
  'pharmacy-logistic-jasmin',
  'physio-measure-pro',
  'pocket-nurse',
  'preconsult-gynae',
  'preconsult-obstetric',
  'resushero',
  'roster-generator',
  'skin-diary',
  'spectra',
  'tbis-10a1',
  'wound-care-360',
])

export function screenshotFor(detailPath = '') {
  const slug = detailPath.split('/').filter(Boolean).pop()
  return SCREENSHOT_SLUGS.has(slug) ? `/screenshots/${slug}.webp` : null
}

// Optional card-thumbnail crop (CSS object-position) for screenshots whose content starts below the top
const CARD_POSITION = {
  resushero: 'center 24%',
}

export function cardPositionFor(detailPath = '') {
  const slug = detailPath.split('/').filter(Boolean).pop()
  return CARD_POSITION[slug] || 'center top'
}
