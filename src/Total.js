import React from 'react';

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>And your total Exercises are {props.exercises}</p>
    </div>
  );
};

export default Total;
