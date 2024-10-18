// funciones para manejar distintas peticiones
const ToDoList = require("../models/todolist");



async function getToDoList(req, resp) {
    
    try {
        
        const listaTareas = await ToDoList.find();
        
        
        return resp.status(200).send(listaTareas);

    } catch (error) {
        console.log(error);
        resp.status(500).send("error al obtener tareas", error);
        
    }
}


async function createToDo(req, resp){


    const todoNew = req.body;

    const todo = new ToDoList(todoNew);
    await todo.save();
    return resp.send("creaste una tarea");
    

}

// get tarea por ID
async function getToDoById(req, resp) {
    
    try {

        const { id } = req.params;


        const tarea = await ToDoList.findById(id);

        if (!tarea) {
            return resp.status(404).send("la Tarea NO fue encontrada");
        }

        tarea.title = undefined;

        return resp.status(200).send(tarea);

    } catch (error) {
        console.log(error)
        return resp.status(500).send("error al obtener el tarea", error);
    }
}

// borrar tarea

async function borrarToDo(req, resp) {
    
    try {
        

        const { id } = req.params;

        const borrarToDo = await ToDoList.findByIdAndDelete(id)

        
        return resp.status(200).send({message: "la tarea fue borrada correctamente", borrarToDo});

    } catch (error) {
        console.log(error);
        return resp.status(500).send("error al borrar tarea", error);
    }

}


// update tarea
async function updateToDo(req, resp) {
    
    try {

        const {id} = req.params;
        

    const todo = await ToDoList.findByIdAndUpdate(id, req.body, {new: true});


    return resp.status(200).send({
        ok: true,
        message: "Tarea actualizada correctamente",
        todo
    })

        

    } catch (error) {
        console.log(error);
        return error;
    }
}



module.exports = { 
    getToDoList,
    createToDo,
    getToDoById,
    borrarToDo,
    updateToDo
}


