'use client';

import { useState } from 'react';

const Comments = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold">Comments</h2>
      <ul className="mt-4 space-y-2">
        {comments.map((comment, index) => (
          <li key={index} className="bg-gray-100 p-2 rounded-md">
            {comment}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex gap-2">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          className="border border-gray-300 p-2 flex-grow rounded-md"
        />
        <button
          onClick={handleAddComment}
          className="bg-orange-500 text-white px-4 py-2 rounded-md"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default Comments;