import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import LearnNumbers from './Components/LearnNumbers';
import Videos from './Components/Videos';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="app">
      <Navbar />
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
      </div>
    </div>
  );
}

export default App;
