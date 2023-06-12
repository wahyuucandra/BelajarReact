import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from "./components/HelloWorld"

function App() {
  var [point, setPoint] = useState(0);

  return (
    <div >
      <button onClick={() => setPoint(point + 1)}> 1 Point </button>
      <button onClick={() => setPoint(point + 2)}> 2 Point </button>
      <button onClick={() => setPoint(point + 3)}> 3 Point </button> 

      <p id ="point"> {point} </p>
    </div>
  )
}

export default App
