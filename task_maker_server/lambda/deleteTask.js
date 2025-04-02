const pool = require("../db/db.js"); 

exports.handler = async (event) => {
    try {
        const { id } = event.pathParameters;
        await pool.query("DELETE FROM tasks WHERE id = $1", [id]);
        return {
            statusCode: 200,
            body: JSON.stringify({ success: true }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Error deleting task" }),
        };
    }
};

