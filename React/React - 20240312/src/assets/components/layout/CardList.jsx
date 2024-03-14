import React from 'react'
import Card from './Card'

function CardList() {

    const luke = ` {
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male"
    }`
    const beru = `
{
        "name": "Beru Whitesun lars",
        "height": "165",
        "mass": "75",
        "hair_color": "brown",
        "skin_color": "light",
        "eye_color": "blue",
        "birth_year": "47BBY",
        "gender": "female"
    }`
    const chewbacca = `{
        "name": "Chewbacca",
        "height": "228",
        "mass": "112",
        "hair_color": "brown",
        "skin_color": "unknown",
        "eye_color": "blue",
        "birth_year": "200BBY",
        "gender": "male"
    }`
    const IG_88 = `{
        "name": "IG-88",
        "height": "200",
        "mass": "140",
        "hair_color": "none",
        "skin_color": "metal",
        "eye_color": "red",
        "birth_year": "15BBY",
        "gender": "none",
        "homeworld": "https://swapi.info/api/planets/28",
        "films": [
            "https://swapi.info/api/films/2"
        ],
        "species": [
            "https://swapi.info/api/species/2"
        ],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-15T12:51:10.076000Z",
        "edited": "2014-12-20T21:17:50.351000Z",
        "url": "https://swapi.info/api/people/23"
    }`
    const dataLuke = JSON.parse(luke);
    const dataBeru = JSON.parse(beru);
    const dataChewbacca = JSON.parse(chewbacca)
    const dataIG_88 = JSON.parse(IG_88)
    console.log(dataLuke, dataBeru, dataChewbacca)
    return (
        <div className='list-char'>
            <Card data={dataLuke} image={'/img/luke.png'} />
            <Card data={dataBeru} image={'/img/beru.png'} />
            <Card data={dataChewbacca} image={'/img/chewbacca.png'} />
            <Card data={dataIG_88} image={'/img/IG88.png'} />
        </div>
    )
}

export default CardList