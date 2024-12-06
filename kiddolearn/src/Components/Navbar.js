import React from 'react';
import './Navbar.css';

const Navbar = ({ onLogout, onNavigate }) => {
  return (
    <nav className="navbar">
      <h1>Kiddo Learn</h1>
      <div className="navbar-buttons">
        <button onClick={() => onNavigate('leaderboard')}>Leaderboard</button>
        <button onClick={() => onNavigate('profile')}>Profile</button>
        <button onClick={onLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
