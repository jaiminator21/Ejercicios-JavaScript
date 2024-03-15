import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
/* import Saludo from './assets/components/layout/Saludo'
import Refrescos from './assets/components/layout/Refrescos'
import Perros from './assets/components/layout/Perros' */
import Home from './assets/components/pages/Home'
import Pokemon from './assets/components/pages/Pokemon'
import Header from './assets/components/layout/Header'
import Footer from './assets/components/layout/Footer'
import DragonballChar from './assets/components/pages/DragonballChar'


function App() {

  const data = [
    {title: "titulo", p1:"parrafo1", p2:"parrafo2"},
    {}
  ]

  return (
    <>
    
    <Header />
    <Router>
      <Routes>
        <Route path='home' Component={Home}></Route>*
        <Route path='dragonball' Component={DragonballChar}></Route> 
      </Routes>
    </Router>
    <Footer />
    </>
  )
}

export default App
