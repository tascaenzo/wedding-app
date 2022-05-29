import { PrismaClient, Role } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  await prisma.user.create({
    data: {
      firstName: 'Enzo',
      lastName: 'Tasca',
      avatar: 'avatar1',
      role: Role.ADMIN,
    },
  });

  for (let i = 1; i < 25; i++) {
    await prisma.table.create({ data: { number: i, label: `Tavolo ${i}` } });
  }

  await prisma.meta.create({
    data: {
      key: 'PARTY_ENABLED',
      value: 'false',
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
