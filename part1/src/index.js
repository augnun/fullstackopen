import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name}! You are {props.age} years old!</p>
        </div>
    )
}

const App = () => {
    const name = "Augusto"
    const age = 34

    return (
        <div>
            <h1>Greetings</h1>
            <Hello name="Maya" age={2321+1} />
            <Hello name={name} age={age}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
