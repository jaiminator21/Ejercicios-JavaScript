//Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.

const countries = [{ title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' }, { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' }, { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' }, { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' }, { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }];

for (let i of countries) {
  const div = document.createElement('div');
  const h4 = document.createElement('h4');
  const img = document.createElement('img');
  const button2 = document.createElement('button')

  document.body.append(div);
  div.appendChild(h4);
  div.appendChild(img);
  div.appendChild(button2);


  h4.innerHTML = i.title;
  img.src = i.imgUrl;
  button2.textContent = 'Click me!';

  button2.addEventListener('click', ()=>{
    button2.parentNode.remove();
  })

}



const button = document.querySelector('button');

const buttonDiv = document.querySelector('.boton');



button.addEventListener('click', function () {
  let divs = document.querySelectorAll('div')
  const lastDiv = divs[divs.length - 1];
  lastDiv.remove();
})


buttonDiv.addEventListener('click', function () {
  const parent = button.parentNode;
  const parentId = parent.id;
  console.log("asda");

})