/**Crea una función llamada ``swap`` que reciba un array y dos parametros que sean indices del array. La función deberá 
intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array 
resultante.

Sugerencia de array:
````js

````
 */


const array = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];




function swap(array, entra, sale) {

    if (!array.includes(sale) && !array.includes(entra)) {
        console.log("La persona para cambiar no esta dentro del array")

        return array;
    } else {

        let pos1 = 0;
        let pos2 = 0;
        for (let i of array) {
            if (i == sale) {
                array.indexOf(i)
                console.log(i, array.indexOf(i))
                array.splice(array.indexOf(i), 1, entra)
            }
            if (i == entra) {
                array.splice(array.indexOf(i), 1, sale)
            }
        }
    }


}


swap(array, "Cristiano Romualdo", "Mesirve");

console.log(array)