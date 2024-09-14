/*
  Warnings:

  - You are about to drop the column `ninkame` on the `customer` table. All the data in the column will be lost.
  - Added the required column `ninkname` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `customer` DROP COLUMN `ninkame`,
    ADD COLUMN `ninkname` VARCHAR(191) NOT NULL;
