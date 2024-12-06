import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import LearnNumbers from './Components/LearnNumbers';
import Videos from './Components/Videos';
import Leaderboard from './Components/Leaderboard';
import Profile from './Components/Profile'; // New profile component
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');

  const handleLogout = () => {
    alert('You have been logged out!');
    setActivePage('home');
  };

  return (
    <div className="app">
      <Navbar onLogout={handleLogout} onNavigate={setActivePage} />
      <div className="main-content">
        {activePage === 'home' && (
          <div className="home">
            <h2>Welcome to Kids Learning App</h2>
            <button onClick={() => setActivePage('numbers')}>Learn Numbers</button>
            <button onClick={() => setActivePage('videos')}>Watch Videos</button>
          </div>
        )}
        {activePage === 'numbers' && <LearnNumbers />}
        {activePage === 'videos' && <Videos />}
        {activePage === 'leaderboard' && <Leaderboard />}
        {activePage === 'profile' && <Profile />}
      </div>
    </div>
  );
}

export default App;
