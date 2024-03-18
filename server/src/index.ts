import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    ok: true,
    message: "Working fine",
  });
});
app.listen(8080, () => {
  console.log(`Running at localhost:8080`);
});
