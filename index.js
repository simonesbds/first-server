import express from "express";

const app = express();
const port = 3000;

// Get request route define
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
