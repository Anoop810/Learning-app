import React, { useState } from 'react';
import './LearnNumbers.css';

const LearnNumbers = () => {
  const [audio, setAudio] = useState(null);

  const playAudio = (number) => {
    const audio = new Audio(`/audio/${number}.mp3`); 
    setAudio(audio);
    audio.play();
  };

  return (
    <div className="learn-numbers">
      <h2>Learn Numbers</h2>
      <div className="numbers-grid">
        {[...Array(10).keys()].map((num) => (
          <button key={num} onClick={() => playAudio(num + 1)}>
            {num + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LearnNumbers;
