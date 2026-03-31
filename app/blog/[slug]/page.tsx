import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()
  return (
    <main>
      <header className="site-header">
        <div className="site-title">Makeup Lab</div>
      </header>
      <main>
        <div className="section-label">{post.genre}</div>
        <h1 style={{fontFamily:'Cormorant Garamond,serif', fontWeight:300, fontSize:'1.4rem', margin:'1rem 0 0.5rem'}}>{post.title}</h1>
        <p style={{fontSize:'0.7rem', color:'var(--text-secondary)', marginBottom:'2rem'}}>{post.date}</p>
        <div style={{fontSize:'0.9rem', lineHeight:1.9}} dangerouslySetInnerHTML={{__html: post.content}} />
      </main>
    </main>
  )
}
