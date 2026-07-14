import { useState } from 'react'
import './App.css'
import ViewLabs from './components/ViewLabs'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ViewLabs/>

    </>
  )
}

export default App
