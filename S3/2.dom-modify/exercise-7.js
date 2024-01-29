//Basandote en el siguiente html, elimina todos los nodos que tengan la clase .fn-remove-me

const remove = document.querySelectorAll(".fn-remove-me");

for(let i of remove){
    i.remove();
}

