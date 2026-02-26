import { API_URL } from '../config';

export async function fetchPosts() {
 
  const response = await fetch(`${API_URL}/posts`);
  if (!response.ok) {
    const err = new Error('Failed to load posts');
    err.status = response.status;
    throw err;
  }
  return response.json();
}

export async function deletePost(id) {
  const response = await fetch(`${API_URL}/posts/${id}`, { method: 'DELETE' });
  if (!response.ok) {
    const err = new Error('Delete failed');
    err.status = response.status;
    throw err;
  }
}

export async function createPost(data) {
  const response = await fetch(`${API_URL}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const err = new Error('Create failed');
    err.status = response.status;
    throw err;
  }
  return response.json();
}
