const pool = require('../config/db');

exports.createWorkflow = async (name, description, createdBy) => {
    const result = await pool.query(
        `INSERT INTO workflows (name, description, created_by)
     VALUES ($1, $2, $3)
     RETURNING *`,
        [name, description, createdBy]
    );
    return result.rows[0];
};

exports.getAllWorkflows = async () => {
    const result = await pool.query('SELECT * FROM workflows');
    return result.rows;
};