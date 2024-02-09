import { useState } from 'react'
import './App.css'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
       <Home></Home>
      </div>
  )
}

export default App
