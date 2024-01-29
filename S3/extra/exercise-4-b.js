//Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.

const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

for(let i of countries){
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    const img = document.createElement('img');
    document.body.append(div);
    div.appendChild(h4);
    div.appendChild(img);
    h4.innerHTML = i.title;
    img.src = i.imgUrl;
}



const button = document.querySelector('button');


button.addEventListener('click', function(){
  let divs = document.querySelectorAll('div')
  console.log(divs.length);
  const lastDiv = divs[divs.length-1];
  lastDiv.remove();

})