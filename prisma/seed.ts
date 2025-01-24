import { PrismaClient, Prisma, UserRole } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Clean the database
  await prisma.image.deleteMany({});
  await prisma.product.deleteMany({});
  await prisma.user.deleteMany({});

  // Create admin user with hashed password
  const passwordHash = await bcrypt.hash('admin123', 10);
  const adminUser = await prisma.user.create({
    data: {
      email: 'admin@example.com',
      name: 'Admin User',
      passwordHash,
      role: UserRole.ADMIN
    }
  });

  // Create some sample products
  const products = [
    {
      titleEn: 'Rolex Daytona Platinum',
      titleIt: 'Rolex Daytona Platino',
      descriptionEn: 'Cosmograph in platinum with meteorite dial',
      descriptionIt: 'Cosmograph in platino con quadrante in meteorite',
      price: 75000,
      status: 'AVAILABLE',
      brand: 'Rolex',
      model: 'Daytona',
      year: 2021,
      condition: 'New',
      owner: {
        connect: {
          id: adminUser.id
        }
      },
      images: {
        create: {
          url: '/images/rolex-daytona.jpg'
        }
      }
    },
    {
      titleEn: 'Patek Philippe Nautilus',
      titleIt: 'Patek Philippe Nautilus',
      descriptionEn: 'Stainless steel with blue dial',
      descriptionIt: 'Acciaio con quadrante blu',
      price: 120000,
      status: 'AVAILABLE',
      brand: 'Patek Philippe',
      model: 'Nautilus',
      year: 2020,
      condition: 'Excellent',
      owner: {
        connect: {
          id: adminUser.id
        }
      },
      images: {
        create: {
          url: '/images/patek-nautilus.jpg'
        }
      }
    }
  ];

  for (const product of products) {
    await prisma.product.create({
      data: product
    });
  }

  console.log('Seed data created successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });