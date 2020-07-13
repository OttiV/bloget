import React from 'react';
// import "./Post.css";

const Post = ({ post }) => {
  return (
    <div className="Post">
      <div className="Post">{post.siteName}</div>
      <div className="Post">{post.title}</div>
      <div className="Post">{post.textContent}</div>
    </div>
  );
};

export default Post;
