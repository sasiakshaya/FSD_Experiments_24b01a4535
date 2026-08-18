const express = require('express');

const app = express();

const PORT = 3006;

app.use((req,res,next)=>{

    console.log("Middleware Executed");

    next();

});

app.get('/',(req,res)=>{

    res.send("Welcome to Express Middleware");

});

app.listen(PORT,()=>{

    console.log(`Server running on http://localhost:${PORT}`);

});