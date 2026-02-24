const pool = require('../config/db');

exports.findByEmail = async (email) => {
    const result = await pool.query(
        `
    SELECT u.*, r.name as role_name
    FROM users u
    JOIN roles r ON u.role_id = r.id
    WHERE u.email = $1
    `,
        [email]
    );

    return result.rows[0];
};

exports.createUser = async (name, email, passwordHash, roleId) => {
    const result = await pool.query(
        `
    INSERT INTO users (name, email, password_hash, role_id)
    VALUES ($1, $2, $3, $4)
    RETURNING id, name, email, role_id
    `,
        [name, email, passwordHash, roleId]
    );

    return result.rows[0];
};