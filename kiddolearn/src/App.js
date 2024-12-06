import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import LearnNumbers from './Components/LearnNumbers';
import Videos from './Components/Videos';
import Leaderboard from './Components/Leaderboard';

import Login from './Components/Login';
import Register from './Components/Register';
import Profile from './Components/Profile';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('login');
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setActivePage('home');
  };

  const handleRegister = (userData) => {
    setUser(userData);
    setActivePage('home');
  };

  const handleLogout = () => {
    setUser(null);
    setActivePage('login');
  };

  return (
    <div className="app">
      {user && (
        <Navbar
          onLogout={handleLogout}
          onNavigate={(page) => setActivePage(page)}
        />
      )}
      <div className="main-content">
        {activePage === 'login' && (
          <Login
            onLogin={handleLogin}
            onNavigateToRegister={() => setActivePage('register')}
          />
        )}
        {activePage === 'register' && <Register onRegister={handleRegister} />}
        {activePage === 'home' && (
          <div className="home">
            <h2>Welcome {user.name}!</h2>
            <button onClick={() => setActivePage('numbers')}>Learn Numbers</button>
            <button onClick={() => setActivePage('videos')}>Watch Videos</button>
           
            {/* <FreeDraw /> */}
          </div>
        )}
        {activePage === 'numbers' && <LearnNumbers />}
        {activePage === 'videos' && <Videos />}
        {activePage === 'leaderboard' && <Leaderboard />}
        {activePage === 'profile' && <Profile user={user} />}
      </div>
    </div>
  );
}

export default App;
