import expess from "express";

const app = expess();
const port = 3000;

app.get("/", (req, res) => {
  const d = new Date("April 27, 2024 01:15:00");
  const today = d.getDay();
  let type = "it's a weekday";
  let adv = " go to work ⚒️";
  console.log(today);
  if (today === 0 || today === 6) {
    type = "it's weekend";
    adv = " watch netflix 🍿🎞️";
  }
  res.render("index.ejs", { dayType: type, advice: adv });
});

app.listen(port, () => {
  console.log(`Server running on port : ${port}`);
});
