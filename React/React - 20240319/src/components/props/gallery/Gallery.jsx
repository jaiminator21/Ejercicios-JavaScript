import { useState } from "react";
import Buscador from "../buscador/Buscador";
import "./Gallery.css";
const Gallery = ({ nuevoArray }) => {
  //   console.log(nuevoArray);
  const [filtro, setFiltro] = useState("");
  //   console.log(filtro);
  const filtrar = nuevoArray.filter((element) => element.name.includes(filtro))
//   console.log(filtrar);

  return (
    <>
      <Buscador setFiltro={setFiltro} />
      {filtrar.map((element, index) => {
        return (
          <div key={index}>
            <img src={element.img} alt={element.name} />
            <h3>{element.name}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Gallery;
