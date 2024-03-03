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
  const com = req.query.comuinidad;
 
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

app.get('/cities', (res, req)=>{
    const ciudades = [
        {
          nombre: "Madrid",
          comunidad: "Comunidad de Madrid",
          habitantes: 6000000,
          capital: "Avila",
        },
        {
          nombre: "Barcelona",
          comunidad: "Cataluña",
          habitantes: 3000000,
          capital: "Avila",
        },
        {
          nombre: "Sevilla",
          comunidad: "Andalucía",
          habitantes: 700000,
          capital: "Avila",
        },
        {
          nombre: "Valencia",
          comunidad: "Comunidad Valenciana",
          habitantes: 300000,
          capital: "Avila",
        },
        {
          nombre: "Avila",
          comunidad: "Castilla y Leon",
          habitantes: 600000,
          capital: "Avila",
        },
      ];
     
      const nombre = req.query.nombre;
      const data = req.query.data;
      ciudades.forEach((ciudad) => {
        if (ciudad.nombre.toLowerCase() == nombre) {
          if (data == "comunidad") {
            res.send(
              `La ciudad de ${ciudad.nombre} esta en la comunidad de ${ciudad.comunidad}`
            );
          } else if (data == "habitantes") {
            res.send(
              `La ciudad de ${ciudad.nombre} tiene  ${ciudad.habitantes} habitantes`
            );
          } else {
            res.send(`no existe el parametro ${data}`);
          }
        }
      });
     
      res.send("La ciudad no esta en la lista");
})


 


// MANEJO ERRORES
 
// ARRANCAR LA APP
app.listen(PORT, () => {
  console.log(`La aplicación se ha inicializado en el puerto: ${PORT}`);
});
 



