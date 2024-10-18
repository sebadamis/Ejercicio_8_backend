require("dotenv").config();

const app = require("./app");



const PORT = 3000;
const mongoose = require("mongoose");

const DATABASE_URL = process.env.MONGO_URI;

const reset = "\x1b[0m";

app.get("/todolists", (req, resp)=> {
    return resp.send("lista de tareas");
})

app.post("/todolists", (req, resp)=> {
    return resp.send("creando tareas");
})



mongoose.connect(DATABASE_URL).then(()=> {
    
    console.log(`\x1b[35m coneccion a la DB exitosa ${reset}`);

    app.listen(PORT, ()=> {
        console.log(`\x1b[42m nuestro servidor esta corriendo en PUERTO ${PORT} ${reset}`);
    })

}).catch(error => console.log("error al conectar a la DB", error));

