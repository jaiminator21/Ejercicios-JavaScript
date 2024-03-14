import React, { useState } from 'react'

function Contador() {

    /* 
    HOOK -> state

    const [<variable>, <funcion que edita la variable>] = useState(<valor inicial de variable>);
    
    */
    const [contador, setContador] = useState(0);
    return (
        <div>
            <h2>Mi contador</h2>

            <button onClick={
                () => { setContador(contador + 1) }
            }>++</button>

            <br />
            <br />

            <button onClick={
                () => { setContador(contador - 1) }
            }>--</button>

            <br />
            <br />
            <br />
            <p className='contador'>{contador}</p>

        </div>
    )
}

export default Contador