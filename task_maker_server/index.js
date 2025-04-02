const express = require("express");
const cors = require("cors");
const pool = require("./db/db.js"); 
const app = express();
app.use(express.json());
app.use(cors());



// Import local Lambda handlers
const { handler: addTaskHandler } = require("./lambda/addTask");
const { handler: deleteTaskHandler } = require("./lambda/deleteTask");

// GET all tasks
app.get("/tasks", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM tasks");
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: "Error fetching tasks" });
    }
});

// POST a new task (Calls Lambda)
app.post("/tasks", async (req, res) => {
    try {
        const event = { body: JSON.stringify(req.body) }; // Simulate AWS event
        const response = await addTaskHandler(event);
        res.status(response.statusCode).json(JSON.parse(response.body));
    } catch (error) {
        res.status(500).json({ error: "Error adding task" });
    }
});

// DELETE a task (Calls Lambda)
app.delete("/tasks/:id", async (req, res) => {
    try {
        const event = { pathParameters: { id: req.params.id } }; // Simulate AWS event
        const response = await deleteTaskHandler(event);
        res.status(response.statusCode).json(JSON.parse(response.body));
    } catch (error) {
        res.status(500).json({ error: "Error deleting task" });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));

