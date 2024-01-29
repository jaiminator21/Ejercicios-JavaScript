/*Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías
de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse.
Para filtrar las categorías puedes ayudarte de la función `.includes()`.
 */
const movies = [
    { title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura'] },
    { title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción'] },
    { title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller'] },
    { title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación'] },
]

let aventura = [];
let thriller = [];
let accion = [];
let comedia = [];
let animacionm = [];
let arrCategories = [];

//checkDuped(movies)

for (let i of movies) {
    for (let j = 0; j < i.categories.length; j++) {
        if (i.categories[j].includes("animación")) {
            arrCategories.push(i.categories[j])
            animacionm.push(i.title)
        } else if (i.categories[j].includes("thriller")) {
            arrCategories.push(i.categories[j])
            thriller.push(i.title)
        } else if (i.categories[j].includes("acción")) {
            arrCategories.push(i.categories[j])

            accion.push(i.title)
        } else if (i.categories[j].includes("aventura")) {
            arrCategories.push(i.categories[j])
            aventura.push(i.title)
        } else {
            arrCategories.push(i.categories[j])
            comedia.push(i.title)
        }
    }
}




let newarrCategories = [...new Set(arrCategories)];


console.log(`Generos ${newarrCategories.join(', ')}`)

console.log(`Peliculas de acción ${accion.join(', ')}`)
console.log(`Peliculas de aventura ${aventura.join(', ')}`)
console.log(`Peliculas de comedia ${comedia.join(', ')}`)
console.log(`Peliculas de thriller ${thriller.join(', ')}`)
console.log(`Peliculas de animación ${animacionm.join(', ')}`)
/**
for (let i in arrCategories) {
   
    if(arrCategories[i] == "comedia"){
        arrCategories.shift("comedia")
        
    }
    console.log(arrCategories[i] ,i)
}

 */


//console.log(`Generos de peliculas ${arrCategories}`)


const categoriasUnicas = [];

for (let i of movies) {
  for (let j of i.categories) {
    if (!categoriasUnicas.includes(j)) {
      categoriasUnicas.push(j);
    }
  }
}

console.log(categoriasUnicas);








