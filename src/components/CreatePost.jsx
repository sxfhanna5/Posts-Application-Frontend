import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost as sendPost } from '../services/posts';

function CreatePost() {
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      await sendPost({ imageUrl, title, description });
      setImageUrl('');
      setTitle('');
      setDescription('');
      setImageUrl('');
      setTitle('');
      setDescription('');
      navigate('/');
    } catch (err) {
      setError(err.message || 'Create failed');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Create Post</h2>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={submitting}>
          {submitting ? 'Creating...' : 'Create'}
        </button>
      </form>
    </div>
  );
}

export default CreatePost;