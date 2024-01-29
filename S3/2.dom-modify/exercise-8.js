// Basandote en el siguiente html,inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.


const div = document.querySelector("div:nth-child(2)")

const p = document.createElement("p")
p.textContent = "Voy en medio";
div.appendChild(p)
//document.body.insertBefore(p,div)
document.body.insertAdjacentElement(p,div)

