const pool = require("../db/db.js"); 

exports.handler = async (event) => {
    try {
        const { task_name } = JSON.parse(event.body);
        const result = await pool.query(
            "INSERT INTO tasks (task_name) VALUES ($1) RETURNING *",
            [task_name]
        );
        return {
            statusCode: 201,
            body: JSON.stringify(result.rows[0]),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Error adding task" }),
        };
    }
};

