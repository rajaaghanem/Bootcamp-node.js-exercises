const express = require("express");
const app = express();
const PORT = 3000;
let array = [1, 2, 3, 4, 5, 6];

app.use(express.json());

//return the array of numbers to the client
app.get("/numbers", (req, res) => {
  res.send(array);
});

//create a new number that you are
//getting from the body and append it to your array of numbers,
//send the array back to the client
app.post("/numbers", (req, res) => {
  if (array.includes(req.body.number)) {
    res.status(400).send("number already exists");
  } else {
    array.push(req.body.number);
    res.send(array);
  }
});

//get the number you want to remove
//from your params, remove the number from your array of
//numbers, send the array back to the client
app.delete("/numbers/:num", (req, res) => {
  if (!array.includes(Number(req.params.num))) {
    res.status(400).send("number doesnt exist");
  } else {
    const newArr = array.filter((number) => {
      return number !== Number(req.params.num);
    });
    array = newArr;
    res.send(array);
  }
});

//get the number you want to remove from
// your params, get the new number you want to be replaced
// from your body, modify the number from your array of
// numbers, send the array back to the client.
app.put("/numbers/:num", (req, res) => {
  if (!array.includes(Number(req.params.num))) {
    res.status(400).send("number doesnt exist");
  } else {
    const newArr= array.map((number)=>{
       return number === Number(req.params.num)? (req.body.number): number;
    })
    array = newArr;
    res.send(array);
  }
});

app.listen(PORT, () => {
  console.log(`listening to port : ${PORT} `);
});
