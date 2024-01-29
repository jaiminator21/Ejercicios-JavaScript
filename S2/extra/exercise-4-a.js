/**Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la 
posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos.

Sugerencia de función: */


let array = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

function findArrayIndex(array, text) {
    for (let i in array) {
        if( array[i] == text){
            console.log(i, array[i])
        }
    }
}


findArrayIndex(array, 'Caracol')

findArrayIndex(array, 'Mosquito')

findArrayIndex(array, 'Salamandra')

findArrayIndex(array, 'Ajolote')


findArrayIndex(array, 'Tortuga')
