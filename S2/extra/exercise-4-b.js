/**Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada 
`removeItem` que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) 
llame a la función anteriormente creada ``findArrayIndex`` y obten el indice para posteriormente usar la función de 
javascript ``.splice()`` para eliminar el elemento del array. Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.
 */

let array = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];





function removeItem(array) {
    let pos;
    function findArrayIndex(text) {
        for (let i in array) {
            if( array[i] == text){
                console.log("hola")
                pos = i;       
                console.log(pos)
                return pos;
            }
        }
    }
    console.log(pos)
    array.splice(pos,0)
}


removeItem(array,'Caracol')





