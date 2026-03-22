import { useState } from 'react'

const Button = ({onClick, text}) => {
  return(
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodPress = () => {
    setGood(good + 1)
  }

  const handleNeutralPress = () => {
    setNeutral(neutral + 1)
  }

  const handleBadPress = () => {
    setBad(bad + 1)
  }


  return (
    <>
      <h1>Give feedback</h1>
      <br/>
      <Button onClick={handleGoodPress} text="good"/>
      <Button onClick={handleNeutralPress} text="neutral"/>
      <Button onClick={handleBadPress} text="bad"/>
      <br/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

const Statistics = ({good, neutral, bad}) => {

  if (good + bad + neutral === 0) {
    return (
      <>
        <br/>
        <div>No feedback given</div>
      </>
    )
  }

  const average = () => {
    return (( good * 1 + neutral * 0 + bad * -1 ) / (good + neutral + bad)).toFixed(1)
  }

  const positive = () => {
    return  (( good / (good + neutral + bad) ) * 100).toFixed(1)
  }

  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
        <StatisticLine name="good" score={good}/>
        <StatisticLine name="neutral" score={neutral}/>
        <StatisticLine name="bad" score={bad}/>
        <StatisticLine name="average" score={average()}/>
        <StatisticLine name="positive" score={positive() + " %"}/>
        </tbody>
      </table>
    </>
  )
}

const StatisticLine = ({name, score}) => {
  return(
    <tr>
      <td>{name}</td>
      <td>{score}</td>
    </tr>
    
  )
}

export default App
