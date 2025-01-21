"use client";

import { useState } from "react";
import { BlogCard } from "@/components/blogs/blog-card";
import { SearchBar } from "@/components/blogs/search-bar";
import { blogPosts } from "@/data/blog-posts";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  const filteredPosts = regularPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-4xl font-bold text-gray-900">I Think !!!</h1>
          <SearchBar onSearch={setSearchQuery} />
        </div>

        {featuredPost && (
          <div className="mb-12">
            <BlogCard post={featuredPost} featured />
          </div>
        )}

        <div className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">All Posts</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-8 text-2xl font-bold text-gray-900">
            Popular Posts
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {regularPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
