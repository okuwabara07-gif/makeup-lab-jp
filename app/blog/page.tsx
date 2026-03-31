import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function BlogPage() {
  const posts = getAllPosts()
  return (
    <main>
      <header className="site-header">
        <div className="site-title">Makeup Lab</div>
        <div className="site-subtitle">Blog</div>
      </header>
      <main>
        <div className="section-label">Articles</div>
        {posts.length === 0 ? (
          <p style={{color:'var(--text-secondary)', fontSize:'0.85rem', padding:'2rem 0'}}>
            記事準備中です。
          </p>
        ) : (
          <div className="article-list">
            {posts.map((post, i) => (
              <div key={post.slug} className="article-item">
                <span className="article-num">{String(i+1).padStart(2,'0')}</span>
                <Link href={`/blog/${post.slug}`} className="article-link">{post.title}</Link>
              </div>
            ))}
          </div>
        )}
      </main>
    </main>
  )
}
