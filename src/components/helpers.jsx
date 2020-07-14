import React from 'react';

export const getCleanText = text => {
  const textWithoutEmojis = text.replace(
    /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
    ''
  );
  // remove all extra spaces from string
  const cleanText = textWithoutEmojis.split(' ').map(s => s.replace(/\s/g, ''));
  return cleanText;
};

export const getTextWithPunctuation = (string, index) => {
  // remove empty strings
  if (string.length === 0) {
    return null;
  }
  //  add br after a period at the end of string unless it is an Initial
  if (string.match(/([a-zA-Z][a-zA-Z])\.$/g)) {
    return (
      <span key={index}>
        {string} <br></br>
        <br></br>
      </span>
    );
  }
  //  add br before string if it is a numbered list
  if (string.match(/^\s([0-9][0-9])|([0-9])\.$/g)) {
    return (
      <span key={index}>
        <br></br>
        <br></br>
        {`${string} `}
      </span>
    );
  }
  //  add br after ? or ! at the end of a string
  if (string.match(/\?$|!$/g)) {
    return (
      <span key={index}>
        {string} <br></br>
      </span>
    );
  } else {
    return <span key={index}>{`${string} `}</span>;
  }
};
