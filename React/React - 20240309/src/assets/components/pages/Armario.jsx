import React, {useState} from 'react'
function Armario() {
const prendas = [
    '/src/assets/img/camiseta1.jpeg',
    '/src/assets/img/camiseta2.png',
    '/src/assets/img/camiseta3.jpg',
    '/src/assets/img/camiseta4.png',
]

const [contador, setContador] = useState(0)


const subirImagen= ()=>{
    if(contador >=prendas.length -1){
        setContador(0)
    }else{
        setContador(contador + 1)
    }

}

const bajarImagen= ()=>{
    if(contador <= 0){
        
        setContador(prendas.length - 1)
    }else{
        setContador(contador-1)
    }
}


/* HOOK para guardar la posicion actual del array,
y la funcion que cambia de foto */
return (
    <div className='container-main'>
        <img src={prendas[contador]} className='imagen'/>
        <button onClick={subirImagen}>++</button>
        <button onClick={bajarImagen}>--</button>
    </div>
)
}
export default Armario