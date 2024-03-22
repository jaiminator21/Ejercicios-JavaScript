import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Colors from './assets/components/pages/Colors'



function App() {

  const name = '+++ inserta aquí tu nombre +++'

  return (
    <>
      <Router>
        <Routes>
          <Route path="colores" Component={Colors}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
