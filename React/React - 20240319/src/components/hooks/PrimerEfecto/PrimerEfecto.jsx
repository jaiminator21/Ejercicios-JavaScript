import { useEffect, useState } from "react";

const PrimerEfecto = () => {
  const [nombre, setNombre] = useState("Fermin");

  useEffect(() => {
    console.log("hola");
    setNombre("manolo");
  },[]);

  return (
    <div>
      <h2>PrimerEfecto</h2>
      {nombre}
    </div>
  );
};

export default PrimerEfecto;
