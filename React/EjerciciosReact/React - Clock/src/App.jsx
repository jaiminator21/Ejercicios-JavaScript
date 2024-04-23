import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import './App.css'
import Clock from './assets/layout/Clock'
import Header from './assets/pages/Header'
import Countdown from './assets/layout/Countdown'
import Crono from './assets/layout/Crono'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header/>
          <main>
            <Routes>
              <Route path="" element ={<Clock/>}/>
              <Route path="countdown" element ={<Countdown/>}/>
              <Route path="crono" element ={<Crono/>}/>
            </Routes>
          </main>
      </Router>
    </>
  )
}

export default App
