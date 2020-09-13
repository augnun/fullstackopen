import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const DisplayValue = (props) =>  <em>{props.value}</em>

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => {
        setGood(good+1)
        console.log('good')
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
        console.log('neutral')
    }

    const handleBadClick = () => {
        setBad(bad + 1)
        console.log('bad')
    }
    return (
        <div>
            <h1>Give Feedback</h1>
            <Button handleClick={() => handleGoodClick()} text="Good" /> 
            <Button handleClick={() => handleNeutralClick()} text="Neutral" /> 
            <Button handleClick={() => handleBadClick()} text="Bad" /> 
        <h1>statistics</h1>
            <div> Good reviews: <DisplayValue value={good} /></div>
            <div> Neutral reviews: <DisplayValue value={neutral} /></div>
            <div> Bad reviews: <DisplayValue value={bad} /></div>
        </div>

    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)
