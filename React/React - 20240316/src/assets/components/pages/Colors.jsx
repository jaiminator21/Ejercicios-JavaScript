import React, { useState} from 'react'

function Colors() {

    const [ isColoreado1, setColoreado1 ] = useState(false) //Consideramos que false es rojo y true es verde
    const [ isColoreado2, setColoreado2 ] = useState(false) //Consideramos que false es rojo y true es verde
    const [ isColoreado3, setColoreado3 ] = useState(false) //Consideramos que false es rojo y true es verde

  return (
    <>
      <div className='square' onClick={() => {setColoreado1(!isColoreado1)}} style={{ backgroundColor: isColoreado1 ? "#FF0000" : "#00FF00" }}></div>
      <div className='square' onClick={() => {setColoreado2(!isColoreado2)}} style={{ backgroundColor: isColoreado2 ? "#FF0000" : "#00FF00" }}></div>
      <div className='square' onClick={() => {setColoreado3(!isColoreado3)}} style={{ backgroundColor: isColoreado3 ? "#FF0000" : "#00FF00" }}></div>

    </>
  )
}

export default Colors