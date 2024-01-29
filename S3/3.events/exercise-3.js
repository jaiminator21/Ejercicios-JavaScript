// Basandote en el siguiente html, añade un evento 'input' que ejecute un console.log con el valor del input.

let inputField = document.querySelector('[type="text"]');

inputField.addEventListener('input', () => {
    console.log(inputField.value);
})