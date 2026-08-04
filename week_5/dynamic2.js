const express = require('express');
const app = express();

const PORT = 3004;

// Query Parameter
app.get('/student', (req, res) => {
    const name = req.query.name;
    res.send(`Welcome ${name}`);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});