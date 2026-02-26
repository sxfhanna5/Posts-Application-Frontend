import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<PostList />} />
      <Route path="/create" element={<CreatePost />} />
    </Routes>
  );
}
