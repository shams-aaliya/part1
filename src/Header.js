import React from 'react';

const Header = ({ name, course }) => {
  console.log(course)
  return (
    <div>
      <p>
        Hello {name}, your course is {course.n}... !
      </p>
    </div>
  );
};

export default Header;
