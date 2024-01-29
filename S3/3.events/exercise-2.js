// Basandote en el siguiente html, añade un evento 'focus' que ejecute un console.log con el valor del input.


let inputField = document.querySelector('[type="text"]');





inputField.addEventListener('focus', () => {
    console.log(inputField.value);
})