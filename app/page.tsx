const ARTICLES = [
  "【2026最新】プチプラファンデーション 人気ランキング TOP15",
  "韓国アイシャドウパレット 全色比較・使い方レビュー",
  "rom&nd ブラーファッジティント 全20色スウォッチ",
  "ナチュラルメイクの完全手順 初心者向けガイド",
  "韓国メイクと日本メイク どっちが自分に合う？診断",
  "コンシーラーの正しい使い方・選び方 2026年版",
  "マスカラ 韓国vs日本 徹底比較ランキング",
  "メイク直しが楽になる！夜まで崩れないベースメイク術",
]
export default function Home() {
  return (
        {/* アフィリエイト */}
        <div style={{margin:'2rem 0',padding:'1rem',background:'linear-gradient(135deg,#faf7ff,#f5eeff)',borderRadius:'16px',border:'1.5px solid #e8d4ff'}}>
          <p style={{fontSize:'0.7rem',color:'#9333ea',fontWeight:700,marginBottom:'0.75rem'}}>おすすめアイテム</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))',gap:'0.75rem'}}>
            <a href="https://rpx.a8.net/svt/ejp?a8mat=3Z4N6T+XXXXXX+XXXX+XXXXXX" target="_blank" rel="noopener noreferrer sponsored" style={{display:'flex',alignItems:'center',gap:'8px',padding:'10px 12px',background:'white',borderRadius:'12px',textDecoration:'none',border:'1px solid #e8d4ff'}}>
              <span style={{fontSize:'1.2rem'}}>🛒</span>
              <div><div style={{fontSize:'0.75rem',fontWeight:700,color:'#333'}}>楽天でさがす</div><div style={{fontSize:'0.65rem',color:'#9333ea'}}>ポイント還元あり</div></div>
            </a>
            <a href="https://www.amazon.co.jp/?tag=haircolorab22-22" target="_blank" rel="noopener noreferrer sponsored" style={{display:'flex',alignItems:'center',gap:'8px',padding:'10px 12px',background:'white',borderRadius:'12px',textDecoration:'none',border:'1px solid #fce4ec'}}>
              <span style={{fontSize:'1.2rem'}}>📦</span>
              <div><div style={{fontSize:'0.75rem',fontWeight:700,color:'#333'}}>Amazonでさがす</div><div style={{fontSize:'0.65rem',color:'#e91e8c'}}>翌日配送対応</div></div>
            </a>
          </div>
        </div>
    <main>
      <header className="site-header">
        <div className="site-title">Makeup Lab</div>
        <div className="site-subtitle">Cosmetics · Reviews · How-to</div>
      </header>
      <main>
        <div className="portal-banner">
          <div>
            <div className="portal-banner-label">Featured</div>
            <div className="portal-banner-title">K-Beauty Portal — 韓国コスメ総合サイト</div>
          </div>
          <a href="https://beauty-portal-jp.vercel.app" target="_blank" className="portal-banner-link">見る →</a>
        </div>
        <div className="section-label">Makeup · Top Articles</div>
        <div className="article-list">
          {ARTICLES.map((a, i) => (
            <div key={i} className="article-item">
              <span className="article-num">{String(i+1).padStart(2,'0')}</span>
              <a href="#" className="article-link">{a}</a>
            </div>
          ))}
        </div>
        <div className="ad-slot">Advertisement</div>
        <footer className="site-footer">
          <span>© 2026 AOKAE LLC</span>
          <a href="https://beauty-portal-jp.vercel.app" target="_blank" style={{color:'var(--text-secondary)'}}>Beauty Portal →</a>
        </footer>
      </main>
    </main>
  )
}
