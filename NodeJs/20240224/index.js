// IMPORTAR MODULOS Y VARIABLES
const express = require("express");
const { alumnos } = require("./alumnos");
 
for (let alumno of alumnos) {
  if (alumno.id == 2) {
    console.log(alumno.asignaturas);
  }
}
 
const PORT = 3000;
 
// CONFIGURACIÓN DE LA APP
const app = express();
 
// ENDPOINTS
 
//localhost:<PORT>
app.get("/", (request, response) => {
  response.send("esta es mi primera app en node");
});
 
// ver todos los alumnos
app.get("/alumnos", (req, res) => {
  res.json(alumnos);
});
 
// ver un alumno por id
app.get("/alumno", (req, res) => {
  if (req.query.id) {
    for (let alumno of alumnos) {
      if (alumno.id == req.query.id) {
        res.json(alumno);
      }
    }
  }
  res.send("no existe ese alumno");
});
//
// ver todos los examenes de una asignatura de un alumno
 
app.get("/alumno/asignaturas", (req, res) => {
  if (req.query.id) {
    for (let alumno of alumnos) {
      if (alumno.id == req.query.id) {
        res.json(alumno.asignaturas);
      }
    }
  }
  res.send("no existe ese alumno");
});
 
// ver los examenes de una asignatura de un alumno
app.get("/alumno/asignatura", (req, res) => {
  const { id, asignatura } = req.query;
 
  if (id && asignatura) {
    for (let alumno of alumnos) {
      if (alumno.id == id) {
        res.json(alumno.asignaturas[asignatura]);
      }
    }
  }
  res.send("no existe ese alumno o la asignatura");
});
 
app.get("/alumno/asignatura/trimestre", (req, res) => {
  const { id, asignatura, trimestre } = req.query;
 
  if (id && asignatura && trimestre) {
    for (let alumno of alumnos) {
      if (alumno.id == id) {
        res.json(alumno.asignaturas[asignatura][trimestre]);
      }
    }
  }
  res.send("no existe ese alumno o la asignatura");
});
 
// MANEJO ERRORES
 
// ARRANCAR LA APP
app.listen(PORT, () => {
  console.log(`La aplicación se ha inicializado en el puerto: ${PORT}`);
});