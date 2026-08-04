const express = require('express');

const app = express();

const PORT = 3004;

app.delete('/student/:id', (req, res) => {

    const id = req.params.id;

    res.json({
        message: `Student ${id} Deleted Successfully`
    });

});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});