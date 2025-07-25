import express from "express";
import bodyParser from "body-parser";
import client from "prom-client";

import profileRoutes from "./profile.controller";

const app = express();

app.use(bodyParser.json());
app.use("/api/profiles", profileRoutes);

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

client.collectDefaultMetrics();

app.get("/metrics", async (_req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

const PORT = parseInt(process.env.PORT || "4002", 10);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Profile service listening on port ${PORT}`);
});
