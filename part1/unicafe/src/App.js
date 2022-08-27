import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value}) => (
  <tbody>
    <tr>
      <td>{text}</td> 
      <td>{value}</td>
    </tr>
  </tbody>
)




const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const Statistics = (props) => {
    const all = props.good+props.bad+props.neutral
    const average = (props.good-props.bad)/all
    const positive = ((props.good/all)*100)+'%'

    if (all === 0) {
      return (
        <div>
        No feedback given
        </div>
      )
    }
    return (
      <table> 
        <StatisticLine text="good" value = {props.good}/>
        <StatisticLine text="neutral" value = {props.neutral}/>
        <StatisticLine text="bad" value = {props.bad}/>
        <StatisticLine text="all" value = {all}/>
        <StatisticLine text="average" value = {average}/>
        <StatisticLine text="positive" value = {positive}/>
      </table>  
    )

  }

  const handleGood = () => {
    //setAll(allClicks.concat('L'))
    setGood(good + 1)
  }
  
  const handleBad = () => {
    //setAll(allClicks.concat('R'))
    setBad(bad + 1)
  }
  
  const handleNeutral = () => {
    //setAll(allClicks.concat('R'))
    setNeutral(neutral + 1)
  }
  

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleNeutral} text='neutral' />
      <Button handleClick={handleBad} text='bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
    
  )
}

export default App