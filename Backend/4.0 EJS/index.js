import expess from "express";

const app = expess();
const port = 3000;

app.get("/", (req, res) => {
  res.render("index.ejs", { type: "it's a weekday", advice: " go to work ⚒️" });
});

app.listen(port, () => {
  console.log(`Server running on port : ${port}`);
});
