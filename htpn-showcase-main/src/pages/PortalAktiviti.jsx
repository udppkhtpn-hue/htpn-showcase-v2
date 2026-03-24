import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const DEMO_URL = 'https://s3vfpr.csb.app/'
const ACCENT = '#7c3aed'

const subCommittees = [
  'Ketua & Timbalan Perkhidmatan',
  'Unit Perkhidmatan O&G Cawangan Perkembangan',
  'Kategori Umum',
  'JK Kematian Ibu dan Bayi (CEMD)',
  'JK Latihan CME & Modal Insan',
  'JK Infrastruktur & Peralatan',
  'JK Program Pengajian & Pewartaan Pakar',
  'JK Penyelidikan & Garis Panduan Klinikal',
  'JK Kualiti Hospital Rakan Bayi & Ubatan',
  'JK Risk Management & Medicolegal',
  'JK Sumber Manusia & Database',
  'JK Kompetensi & Teknologi Baru',
  'JK Komunikasi & Pendidikan ICT',
  'Subkepakaran: Reproduktif · Maternal Fetal · Ginekologi Onkologi · Uroginekologi',
]

const activityTypes = [
  'CME/CPD', 'Bengkel', 'Seminar', 'Program Kesedaran',
  'Mesyuarat', 'Outreach', 'Latihan', 'Lawatan', 'Kursus', 'Lain-lain',
]

const dashboardFeatures = [
  'Card view of all submitted activities',
  'Filter by Year, Month, Unit — sort by latest',
  'Each card shows: unit badge, date, title, photo thumbnails',
  'Edit button — modify any existing activity record',
  '"Jana Konten" button — opens social media content generator modal',
  'Cloud storage active indicator at footer',
]

const reportFeatures = [
  'Select year (2024–2028) to generate annual report',
  'Header: "Laporan Aktiviti O&G — JPPOBG Pangkalan Pintar"',
  'Summary stats: total activities, total participants, categories',
  'Full narrative per activity with objectives, highlights, summary, and photos',
  'Cetak PDF — one click to print or save as PDF',
  'Suitable for submission to KKM / JPPOBG secretariat',
]

const socialPlatforms = [
  {
    platform: 'Facebook',
    color: '#93c5fd',
    desc: 'Formal official post — "Laporan Aktiviti Rasmi JPPOBG" with full programme details: tarikh, lokasi, peserta, objektif, highlights. Copy button.',
  },
  {
    platform: 'Instagram',
    color: '#f9a8d4',
    desc: 'Catchy caption with emojis — "Vibes kecemerlangan O&G!" style with programme summary and relevant hashtags. Copy button.',
  },
  {
    platform: 'TikTok',
    color: '#86efac',
    desc: 'Short punchy caption with fire/achievement emojis and trending hashtags: #JPPOBG #MyGynae #OandGMalaysia #Kesihatan #Fyp. Copy button.',
  },
]

export default function PortalAktiviti() {
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
            <span className="card-num">#15</span>
            <span className="card-status status-live">Live</span>
            <span className="demo-badge" style={{ background: 'rgba(124,58,237,0.12)', color: ACCENT, borderColor: 'rgba(124,58,237,0.35)' }}>
              Live App · CodeSandbox
            </span>
          </div>
          <div className="project-page-title-row">
            <h1 className="project-page-title">Portal Aktiviti JPPOBG</h1>
          </div>
          <p className="project-page-subtitle">
            Pangkalan Pintar — Central activity portal for all JPPOBG sub-committees across Malaysia, with auto-generated annual reports and social media content
          </p>
          <p className="project-page-credit">
            Built by Dr Anita Rina bt Ali &nbsp;·&nbsp; <span>O&amp;G Dept · Fraterniti O&amp;G KKM</span>
          </p>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-btn"
            style={{ background: ACCENT }}
          >
            Open Portal →
          </a>
        </div>

        {/* Tech specs */}
        <div className="project-page-specs">
          <div className="spec-card">
            <div className="spec-label">Platform</div>
            <div className="spec-value">Web App (React)</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Backend</div>
            <div className="spec-value">Cloud sync — all devices</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Tabs</div>
            <div className="spec-value">Borang · Dashboard · Laporan</div>
          </div>
          <div className="spec-card">
            <div className="spec-label">Social Output</div>
            <div className="spec-value">Facebook · Instagram · TikTok</div>
          </div>
        </div>

        {/* What it is */}
        <div className="project-page-block">
          <h2 className="block-title">What it is</h2>
          <p className="block-text">
            Built by Dr Anita Rina to solve a real pain point in O&amp;G fraternity management —
            collecting and documenting activities from all sub-committees (JK Kecil) under{' '}
            <strong style={{ color: 'var(--text)' }}>JPPOBG</strong> (Jawatankuasa Perkhidmatan &amp;
            Pembangunan O&amp;G Bahagian, KKM) across Malaysia. Members submit their activity records
            into this central portal. The app automatically converts those submissions into two outputs:
            a formal <strong style={{ color: 'var(--text)' }}>annual activity report</strong> (printable PDF)
            and ready-to-post <strong style={{ color: 'var(--text)' }}>social media content</strong> for
            Facebook, Instagram, and TikTok — eliminating the need to manually write reports or craft
            captions after each event.
          </p>
        </div>

        {/* Tab 1 — Borang */}
        <div className="project-page-block">
          <h2 className="block-title">Tab 1 — Borang (Activity Submission Form)</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.85rem', marginBottom: '0.85rem' }}>
            <div className="metric-card">
              <div>
                <div className="metric-title">Section 1 — Butiran Utama</div>
                <div className="metric-sub" style={{ marginTop: '0.3rem', lineHeight: 1.7 }}>
                  Tajuk Aktiviti · Jawatankuasa/Unit (13 sub-committees) · Jenis Aktiviti (10 types) · Tarikh Mula &amp; Akhir · Negeri (16 states + FTs) · Bilangan Peserta · Lokasi Spesifik
                </div>
              </div>
            </div>
            <div className="metric-card">
              <div>
                <div className="metric-title">Section 2 — Kandungan &amp; Visual</div>
                <div className="metric-sub" style={{ marginTop: '0.3rem', lineHeight: 1.7 }}>
                  Objektif Program · Highlight Program · Ringkasan Program — each with a <em>"Guna Templat"</em> guided template button. Photo upload (min. 1 required). Simpan Aktiviti saves to cloud.
                </div>
              </div>
            </div>
          </div>

          {/* Sub-committees */}
          <div style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.25)', borderRadius: '8px', padding: '1rem', marginBottom: '0.75rem' }}>
            <div style={{ fontSize: '0.82rem', fontWeight: 600, color: ACCENT, marginBottom: '0.6rem' }}>13+ Sub-Committees (JK Kecil)</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {subCommittees.map(s => (
                <span key={s} style={{ fontSize: '0.75rem', background: 'rgba(124,58,237,0.12)', color: '#a78bfa', padding: '3px 8px', borderRadius: '4px' }}>{s}</span>
              ))}
            </div>
          </div>

          {/* Activity types */}
          <div style={{ background: 'rgba(30,64,175,0.08)', border: '1px solid rgba(30,64,175,0.25)', borderRadius: '8px', padding: '1rem' }}>
            <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#60a5fa', marginBottom: '0.6rem' }}>10 Activity Types</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {activityTypes.map(t => (
                <span key={t} style={{ fontSize: '0.75rem', background: 'rgba(59,130,246,0.12)', color: '#93c5fd', padding: '3px 8px', borderRadius: '4px' }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Tab 2 + Tab 3 — two col */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>

          <div className="project-page-block" style={{ background: 'var(--surface2)', borderRadius: '10px', padding: '1.25rem', marginBottom: 0 }}>
            <h2 className="block-title">Tab 2 — Dashboard</h2>
            <ul className="block-list">
              {dashboardFeatures.map(f => <li key={f}>{f}</li>)}
            </ul>
          </div>

          <div className="project-page-block" style={{ background: 'var(--surface2)', borderRadius: '10px', padding: '1.25rem', marginBottom: 0 }}>
            <h2 className="block-title">Tab 3 — Laporan (Annual Report)</h2>
            <ul className="block-list">
              {reportFeatures.map(f => <li key={f}>{f}</li>)}
            </ul>
          </div>

        </div>

        {/* Social media generator */}
        <div className="project-page-block" style={{ background: 'rgba(30,27,75,0.85)', border: '1px solid rgba(124,58,237,0.3)', borderRadius: '10px', padding: '1.5rem' }}>
          <h2 className="block-title" style={{ color: '#fbbf24' }}>✨ Penjana Konten Premium — Social Media Auto-Generator</h2>
          <p className="block-text" style={{ marginBottom: '1rem' }}>
            Clicking <strong style={{ color: '#a78bfa' }}>"Jana Konten"</strong> on any activity opens a modal that produces
            ready-to-post content in three platform formats simultaneously. Photos uploaded during submission appear
            as watermarked visuals — right-click / long-press to save for posting.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
            {socialPlatforms.map(p => (
              <div key={p.platform} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '8px', padding: '0.9rem' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: p.color, marginBottom: '0.4rem' }}>{p.platform}</div>
                <div style={{ fontSize: '0.78rem', color: '#c7d2fe', lineHeight: 1.65 }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Who it's for */}
        <div className="project-page-block">
          <h2 className="block-title">Who it is for &amp; the problem it solves</h2>
          <p className="block-text">
            Built for the chairs and secretaries of all 13+ JK Kecil sub-committees under JPPOBG
            across Malaysia. Previously, collecting activity records, compiling them into an annual
            report, and producing social media updates required separate manual effort — emails, Word
            documents, manually written captions. This portal centralises everything:{' '}
            <strong style={{ color: 'var(--text)' }}>one submission flow</strong> that simultaneously
            feeds a searchable dashboard, an auto-generated annual report ready for KKM submission,
            and platform-specific social media content ready to copy and post — all synced across devices.
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
            Open Portal →
          </a>
        </div>

      </main>
      <Footer />
    </>
  )
}
