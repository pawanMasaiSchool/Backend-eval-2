const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.json())

app.get("/",(req,res)=>{
    res.json("Hello Pawan")
})

app.listen(PORT,()=>{
    console.log(`Listening at port number ${PORT}`);
})