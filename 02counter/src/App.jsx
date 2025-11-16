import './App.css'
import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(5)

  // let counter = 5

  const incValue = () => {
    // console.log("value added", Math.random()) 
    // console.log("clicked", counter)
    // counter = counter + 1
    if(counter < 20)
      setCounter(counter + 1)
  }

  const decValue = () => {
    if(counter > 0)
      setCounter(counter-1)
  }

  return (
    <>
      <h1>Hello worlddd</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={incValue}>Increase Value {counter}</button>
      <button onClick={decValue}>Decrease Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
