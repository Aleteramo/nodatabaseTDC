/*
  Warnings:

  - You are about to drop the column `additionalImages` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `mainImage` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[cardId]` on the table `Image` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `filename` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mimeType` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_productId_fkey";

-- AlterTable
ALTER TABLE "Card" DROP COLUMN "additionalImages",
DROP COLUMN "mainImage";

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "productId",
DROP COLUMN "url",
ADD COLUMN     "additionalForCardId" TEXT,
ADD COLUMN     "cardId" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "filename" TEXT NOT NULL,
ADD COLUMN     "image" BYTEA NOT NULL,
ADD COLUMN     "mimeType" TEXT NOT NULL,
ADD COLUMN     "size" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Product";

-- CreateIndex
CREATE UNIQUE INDEX "Image_cardId_key" ON "Image"("cardId");

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_additionalForCardId_fkey" FOREIGN KEY ("additionalForCardId") REFERENCES "Card"("id") ON DELETE SET NULL ON UPDATE CASCADE;
