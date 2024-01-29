//Dado el siguiente html y javascript. Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".


const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];


const printHere = document.querySelector('[data-function="printHere"]')


const createList = document.createElement('ul');

printHere.appendChild(createList);

for(let i of cars){
    const createListContent = document.createElement('li');
    createList.appendChild(createListContent);
    createListContent.innerText = i;
   
}