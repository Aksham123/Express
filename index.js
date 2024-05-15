const express = require("express");
const app = express();

let port =3000;
app.listen(port, ()=>{
    console.log(`app is listining on ${port}`);
});

app.get("/",(req,res) =>{
    res.send("this is root node");
});
app.get("/apple",(req,res)=>{
    res.send("this is apple");
});
app.post("/orange",(req,res) =>{
    res.send("this is orange");
});

