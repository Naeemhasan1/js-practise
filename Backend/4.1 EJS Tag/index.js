import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const data = {
    title: "EJS tag",
    second: new Date().getSeconds(),
    items: ["Apple", "Orange", "Mango"],
    htmlContent: "<strong>This is some strong text</strong>",
  };
  console.log(data.items);
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server working on port :${3000}`);
});
