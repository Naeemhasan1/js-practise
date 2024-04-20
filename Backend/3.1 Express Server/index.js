import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("<h1>hello world!!<h1/>");
  console.log(req.rawHeaders);
});
app.get("/contact", (req, res) => {
  res.send("<h1>This is my contact page .<h1/>");
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
