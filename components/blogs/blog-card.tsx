import Image from "next/image";
import Link from "next/link";

export interface BlogPost {
  id: string;
  slug:string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  featured?: boolean;
}

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Link href={`/blogs/${post.slug}`}>
      <article
        className={`group overflow-hidden rounded-lg border bg-white shadow-sm transition-shadow hover:shadow-md ${
          featured ? "lg:grid lg:grid-cols-2 lg:gap-8" : ""
        }`}
      >
        <div
          className={`relative ${
            featured
              ? "aspect-[16/9] lg:aspect-none lg:h-full"
              : "aspect-[16/9]"
          }`}
        >
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center rounded-full bg-sky-600 px-2.5 py-0.5 text-xs font-medium text-white">
              {post.category}
            </span>
            <span className="text-sm text-gray-500">{post.readTime}</span>
          </div>
          <h3
            className={`mt-4 ${
              featured ? "text-2xl" : "text-xl"
            } font-bold text-gray-900 group-hover:text-blue-600`}
          >
            {post.title}
          </h3>
          <p className="mt-3 text-gray-600 line-clamp-3">{post.excerpt}</p>
          <div className="mt-4 flex items-center text-sm text-gray-500">
            <time dateTime={post.date}>{post.date}</time>
          </div>
        </div>
      </article>
    </Link>
  );
}
