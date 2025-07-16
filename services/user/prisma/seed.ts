import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      username: "testuser",
      email: "test@test.com",
      password: "hashed_password",
    },
  });
}

main();
