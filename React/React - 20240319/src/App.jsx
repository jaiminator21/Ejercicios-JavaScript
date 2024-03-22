import { useState } from "react";
import "./App.css";
import Estados from "./components/estados/Estados";
import Formulario from "./components/formularios/Formulario";
import CuartoEfecto from "./components/hooks/CuartoEfecto";
import PrimerEfecto from "./components/hooks/PrimerEfecto/PrimerEfecto";
import SegundoEfecto from "./components/hooks/SegundoEfecto/SegundoEfecto";
import TercerEfecto from "./components/hooks/TercerEfecto";
import Gallery from "./components/props/gallery/Gallery";
import ListaPerfiles from "./components/formularios/ListaPerfiles";

function App() {
  const nuevoArray = [
    {
      name: "Koromon",
      img: "https://digimon.shadowsmith.com/img/koromon.jpg",
      level: "In Training",
    },
    {
      name: "Tsunomon",
      img: "https://digimon.shadowsmith.com/img/tsunomon.jpg",
      level: "In Training",
    },
    {
      name: "Yokomon",
      img: "https://digimon.shadowsmith.com/img/yokomon.jpg",
      level: "In Training",
    },
    {
      name: "Motimon",
      img: "https://digimon.shadowsmith.com/img/motimon.jpg",
      level: "In Training",
    },
  ];
  const [listaPerfiles, setperfiles] = useState([]);

  const addPerfil = (perfil) => {
    //  console.log(perfil);
    // mediante el spread operator copio todo lo que habia antes, mas el nuevo perfil que recibira del formularios
    const nuevosPerfiles = [...listaPerfiles, perfil];
    //  console.log(nuevosPerfiles);
    setperfiles(nuevosPerfiles);
  };

  return (
    <>
      {/* <Estados/> */}
      {/* <Gallery nuevoArray={nuevoArray} /> */}
      {/* <PrimerEfecto/> */}
      {/* <SegundoEfecto/> */}
      {/* <TercerEfecto/> */}
      {/* <CuartoEfecto/> */}

      <Formulario addPerfil={addPerfil} />
      <ListaPerfiles listaPerfiles={listaPerfiles} />
    </>
  );
}

export default App;
