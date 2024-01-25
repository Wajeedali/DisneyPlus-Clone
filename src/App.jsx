import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Login from './components/Login'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router >
        <Header />
        <Routes>
          <Route exact path = "/" element = {<Login/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
