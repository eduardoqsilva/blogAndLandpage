'use client'

import { Search } from "@/components/search";
import { PostGridCard } from "./components/post-grid-card/post-grid-card";
import { Post } from "contentlayer/generated";
import { PostCard } from "./components/post-card";
import { Inbox } from "lucide-react";
import { useSearchParams } from "next/navigation";

export type BlogListProps = {
  posts: Post[]
}

export function BlogList({ posts }: BlogListProps) {
  const searchParams = useSearchParams()
  const query = searchParams?.get('q') ?? '';
  const title = query
    ? `Resultados para a busca "${query}"`
    : "Dicas e estratégias para impulsinar seu negócio";
  const postList = query ? posts.filter((post) => post.title.toLowerCase().includes(query.toLowerCase())) : posts;
  const hasPosts = postList.length > 0;


  return (
    <div className="flex flex-col py-24 flex-grow h-full">
      <header className="mb-14">
        <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
          <div className="flex flex-col gap-4 md:px-0">
            <span className="text-body-tag text-cyan-100 w-fit rounded-md text-center md:text-left py-2 px-4 bg-cyan-300 uppercase">
              Blog
            </span>

            <h1 className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-gray-100">
              {title}
            </h1>
          </div>
          <Search />
        </div>
      </header>
      <div className="container">
        {hasPosts && (
          <PostGridCard>
            {postList.map((post) => (
              <PostCard
                key={post._id}
                slug={post.slug}
                title={post.title}
                description={post.description}
                image={post.image.trim()}
                date={new Date(post.date).toLocaleDateString("pt-BR")}
                author={{
                  name: post.author.name,
                  avatar: post.author.avatar.trim(),
                }}
              />
            ))}
          </PostGridCard>
        )}

        {!hasPosts && (
          <div className="flex flex-col items-center justify-center gap-8 h-full border-dashed border-2 border-gray-300 p-8 md:p-12 rounded-lg">
            <Inbox className="size-12 text-cyan-100" />
            <p className="text-gray-100 text-center">Nenhum resultado encontrado para a busca &quot;{query}&quot;.</p>
          </div>
        )}
      </div>
    </div>
  );
}
