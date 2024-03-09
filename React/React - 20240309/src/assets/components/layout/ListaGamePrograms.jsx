import React from 'react';

function ListaGamePrograms(props) {
  const { progra } = props;
  const listaPrograms = [];

  for (const iterator of progra) {
    // Corrige la función de gradiente a conic-gradient
    const gradiente = `conic-gradient(from 0deg at 50% 50%, #33f906 ${iterator.value}%, #6c6c6c 0)`;
    const estilo = {
      background: gradiente,
    };
    // Asegúrate de que iterator.empresa y iterator.cargo no sean undefined
    const key = `${iterator.name || ''}-${iterator.value || ''}`;
    listaPrograms.push(
      <div key={key} >
        <div className="wrap-circles">
          <div className="circle" style={estilo}>
            <div className="inner">{iterator.name}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
    <div className="container-programs">
      {listaPrograms}

    </div>
    </>
  );
}

export default ListaGamePrograms;









/* import React from 'react';
// Importa Experiencia si es necesario

function ListaGamePrograms(props) {
  const { progra } = props;
  const listaPrograms = [];

  for (const iterator of progra) {
    // Corrige la sintaxis del gradiente CSS y agrega el signo de porcentaje
    const gradiente = `linear-gradient(90deg, #B5838D ${iterator.value}%, #FFCDB2 0%)`;
    const estilo = {
      backgroundImage: gradiente,
    };
    // Asegúrate de que iterator.empresa y iterator.cargo no sean undefined
    const key = `${iterator.name || ''}-${iterator.value || ''}`;
    listaPrograms.push(
      <div key={key} className="jobs">
        <div className="wrap-circles">
          <div className="circle" style={estilo}>
            <div className="inner">{iterator.name}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div>{listaPrograms}</div>
    </>
  );
}

export default ListaGamePrograms;
 */