'use client'
import Link from 'next/link';
import { posts } from '../data/posts'; 

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow p-4">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="mb-4">
              <Link href={`/posts/${post.id}`} className="text-xl font-semibold text-blue-500">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}