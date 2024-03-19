import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import cors from "cors";
import authenticateToken, { AuthenticatedRequest } from "./middleware";

const app = express();
app.use(cors());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Dummy array of users (for demonstration purposes)
const users = [
  { id: 1, username: "alice", password: "secret" },
  { id: 2, username: "bob", password: "password" },
];

app.post("/api/auth/login", (req: Request, res: Response) => {
  const { username, password } = req.body;
  console.log(req.body)
  console.log(username, password);
  const user = users.find((u) => u.username === username);

  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid credentials!" });
  }

  const token = jwt.sign({ id: user.id }, "secret", { expiresIn: "1h" });

  return res.json(token);
});

app.get("/", (req, res) => {
  res.json({
    ok: true,
    message: "Working fine",
  });
});

app.get(
  "/api/auth/status",
  authenticateToken,
  (req: AuthenticatedRequest, res) => {
    // Check if user is authenticated
    const isAuthenticated = !!req.user;
    res.json({ authenticated: isAuthenticated });
  }
);

app.get("/users", authenticateToken, (req, res) => {
  res.json({
    ok: true,
    users,
  });
});

app.listen(8080, () => {
  console.log(`Running at localhost:8080`);
});
