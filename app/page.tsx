export default function Home() {
  return (
    <div style={{fontFamily:'sans-serif',maxWidth:680,margin:'0 auto',padding:20}}>
      <h1 style={{fontSize:24,marginBottom:8}}>メイクLAB</h1>
      <p style={{color:'#666',marginBottom:20}}>メイクのやり方・コスメレビューの最新比較ランキング</p>
      <a href="https://beauty-portal-jp.vercel.app"
         style={{display:'inline-block',padding:'8px 16px',border:'1px solid #D4537E',color:'#D4537E',textDecoration:'none'}}>
        Beauty Portal →
      </a>
    </div>
  );
}
