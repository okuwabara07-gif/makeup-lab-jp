export default function Home() {
  return (
    <main style={{fontFamily:'sans-serif',maxWidth:680,margin:'0 auto',padding:'20px 16px'}}>
      <p style={{fontSize:10,letterSpacing:4,color:'#C4B5AD',marginBottom:8}}>K BEAUTY PORTAL</p>
      <h1 style={{fontSize:22,fontWeight:400,color:'#2C2420',fontStyle:'italic',marginBottom:16}}>
        メイクLAB
      </h1>
      <p style={{fontSize:13,color:'#9E8E86',lineHeight:1.8,marginBottom:20}}>
        メイクのやり方・コスメレビューの最新比較ランキング
      </p>
      <a href="https://beauty-portal-jp.vercel.app"
        style={{display:'inline-block',padding:'10px 20px',border:'0.5px solid #D4537E',color:'#D4537E',textDecoration:'none',fontSize:11,letterSpacing:2}}>
        BEAUTY PORTAL →
      </a>
    </main>
  );
}
