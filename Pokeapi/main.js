const ol$$ = document.getElementById('pokedex')
const allPokemons = [];
const classCard = "card"
const classUpperCard = "card-upper"
const classLowerCard = "card-lower"
const classTitle = "card-title"
const classSubtitle = "card-subtitle"
const classImage = "card-image"
const classID = "card-id"


const getPokemons = async () => {
    try {
        for (let i = 1; i <= 150; i++) {
            const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}/`
            const response = await fetch(pokemonUrl);
            const result = await response.json();

            const pokein = {
                id: result.id,
                name: result.name,
                image: result.sprites.other["official-artwork"].front_shiny,
                //image: result.sprites.other["showdown"].front_shiny,
                tipos: result.types.map((type) => type.type.name).join(', '),
            }
            console.log(result)
            allPokemons.push(pokein)
        }
    } catch (error) {
        console.log(error);
    }
}





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
    }
}




const hoverAnim = ('hover', () => {
    const card = document.querySelector('.card')

    card.addEventListener('hover', () => {
        console.log(event)
    })
})


const init = async () => {
    const pokemons = await getPokemons();
    drawPokemons(allPokemons)
    hoverAnim()






    //next(pokemons)
}


init();