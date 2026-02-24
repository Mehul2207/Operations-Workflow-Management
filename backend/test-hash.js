// test-hash.js
const bcrypt = require("bcryptjs");

async function generate() {
    const hash = await bcrypt.hash("password123", 10);
    console.log("Generated hash:");
    console.log(hash);
}

generate();