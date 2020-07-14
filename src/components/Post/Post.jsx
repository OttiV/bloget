import React from 'react';
import { Loader } from './Loader';
import { getCleanText, getTextWithPunctuation } from './helpers';
import './Post.css';

const Post = ({ post, loading }) => {
  const { siteName, textContent, title } = post;
  const text = textContent && getCleanText(textContent);
  const content = text && text.map((t, i) => getTextWithPunctuation(t, i));

  return (
    <>
      {loading && <Loader />}
      {title && (
        <div className="post">
          <div className="title">
            {title} <br></br>from {siteName}
          </div>
          <div className="content">{content}</div>
        </div>
      )}
    </>
  );
};

export default Post;
