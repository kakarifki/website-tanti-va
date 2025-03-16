import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  try {
    const hashedPassword = await bcrypt.hash('tanti123', 10);

    // Upsert admin
    const admin = await prisma.admin.upsert({
      where: { email: 'admin@tanti.com' },
      update: {
        password: hashedPassword,
      },
      create: {
        email: 'admin@tanti.com',
        password: hashedPassword,
        // name: 'Admin',
      },
    });

    console.log('Seeded admin:', admin);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});