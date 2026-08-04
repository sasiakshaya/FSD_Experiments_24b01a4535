const express = require('express');

const app = express();

const PORT = 3002;

app.get('/student/:id', (req, res) => {

    const id = req.params.id;

    res.json({
        studentId: id,
        name: "Akshaya",
        department: "CSE-AIDS",
        year: "Second Year"
    });

});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});