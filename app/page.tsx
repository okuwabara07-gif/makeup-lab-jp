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
