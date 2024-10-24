import { useState } from 'react'
import './App.css'



function App() {

  const [counter,setCounter] = useState(0);
  const addValue = ()=>{
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);\
    setCounter((prevCounter) => (prevCounter + 5));
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button>Remove Value</button>
    </>
  )
}

export default App
