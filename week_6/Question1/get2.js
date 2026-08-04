const express = require('express');

const app = express();

const PORT = 3001;

app.get('/students', (req, res) => {

    const students = [
        {
            id: 1,
            name: "Akshaya",
            branch: "CSE"
        },
        {
            id: 2,
            name: "Harsha",
            branch: "ECE"
        },
        {
            id: 3,
            name: "Sai",
            branch: "IT"
        }
    ];

    res.json(students);

});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});