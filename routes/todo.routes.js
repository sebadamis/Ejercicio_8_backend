const express = require("express");
const router = express.Router();
const todoControllers = require("../controllers/todo.controllers");




router.get("/todolists", todoControllers.getToDoList);

router.post("/todolists" , todoControllers.createToDo);


// get tarea por ID
router.get("/todolists/:id", todoControllers.getToDoById);


// borrar tarea
router.delete("/todolists/:id", todoControllers.borrarToDo);

// update tarea por id
router.put("/todolists/:id", todoControllers.updateToDo);





module.exports = router;