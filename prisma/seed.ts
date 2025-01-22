import { PrismaClient, CardStatus } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.card.deleteMany({});
  await prisma.user.deleteMany({});

  // Create default password hash
  const passwordHash = await bcrypt.hash('admin123', 10);

  // Create a default admin user
  const defaultUser = await prisma.user.create({
    data: {
      email: 'admin@example.com',
      name: 'Admin',
      passwordHash,
      role: 'ADMIN'
    }
  });

  // Seed cards data
  const cardsData = [
    {
      titleEn: 'Rolex Daytona',
      titleIt: 'Rolex Daytona',
      descriptionEn: 'Cosmograph in platinum with meteorite dial',
      descriptionIt: 'Cosmograph in platino con quadrante in meteorite',
      price: 75000,
      status: CardStatus.AVAILABLE,
      brand: 'Rolex',
      model: 'Daytona',
      year: 2021,
      condition: 'Excellent',
      mainImage: '/images/watches/daytona.jpg',
      additionalImages: ['/images/watches/daytona-detail1.jpg', '/images/watches/daytona-detail2.jpg'],
      ownerId: defaultUser.id
    },
    {
      titleEn: 'Patek Philippe Nautilus',
      titleIt: 'Patek Philippe Nautilus',
      descriptionEn: 'Stainless steel with blue dial',
      descriptionIt: 'Acciaio con quadrante blu',
      price: 120000,
      status: CardStatus.SOLD,
      brand: 'Patek Philippe',
      model: 'Nautilus',
      year: 2020,
      condition: 'Like New',
      mainImage: '/images/watches/nautilus.jpg',
      additionalImages: ['/images/watches/nautilus-detail1.jpg', '/images/watches/nautilus-detail2.jpg'],
      ownerId: defaultUser.id
    }
  ];

  for (const cardData of cardsData) {
    await prisma.card.create({
      data: cardData
    });
  }

  console.log('Database has been seeded! 🌱');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });