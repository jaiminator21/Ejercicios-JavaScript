import React from 'react'

function ListaExperiencia(props, proping) {
  const {trabajo} = props
  const listaTrabajos = []


  for (const iterator of trabajo) {   
    // Asegúrate de que iterator.empresa y iterator.cargo no sean undefined
    const key = `${iterator.empresa || ''}-${iterator.cargo || ''}-${iterator.fecha || ''}`;
    listaTrabajos.push(
      <div key={key} className="jobs">
        <p><b>Empresa</b> {iterator.empresa}</p>
        <p><b>Cargo</b> {iterator.cargo}</p>
        <p><b>Fecha</b> {iterator.fecha}</p>
    </div>)
  }
 
  return (
    <>
    <div>       
      {listaTrabajos}  
    </div>
    </>
  )
}

export default ListaExperiencia