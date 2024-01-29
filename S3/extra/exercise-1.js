//Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];


const createList = document.createElement('ul');

document.body.append(createList);

for(let i of countries){
    const createListContent = document.createElement('li');
    createList.appendChild(createListContent);
    createListContent.textContent = i;
   
}