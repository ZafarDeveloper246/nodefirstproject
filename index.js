const express = require("express");
const app=express();
const port= 8082;
const config=require("./config")

app.get("/hello",(req,res)=>{
    res.json(`Hello From Arslan Akmal`);
})
config();

app.listen(port,()=>{
    console.log(`Server is started on port ${port}`);
})
