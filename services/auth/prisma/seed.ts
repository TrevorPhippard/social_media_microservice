import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({
  log: ["query", "error"],
});

async function main() {
  const username = "testuser";

  // Check if profile exists
  const existing = await prisma.user.findFirst({ where: { username } });

  if (!existing) {
    await prisma.user.create({
      data: {
        username: username,
        email: "test@test.com",
        password: "hashed_password",
      },
    });
    console.log("Created auth:");
  } else {
    console.log("Profile already exists:", existing);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
