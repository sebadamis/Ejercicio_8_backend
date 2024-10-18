const express = require("express");
const app = express();
// habilita el metodo json para leer los datos del BODY en la request


const userRoutes = require("./routes/todo.routes");

app.use(express.json());




// const User = require("./models/users.model");



// app.delete("/users", (req, resp)=>{
//     return resp.send("usuarios borrado");
// })

app.use([ userRoutes ]);

module.exports = app;