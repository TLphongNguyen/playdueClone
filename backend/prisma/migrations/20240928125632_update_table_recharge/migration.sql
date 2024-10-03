/*
  Warnings:

  - Added the required column `amount` to the `recharge` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `recharge` ADD COLUMN `amount` INTEGER NOT NULL;
