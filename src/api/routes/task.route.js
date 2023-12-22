// /src/routes/task.route.js

const express = require("express");
const router = express.Router();
const todoList = require("../controllers/task.controller");

// show all todos
router.get("/api/tasks", todoList.list_all_tasks);

// create a todo
router.post("/api/tasks", todoList.create_a_task);

// read a single task
router.get("/api/tasks/:taskId", todoList.read_a_task);

// update a single task
router.put("/api/tasks/:taskId", todoList.update_a_task);

// delete a single task
router.delete("/api/tasks/:taskId", todoList.delete_a_task);

module.exports = router;
