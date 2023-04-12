/*
  Warnings:

  - Added the required column `password` to the `UserLogin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salt` to the `UserLogin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserLogin" ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "salt" TEXT NOT NULL;
