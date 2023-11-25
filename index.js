import express from "express";

const app=express();

app.get("/",(req,res)=>{
    res.send("server work")
})
app.listen(3123,()=>{
    console.log("server start")
})