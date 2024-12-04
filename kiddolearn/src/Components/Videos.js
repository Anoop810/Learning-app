import React from 'react';
import './Videos.css';

const Videos = () => {
  const videoLinks = [
    { id: 1, url: "https://www.youtube.com/embed/1-2-free-video" },
    { id: 2, url: "https://www.youtube.com/embed/learn-numbers-vid" },
  ];

  return (
    <div className="videos">
      <h2>Learning Videos</h2>
      <div className="video-list">
        {videoLinks.map((video) => (
          <iframe
            key={video.id}
            src={video.url}
            title={`Video ${video.id}`}
            width="560"
            height="315"
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default Videos;
