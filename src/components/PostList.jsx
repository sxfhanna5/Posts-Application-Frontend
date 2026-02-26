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



  if (loading) return <div className="loading-message">Loading posts...</div>;
  if (error) return <div style={{textAlign:'center',marginTop:'48px',color:'#ed4956',fontWeight:600}}>Error: {error}</div>;
  if (!posts.length) return <div className="empty-message">No posts available</div>;

  return (
    <div>
      <h2>Posts</h2>
      <div className="post-grid">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <img src={post.imageUrl || ''} alt={post.title} />
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <button className="post-action-btn" onClick={() => handleDelete(post.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostList;