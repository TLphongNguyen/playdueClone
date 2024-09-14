/*
  Warnings:

  - You are about to drop the column `price` on the `customer` table. All the data in the column will be lost.
  - The primary key for the `gamesoncustomers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `customerId` on the `gamesoncustomers` table. All the data in the column will be lost.
  - Added the required column `price` to the `DetailCustomer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `detailCustomerId` to the `GamesOnCustomers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `gamesoncustomers` DROP FOREIGN KEY `GamesOnCustomers_customerId_fkey`;

-- AlterTable
ALTER TABLE `customer` DROP COLUMN `price`;

-- AlterTable
ALTER TABLE `detailcustomer` ADD COLUMN `price` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `gamesoncustomers` DROP PRIMARY KEY,
    DROP COLUMN `customerId`,
    ADD COLUMN `detailCustomerId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`detailCustomerId`, `gameId`);

-- CreateTable
CREATE TABLE `Message` (
    `messageId` INTEGER NOT NULL AUTO_INCREMENT,
    `content` VARCHAR(191) NOT NULL,
    `sentAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `readAt` DATETIME(3) NULL,
    `senderId` INTEGER NOT NULL,
    `receiverId` INTEGER NOT NULL,

    PRIMARY KEY (`messageId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `GamesOnCustomers` ADD CONSTRAINT `GamesOnCustomers_detailCustomerId_fkey` FOREIGN KEY (`detailCustomerId`) REFERENCES `DetailCustomer`(`detailCustomerId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_senderId_fkey` FOREIGN KEY (`senderId`) REFERENCES `Customer`(`customerId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_receiverId_fkey` FOREIGN KEY (`receiverId`) REFERENCES `Customer`(`customerId`) ON DELETE RESTRICT ON UPDATE CASCADE;
