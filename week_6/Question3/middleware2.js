const express = require('express');

const app = express();

const PORT = 3007;

app.use((req,res,next)=>{

    console.log("Method :",req.method);

    console.log("URL :",req.url);

    next();

});

app.get('/',(req,res)=>{

    res.send("Home Page");

});

app.get('/about',(req,res)=>{

    res.send("About Page");

});

app.listen(PORT,()=>{

    console.log(`Server running on http://localhost:${PORT}`);

});