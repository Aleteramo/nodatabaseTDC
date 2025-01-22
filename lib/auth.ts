// lib/auth.ts
import bcrypt from 'bcrypt'
import prisma from './prisma'

export async function authenticateUser(email: string, password: string) {
  const user = await prisma.user.findUnique({ where: { email } })
  
  if (!user) {
    throw new Error('User not found')
  }

  const isPasswordValid = await bcrypt.compare(password, user.passwordHash)
  
  if (!isPasswordValid) {
    throw new Error('Invalid password')
  }

  // Remove sensitive information
  const { passwordHash, ...userWithoutPassword } = user
  return userWithoutPassword
}