const express = require("express");

const router = express.Router();

const {createNewToDo, updateTodo, getAllTodos, deleteTodo} = require("../controller/controller");


router.post("/addToDo", createNewToDo);
router.post("/updateToDo",updateTodo);
router.get("/",getAllTodos );
router.post("/deleteToDo", deleteTodo);



module.exports = router;