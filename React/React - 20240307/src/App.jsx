import './App.css'
import HelloWorld from './assets/components/layout/HelloWorld'
import List from './assets/components/layout/Lista'




function App() {

  const name = '+++ inserta aquí tu nombre +++'
  const data = ['Ale', 'Fany', 'Mati', 'Arsenio', 'Helena']

  return (
    <>
      <HelloWorld name={name} />
      <List data= {data.join(',')} />
    </>
  )
}

export default App
