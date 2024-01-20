//Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, igual o mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.

const movies = [{name: "Your Name", durationInMinutes: 130},{name: " Pesadilla antes de navidad", durationInMinutes: 225}, {name: " Origen", durationInMinutes: 165}, {name: " El señor de los anillos", durationInMinutes: 967}, {name: " Solo en casa", durationInMinutes: 214}, {name: " El jardin de las palabras", durationInMinutes: 40}]


let moviesShort = [];
let moviesMedium = [];
let moviesLong = [];



for(let i = 0; i<movies.length; i++){
    if(movies[i].durationInMinutes<=99){
        moviesShort.push(movies2.name);
    }else if(movies[i].durationInMinutes>= 201){
        moviesLong.push(movies2.name);
    }else{
        moviesMedium.push(movies2.name)
    }

    
}

console.log("Pelicula corta " + moviesShort)

console.log("Pelicula media " + moviesMedium)

console.log("Pelicula larga " + moviesLong)