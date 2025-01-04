 'use client'
import { useState, ChangeEvent } from 'react';
import { useParams } from 'next/navigation';  // Use useParams from next/navigation
import { posts } from '@/app/data/posts';

export default function PostPage() {
  const { id } = useParams(); // Access the dynamic route parameter
  const postId = id ? parseInt(id as string) : null;
  const post = posts.find((p) => p.id === postId);

  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>('');

  if (!post) {
    return <p>Post not found</p>;
  }

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  const handleChangeComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(e.target.value);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="mb-6 text-justify">{post.content}</p>

      <div>
        <h3 className="text-2xl font-semibold mb-2">Comments</h3>
        <ul className="space-y-4">
          {comments.map((comment, index) => (
            <li key={index} className="border p-2 rounded-md">
              {comment}
            </li>
          ))}
        </ul>
        <textarea
          className="mt-4 w-full p-2 border rounded-md"
          value={newComment}
          onChange={handleChangeComment}
          placeholder="Add a comment..."
        />
        <button
          onClick={handleAddComment}
          className="mt-2 p-2 bg-green-400 text-white rounded-md"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
}