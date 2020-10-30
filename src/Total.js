import React from 'react';

const Total = ({parts}) => {
  console.log({parts})
  return (
    <div>
      {parts.map(part => <p>Total number of exercises in the above examples are: {part.exercises}</p>)}
    </div>
  );
};

export default Total;
