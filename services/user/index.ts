import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get("/users", async (_, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.post("/users", async (req, res) => {
  const { username, password, email } = req.body;
  const user = await prisma.user.create({
    data: { username, password, email },
  });
  res.json(user);
});

app.listen(4006, "0.0.0.0", () => {
  console.log("User service running on port 4006");
});
