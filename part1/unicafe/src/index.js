import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Statistic = (props) => {
    return (
        <tr>
            <td> {props.text} </td>
            <td> {props.stats} </td>
            <td> {props.alt_text} </td>
        </tr>
    )
}

const Statistics = ({good, neutral, bad} ) => {
    return (
        <table>
          <tbody>
            <Statistic text={"Good reviews:"} stats={good} />
            <Statistic text={"Neutral reviews:"} stats={neutral} />
            <Statistic text={"Bad reviews:"} stats={bad} />
            <Statistic text={"Neutral reviews:"} stats={neutral} />
            <Statistic text={"All reviews:"} stats={good+neutral+bad}/>
            <Statistic text={"Average: "} stats={(good*1+neutral*0+(-1)*bad)/(good+neutral+bad)} />
            <Statistic text={"Positive:"} stats={good/(good+neutral+bad)} alt_text={'%'} />
        </tbody>
        </table>
)
}

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => {
        setGood(good+1)
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
    }

    const handleBadClick = () => {
        setBad(bad + 1)
    }
    if (good+neutral+bad !== 0)
    return (
        <div>
            <h1>Give Feedback</h1>
            <Button handleClick={() => handleGoodClick()} text="Good" /> 
            <Button handleClick={() => handleNeutralClick()} text="Neutral" /> 
            <Button handleClick={() => handleBadClick()} text="Bad" /> 
        <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>

    )
    else 
        return (
            <div>
                <h1>Give Feedback</h1>
                <Button handleClick={() => handleGoodClick()} text="Good" /> 
                <Button handleClick={() => handleNeutralClick()} text="Neutral" /> 
                <Button handleClick={() => handleBadClick()} text="Bad" /> 
                <h1>No feedback given!</h1>
            </div>
        )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)
