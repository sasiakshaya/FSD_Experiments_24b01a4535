const express = require('express');

const app = express();

const PORT = 3002;

app.get('/', (req, res) => {
    res.send('Student Portal');
});

app.get('/student/:name', (req, res) => {
    res.send(`Welcome ${req.params.name}`);
});

app.get('/course/:course', (req, res) => {
    res.send(`Course: ${req.params.course}`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});