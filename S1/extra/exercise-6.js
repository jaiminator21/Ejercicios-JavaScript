//Usa un bucle para recorrer el array de products (`movies`) y añade al array `goodProducts` los que tengan más de 20 ventas (`sellCount`) y al array `badProducts` los que tengan menos.

const goodProducts = [];
const badProducts = [];
const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];


for(let i = 0; i<products.length; i++){
    let products2 = products[i];
    if(products2.sellCount <=20){
        badProducts.push(products2.name)
    }else{
        goodProducts.push(products2.name)
    }
}


console.log(badProducts)
console.log(goodProducts)