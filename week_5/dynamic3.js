const express = require('express');
const app = express();

const PORT = 3005;

// Route + Query Parameters
app.get('/student/:id', (req, res) => {
    const id = req.params.id;
    const name = req.query.name;

    res.send(`Student ID: ${id}, Name: ${name}`);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});