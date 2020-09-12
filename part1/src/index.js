import React from 'react';
import ReactDOM from 'react-dom';

const Hello = ({name, age}) => {
    const bornYear = () => new Date().getFullYear() - age
    return (
        <div>
            <p>
            Hello {name}, you are {age} years old
            </p>
            <p>
            So you were probably born in {bornYear()}</p>
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
