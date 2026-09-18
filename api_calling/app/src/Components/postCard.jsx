import React from 'react';
import './PostCard.css';

const PostCard = ({ title, body }) => {
  return (
    <div className="post-card">
      <h3 className="post-card__title">{title}</h3>
      <p className="post-card__body">{body}</p>
    </div>
  );
};

export default PostCard;