import { useState } from 'react'
import './App.css'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [inp, setInp] = useState("")
  const [local,setLocal]=useLocalStorage()

  function getTodo(e) {
    e.preventDefault()
    setLocal([...local,inp])
    setInp("")
  }
  return (
    <>
     <form onSubmit={getTodo}>
      <input onChange={(e)=>setInp(e.target.value)} value={inp} type="text" />
      {local.map((x,i)=><h2 key={i}>{x}</h2>)}
     </form>
    </>
  )
}

export default App
