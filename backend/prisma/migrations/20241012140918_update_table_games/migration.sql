/*
  Warnings:

  - Added the required column `gameImg` to the `Games` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `games` ADD COLUMN `gameImg` VARCHAR(191) NOT NULL;
