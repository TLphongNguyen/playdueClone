/*
  Warnings:

  - You are about to drop the column `ninkname` on the `customer` table. All the data in the column will be lost.
  - Added the required column `nickname` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `customer` DROP COLUMN `ninkname`,
    ADD COLUMN `nickname` VARCHAR(191) NOT NULL;
