import React from 'react';
import './Videos.css';

const Videos = () => {
  const videoLinks = [
    { id: 1, url: "https://www.youtube.com/embed/o0IsBUaoTrQ",title: "The 123 Song" },
    { id: 2, url: "https://www.youtube.com/embed/hq3yfQnllfQ  ",title: "Aphabet express" },
    { id: 3, url: "https://www.youtube.com/embed/SdIfXWAKioI  ",title: "Vegies are good"  },
    { id: 2, url: "https://www.youtube.com/embed/ybt2jhCQ3lA" , title: "Learn Colors with Fun"   }
  ];
  return (
    <div className="videos">
      <h2>Learning Videos</h2>
      <div className="video-list">
        {videoLinks.map((video) => (
          <div key={video.id} className="video-item">
            <iframe
              src={video.url}
              title={`Video ${video.id}`}
              width="560"
              height="315"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <p className="video-title">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};



export default Videos;
