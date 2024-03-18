import express from "express";
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    ok: true,
    message: "Working fine",
  });
});

app.listen(8080, () => {
  console.log(`Running at localhost:8080`);
});
