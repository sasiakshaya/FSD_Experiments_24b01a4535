const express = require("express");

const app = express();
const PORT = 3000;

// Configure EJS
app.set("view engine", "ejs");

// Home route
app.get("/", (req, res) => {
    const name = "Akshaya";
    const branch = "CSE-AI&DS";
    const age = 19;

    // Basic validation
    if (!name || !branch || age <= 0) {
        return res.send("Invalid student data");
    }

    res.render("index", {
        name: name,
        branch: branch,
        age: age
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});