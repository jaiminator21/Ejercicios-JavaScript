/* En base a la api de Breaking Bad (https://breakingbadapi.com/), vamos a desarrollar una página dinámicamente en la que visualizar una galería con las imagenes y los nombres de los personajes de la serie. 
Para ellos es necesario usar el endpoint 'https://breakingbadapi.com/api/characters'.

Si te fijas en la respuesta de la api, la imagen está en la propiedad 'img' y el título en la propiedad 'name'. */
const getUrlApi = async ()=>{
    const urlCharacters = 'https://breakingbadapi.com/api/characters'
    const respuestaApi = await fetch(urlCharacters)
    const result = await respuestaApi.json
    console.log(result)
}




const init= ()=>{

    const coso1 = getUrlApi()

}


init();