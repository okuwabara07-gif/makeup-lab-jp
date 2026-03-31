import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'メイクLAB | K-Beauty Portal',
  description: 'メイクのやり方・コスメレビューの最新比較ランキング',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body style={{margin:0,padding:0,background:'#FAFAF8'}}>{children}</body>
    </html>
  );
}
