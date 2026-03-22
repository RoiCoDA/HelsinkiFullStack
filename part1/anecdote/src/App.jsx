import { useState } from 'react'



const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(8).fill(0))
  const [topVote, setTopVote] = useState(0)

  const currentQuote = anecdotes[selected]
  // console.log("=== APP BODY === index is: ", selected)
  // console.log("=== APP BODY === current quote is: ", currentQuote)
  // console.log("=== APP BODY === votes: ", votes)
  // console.log("=== APP BODY === top voted index: ", topVote)
  // console.log("=== APP BODY === top vote to statistics: ", votes[topVote])
  // console.log("=== APP BODY === top quote to statistics: ", anecdotes[topVote])


  const handleClick = () => {
    // console.log("======= Clicked next ========")
    setSelected(getNum())
}

const calculateHighestVoteCount = (copy) => {
  let highestIndex = 0
  for ( var i = 0 ; i < copy.length ; i++ )
  {
    if ( copy[i] > copy[highestIndex] ) highestIndex = i
  }
  setTopVote(highestIndex)
}

const getNum = () => {
  const number = Math.floor(Math.random() * 8)
  return number
}

  const handleVote = () => {
    // console.log("======= Clicked vote =======")
    // console.log("Voted for " + currentQuote)
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    calculateHighestVoteCount(copy)
  }

  return (
    <>
      <p>{currentQuote}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
      <br/>
      <Statistics topAnecdote={anecdotes[topVote]} topVotes={votes[topVote]} />
    </>
  )

}

const Statistics = ({topAnecdote, topVotes}) => { 

  // console.log("=== STATISTICS === top voted index: ", topVotes)
  // console.log("=== STATISTICS === top quote ", topAnecdote)
  return (
    <>
     <h1>Anecdote with most votes</h1>
     <p>{topAnecdote}</p>
     <p>has {topVotes} votes</p>
    </>
  )
}


export default App
