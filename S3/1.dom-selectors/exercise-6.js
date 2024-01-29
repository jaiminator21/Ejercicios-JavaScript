/*Dado el siguiente html usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".*/

const testMes = document.querySelectorAll('[data-function="testMe"]');
for(let i in testMes){
    if(i == 2){
        console.log(testMes[i])
    }
}