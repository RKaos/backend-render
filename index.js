import express from "express";
import cors from "cors"; // 👈 import CORS
import users from "./user.js";

const app = express();

// ✅ Middlewares
app.use(cors()); // enable CORS so frontend can connect
app.use(express.json()); // handle JSON bodies if needed

// ✅ Routes
app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/users", (req, res) => {
  res.send(users);
});

// ✅ Port setup
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});