import React from 'react';

const Header = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, your course is {props.course} !
      </p>
    </div>
  );
};

export default Header;
