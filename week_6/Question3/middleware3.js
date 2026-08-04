const express = require('express');

const app = express();

const PORT = 3008;

const logger=(req,res,next)=>{

    console.log("--------------------");

    console.log("Time :",new Date());

    console.log("Method :",req.method);

    console.log("URL :",req.url);

    console.log("--------------------");

    next();

};

app.use(logger);

app.get('/',(req,res)=>{

    res.send("Middleware Logging Example");

});

app.get('/student',(req,res)=>{

    res.json({

        id:101,

        name:"Akshaya",

        branch:"CSE"

    });

});

app.listen(PORT,()=>{

    console.log(`Server running on http://localhost:${PORT}`);

});