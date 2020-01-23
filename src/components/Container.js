import React from 'react';
import './Container.css';

function Container({data: {copyright, date, explanation, hdurl, title}}) {
  return (
    <div className="container" style={{backgroundImage: `url(${hdurl}`}}>
      <h1>{title}</h1>
      <p>{explanation}</p>
      <p>{copyright} {date}</p>
    </div>
  );
}

export default Container;
