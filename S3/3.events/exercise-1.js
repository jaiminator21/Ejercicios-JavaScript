//Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

const Button = document.querySelector("#btnToClick");


Button.addEventListener('click', () =>{
    const nuevo = document.createElement("h1");
    document.body.append(nuevo)
    nuevo.innerHTML="Meto un h1";
    console.log(event)

})