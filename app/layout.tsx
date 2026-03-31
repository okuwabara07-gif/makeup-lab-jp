import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'Makeup Lab', description: 'メイクのやり方・コスメレビューの最新比較ランキング' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="ja"><body>{children}</body></html>)
}
