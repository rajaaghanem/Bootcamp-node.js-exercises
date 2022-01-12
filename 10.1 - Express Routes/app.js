const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/numbers", (req, res)=>{
    res.send("success using get method");
});

app.post("/numbers", (req, res)=>{
    console.log(req.body);
    res.send("success using post method");
});

app.post("/numbers", (req, res)=>{
    console.log(req.body);
    res.send("success using post method");
});

app.delete("/numbers/:num", (req, res)=>{
    console.log(req.params);
    res.send("success using delete method");
});

app.put("/numbers/:num", (req, res)=>{
    console.log(req.body);
    console.log(req.params);
    res.send("success using put method");
});

app.listen(PORT, () => {
  console.log(`listening to port : ${PORT} `);
});

