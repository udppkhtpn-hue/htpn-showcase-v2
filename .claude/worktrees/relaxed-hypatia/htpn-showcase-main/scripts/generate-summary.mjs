// Regenerates the all-apps summary (Markdown) from src/data/projects.js and the project pages.
// Runs automatically before every build (npm run build) and on demand (npm run summary).
// Output: $SUMMARY_OUT, else ~/Documents/HTPN-Showcase-All-Apps.md. Skips quietly if that folder
// does not exist (e.g. on Vercel's build servers) and never fails the build.
import fs from 'fs'
import os from 'os'
import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const outFile = process.env.SUMMARY_OUT || path.join(os.homedir(), 'Documents', 'HTPN-Showcase-All-Apps.md')
if (!fs.existsSync(path.dirname(outFile))) {
  console.log(`[summary] skipped: ${path.dirname(outFile)} does not exist`)
  process.exit(0)
}
try {
const { projects } = await import(pathToFileURL(root + '/src/data/projects.js').href)
const { SCREENSHOT_SLUGS } = await import(pathToFileURL(root + '/src/data/screenshots.js').href)
const app=fs.readFileSync(root+'/src/App.jsx','utf8')
const imports={}; for(const m of app.matchAll(/import (\w+) from '\.\/pages\/(\w+)'/g)) imports[m[1]]=m[2]
const routes={}; for(const m of app.matchAll(/path="([^"]+)" element=\{<(\w+) \/>\}/g)) routes[m[1]]=imports[m[2]]
const clean=t=>t.replace(/&amp;/g,'&').replace(/&apos;/g,"'").replace(/&nbsp;/g,' ').replace(/\{[^}]*\}/g,'').replace(/<[^>]+>/g,'').replace(/\s+/g,' ').trim()
const status={live:'Live',demo:'Demo',dev:'In development'}
const sorted=[...projects].sort((a,b)=>+a.num.slice(1)-+b.num.slice(1))
const cats=["Patient's Journey",'Clinician\'s Journey','Management Productivity']
const labelOf=p=>p.categoryLabel
const range=k=>{const n=sorted.filter(p=>p.category===k).map(p=>+p.num.slice(1));return `${Math.min(...n)}-${Math.max(...n)}`}
const facs=[...new Set(sorted.map(p=>p.facility).filter(Boolean))]
const noFac=sorted.filter(p=>!p.facility).map(p=>p.num+' '+p.title.split(' — ')[0])
const date=new Date().toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})
let out=`# HTPN Healthcare Intelligence Office — Digital Health Showcase: All ${sorted.length} Apps

Generated: ${date}
Live site: https://htpn-showcase-v2.vercel.app
Source (GitHub): https://github.com/udppkhtpn-hue/htpn-showcase-v2/tree/untold-version/.claude/worktrees/relaxed-hypatia/htpn-showcase-main
Local folder: /Users/ferwahnfairis/Documents/htpn-showcase-v2/.claude/worktrees/relaxed-hypatia/htpn-showcase-main

Numbering: Patient's Journey ${range('patient')}, Clinician's Journey ${range('doctor')}, Management Productivity ${range('management')}. Cards are defined in src/data/projects.js; each detail page is src/pages/Project*.jsx.

Totals: ${sorted.length} apps · ${sorted.filter(p=>p.status==='live').length} live · ${sorted.filter(p=>p.status==='demo').length} demo/prototype · ${sorted.filter(p=>p.status==='dev').length} in development · ${facs.length} facilities involved (${noFac.length} app${noFac.length===1?'':'s'} without a recorded facility: ${noFac.join(', ')}).

Facilities: ${facs.join('; ')}.

## Index

| # | App | Category | Status | Facility |
|---|---|---|---|---|
`
for(const p of sorted) out+=`| ${p.num.slice(1)} | ${p.title} | ${labelOf(p)} | ${status[p.status]||p.status} | ${p.facility||'—'} |\n`
out+='\n---\n\n'
for(const p of sorted){
  const slug=p.detailPath?.split('/').filter(Boolean).pop()
  const comp=routes[p.detailPath]
  let file=comp?`src/pages/${comp}.jsx`:'src/pages/ProjectDetail.jsx (generic page)'
  let src=comp&&fs.existsSync(`${root}/src/pages/${comp}.jsx`)?fs.readFileSync(`${root}/src/pages/${comp}.jsx`,'utf8'):''
  const sub=src.match(/<p className="detail-subtitle">([\s\S]*?)<\/p>/)
  const overview=sub?clean(sub[1]):''
  const demo=src.match(/const (?:DEMO_URL|VIDEO_URL)\s*=\s*'([^']+)'/)
  const c=p.credit||{}
  const credit=[c.aiTeam&&`AI: ${c.aiTeam}`,c.by,c.coAuthor,c.dept].filter(Boolean).join(' · ')
  out+=`## ${p.num.slice(1)}. ${p.title}\n\n- **Category:** ${labelOf(p)}\n- **Status:** ${status[p.status]||p.status}\n`
  if(credit) out+=`- **Credit:** ${credit}\n`
  if(p.facility) out+=`- **Facility:** ${p.facility}\n`
  out+=`- **Tags:** ${(p.tags||[]).join(', ')}\n- **Detail page URL:** https://htpn-showcase-v2.vercel.app${p.detailPath}\n`
  if(demo) out+=`- **${/VIDEO_URL/.test(src)?'Preview video':'Demo link'}:** ${demo[1]}\n`
  out+=`- **Mobile screenshot:** ${SCREENSHOT_SLUGS.has(slug)?`yes (public/screenshots/${slug}.webp)`:'none'}\n- **Source file:** ${file}\n\n**Card summary:** ${p.desc}\n\n`
  if(overview&&overview!==p.desc) out+=`**Overview:** ${overview}\n\n`
  out+='---\n\n'
}
fs.writeFileSync(outFile,out)
console.log(`[summary] wrote ${sorted.length} apps to ${outFile}`)
} catch (e) {
  console.warn('[summary] not generated:', e.message)
}
