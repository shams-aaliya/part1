import React from 'react';

const Content = ({ parts }) => {
  return (
    <div>
      { parts.map(part => <p>{part.name}</p>) }
    </div>
  );
};

export default Content;
