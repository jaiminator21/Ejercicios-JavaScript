/*Basandote en el siguiente html y javascript,inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
*/



const div = document.querySelectorAll(".fn-insert-here");
for(let i of div){
    const p = document.createElement("p");
    i.appendChild(p)
    p.textContent = "Voy dentro!";
}