import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'Makeup Lab', description: 'メイクのやり方・コスメレビューの最新比較ランキング' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="ja">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3460729726810386" crossOrigin="anonymous"></script>
      </head><body>{children}</body></html>)
}
