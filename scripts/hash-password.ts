import bcrypt from 'bcrypt';

async function hashPassword() {
  const password = 'Admin@123'; // La password che vuoi usare
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log('Hashed password:', hashedPassword);
}

hashPassword();