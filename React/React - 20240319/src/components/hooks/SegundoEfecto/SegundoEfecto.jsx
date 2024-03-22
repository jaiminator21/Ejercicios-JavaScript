import { useEffect, useState } from "react";

const SegundoEfecto = () => {
  const [visible, setVisible] = useState(false);
 
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
      console.log("variable cambiada");
    }, 3000);
  }, []);
  
  return (
    <div>
      <h2>SegundoEfecto</h2>
      {!visible ? <p>Loading...</p> : <p>Este es el contenido</p>}
    </div>
  );
};

export default SegundoEfecto;
