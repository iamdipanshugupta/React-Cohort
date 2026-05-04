
import { useState } from 'react';
import './App.css'

function App() {
  const [value ,Setvalue] = useState(5)

  const increase = () => {
    Setvalue(value+1)
    console.log(value)
  }
  const decrement = () => {
    Setvalue(value -1)
    console.log(value)
  }
  return (
    <>
      <div>
        <h1>Value:{value}</h1>
        <button onClick={increase}>😘</button>
        <button onClick={decrement}>😭</button>
      </div>
    </>
  )
}

export default App
