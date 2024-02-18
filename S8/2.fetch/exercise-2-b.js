/* En base al ejercicio anterior. Crea dinamicamente un elemento <p> por cada petición a la api 
que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.

EJ: El nombre Abel tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ. */

const button = document.querySelector('button')
const input = document.querySelector('input')


const getUrlInfo = async (valor) => {

    const baseUrl =`https://api.nationalize.io?name=${valor}`;
    const resultados = await fetch(baseUrl);
    const result = await resultados.json();
    const {country} = result;
    console.log(country);

    for (const q of country) {
        const p = document.createElement('p')
        p.innerText = `El nombre ${result.name} tiene probabilidad de ${q.probability*100} ser de ${q.country_id}`
        document.body.append(p)
    }
  
}


button.addEventListener('click', ()=>{
    let value = input.value;
    


    getUrlInfo(value)
})







