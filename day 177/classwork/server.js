// server.js
const express = require("express");
const app = express();
const PORT = 3000;

// middleware to parse JSON
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Hello from my 1-file server 🚀");
});

// Example API route
app.get("/api/data", (req, res) => {
  res.json({ message: "This is some data", time: new Date() });
});

// Example POST
app.post("/api/echo", (req, res) => {
  res.json({ youSent: req.body });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
})