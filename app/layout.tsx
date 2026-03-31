import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'メイクLAB | K-Beauty Portal',
  description: 'メイクのやり方・コスメレビューの最新比較ランキング',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;500;700&family=DM+Mono:wght@400;500&family=Outfit:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
