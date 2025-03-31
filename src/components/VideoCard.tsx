// src/components/VideoCard.tsx
import React from 'react';
import './VideoCard.css';

interface VideoCardProps {
  title: string;
  author: string;
  views: string;
  time: string;
  thumbnail: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, author, views, time, thumbnail }) => {
  return (
    <div className="card video-card">
      <img src={thumbnail} className="card-img-top" alt={title} />
      <div className="card-body">
        <h6 className="card-title">{title}</h6>
        <p className="card-text text-muted">
          {author}<br />
          {views} • {time}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
