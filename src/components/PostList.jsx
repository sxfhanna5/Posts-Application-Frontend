import React, { useEffect, useState } from 'react';
import { fetchPosts as getPosts, deletePost as removePost } from '../services/posts';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setError(null);
    setLoading(true);
    try {
      const data = await getPosts();
      setPosts(data);
    } catch (err) {
      setError(err.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (id) => {
    try {
      await removePost(id);
      await load();
    } catch (err) {
      setError(err.message || 'Delete failed');
    }
  };

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!posts.length) return <p>No posts yet</p>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: '1rem' }}>
            <img src={post.imageUrl || post.image || ''} alt={post.title} width="150" />
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;