const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// definir esquema de nuestro modelo

const ToDoListSchema = new Schema({
    title: { 
        type: String, 
        required: true, 
    },
    description:{
        type: String,
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("ToDoList", ToDoListSchema);