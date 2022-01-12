const express = require("express");
const app = express();

app.use(express.json());

app.get("/numbers", (req, res) => {
  res.send(`success using get`);
});

app.post("/numbers", (req, res) => {
  res.status(201).send({ id: 123456, msg: `success using post`});
});

app.delete("/numbers/:id/", (req, res) => {
  console.log(req.params, `success using delete`);
});

app.put("/numbers/:id", (req, res) => {
  console.log(req.params, `success using put`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listentinig to port: ${PORT}`);
});
