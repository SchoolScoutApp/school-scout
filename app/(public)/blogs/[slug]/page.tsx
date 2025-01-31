import { notFound } from "next/navigation";
import Image from "next/image";
import { blogPosts } from "@/data/blog-posts";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex items-center gap-4">
            <span className="inline-flex items-center rounded-full bg-sky-600 px-2.5 py-0.5 text-xs font-medium text-white">
              {post.category}
            </span>
            <span className="text-sm text-gray-500">{post.readTime}</span>
            <time className="text-sm text-gray-500" dateTime={post.date}>
              {post.date}
            </time>
          </div>

          <h1 className="mb-8 text-4xl font-bold text-gray-900">
            {post.title}
          </h1>

          <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            {post.content.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
