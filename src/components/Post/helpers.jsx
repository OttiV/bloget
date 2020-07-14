import React from 'react';

export const getCleanText = text => {
  // remove all extra spaces from string
  const splittedText = text.split(' ');
  return splittedText.map(s => s.replace(/\s/g, ''));
};

export const getTextWithPunctuation = (string, index) => {
  // remove empty strings
  if (string.length === 0) {
    return null;
  }
  //  add br after a period at the end of string unless it is an Initial, Mr or Mrs
  if (string.match(/([a-z][a-z][a-zA-Z])\.$/g)) {
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
