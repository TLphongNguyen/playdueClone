/*
  Warnings:

  - You are about to drop the column `receiverId` on the `message` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Message_receiverId_fkey` ON `message`;

-- AlterTable
ALTER TABLE `message` DROP COLUMN `receiverId`;
