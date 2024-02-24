// IMPORTAR MODULOS Y VARIABLES
const express = require("express");
 
const PORT = 3001;
 
// CONFIGURACIÓN DE LA APP
const app = express();
 
// ENDPOINTS
 
//localhost:<PORT>
app.get("/", (request, response) => {
  response.send("esta es mi primera app en node");
});
 
//localhost:<PORT>/persona
app.get("/persona", (request, response) => {
  response.json({
    nombre: "Juan",
    apellidos: "González Sánchez",
  });
});
 
app.get("/params", (request, response) => {
  const params = request.query;
  response.send(params);
});
 
app.get("/ciudad", (req, res) => {
  const name = req.query.name; // La variable que se pone al pedirle una peticion a la url http://localhost:3001/ciudad  seguido de ?name=barcelona ? la interogación se pone cuando vas a 
  // hacer una pasarle un parametro seguido del nombre de la variable creado anteriormente. En este caso es name y despues se le iguala a un valor. En este caso barcelona
  // Esta variable es name porque se declara al igualar name de la siguente forma req.query."name"
  ciudades = {
    madrid: "6000000",
    barcelona: "3000000",
    sevilla: "700000",
    avila: "60000",
  };
 
  //nos han pasado un nombre?
  if (!name) {
    res.send("falta el nombre");
  }
  // el nombre que nos han pasado está en la "base de datos"?
  if (!ciudades.hasOwnProperty(name)) { //Comprueba si name tiene una propiedad que tenga ciudades
    res.send("la ciudad no está en la lista");
  }
 
  res.send(`La poblacion de ${name} es ${ciudades[name]}`);
});




 
// MANEJO ERRORES
 
// ARRANCAR LA APP
app.listen(PORT, () => {
  console.log(`La aplicación se ha inicializado en el puerto: ${PORT}`);
});
 