/*
  Warnings:

  - You are about to drop the column `userId` on the `LocationCoordinates` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userLocationId]` on the table `LocationCoordinates` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userLocationId` to the `LocationCoordinates` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "LocationCoordinates" DROP CONSTRAINT "LocationCoordinates_userId_fkey";

-- DropIndex
DROP INDEX "LocationCoordinates_userId_key";

-- AlterTable
ALTER TABLE "LocationCoordinates" DROP COLUMN "userId",
ADD COLUMN     "userLocationId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "LocationCoordinates_userLocationId_key" ON "LocationCoordinates"("userLocationId");

-- AddForeignKey
ALTER TABLE "LocationCoordinates" ADD CONSTRAINT "LocationCoordinates_userLocationId_fkey" FOREIGN KEY ("userLocationId") REFERENCES "UserLocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
