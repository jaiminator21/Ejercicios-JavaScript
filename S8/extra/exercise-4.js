/* Vamos a usar de nuevo JSON SERVER para crear un listado de personajes de la serie Dragon Ball.

Para ello, ejecutemos `json-server --watch exercise-4.json`. En este caso el endpoint con los personajes es `http://localhost:3000/characters`.

La idea es crear una galería con los planetas, que podemos obtener del endpoint `http://localhost:3000/planets` y, que si el usuario hace click en alguno de los planetas, 
salga debajo los personajes que están asociados por el .idPlanet a ese planeta en cuestión, mostrando tanto sus imágenes 
.avatar como sus nombres .name. Para poder obtener la información de los personajes podemos hacer un filtro de los personajes llamando a la url, por ejemplo `http://localhost:3000/characters?idPlanet=1` y, teniendo en cuenta que el idPlanet variará dependiendo del planeta seleccionado.
 
Además de esto, agrega un buscador para poder filtrar los personajes por nombre una vez que has seleccionado el planeta. 
Por lo tanto, deberemos incluir el input debajo del planeta y encima de los personajes listados.

Como extra podríamos hacer que si haces click a un personaje salga la descripción debajo. Como extra del extra haz que la descripción se oculte si vuelves a hacer click en el mismo personaje. */
const mainPlanetDiv$$ = document.createElement('div') // Creamos div de planetas y lo sacamos por el html
document.body.append(mainPlanetDiv$$)
mainPlanetDiv$$.className = "planets"

const inputDiv$$ = document.createElement('div') // Creamos div de input y lo sacamos por el html
document.body.append(inputDiv$$)
inputDiv$$.className = "input"

const mainCharactersDiv$$ = document.createElement('div') // Creamos div de personajes y lo sacamos por el html
document.body.append(mainCharactersDiv$$)
mainCharactersDiv$$.className = "characters"




const getCharacters = async () => { // Fetch de personajes
    const urlCharacter = 'http://localhost:3000/characters'
    try {
        const asnwerApi = await fetch(urlCharacter)
        const asnwerApiJson = await asnwerApi.json()

        return asnwerApiJson

    } catch (error) {
        console.log(error);
    }
}


const getPlanets = async () => {  // Fetch de planetas
    const urlPlanets = 'http://localhost:3000/planets'
    try {
        const asnwerApi = await fetch(urlPlanets)
        const asnwerApiJson = await asnwerApi.json()

        return asnwerApiJson

    } catch (error) {
        console.log(error);
    }
}



const drawCharacters = (charactersarray) => {  // Dibujamos los personajes 
    mainCharactersDiv$$.innerHTML = ""
    for (const basurero of charactersarray) {
        const charactersDiv$$ = document.createElement('div')
        charactersDiv$$.className = "character"
        mainCharactersDiv$$.appendChild(charactersDiv$$)

        const img$$ = document.createElement('img')
        charactersDiv$$.appendChild(img$$)
        img$$.src = basurero.avatar;


        const p$$ = document.createElement('p')
        charactersDiv$$.appendChild(p$$)
        p$$.innerText = basurero.name;
    }
}


const drawInput = (charactersArray) => {  // Dibujamos el input 
    const input = document.createElement('input')
    inputDiv$$.appendChild(input)

    input.addEventListener('input', ()=>{
        searchCharacters(input.value, charactersArray) // LLamada a la funcion que filtra por la barra de busqueda
    })
}



const drawPlanets = (planetsarray,charactersarray) => {   // Dibujamos los planetas
    mainPlanetDiv$$.innerHTML = "" // Limpamos el html cada vez que se llama a la función
    for (const basurero of planetsarray) { // Limpiamos 
        const planetsDiv$$ = document.createElement('div')
        mainPlanetDiv$$.appendChild(planetsDiv$$)

        const img$$ = document.createElement('img')
        planetsDiv$$.appendChild(img$$)
        img$$.src = basurero.image;

        const p$$ = document.createElement('p')
        planetsDiv$$.appendChild(p$$)
        p$$.innerText = basurero.name;

        planetsDiv$$.addEventListener('click', ()=>{
            filterByPlanet(basurero.id, charactersarray) // LLamada a la funcion que filtra por planetas
        })
    }
}


const searchCharacters = (value, charactersarray) => {   // Filter de personajes con el input.value 
    let filterdCharacters = charactersarray.filter((character) => character.name.toLowerCase().includes(value.toLowerCase()))
    drawCharacters(filterdCharacters)
}



const filterByPlanet = (value, charactersarray) => {  // Filter de personajes por la id del planeta
    let filterdCharacters = charactersarray.filter((character) => character.idPlanet == value)
    drawCharacters(filterdCharacters)
}





const init = async () => { // funcion de iniciación
    let characters = await getCharacters()
    let planets = await getPlanets()
    drawPlanets(planets, characters)
    drawInput(characters)
    drawCharacters(characters)
    console.log(characters, planets);
}

init()