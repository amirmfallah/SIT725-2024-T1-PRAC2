const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/addTwoNumbers", (req, res) => {
  const num1 = req.query?.num1;
  const num2 = req.query?.num2;

  if (!num1 || !num2) {
    res.status(400).send();
  }

  res.send({
    data: parseInt(num1) + parseInt(num2),
    statusCode: 200,
    message: "success",
  });
});

app.get("/subtractTwoNumbers", (req, res) => {
  const num1 = req.query?.num1;
  const num2 = req.query?.num2;

  if (!num1 || !num2) {
    res.status(400).send();
  }

  res.send({
    data: parseInt(num1) - parseInt(num2),
    statusCode: 200,
    message: "success",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
