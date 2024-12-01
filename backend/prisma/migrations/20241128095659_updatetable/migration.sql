/*
  Warnings:

  - You are about to drop the `_receivedmessages` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `chatType` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_receivedmessages` DROP FOREIGN KEY `_ReceivedMessages_A_fkey`;

-- DropForeignKey
ALTER TABLE `_receivedmessages` DROP FOREIGN KEY `_ReceivedMessages_B_fkey`;

-- AlterTable
ALTER TABLE `message` ADD COLUMN `chatType` ENUM('PRIVATE', 'WORLD') NOT NULL;

-- DropTable
DROP TABLE `_receivedmessages`;

-- CreateTable
CREATE TABLE `MessageReceiver` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `messageId` INTEGER NOT NULL,
    `receiverId` INTEGER NOT NULL,
    `readAt` DATETIME(3) NULL,

    UNIQUE INDEX `MessageReceiver_messageId_receiverId_key`(`messageId`, `receiverId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `MessageReceiver` ADD CONSTRAINT `MessageReceiver_messageId_fkey` FOREIGN KEY (`messageId`) REFERENCES `Message`(`messageId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MessageReceiver` ADD CONSTRAINT `MessageReceiver_receiverId_fkey` FOREIGN KEY (`receiverId`) REFERENCES `Customer`(`customerId`) ON DELETE RESTRICT ON UPDATE CASCADE;
