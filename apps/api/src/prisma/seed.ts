import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  await prisma.user.create({
    data: {
      firstName: "Enzo",
      lastName: "Tasca",
      avatar: 'avatar1'
    },
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
