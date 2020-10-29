import React from 'react';

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p>This is {props.part_name}.</p>
    </div>
  );
};

export default Content;
