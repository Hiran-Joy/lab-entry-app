import { useState } from 'react'
import './App.css'
import ViewLabs from './components/ViewLabs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ViewLabs/>
    </>
  )
}

export default App
