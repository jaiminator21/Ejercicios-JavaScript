//Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para hacer un 
//.fetch() y recibir los datos que devuelve. Imprimelo mediante un console.log(). 
//Para ello, es necesario que crees un .html y un .js.

const url = 'https://api.agify.io?name=michael';
const getUrl = async () => {
    const resutladosApi = await fetch(url)
    console.log(resutladosApi)
    return resutladosApi;

}



const init = async () => {
    const coso1 = await getUrl()
}


init();