import { BlogList } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Dicas e estratégias para impulsinar seu negócio',
  robots: { index: true, follow: true },
  openGraph:  {
    title: 'Blog',
    description: 'Dicas e estratégias para impulsinar seu negócio',
    url: 'https://blog-and-landpage.vercel.app/og-image.jpg',
    siteName: 'site.set',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: 'https://blog-and-landpage.vercel.app/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'site.set'
      }
    ]
  }
}

export default async function Page() {
  const sortedPosts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve('hello')
    } ,1000)
  })

  return <BlogList posts={sortedPosts} />
}