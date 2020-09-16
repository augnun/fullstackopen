import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {
    const {onClick, text} = props
    return (
        <button onClick={onClick}>
            {text}
            </button>
    )
}

const Anecdote = (props) => {
    return (
        <div>
            <p> {props.anecdote} </p>
            <p> has {props.amountOfVotes} votes </p>
        </div>
    )
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVote] = useState(Array(anecdotes.length).fill(0))
    const [maxIndex, setMaxIndex] = useState(0)

    const nextRandom = () => {
        const a = Math.floor(Math.random()*anecdotes.length)
        setSelected(a)
    }

    const handleVote = () => {
        const lol = [...votes]
        lol[selected] += 1
        setVote(lol)
        const max = Math.max(...lol)
        console.log("max is: ", max)
        setMaxIndex(lol.findIndex(x => x === max))
        }

    return (
        <div>
          <h1> Anecdote of the day </h1>
          <Anecdote anecdote={props.anecdotes[selected]} amountOfVotes=
        {votes[selected]} />
          <Button onClick={() => nextRandom()} text={"Next anecdote"} />
          <Button onClick={handleVote} text={"vote"} />
          <h2> Anecdote with most votes </h2>
          <Anecdote anecdote={props.anecdotes[maxIndex]} amountOfVotes={votes[maxIndex]} />
              </div>
    )
} 



const anecdotes = [
      'If it hurts, do it more often',
      'Adding manpower to a late software project makes it later!',
      'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      'Premature optimization is the root of all evil.',
      'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
      <App anecdotes={anecdotes} />,
      document.getElementById('root')
)
