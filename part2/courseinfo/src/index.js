import React from 'react';
import ReactDOM from 'react-dom';

const Course = ({course}) => {
const Header = ({ course }) => {
      return (
              <h1>{course.name}</h1>
            )
}


const Part = (props) => {
      return (
              <p>
                {props.part.name} {props.part.exercises}
              </p>    
            )
}

const Content = ({ course }) => {
      return (
              <div>
                <Part part={course.parts[0]} />
                <Part part={course.parts[1]} />
                <Part part={course.parts[2]} />
              </div>
            )
}
return (
    <div>
        <Header course={course} />
        <Content course={course} />
    </div>
)
}    
    

const App = () => {
      const course = {
          id: 1,
              name: 'Half Stack application development',
              parts: [
                        {
                                    name: 'Fundamentals of React',
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

      return (
              <div>
                <Course course={course} />
              </div>
            )
}

ReactDOM.render(<App />, document.getElementById('root'))
