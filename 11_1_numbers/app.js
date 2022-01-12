const express = require("express");
const app = express();

const numArr = [1,2,3,4,5,6];

app.use(express.json());

app.get("/numbers", (req, res) => {
  res.send(numArr);
});

app.post("/numbers", (req, res) => {
    const numToAdd = Number(req.body.newNum);
    const isNumExist = numArr.find(num => num === numToAdd);
    if (!isNumExist) {
        numArr.push(numToAdd);
        res.status(201).send(numArr);
    }
    else {
        res.status(400).send(`The number - ${numToAdd}, already exists!`);
    }
    
});

app.delete("/numbers/:num/", (req, res) => {
  const numToDelete = Number(req.params.num);
  const isNumExist = numArr.find(num => num === numToDelete);
  
    if (isNumExist) {
        const filteredArr = numArr.filter(num => num !== numToDelete);
        res.status(200).send(filteredArr);
    }
    else {
        res.status(400).send(`The number - ${numToDelete}, does not exist!`);
    }
});

app.put("/numbers/:num", (req, res) => {
  const numToUpdate = Number(req.params.num);
  const numToAdd = Number(req.body.newNum);
  const isNumExist = numArr.find(num => num === numToUpdate);

    if (isNumExist) {
        for (let i = 0; i < numArr.length; i++) {
            if (numArr[i] === numToUpdate) {
                numArr[i] = numToAdd;
            }
        }
        res.status(200).send(numArr);
    }
    else {
        res.status(400).send(`The number - ${numToUpdate}, does not exist!`);
    }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listentinig to port: ${PORT}`);
});
