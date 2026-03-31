import Link from 'next/link';
export default function Home() {
  return (
    <main>
      <header style={{padding:'24px 24px 0',borderBottom:'0.5px solid #E8DDD8'}}>
        <p style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'4px',color:'#C4B5AD',marginBottom:6}}>💋 K · BEAUTY PORTAL</p>
        <h1 style={{fontFamily:"'Noto Serif JP',serif",fontSize:24,fontWeight:400,color:'#2C2420',fontStyle:'italic',paddingBottom:16}}>メイクLAB</h1>
      </header>
      <div style={{padding:'0 24px'}}>
        <p style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'3px',color:'#C4B5AD',padding:'16px 0 10px',borderBottom:'0.5px solid #E8DDD8'}}>MAKEUP · TOP ARTICLES</p>
      </div>
      <footer style={{padding:24,borderTop:'0.5px solid #E8DDD8',fontFamily:"'DM Mono',monospace",fontSize:8,letterSpacing:'2px',color:'#C4B5AD',display:'flex',justifyContent:'space-between'}}>
        <span>© 2026 AOKAE LLC</span>
        <a href="https://beauty-portal-jp.vercel.app" target="_blank" style={{color:'#D4537E',borderBottom:'0.5px solid #D4537E'}}>BEAUTY PORTAL →</a>
      </footer>
    </main>
  );
}
