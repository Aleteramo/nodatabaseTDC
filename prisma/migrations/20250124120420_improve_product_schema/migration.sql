/*
  Warnings:

  - You are about to drop the column `additionalForCardId` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `cardId` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `filename` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `mimeType` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `Image` table. All the data in the column will be lost.
  - The `role` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Card` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[productIdAsMain]` on the table `Image` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "ProductStatus" AS ENUM ('AVAILABLE', 'SOLD', 'RESERVED');

-- DropForeignKey
ALTER TABLE "Card" DROP CONSTRAINT "Card_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_additionalForCardId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_cardId_fkey";

-- DropIndex
DROP INDEX "Image_cardId_key";

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "additionalForCardId",
DROP COLUMN "cardId",
DROP COLUMN "filename",
DROP COLUMN "image",
DROP COLUMN "mimeType",
DROP COLUMN "size",
ADD COLUMN     "alt" TEXT,
ADD COLUMN     "productIdAsAdd" TEXT,
ADD COLUMN     "productIdAsMain" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role",
ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'USER';

-- DropTable
DROP TABLE "Card";

-- DropEnum
DROP TYPE "CardStatus";

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "titleEn" TEXT NOT NULL,
    "titleIt" TEXT NOT NULL,
    "descriptionEn" TEXT NOT NULL,
    "descriptionIt" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "status" "ProductStatus" NOT NULL DEFAULT 'AVAILABLE',
    "brand" TEXT,
    "model" TEXT,
    "year" INTEGER,
    "condition" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ownerId" TEXT,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Product_status_idx" ON "Product"("status");

-- CreateIndex
CREATE INDEX "Product_ownerId_idx" ON "Product"("ownerId");

-- CreateIndex
CREATE UNIQUE INDEX "Image_productIdAsMain_key" ON "Image"("productIdAsMain");

-- CreateIndex
CREATE INDEX "Image_productIdAsMain_idx" ON "Image"("productIdAsMain");

-- CreateIndex
CREATE INDEX "Image_productIdAsAdd_idx" ON "Image"("productIdAsAdd");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_productIdAsMain_fkey" FOREIGN KEY ("productIdAsMain") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_productIdAsAdd_fkey" FOREIGN KEY ("productIdAsAdd") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
