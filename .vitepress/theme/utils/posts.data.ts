import { createContentLoader } from 'vitepress'

export interface Post {
  title: string
  url: string
  date: {
    time: number
    string: string
  }
  excerpt: string | undefined
  category: Array<string>
  imgURL: string | undefined
  top?: boolean
  topOrder?: number
}

declare const data: Post[]
export { data }

export default createContentLoader('posts/*.md', {
  excerpt: true,
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        url,
        excerpt,
        date: formatDate(frontmatter.date),
        category: frontmatter.category ?? [],
        imgURL: frontmatter.imgURL,
        top: frontmatter.top ?? false,
        topOrder: frontmatter.topOrder,
      }))
      .sort((a, b) => {
        if (a.top && !b.top) {
          return -1
        }
        else if (!a.top && b.top) {
          return 1
        }
        else if (a.top && b.top) {
          return (a.topOrder || 0) - (b.topOrder || 0)
        }
        else {
          return b.date.time - a.date.time
        }
      })
  },
})

function formatDate(raw: string): Post['date'] {
  const date = new Date(raw)
  date.setUTCHours(8)
  return {
    time: +date,
    string: date.toLocaleDateString('zh', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    }),
  }
}
