import express from "express";
import storeRoutes from "./routes/storeRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to your Store finder");
});

app.use("/api/stores/", storeRoutes);
app.use("/api/events/", eventRoutes);

app.listen(PORT, () => {
  console.log(`Example server listening at http://localhost:${PORT}`);
});
