import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setcounter]= useState(15)

  //let counter=15

  const addvalue = () => {
    counter=counter+1
    setcounter(counter)
  }

  const removevalue=()=>{
    setcounter(counter-1)
  }
  

  return (
    <>
  <h1>React with Arpit</h1>
  <h2>counter value:{counter}</h2>

  <button
  onClick={addvalue}>Add value{counter}</button>
  <br />
  <button
  onClick={removevalue}>Remove value{counter}</button>
  <p>footer:{counter}</p>
    </>
  )
}

export default App
