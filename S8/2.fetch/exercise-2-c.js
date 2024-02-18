/* En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno de los p 
que hayas insertado y que si el usuario hace click en este botón eliminemos el parrafo asociado. */

const button = document.querySelector('button')
const input = document.querySelector('input')

const div = document.createElement('div')
document.body.append(div)

const getUrlInfo = async (valor) => {
div.innerHTML = ""
    const baseUrl =`https://api.nationalize.io?name=${valor}`;
    const resultados = await fetch(baseUrl);
    const result = await resultados.json();
    const {country} = result;
    console.log(country);

    for (const q of country) {
    
        const p = document.createElement('p')
        p.innerText = `El nombre ${result.name} tiene probabilidad de ${q.probability*100} ser de ${q.country_id}`
        div.appendChild(p)
        const borrar = document.createElement('button')
        borrar.innerText = 'Borrar'
        div.appendChild(borrar)

        borrar.addEventListener('click', ()=>{
            borrar.remove()
            p.remove()
        })


    }
  
}


button.addEventListener('click', ()=>{
    let value = input.value;
    


    getUrlInfo(value)
})



