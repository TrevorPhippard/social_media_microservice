import express from "express";
import bodyParser from "body-parser";

import client from "prom-client";
import postRoutes from "./post.controller";

const app = express();

app.use(bodyParser.json());
app.use("/api/posts", postRoutes);

client.collectDefaultMetrics();

app.get("/metrics", async (_req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Auth service listening on port ${PORT}`);
});
