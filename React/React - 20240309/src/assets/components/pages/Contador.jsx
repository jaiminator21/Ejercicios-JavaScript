import React, {useState} from 'react'

function Contador(){
/*
    HOOK -> state
    const [<variable>, <funcion que edita la variable>] = useState(<valor inicial de variable>);
*/
    const [contador, setContador] = useState(0)

   
    return(
        <div>
            <h2>Mi Contador</h2>
            <button onClick={()=>{setContador(contador+1)}}>++</button>
            
            <button onClick={()=>{if(contador > 0){setContador(contador-1)}}}>--</button>

            <p>{contador}</p>
        </div>
    )
}

export default Contador