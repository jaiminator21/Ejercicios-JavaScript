import { useState } from "react";

const Formulario = ({addPerfil}) => {
  // le esteamos dando por defecto unos valores a nuestros input
  const initialState = {
    nombre: "",
    imagen: "",
    edad: "",
  };
  // para que sea mi formulario reactivo que me este cambiando de valor
  const [estado, setStado] = useState(initialState);
  const escucharInput = (ev) => {
    // le tenemos que sacar el id y el valor a cualquier target que ejecute el evento, es decir, los input
    console.log(ev);
    const { id, value } = ev.target;
    //  cada vez que se ejecuta o mas bien que hay un cambio en un input, a traves del onchange de cada input estamos recogiendo su id y su valor para poder actualizar los campos
    // console.log("id", id, "value", value);

    setStado({ ...estado, [id]: value });
    console.log(estado);
    // console.log("escuchar");
  };
  const submit = (event) => {
    // con esta linea evitaremos el comportamiento por defecto de un evento
    event.preventDefault();
   
    // console.log("funcion submit");
    // le pasamos a nuestrea función de app que es nuestro padre maximo y es qel que esta distribuyendo la información, nuestro estado
    addPerfil(estado);
    // resetear el formulario
    setStado(initialState)
  };
  return (
    <div>
      <h2>Formulario</h2>
      {/* 1º que ejecute una función cuando alguien de al boton de submit, mediante el evento onsubmit */}
      <form onSubmit={submit}>
        <label htmlFor="nombre">nombre:</label>
        <input
          type="text"
          id="nombre"
          value={estado.nombre}
          onChange={escucharInput}
        />
        <label htmlFor="imagen">imagen:</label>
        <input
          type="text"
          id="imagen"
          value={estado.imagen}
          onChange={escucharInput}
        />
        <label htmlFor="edad">edad:</label>
        <input
          type="text"
          id="edad"
          value={estado.edad}
          onChange={escucharInput}
        />
        <button type="submit">Creame un perfil</button>
      </form>
    </div>
  );
};

export default Formulario;
