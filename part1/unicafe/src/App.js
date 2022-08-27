import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)




const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleNeutral} text='neutral' />
      <Button handleClick={handleBad} text='bad' />
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

export default App