import React from 'react';
import { Loader } from './index';
import './Post.css';

const Post = ({ post, loading }) => {
  const { siteName, textContent, title } = post;
  const content =
    textContent &&
    textContent
      .replace(/\./g, '.<br> <br>') // to add a line break after a period
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ''
      ); // to remove emojis
  return (
    <>
      {loading && <Loader />}
      {title && (
        <div className="post">
          <div className="title">
            {title} <br></br>from {siteName}
          </div>
          <div
            className="text"
            dangerouslySetInnerHTML={{
              __html: content
            }}
          ></div>
        </div>
      )}
    </>
  );
};

export default Post;
