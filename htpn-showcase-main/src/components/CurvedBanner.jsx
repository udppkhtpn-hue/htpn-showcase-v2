export default function CurvedBanner() {
  return (
    <div className="curved-loop-wrap" aria-hidden="true">
      <svg className="curved-loop-svg" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <path id="wave1" d="M0,60 C200,20 400,100 600,60 C800,20 1000,100 1200,60"/>
          <path id="wave2" d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60"/>
        </defs>
        <use href="#wave1" fill="none" stroke="rgba(0,180,255,0.08)" strokeWidth="1"/>
        <use href="#wave2" fill="none" stroke="rgba(245,197,24,0.06)" strokeWidth="1"/>
        <text fontFamily="Rajdhani, sans-serif" fontSize="13" fontWeight="700" letterSpacing="4" fill="rgba(0,180,255,0.7)" textAnchor="middle">
          <textPath href="#wave1" startOffset="0%">
            HTPN DIGITAL TRANSFORMATION &nbsp;✦&nbsp; AI TEAM KAJANG &nbsp;✦&nbsp; HTPN DIGITAL TRANSFORMATION &nbsp;✦&nbsp; AI TEAM KAJANG &nbsp;✦&nbsp;
            <animate attributeName="startOffset" from="0%" to="-50%" dur="18s" repeatCount="indefinite"/>
          </textPath>
        </text>
        <text fontFamily="Rajdhani, sans-serif" fontSize="11" fontWeight="600" letterSpacing="3" fill="rgba(245,197,24,0.5)" textAnchor="middle">
          <textPath href="#wave2" startOffset="-25%">
            HOSPITAL TENGKU PERMAISURI NORASHIKIN &nbsp;◆&nbsp; KEMENTERIAN KESIHATAN MALAYSIA &nbsp;◆&nbsp; HOSPITAL TENGKU PERMAISURI NORASHIKIN &nbsp;◆&nbsp;
            <animate attributeName="startOffset" from="-25%" to="25%" dur="22s" repeatCount="indefinite"/>
          </textPath>
        </text>
      </svg>
    </div>
  )
}
