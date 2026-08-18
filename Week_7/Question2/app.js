const express = require("express");

const app = express();
const PORT = 3001;

// Configure EJS
app.set("view engine", "ejs");

// Read form data
app.use(express.urlencoded({ extended: true }));

// Display form
app.get("/", (req, res) => {
    res.render("form", {
        message: ""
    });
});

// Handle form submission
app.post("/submit", (req, res) => {

    const { name, email, age } = req.body;

    // Check required fields
    if (!name || !email || !age) {
        return res.render("form", {
            message: "All fields are required."
        });
    }

    // Email validation
    if (!email.includes("@")) {
        return res.render("form", {
            message: "Please enter a valid email."
        });
    }

    // Age validation
    if (Number(age) < 18) {
        return res.render("form", {
            message: "Age must be 18 or above."
        });
    }

    res.render("form", {
        message: `Form submitted successfully! Welcome ${name}.`
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});