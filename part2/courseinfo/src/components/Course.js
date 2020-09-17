import React from 'react';

const Header = ({ course }) => {
      return (
              <h1>{course}</h1>
            )
}

const Part = ({part}) => {
      return (
              <p>
                {part.name} {part.exercises}
              </p>    
            )
}

const Content = (props) => {
      return (
            props.parts.map(part => <Part key={part.name} part={part} />)
            )
}

const Total = ({parts}) => {
    const total = parts.reduce((total, part) => total + part.exercises, 0)
    return (
        <strong>Total of {total} exercises</strong>
    )
}

const Course = ({course}) => {
return (
    <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
    </div>
)
}    

export default Course;
