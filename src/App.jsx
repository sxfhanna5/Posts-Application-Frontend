import React from 'react';
import { Link } from 'react-router-dom';
import AppRouter from './router';

function App() {
  return (
    <div className="container">
      <nav>
        <Link to="/">Home</Link> | <Link to="/create">Create Post</Link>
      </nav>

      <AppRouter />
    </div>
  );
}

export default App;