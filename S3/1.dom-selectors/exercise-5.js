//Dado el siguiente html usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".

const testMes = document.querySelectorAll('[data-function="testMe"]');

for(let i of testMes){
    console.log(i);
}