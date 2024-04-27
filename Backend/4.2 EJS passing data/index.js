import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const numLetter = req.body["fName"].length + req.body["lName"].length;
  console.log(numLetter);
  res.render("index.ejs", { numOfLetter: numLetter });
});

app.listen(port, () => {
  console.log(`Server choltase dorja no: ${port}`);
});
