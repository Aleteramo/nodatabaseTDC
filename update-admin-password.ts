import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const newPassword = 'Admin@123'; // Questa sarà la nuova password
  const hashedPassword = await hash(newPassword, 12);

  const updatedUser = await prisma.user.update({
    where: {
      email: 'admin@example.com'
    },
    data: {
      passwordHash: hashedPassword
    }
  });

  console.log('Password updated for user:', updatedUser.email);
}

main()
  .catch((e) => {
    console.error('Error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  });