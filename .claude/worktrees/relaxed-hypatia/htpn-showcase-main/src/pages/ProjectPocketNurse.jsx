import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import SiteNavigator from '../components/SiteNavigator'
import '../styles/detail.css'
import '../styles/project-rich.css'

const ACCENT = '#facc15'
const DEMO_URL = 'https://icunursehcj.blogspot.com'

export default function ProjectPocketNurse() {
  const navigate = useNavigate()
  useEffect(() => { return () => ScrollTrigger.getAll().forEach(t => t.kill()) }, [])
  const handleBack = () => { sessionStorage.setItem('scrollTo', '#projects'); navigate('/') }

  return (
    <div className="detail-page">
      <Helmet>
        <title>Pocket Nurse — Dilution, Infusion &amp; Antidote Decision Support · HTPN HIO</title>
        <meta name="description" content="A bedside clinical decision-support tool for ward and critical care nurses and medical officers — injectable drug dilution protocols, infusion pump rate math, Y-site compatibility, and a rapid antidote guide, in Bahasa Malaysia and English." />
        <link rel="canonical" href="https://htpn-showcase-v2.vercel.app/projects/pocket-nurse" />
        <meta property="og:title" content="Pocket Nurse — Dilution & Antidote Decision Support · HTPN HIO" />
        <meta property="og:url" content="https://htpn-showcase-v2.vercel.app/projects/pocket-nurse" />
      </Helmet>

      <div className="detail-container">

        <button className="detail-back" onClick={handleBack}>← Back to Projects</button>

        <div className="detail-header">
          <span className="detail-badge detail-badge--live">LIVE</span>
          <h1 className="detail-title">Pocket Nurse — Clinical Dilution, Infusion &amp; Antidote Decision Support</h1>
          <p className="detail-number" style={{ color: ACCENT }}>#18 · Doctor's Journey</p>
        </div>

        <div className="detail-meta">
          <span className="detail-tag">Medication Safety</span>
          <span className="detail-tag">Critical Care</span>
          <span className="detail-tag">Bilingual (MS/EN)</span>
        </div>

        <p className="detail-subtitle">
          A bedside decision-support tool for ward and intensive care nurses and medical officers on phones, tablets, and nursing station computers — turning injectable drug dilution protocols, infusion pump arithmetic, Y-site compatibility, and emergency antidote guidance into a fast, searchable reference.
        </p>

        <div className="detail-block">
          <div className="detail-block__cta">
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="detail-demo-btn" style={{ background: ACCENT, color: '#0a0a0a' }}>
              Open Demo →
            </a>
          </div>
        </div>

        <div className="detail-block">
          <div className="spec-cards">
            <div className="spec-card-new">
              <span className="spec-card-new__label">Pillar</span>
              <span className="spec-card-new__value" style={{ color: ACCENT }}>Doctor's Journey</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Workflow Stream</span>
              <span className="spec-card-new__value">Ward, ICU, CCU &amp; Emergency Nurses and Physicians</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Tech Stack</span>
              <span className="spec-card-new__value">HTML5 / CSS3 (light &amp; dark) / Vanilla JavaScript (ES6+)</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Data Architecture</span>
              <span className="spec-card-new__value">Client-side — 244-drug dataset cached in the browser</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Source</span>
              <span className="spec-card-new__value">Dilution Protocol, 1st Edition (2017), BPF JKNS</span>
            </div>
            <div className="spec-card-new">
              <span className="spec-card-new__label">Status</span>
              <span className="spec-card-new__value" style={{ color: '#4ade80' }}>Deployed · ICU / CCU / HDW</span>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">THE PROBLEM</h2>
          <p className="detail-subtitle" style={{ marginBottom: '1.5rem' }}>
            Emergency and critical care drugs are unforgiving: the wrong diluent, the wrong concentration, or a bolus given where a pump infusion was required can cause serious harm. The correct preparation exists in a printed protocol, but finding and applying it under pressure, at the bedside, is a cognitive burden.
          </p>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Dense Printed Protocols</span>
              <span className="prd-section-item__desc">Dilution instructions for hundreds of injectables sit in a long document that is slow to search when a drug is needed in minutes.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Mental Arithmetic Under Pressure</span>
              <span className="prd-section-item__desc">Converting a weight-based dose in micrograms per kilogram per minute into a pump rate in millilitres per hour is exactly the kind of calculation that goes wrong when staff are stretched.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Overdose and Toxicity Reference</span>
              <span className="prd-section-item__desc">Antidote regimens are needed rarely and urgently, so they are the least likely to be remembered when a poisoning or overdose arrives.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">HOW IT WORKS</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(250,204,21,0.15)', color: ACCENT }}>01</span>
              <span className="prd-section-item__title">Access &amp; Initiation</span>
              <span className="prd-section-item__desc">Launched from a saved bookmark or intranet link, which loads the cached 244-drug dataset. No installation or account — drug search, the A–Z index, the Y-site checker, and the antidote directory are available straight away.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(250,204,21,0.15)', color: ACCENT }}>02</span>
              <span className="prd-section-item__title">Active Task &amp; Processing</span>
              <span className="prd-section-item__desc">Clinicians type a generic or brand name, use a category chip such as High Alert or Antibiotics, or tap a letter in the alphabetical index. A card opens with reconstitution, diluent and volume, infusion limits, stability, high-alert warnings, and a worked dosage calculation.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num" style={{ background: 'rgba(250,204,21,0.15)', color: ACCENT }}>03</span>
              <span className="prd-section-item__title">Delivery &amp; Handover</span>
              <span className="prd-section-item__desc">Preparation details can be copied to the clipboard, run through the dose calculator (Kira Dos), or shared to a team chat on WhatsApp — so the same verified parameters move between nurse and doctor at shift change.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">CORE FUNCTIONAL MODULES</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">01</span>
              <span className="prd-section-item__title">Utility &amp; Profile Banner</span>
              <span className="prd-section-item__desc">Persistent header with protocol attribution, links to the A–Z list, Y-Site Checker, and rapid antidote guide, a dataset status indicator, night mode, a language switch, and the active clinician profile.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">02</span>
              <span className="prd-section-item__title">Rapid Search &amp; Triage Filtering</span>
              <span className="prd-section-item__desc">A full-width search by generic or brand name, with quick chips for High Alert (HAM), Antibiotik &amp; Antifungal, Inotropik &amp; Kardiovaskular, Antidot &amp; Kecemasan, and the full A–Z list.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">03</span>
              <span className="prd-section-item__title">Drug Administration Card</span>
              <span className="prd-section-item__desc">Each drug is laid out in sequential steps: reconstitution, further dilution and suitable diluents (single and double strength where relevant), rate and method of administration, stability and storage, and precautions including extravasation management — with high-alert badges, brand names, and quick actions for Kira Dos, WhatsApp, and Copy.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">04</span>
              <span className="prd-section-item__title">Worked Example &amp; Infusion Math</span>
              <span className="prd-section-item__desc">Cards for infusion drugs show a worked calculation that turns a weight-based dose into an hourly dose and then a pump rate in mL per hour, so the arithmetic is checked rather than done in the head.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">05</span>
              <span className="prd-section-item__title">Injectable Drug A–Z Directory</span>
              <span className="prd-section-item__desc">Direktori Ubat Suntikan indexes each drug with trade names, formulations, high-alert flags, and the page reference in the official protocol.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">06</span>
              <span className="prd-section-item__title">Rapid Antidote &amp; Resuscitation Guide</span>
              <span className="prd-section-item__desc">A dedicated emergency modal with its own search for poisonings, drug toxicities, and overdoses, setting out the primary antidote and its regimen for conditions such as paracetamol and opioid overdose.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">ARCHITECTURAL &amp; UX HIGHLIGHTS</h2>
          <ul className="detail-features">
            <li>High-alert safety guardrails — red warning banners and explicit prohibitions, such as never giving certain drugs as an IV bolus</li>
            <li>Bedside math verification puts worked formulas directly beneath each drug so weight-based doses become pump rates without mental arithmetic</li>
            <li>Critical-path modals — the A–Z index, antidote guide, and Y-site checker open as focused overlays with their own search, without losing the current card</li>
            <li>Instant client-side filtering across 244 injectables with no network round trip, suited to patchy ward Wi-Fi</li>
            <li>One-touch clipboard export and WhatsApp sharing for handover between nurses and doctors</li>
          </ul>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">GOVERNANCE &amp; SCOPE</h2>
          <div className="prd-block-inner prd-block-inner--accent">
            <ul className="detail-features">
              <li>Built on the Dilution Protocol, 1st Edition (2017), issued by Bahagian Perkhidmatan Farmasi, Jabatan Kesihatan Negeri Selangor (BPF JKNS)</li>
              <li>An operational reference for registered nursing and medical personnel — it does not replace the prescriber's order or a pharmacist's advice</li>
              <li>High-alert medications need independent double-checking and the delivery method the protocol specifies</li>
              <li>Antidote regimens must follow direct physician orders, and users should confirm against the current protocol</li>
            </ul>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">PRINTED PROTOCOL vs POCKET NURSE — COMPARISON</h2>
          <div className="detail-table-wrap">
            <table className="detail-table">
              <thead>
                <tr>
                  <th>Evaluation Vector</th>
                  <th>Printed Protocol</th>
                  <th style={{ color: ACCENT }}>Pocket Nurse</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Finding a Drug</td>
                  <td>Page-by-page index search</td>
                  <td>Instant search by generic or brand name</td>
                </tr>
                <tr>
                  <td>Pump Rate</td>
                  <td>Calculated by hand or on a calculator</td>
                  <td>Worked formula shown with the drug</td>
                </tr>
                <tr>
                  <td>High-Alert Drugs</td>
                  <td>Warnings inside dense text</td>
                  <td>Prominent badges and explicit prohibitions</td>
                </tr>
                <tr>
                  <td>Antidotes</td>
                  <td>Separate section, hard to find in a hurry</td>
                  <td>Dedicated searchable emergency modal</td>
                </tr>
                <tr>
                  <td>Sharing</td>
                  <td>Photocopy or verbal relay</td>
                  <td>Copy or WhatsApp in one tap</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="detail-block__title">STRATEGIC IMPACT</h2>
          <ul className="prd-section-list">
            <li className="prd-section-item">
              <span className="prd-section-item__num">⚠️</span>
              <span className="prd-section-item__title">Fewer Preparation Errors</span>
              <span className="prd-section-item__desc">Putting the protocol's dilution steps and the arithmetic in one place reduces reconstitution and rate mistakes with high-risk drugs.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">⏱️</span>
              <span className="prd-section-item__title">Faster in an Emergency</span>
              <span className="prd-section-item__desc">The antidote directory and search shorten the time between recognising a toxicity and having the regimen in front of the team.</span>
            </li>
            <li className="prd-section-item">
              <span className="prd-section-item__num">🤝</span>
              <span className="prd-section-item__title">One Shared Source at Handover</span>
              <span className="prd-section-item__desc">Nurses and doctors work from the same card, copied or shared in a tap, rather than from memory or paraphrase.</span>
            </li>
          </ul>
        </div>

        <div className="detail-block">
          <div className="prd-credit-box">
            <span className="prd-credit-box__label">Developed By</span>
            <span className="prd-credit-box__value">Kong Sang Ho (ICU/CCU/HDW) · Bahagian Perkhidmatan Farmasi, Jabatan Kesihatan Negeri Selangor (BPF JKNS) &amp; Program Perkhidmatan Farmasi KKM</span>
          </div>
        </div>

      </div>

      <SiteNavigator />
      <Footer />
    </div>
  )
}
