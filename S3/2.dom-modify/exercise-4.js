// Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const div = document.createElement('div');

document.body.append(div);


for (let i = 0; i < 6; i++) {
    const p = document.createElement('p');
    div.appendChild(p);
    p.textContent= "Soy dinámico!"
}