import React, { useState } from 'react'
import "./Armario.css"

function Armario() {

    const [index, setIndex] = useState(0);
    const prendas = [
        '/img/camiseta1.png',
        '/img/camiseta2.png',
        '/img/camiseta3.png',
        '/img/camiseta4.png',
    ]

    return (
        <div className='armario'>
            <div className='img-armario-container'>
                <img className="img-armario" src={prendas[index]} />
            </div>
            <div className='btn-armario-continer'>
                <button className='btn-armario' onClick={() => {
                    index > 0 ? setIndex(index - 1) : setIndex(prendas.length - 1)
                }}>anterior</button>
                <button className='btn-armario' onClick={() => {
                    index < prendas.length - 1 ? setIndex(index + 1) : setIndex(0)
                }} >siguiente</button>
            </div>
        </div>
    )
}

export default Armario