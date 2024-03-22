import { useEffect, useState } from "react";

const CuartoEfecto = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("esto es el useEffect");
  }, [contador]);

  return (
    <div>
      <h2>CuartoEfect</h2>
      {contador}
      <button onClick={() => setContador(contador + 1)}>sumar</button>
    </div>
  );
};

export default CuartoEfecto;
