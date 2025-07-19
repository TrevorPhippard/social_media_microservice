import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const userId = 1;

  const existing = await prisma.profile.findUnique({ where: { userId } });
  if (!existing) {
    const profileA = await prisma.profile.create({
      data: {
        userId: userId,
        bio: "Profile A bio",
        avatarUrl: "https://example.com/a.jpg",

        followers: {
          create: [
            {
              follower: {
                connectOrCreate: {
                  where: { userId: 2 },
                  create: {
                    userId: 2,
                    bio: "Profile B bio",
                    avatarUrl: "https://example.com/b.jpg",
                  },
                },
              },
            },
          ],
        },

        following: {
          create: [
            {
              following: {
                connectOrCreate: {
                  where: { userId: 3 },
                  create: {
                    userId: 3,
                    bio: "Profile C bio",
                    avatarUrl: "https://example.com/c.jpg",
                  },
                },
              },
            },
          ],
        },
      },
    });
    console.log("Created profile with followers/following:", profileA);
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
