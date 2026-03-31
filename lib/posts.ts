export type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
  genre: string
  content: string
}

export function getAllPosts(): Post[] {
  return []
}

export function getPostBySlug(slug: string): Post | null {
  return null
}
