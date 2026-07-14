import { useState } from 'react'
import './App.css'
import NavigationBar from './components/NavigationBar'
import ViewLabs from './components/ViewLabs'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavigationBar/>
      <ViewLabs/>

    </>
  )
}

export default App
