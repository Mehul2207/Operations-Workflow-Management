const express = require("express");
const cors = require("cors");
require("dotenv").config();

const pool = require("./src/config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "OWMS Backend Running 🚀" });
});

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