const express = require('express');
const app = express();

const PORT = 3003;

// Route Parameter
app.get('/student/:name', (req, res) => {
    res.send(`Welcome ${req.params.name}`);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});