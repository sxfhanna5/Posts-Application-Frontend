import React from 'react';
import { Link } from 'react-router-dom';
import AppRouter from './router';


function App() {
  return (
    <div className="container">
      <header className="navbar-glass">
        <span className="navbar-title">Post Application</span>
        <div className="navbar-btns">
          <Link to="/" className="nav-btn">Home</Link>
          <Link to="/create" className="nav-btn">Create</Link>
        </div>
      </header>
      <AppRouter />
    </div>
  );
}

export default App;