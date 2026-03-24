import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const DEMO_URL = '/skin-diary.html'
const ACCENT = '#3b82f6'

const medications = [
  {
    name: 'Aqueous Cream (Bath)',
    freq: 'Every bath',
    area: 'Whole body',
    desc: 'Used as soap substitute — lather over body, rinse and pat dry',
    steroid: false,
  },
  {
    name: 'Cetrimide 1% Shampoo',
    freq: 'Once daily',
    area: 'Scalp',
    desc: 'Medicated shampoo — mix with water, lather on scalp, rinse clean',
    steroid: false,
  },
  {
    name: 'Aqueous Cream + 25% Glycerine',
    freq: '3× daily or as needed',
    area: 'Whole body incl. face & neck',
    desc: 'Moisturiser — applied to slightly damp skin post-bath',
    steroid: false,
  },
  {
    name: 'White Soft Paraffin (Vaseline)',
    freq: '3× daily or as needed',
    area: 'Scalp',
    desc: 'Scalp moisturiser — applied post-bath',
    steroid: false,
  },
  {
    name: 'Fusidic Acid Cream',
    freq: '2× daily',
    area: 'Infected red areas',
    desc: 'Topical antibiotic for infected or red skin',
    steroid: false,
  },
  {
    name: 'BVC 1:4 (Steroid Cream)',
    freq: '2× daily',
    area: 'Trunk & Limbs',
    desc: 'Applied thinly over red areas after moisturiser — triggers FTU diagram',
    steroid: true,
  },
  {
    name: 'Hydrocortisone 1% Cream',
    freq: '2× daily',
    area: 'Head, face & neck',
    desc: 'Milder steroid for sensitive facial/scalp areas — triggers FTU diagram',
    steroid: true,
  },
  {
    name: 'Zinc Oxide Cream',
    freq: 'As needed',
    area: 'Diaper area',
    desc: 'Applied to red nappy rash area with every diaper change',
    steroid: false,
  },
]

const outputItems = [
  '"SKIN DIARY" header — large, prominent title',
  'Patient name + MRN displayed at top',
  'Body diagram (front & back SVG) with labelled zones — Muka, Badan, Kaki, Belakang, Punggung',
  'Medication table: Item & Frequency · Area · Step-by-step BM instructions',
  'FTU (Fingertip Unit) diagram — auto-appears if any steroid is selected',
  'Footer with generator credit (Hanim) and today\'s date',
]

const howItWorks = [
  'Enter patient name and MRN',
  'Tick the medications prescribed for this patient',
  'Preview updates live in real time as medications are selected',
  'Click "Cetak / Simpan PDF" to print or save as PDF',
  'Control panel is hidden during printing — only the Skin Diary document prints',
  'FTU diagram auto-included if BVC or Hydrocortisone is selected',
  'No backend, no data stored — fully offline',
]

export default function SkinDiary() {
  return (
    <>
      <Navbar />
      <main className="project-page">

        {/* Back */}
        <div className="project-page-back">
          <Link to="/#projects" className="back-link">← Back to Projects</Link>
        </div>

        {/* Header */}
        <div className="project-page-header">
          <div className="project-page-meta">
            <span className="card-num">#04</span>
            <span className="card-status status-live">Live</span>
            <span className="demo-badge" style={{ background: 'rgba(59,130,246,0.12)', color: ACCENT, borderColor: 'rgba(59,130,246,0.35)' }}>
              Live Tool · HTML Demo
            </span>
          </div>
          <div className="project-page-title-row">
            <img src="/icon-derm.png" alt="Skin Diary Generator" className="project-page-logo" />
            <h1 className="project-page-title">Skin Diary Generator</h1>
          </div>
          <p className="project-page-subtitle">
            Penjana Tatacara Ubat Kulit — Used by outpatient pharmacists to generate personalised, print-ready dermatology cream instruction sheets at the point of dispensing
          </p>
          <p className="project-page-credit">
            Built by Pn Hanim &nbsp;·&nbsp; <span>Farmasi · Paediatric Dermatology · HTPN</span>
          </p>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-btn"
            style={{ background: ACCENT }}
          >
            Open Skin Diary Generator →
          </a>
        </div>

        {/* Tech specs */}
        <div className="project-page-specs">
          <div className="spec-card">
            <div className="spec-label">Tech Stack</div>
            <div className="spec-value">React 18 + Tailwind</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Backend</div>
            <div className="spec-value">None — fully offline</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Medications</div>
            <div className="spec-value">8 in library</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Output</div>
            <div className="spec-value">Print-ready PDF handout</div>
          </div>
        </div>

        {/* What it is */}
        <div className="project-page-block">
          <h2 className="block-title">What it is</h2>
          <p className="block-text">
            A pharmacy tool used exclusively at the <strong style={{ color: 'var(--text)' }}>outpatient pharmacy</strong> by
            dispensing pharmacists at HTPN. When a patient is prescribed dermatology topical creams,
            the pharmacist enters the patient's name and MRN, ticks the specific creams dispensed,
            and the app instantly generates a professionally formatted, bilingual (BM) instruction sheet —
            known as a <strong style={{ color: 'var(--text)' }}>"Skin Diary"</strong>. The sheet is
            printed and handed to the patient or their parents at the point of dispensing to guide
            correct at-home application of each cream.
          </p>
        </div>

        {/* Medication library */}
        <div className="project-page-block">
          <h2 className="block-title">Medication library — 8 topical agents</h2>
          <p className="block-text" style={{ marginBottom: '1rem' }}>
            ⚡ Steroid medications automatically trigger the FTU (Fingertip Unit) dosing diagram in the printed output.
          </p>
          <div className="metrics-grid">
            {medications.map(m => (
              <div
                key={m.name}
                className="metric-card"
                style={m.steroid ? {
                  background: 'rgba(217,119,6,0.08)',
                  borderColor: 'rgba(217,119,6,0.3)',
                } : {}}
              >
                <div>
                  <div className="metric-title" style={m.steroid ? { color: '#d97706' } : {}}>
                    {m.name}{m.steroid ? ' ⚡' : ''}
                  </div>
                  <div className="metric-sub" style={{ marginTop: '0.25rem' }}>
                    {m.freq} · <em>{m.area}</em>
                  </div>
                  <div className="metric-sub" style={{ marginTop: '0.25rem' }}>{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Output + How it works — two col */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>

          <div className="project-page-block" style={{ background: 'var(--surface2)', borderRadius: '10px', padding: '1.25rem', marginBottom: 0 }}>
            <h2 className="block-title">Generated document contents</h2>
            <ul className="block-list">
              {outputItems.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <div className="project-page-block" style={{ background: 'var(--surface2)', borderRadius: '10px', padding: '1.25rem', marginBottom: 0 }}>
            <h2 className="block-title">How it works</h2>
            <ul className="block-list">
              {howItWorks.map(step => <li key={step}>{step}</li>)}
            </ul>
          </div>

        </div>

        {/* Clinical significance */}
        <div className="project-page-block">
          <h2 className="block-title">Who it is for &amp; clinical significance</h2>
          <p className="block-text">
            Built by Pn Hanim for use exclusively by pharmacists at the HTPN outpatient pharmacy.
            Eczema and skin condition management requires patients — or their parents — to correctly
            apply multiple different topical creams in the right sequence, frequency, and body location.
            Incorrect application is one of the most common reasons treatment fails. Previously this
            was explained verbally or via a generic handout at the dispensing counter. The Skin Diary
            Generator allows the pharmacist to produce a{' '}
            <strong style={{ color: 'var(--text)' }}>personalised, clearly structured instruction sheet</strong>{' '}
            specific to each patient's actual dispensed creams in under a minute — improving medication
            adherence and reducing unnecessary follow-ups due to incorrect usage.
          </p>
        </div>

        {/* CTA */}
        <div className="project-page-cta">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-btn"
            style={{ background: ACCENT }}
          >
            Open Skin Diary Generator →
          </a>
        </div>

      </main>
      <Footer />
    </>
  )
}
