require("dotenv").config();

const app = require("./src/app");
const pool = require("./src/config/db");

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    try {
        await pool.query("SELECT 1");
        console.log("Database connected successfully");
        console.log(`Server running on port ${PORT}`);
    } catch (err) {
        console.error("DB connection failed:", err);
    }
});