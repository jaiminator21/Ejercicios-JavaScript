//Dado el siguiente javascript y html. 
//Añade la funcionalidad necesaria usando fetch() para hacer una consulta a la api cuando se haga click
//en el botón, pasando como parametro de la api, el valor del input.



const baseUrl = 'https://api.nationalize.io?name=';

const getUrlInfo = async () => {
    const resultados = await fetch(baseUrl);
    console.log(resultados);
}

const button = document.querySelector('button')


button.addEventListener('click', ()=>{
    getUrlInfo()
})