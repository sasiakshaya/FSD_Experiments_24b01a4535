const express = require('express');

const app = express();

app.use(express.json());

const PORT = 3005;

app.put('/employee/:id', (req, res) => {

    res.json({
        message: "Employee Updated",
        employeeId: req.params.id,
        data: req.body
    });

});

app.delete('/employee/:id', (req, res) => {

    res.json({
        message: `Employee ${req.params.id} Deleted`
    });

});

app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});