/*
  Warnings:

  - You are about to drop the column `productIdAsAdd` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `productIdAsMain` on the `Image` table. All the data in the column will be lost.
  - The `status` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `productId` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Made the column `ownerId` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_productIdAsAdd_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_productIdAsMain_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_ownerId_fkey";

-- DropIndex
DROP INDEX "Image_productIdAsAdd_idx";

-- DropIndex
DROP INDEX "Image_productIdAsMain_idx";

-- DropIndex
DROP INDEX "Image_productIdAsMain_key";

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "productIdAsAdd",
DROP COLUMN "productIdAsMain",
ADD COLUMN     "isMain" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "productId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "status",
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'AVAILABLE',
ALTER COLUMN "ownerId" SET NOT NULL;

-- DropEnum
DROP TYPE "ProductStatus";

-- CreateIndex
CREATE INDEX "Image_productId_idx" ON "Image"("productId");

-- CreateIndex
CREATE INDEX "Product_status_idx" ON "Product"("status");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
