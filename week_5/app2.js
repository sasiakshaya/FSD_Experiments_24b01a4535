const express = require('express');

const app = express();

const PORT = 3001;

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/contact', (req, res) => {
    res.send('Contact Page');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});