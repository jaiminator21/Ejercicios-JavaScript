import { useState } from "react";

const Estados = () => {
    // let abierto = "esta abierto";
    const [abierto, setAbierto]= useState("esta abierto")

    const cerrarTienda = () => {
        // console.log("entra",abierto);
        // // abierto="esta cerrado"
        // setAbierto("esta cerrado")
        // console.log("sale",abierto);
        if (abierto==="esta cerrado") {
            setAbierto("esta abierto")
        }else{
            setAbierto("esta cerrado")
        }

    }
  return (

    <div>
    <button onClick={cerrarTienda}>cerrar tienda</button>
    {abierto}
    {abierto ==="esta abierto" ? "esta abierto" :"esta cerrado" }
    </div>
  )
}

export default Estados