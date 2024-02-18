/* De nuevo vamos a usar JSON SERVER para simular nuestra api en local. Ejecuta ``json-server --watch exercise-3.json`` y obtendremos de la url `http://localhost:3000` los datos del ejercicio.

En este caso tenemos 2 endpoints, o lo que es lo mismo, dos urls a las que llamar para recibir los datos.

El endpoint `http://localhost:3000/orders` nos devolverá una lista de pedidos de la tienda Mari & Juan y el endpoint `http://localhost:3000/products` que nos devuelve una lista de productos.

La intención es pintar todos los pedidos ordenados por fecha (ultimos pedidos al principio) y en los que pongamos tanto los productos que contiene el pedido como la cantidad pedida de cada uno de los productos.

Si os fijáis, en el endpoint de los pedidos no tenemos la información del producto, si no su id y cantidad pedida. 

Para obtener el nombre de los productos tendremos que hacer peticiones al endpoint de productos pasando el id del producto, por ejemplo ``http://localhost:3000/products/2``. 
De esta forma podremos obtener ya toda la información y pintarla en el html. */


const urlOrders = `http://localhost:3000/orders`
const urlProducts = `http://localhost:3000/products`

let arrayOrders = []

const div = document.querySelector('div')

const getAPIUrl = async () => {
    try {
        const respuestaOrders = await fetch(urlOrders)
        const ordersRespons = await respuestaOrders.json()
        ordersRespons.sort((a, b) => new Date(a.date) - new Date(b.date));

        const respuestaProductos = await fetch(urlProducts)
        const productsRespones = await respuestaProductos.json()
        console.log(productsRespones);
        let arrayProductId = []
        for (const i in ordersRespons) {
    
            let productos = ordersRespons[i].products
            let id = 0
            const h1 = document.createElement('p')
            div.appendChild(h1)
            

            h1.innerText = `Pedido número ${parseInt(i)+1} : ID ${ordersRespons[i].id} : realizado el ${ordersRespons[i].date} contienen los siguientes elementos`
            for (const j of ordersRespons[i].products) {
                const il = document.createElement('il')
                div.appendChild(il)
                il.innerText = `  producto ${j.productId} : total ${j.quantity}`
                for (const k of productsRespones) {
                    if(j.productId == k.id)
                    il.innerText = `[ID:  ${j.productId} || Producto: ${k.name}  || Total:  ${j.quantity}]  `
                }
            }            
        }

       // console.log(arrayProductId);
        pintar(arrayOrders)

    } catch (error) {
        console.log(error);
    }
}


function pintar(array) {

    let listaPedidos  = []
    for (i of array) {
        const date = document.createElement("h1")
        date.innerText = i.fecha
        div.appendChild(date)
     
        const il = document.createElement('il')
        date.appendChild(il)
        il.innerText = i.pedido
    }


}


getAPIUrl()