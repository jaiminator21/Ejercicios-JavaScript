//Usa un bucle forof para recorrer todos los juguetes y elimina los que incluyan la palabra `gato`. Recuerda que puedes usar la función `.includes()` para comprobarlo.

let toys = [{ id: 5, name: 'Buzz MyYear' }, { id: 11, name: 'Action Woman' }, { id: 23, name: 'Barbie Man' }, { id: 40, name: 'El gato con Guantes' }, { id: 40, name: 'El gato felix' }, { id: 40, name: 'El gato pablo' }, { id: 23, name: 'Barbie Man' }]
let toDelete = [];
for(let i of toys){
    if(i.name.includes("gato")){
        toDelete.push(toys.indexOf(i));
    }
}



console.log(toDelete)
toDelete.reverse();
console.log(toDelete)


for(let i of toDelete){
    toys.splice(i,1)
}



console.log(toys)



