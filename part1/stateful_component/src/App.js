import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './App.css';

const Display = ({counter}) => <div>{counter}</div>

const Button = ({ handleClick, text }) => {
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )
}

function App() {
    const [ counter, setCounter ] = useState(0)

    const increaseByOne = () => setCounter(counter + 1)
    const decreaseByOne = () => setCounter(counter - 1)
    const setToZero = () => setCounter(0)


    return (
        <div>
            <Display counter={counter}/>
            <Button
                handleClick={increaseByOne}
                text='plus'
            />
            <Button
                handleClick={setToZero}
                text='zero'
            />
            <Button
                handleClick={decreaseByOne}
                text='minus'
            />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

export default App;
