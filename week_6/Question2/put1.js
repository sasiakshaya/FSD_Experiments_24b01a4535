const express = require('express');

const app = express();

app.use(express.json());

const PORT = 3003;

app.put('/student/:id', (req, res) => {

    const id = req.params.id;

    const student = req.body;

    res.json({
        message: "Student Updated Successfully",
        studentId: id,
        data: student
    });

});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});