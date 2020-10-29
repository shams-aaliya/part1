import React from 'react'
import Header from './Header';
import Content from './Content';
import Total from './Total';

const App = () => {
  const course = {
        name: 'Half Stack application development',
        parts : 
   [
    {name: 'Fundamentals of React',
     exercises: 10
    },
    {
    name: 'Using props to pass data',
    exercises: 7
    },
    {
    name: 'State of a component',
    exercises: 14
    }
   ]
}

const a = course.parts.name
const b = course.parts.exercises 

  return (
    <div>
      <Header name='Aaliya' course={course.name} />
      <Content part_name={course[a]} />
      <Total exercise={course[b]} />
    </div>
  );
};
export default App
