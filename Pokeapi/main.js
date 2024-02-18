const ol$$ = document.getElementById('pokedex')
const allPokemons = [];
const classCard = `card`
const classUpperCard = "card-upper"
const classLowerCard = "card-lower"
const classTitle = "card-title"
const classSubtitle = "card-subtitle"
const classImage = "card-image"
const classID = "card-id"


const normalColor = '#a8a878'
const fireColor = '#F08030'
const waterColor = '#6890F0'
const electricColor = '#F8D030'
const grassColor = '#78C850'
const iceColor = '#98D8D8'
const fightingColor = '#C03028'
const poisonColor = '#A040A0'
const groundColor = '#E0C068'
const flyingColor = '#A890F0'
const psychicColor = '#F85888'
const bugColor = '#A8B820'
const rockColor = '#B8A038'
const dragonColor = '#705898'
const steelColor = '#B8B8D0'
const fairyColor = '#F0B6BC'
const ghostColor = '#705898'

const normal = 'normal'
const fire = 'fire'
const water = 'water'
const electric = 'electric'
const grass = 'grass'
const ice = 'ice'
const fighting = 'fighting'
const poison = 'poison'
const ground = 'ground'
const flying = 'flying'
const psychic = 'psychic'
const bug = 'bug'
const rock = 'rock'
const dragon = 'dragon'
const steel = 'steel'
const fairy = 'fairy'
const ghost = 'ghost'




const getPokemons = async () => {
    try {
        for (let i = 1; i <= 150; i++) {
            const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}/`
            const response = await fetch(pokemonUrl);
            const result = await response.json();

            const pokein = {
                id: result.id,
                name: result.name,
                image: result.sprites.other["official-artwork"].front_default,
                //image: result.sprites.other["showdown"].front_shiny,
                tipos: result.types.map((type) => type.type.name).join(', '),
                stat_HP: result.stats[0].stat.name,
                stat_Valor_HP: result.stats[0].base_stat,
                stat_Attack: result.stats[1].stat.name,
                stat_Valor_Attack: result.stats[1].base_stat,
                stat_Defense: result.stats[2].stat.name,
                stat_Valor_Defense: result.stats[2].base_stat,
                stat_SpAttack: result.stats[3].stat.name,
                stat_Valor_SpAttack: result.stats[3].base_stat,
                stat_SpDefense: result.stats[4].stat.name,
                stat_Valor_SpDefense: result.stats[4].base_stat,
                stat_Speed: result.stats[5].stat.name,
                stat_Valor_Speed: result.stats[5].base_stat,
            }
            console.log(result)
            allPokemons.push(pokein)
        }
    } catch (error) {
        console.log(error);
    }
}



//console.log(allPokemons)

const drawPokemons = (allPokemons) => {
    ol$$.innerHTML = "";

    // console.log("funcion draw",characters);
    for (const pokemon of allPokemons) {



        poke = pokemon.name
        const mainDiv$$ = document.createElement('div')
        ol$$.appendChild(mainDiv$$)
        mainDiv$$.className = classCard


        const upperDiv$$ = document.createElement('div')
        mainDiv$$.appendChild(upperDiv$$)
        upperDiv$$.className = classUpperCard



        const idP$$ = document.createElement('p')
        upperDiv$$.appendChild(idP$$)
        idP$$.innerText = `ID: ${pokemon.id}`
        idP$$.className = classID

        const lowerDiv$$ = document.createElement('div')
        mainDiv$$.appendChild(lowerDiv$$)
        lowerDiv$$.className = classLowerCard

        const h2$$ = document.createElement('h2')
        lowerDiv$$.appendChild(h2$$)
        h2$$.innerHTML = pokemon.name
        h2$$.className = classTitle

        const img$$ = document.createElement('img')
        lowerDiv$$.appendChild(img$$)
        img$$.src = pokemon.image
        img$$.alt = `${pokemon.name} || ${pokemon.tipos}`
        img$$.className = classImage


        const p$$ = document.createElement('p')
        lowerDiv$$.appendChild(p$$)
        p$$.innerText = pokemon.tipos
        p$$.className = classSubtitle



        mainDiv$$.addEventListener('mouseover', () => {
            let value = p$$.textContent
            h2$$.style.color = "white"
            p$$.style.color = "white"
            idP$$.style.color = "white"
            if (value == `${normal}`) {
                mainDiv$$.style = `background: ${normalColor}`
            } else if (value == `${normal}, ${flying}`) {
                mainDiv$$.style = ` background: linear-gradient(45deg, ${normalColor} 50%, ${flyingColor} 50%)`
            } else if (value == `${normal}, ${fairy}`) {
                mainDiv$$.style = ` background: linear-gradient(45deg, ${normalColor} 50%, ${fairyColor} 50%)`
            } else if (value == `${fire}`) {
                mainDiv$$.style = `background: ${fireColor}`
            } else if (value == `${fire}, ${flying}`) {
                mainDiv$$.style = ` background: linear-gradient(45deg, ${fireColor} 50%, ${flyingColor} 50%)`
            } else if (value == `${water}`) {
                mainDiv$$.style = `background: ${waterColor}`
            } else if (value == `${water}, ${fighting}`) {
                mainDiv$$.style = ` background: linear-gradient(45deg, ${waterColor} 50%, ${fightingColor} 50%)`
            } else if (value == `${water}, ${psychic}`) {
                mainDiv$$.style = ` background: linear-gradient(45deg, ${waterColor} 50%, ${psychicColor} 50%)`
            } else if (value == `${water}, ${poison}`) {
                mainDiv$$.style = ` background: linear-gradient(45deg, ${waterColor} 50%, ${poisonColor} 50%)`
            } else if (value == `${water}, ${ice}`) {
                mainDiv$$.style = ` background: linear-gradient(45deg, ${waterColor} 50%, ${iceColor} 50%)`
            } else if (value == `${electric}`) {
                mainDiv$$.style = `background: ${electricColor}`
            } else if (value == `${electric}, ${steel}`) {
                mainDiv$$.style = ` background: linear-gradient(45deg, ${electricColor} 50%, ${steelColor} 50%)`
            } else if (value == `${electric}, ${flying}`) {
                mainDiv$$.style = ` background: linear-gradient(45deg, ${electricColor} 50%, ${flyingColor} 50%)`
            } else if (value == `${grass}`) {
                mainDiv$$.style = `background: ${grassColor}`
            } else if (value == `${grass}, ${poison}`) {
                mainDiv$$.style = ` background: linear-gradient(45deg, ${grassColor} 50%, ${poisonColor} 50%)`
            } else if (value == `${grass}, ${psychic}`) {
                mainDiv$$.style = ` background: linear-gradient(45deg, ${grassColor} 50%, ${psychicColor} 50%)`
            } else if (value == `${ice}, ${psychic}`) {
                mainDiv$$.style = ` background: linear-gradient(45deg, ${iceColor} 50%, ${psychicColor} 50%)`
            } else if (value == `${ice}, ${flying}`) {
                mainDiv$$.style = ` background: linear-gradient(45deg, ${iceColor} 50%, ${flyingColor} 50%)`
            } else if (value == `${fighting}`) {
                mainDiv$$.style = ` background:  ${fightingColor}`
            } else if (value == `${poison}`) {
                mainDiv$$.style = ` background:  ${poisonColor}`
            } else if (value == `${poison}, ${ground}`) {
                mainDiv$$.style = ` background: linear-gradient(45deg, ${poisonColor} 50%, ${groundColor} 50%)`
            } else if (value == `${poison}, ${flying}`) {
                mainDiv$$.style = ` background: linear-gradient(45deg, ${poisonColor} 50%, ${flyingColor} 50%)`
            } else if (value == `${ground}`) {
                mainDiv$$.style = `background: ${groundColor}`
            } else if (value == `${ground}, ${rock}`) {
                mainDiv$$.style = ` background: linear-gradient(45deg, ${groundColor} 50%, ${rockColor} 50%)`
            } else if (value == `${psychic}`) {
                mainDiv$$.style = `background: ${psychicColor}`
            } else if (value == `${psychic}, ${fairy}`) {
                mainDiv$$.style = ` background: linear-gradient(45deg, ${psychicColor} 50%, ${fairyColor} 50%)`
            } else if (value == `${bug}`) {
                mainDiv$$.style = `background: ${bugColor}`
            } else if (value == `${bug}, ${poison}`) {
                mainDiv$$.style = ` background: linear-gradient(45deg, ${bugColor} 50%, ${poisonColor} 50%)`
            } else if (value == `${bug}, ${poison}`) {
                mainDiv$$.style = ` background: linear-gradient(45deg, ${bugColor} 50%, ${poisonColor} 50%)`
            } else if (value == `${bug}, ${flying}`) {
                mainDiv$$.style = ` background: linear-gradient(45deg, ${bugColor} 50%, ${flyingColor} 50%)`
            } else if (value == `${bug}, ${grass}`) {
                mainDiv$$.style = ` background: linear-gradient(45deg, ${bugColor} 50%, ${grassColor} 50%)`
            } else if (value == `${rock}`) {
                mainDiv$$.style = `background: ${rockColor}`
            } else if (value == `${rock}, ${ground}`) {
                mainDiv$$.style = ` background: linear-gradient(45deg, ${bugColor} 50%, ${groundColor} 50%)`
            } else if (value == `${rock}, ${water}`) {
                mainDiv$$.style = ` background: linear-gradient(45deg, ${rockColor} 50%, ${waterColor} 50%)`
            } else if (value == `${rock}, ${flying}`) {
                mainDiv$$.style = ` background: linear-gradient(45deg, ${rockColor} 50%, ${fairyColor} 50%)`
            } else if (value == `${ghost}, ${poison}`) {
                mainDiv$$.style = ` background: linear-gradient(45deg, ${ghostColor} 50%, ${poisonColor} 50%)`
            } else if (value == `${dragon}`) {
                mainDiv$$.style = `background: ${dragonColor}`
            } else       
            if (allPokemons.name == "dagonite" || value == `${dragon}, ${flying}`) {
                console.log("ESPAÑA")
                hinoDeEspañita();
                mainDiv$$.style = ` background: linear-gradient(45deg, ${dragonColor} 50%, ${flyingColor} 50%)`
            } else if (value == `${dragon}, ${flying}`) {
                mainDiv$$.style = ` background: linear-gradient(45deg, ${dragonColor} 50%, ${flyingColor} 50%)`
            } else if (value == `${fairy}`) {
                mainDiv$$.style = `background: ${fairyColor}`
            }
            
            
      
        })


        mainDiv$$.addEventListener('click', () => {
            let value = idP$$.textContent
            let id = parseInt(value.slice(4))
            let index = id - 1;

            drawCardLeft(index, allPokemons)
           // drawCardRight(index, allPokemons)
            fillPokemonSelects( )
        })

        mainDiv$$.addEventListener('mouseout', () => {
            mainDiv$$.style.background = "white";
            mainDiv$$.style = `transition: background-color 1s`;
            h2$$.style.color = "black"
            p$$.style.color = "#666"
            idP$$.style.color = "#666"

        })
    }
}


function getID(value) {
    return value.slice(4)
}


const drawInput = (valorPasado) => {
    const input$$ = document.querySelector("input");
    input$$.addEventListener("input", () => {
        searchPokemonsByName(input$$.value, valorPasado);
    });
};



const searchPokemonsByName = (filtro, pokemonsSinFiltrar) => {

    let nuevoCoso = pokemonsSinFiltrar.filter((pokemon) => pokemon.name.toLowerCase().includes(filtro.toLowerCase()));
    console.log(nuevoCoso);
    drawPokemons(nuevoCoso)
};


const filterTypes = (valorPasado) => {
    let Element = document.getElementById("order");
    Element.addEventListener("change", function () {
        // Obtener el valor seleccionado
        var edValue = Element.value;
        // Imprimir el valor seleccionado en la consola
        console.log("Valor seleccionado: " + edValue);
        searchPokemonsByType(edValue, valorPasado)
        // Puedes realizar otras acciones basadas en el valor seleccionado aquí
    });
}


const drawCardLeft = (indexLeft, array) => {
    const divCartas$$ = document.querySelectorAll('.container-carta-inner')
    divCartas$$[0].innerHTML = "";
    const pokeStats = "poke-stats"
   

    const mainDiv$$ = document.createElement('div')
    divCartas$$[0].appendChild(mainDiv$$)
    mainDiv$$.className = classCard

    const upperDiv$$ = document.createElement('div')
    mainDiv$$.appendChild(upperDiv$$)
    upperDiv$$.className = classUpperCard

    const idP$$ = document.createElement('p')
    upperDiv$$.appendChild(idP$$)
    idP$$.innerText = `ID: ${array[indexLeft].id}`
    idP$$.className = classID

    const lowerDiv$$ = document.createElement('div')
    mainDiv$$.appendChild(lowerDiv$$)
    lowerDiv$$.className = classLowerCard

    const h2$$ = document.createElement('h2')
    lowerDiv$$.appendChild(h2$$)
    h2$$.innerHTML = array[indexLeft].name
    h2$$.className = classTitle

    const img$$ = document.createElement('img')
    lowerDiv$$.appendChild(img$$)
    img$$.src = array[indexLeft].image
    img$$.alt = `${array[indexLeft].name} || ${array[indexLeft].tipos}`
    img$$.className = classImage


    const p$$ = document.createElement('p')
    lowerDiv$$.appendChild(p$$)
    p$$.innerText = array[indexLeft].tipos
    p$$.className = classSubtitle

    const divStatDefensa$$ = document.createElement('div')
    divCartas$$[0].appendChild(divStatDefensa$$)
    divStatDefensa$$.className = pokeStats
    divStatDefensa$$.innerHTML = `
           <span> ${array[indexLeft].stat_Defense}</span>
           <span>${array[indexLeft].stat_Valor_Defense}</span>
       `
    const divStatAtaque$$ = document.createElement('div')
    divCartas$$[0].appendChild(divStatAtaque$$)
    divStatAtaque$$.className = pokeStats
    divStatAtaque$$.innerHTML = `
           <span> ${array[indexLeft].stat_Attack}</span>
           <span>${array[indexLeft].stat_Valor_Attack}</span>
       `

    const divStatSpDefensa$$ = document.createElement('div')
    divCartas$$[0].appendChild(divStatSpDefensa$$)
    divStatSpDefensa$$.className = pokeStats
    divStatSpDefensa$$.innerHTML = `
           <span> ${array[indexLeft].stat_SpDefense}</span>
           <span>${array[indexLeft].stat_Valor_SpDefense}</span>
       `


    const divStatSpAtaque$$ = document.createElement('div')
    divCartas$$[0].appendChild(divStatSpAtaque$$)
    divStatSpAtaque$$.className = pokeStats
    divStatSpAtaque$$.innerHTML = `
           <span> ${array[indexLeft].stat_SpAttack}</span>
           <span>${array[indexLeft].stat_Valor_SpAttack}</span>
       `

    const divStatSpeed$$ = document.createElement('div')
    divCartas$$[0].appendChild(divStatSpeed$$)
    divStatSpeed$$.className = pokeStats
    divStatSpeed$$.innerHTML = `
           <span> ${array[indexLeft].stat_Speed}</span>
           <span>${array[indexLeft].stat_Valor_SpDefense}</span>
       `
    fillPokemonSelects()
    return indexLeft;
}


const drawCardRight= (indexRight, array) => {
    const divCartas$$ = document.querySelectorAll('.container-carta-inner')
    divCartas$$[1].innerHTML = "";
    const pokeStats = "poke-stats"





        const mainDiv$$ = document.createElement('div')
        divCartas$$[1].appendChild(mainDiv$$)
        mainDiv$$.className = classCard

        const upperDiv$$ = document.createElement('div')
        mainDiv$$.appendChild(upperDiv$$)
        upperDiv$$.className = classUpperCard

        const idP$$ = document.createElement('p')
        upperDiv$$.appendChild(idP$$)
        idP$$.innerText = `ID: ${array[indexRight].id}`
        idP$$.className = classID

        const lowerDiv$$ = document.createElement('div')
        mainDiv$$.appendChild(lowerDiv$$)
        lowerDiv$$.className = classLowerCard

        const h2$$ = document.createElement('h2')
        lowerDiv$$.appendChild(h2$$)
        h2$$.innerHTML = array[indexRight].name
        h2$$.className = classTitle

        const img$$ = document.createElement('img')
        lowerDiv$$.appendChild(img$$)
        img$$.src = array[indexRight].image
        img$$.alt = `${array[indexRight].name} || ${array[indexRight].tipos}`
        img$$.className = classImage


        const p$$ = document.createElement('p')
        lowerDiv$$.appendChild(p$$)
        p$$.innerText = array[indexRight].tipos
        p$$.className = classSubtitle

        const divStatDefensa$$ = document.createElement('div')
        divCartas$$[1].appendChild(divStatDefensa$$)
        divStatDefensa$$.className = pokeStats
        divStatDefensa$$.innerHTML = `
           <span> ${array[indexRight].stat_Defense}</span>
           <span>${array[indexRight].stat_Valor_Defense}</span>
       `
        const divStatAtaque$$ = document.createElement('div')
        divCartas$$[1].appendChild(divStatAtaque$$)
        divStatAtaque$$.className = pokeStats
        divStatAtaque$$.innerHTML = `
           <span> ${array[indexRight].stat_Attack}</span>
           <span>${array[indexRight].stat_Valor_Attack}</span>
       `

        const divStatSpDefensa$$ = document.createElement('div')
        divCartas$$[1].appendChild(divStatSpDefensa$$)
        divStatSpDefensa$$.className = pokeStats
        divStatSpDefensa$$.innerHTML = `
           <span> ${array[indexRight].stat_SpDefense}</span>
           <span>${array[indexRight].stat_Valor_SpDefense}</span>
       `


        const divStatSpAtaque$$ = document.createElement('div')
        divCartas$$[1].appendChild(divStatSpAtaque$$)
        divStatSpAtaque$$.className = pokeStats
        divStatSpAtaque$$.innerHTML = `
           <span> ${array[indexRight].stat_SpAttack}</span>
           <span>${array[indexRight].stat_Valor_SpAttack}</span>
       `

        const divStatSpeed$$ = document.createElement('div')
        divCartas$$[1].appendChild(divStatSpeed$$)
        divStatSpeed$$.className = pokeStats
        divStatSpeed$$.innerHTML = `
           <span> ${array[indexRight].stat_Speed}</span>
           <span>${array[indexRight].stat_Valor_SpDefense}</span>
       `
    fillPokemonSelects()
    return indexRight;
}

const searchPokemonsByType = (filtro, pokemonsSinFiltrar) => {

    let typePokemons = pokemonsSinFiltrar.filter((pokemon) => pokemon.tipos.toLowerCase().includes(filtro.toLowerCase()));
    console.log(typePokemons);
    drawPokemons(typePokemons)
};


const reorderOptions = (valorPasado) => {
    let Element = document.getElementById("reorder");
    Element.addEventListener("change", function () {
        // Obtener el valor seleccionado
        var edValue = Element.value;
        // Imprimir el valor seleccionado en la consola
        console.log("Valor seleccionado: " + edValue);
        reorderPokemons(edValue, valorPasado)
        // Puedes realizar otras acciones basadas en el valor seleccionado aquí
    });
}


const reorderPokemons = (filtro, pokemonsSinFiltrar) => {
    if (filtro == 'amas') {

        pokemonsSinFiltrar.sort(function (a, b) {

            return a.id - b.id;
        });

    } else if (filtro == 'amenos') {
        pokemonsSinFiltrar.sort(function (a, b) {

            return b.id - a.id;
        });
    } else if (filtro == ('az')) {
        pokemonsSinFiltrar.sort(function (a, b) {

            let nombreA = a.name;
            let nombreB = b.name;

            if (nombreA < nombreB) return -1;
            if (nombreA > nombreB) return 1;

            return 0;
        });
    } else if (filtro == ('za')) {
        pokemonsSinFiltrar.sort(function (a, b) {

            let nombreA = a.name;
            let nombreB = b.name;

            if (nombreB < nombreA) return -1;
            if (nombreB > nombreA) return 1;

            return 0;
        });
    } else {

    }
    console.log(pokemonsSinFiltrar);
    drawPokemons(pokemonsSinFiltrar)
};

const init = async () => {
    const pokemons = await getPokemons();
    drawPokemons(allPokemons)
    drawInput(allPokemons)
    filterTypes(allPokemons)
    reorderOptions(allPokemons)  
    drawCardLeft(0, allPokemons)
    drawCardRight(1,allPokemons)
    selectPokemonLeft(allPokemons)
    selectPokemonRight(allPokemons)


}


init();


const selectPokemonLeft = (array) =>{
    let selector = document.querySelector("#select-poke");
    selector.addEventListener("change", function () {
        var edValue = selector.value - 1;
       // console.log("Valor seleccionado: " + edValue);
        drawCardLeft(edValue, array)
    });
}

const selectPokemonRight= (array) =>{
    let selector = document.querySelector("#select-poke2");
    selector.addEventListener("change", function () {
        var edValue = selector.value - 1;
     //   console.log("Valor seleccionado: " + edValue);
        drawCardRight(edValue, array)
    });
}




function fillPokemonSelects() {
    const pokemonSelect1 = document.querySelector('#select-poke');
    const pokemonSelect2 = document.querySelector('#select-poke2');
    for (const pokemon of allPokemons) {
        const option1 = document.createElement('option');
        option1.value = pokemon.id;
        option1.textContent = pokemon.name;
        const option2 = document.createElement('option');
        option2.value = pokemon.id;
        option2.textContent = pokemon.name;
        pokemonSelect1.appendChild(option1);
        pokemonSelect2.appendChild(option2);
    }
}



function hinoDeEspañita(){

        // Crear una instancia de la clase Audio y proporcionar la ruta del archivo de audio
        let audio = new Audio('img/Himno-Espana-Track.mp3');
        console.log("HOLAA");
        // Reproducir el audio
        audio.play();

}