require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "hbs");

app.use(express.static("public"));

hbs.registerPartials(__dirname + "/views/partials", function (err) {});

// Ruta básica

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Alejandro Rodriguez",
    titulo: "Curso de node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Alejandro Rodriguez",
    titulo: "Curso de node",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Alejandro Rodriguez",
    titulo: "Curso de node",
  });
});

// Ruta básica
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
