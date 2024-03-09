import React from 'react';


function ListaVoluntarios(props) {
  const { voluntariados } = props;

  const listaVoluntarios = [];

  for (const iterator of voluntariados) {
    // Asegúrate de que iterator.empresa y iterator.cargo no sean undefined
    const key = `${iterator.lugar || ''}-${iterator.fecha || ''}`;

    listaVoluntarios.push(
      <div key={key} className="jobs">
        <p><b>Lugar / Puesto:</b> {iterator.lugar}</p>
        <p><b>Fecha:</b> {iterator.fecha}</p>
        <p><b>Descripción:</b> {iterator.descrip}</p>
      </div>
    );
  }

  return (
    <>
      <div>
        {listaVoluntarios}
      </div>
    </>
  );
}

export default ListaVoluntarios;
