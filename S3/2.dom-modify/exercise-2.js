/**Inserta dinamicamente en un html un div que contenga una p con javascript. */
const div = document.createElement('div');
const p = document.createElement('p');
document.body.append(div);
div.appendChild(p);


p.textContent = "P";