import React, { useState } from 'react';
import './App.css';

const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    }

    return (
        <div>
            button press history: {props.allClicks.join(' ')}
        </div>
    )
}

const Button = (props) =>  (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)


function App(props) {
    const [value, setValue] = useState(10)

    const setToValue = (newValue) = () => {
        setValue(newValue)
    }
    return (
        <div>
         <div>
        {left}
        <Button handleClick={() => setToValue(1000)} text='thousand' />
        <Button handleClick={() => setToValue(0)} text='reset' />
        <Button handleClick={() => setToValue(value + 1)} text='increment' />
        <Button onClick={handleRightClick} text='right' />
        {right}
        <History allClicks={allClicks} />
        </div>
        </div>
    )
}

export default App;
