/*
  Warnings:

  - Added the required column `description` to the `DetailCustomer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `info` to the `DetailCustomer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `detailcustomer` ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `info` VARCHAR(191) NOT NULL,
    MODIFY `Facebook` VARCHAR(191) NULL,
    MODIFY `youtube` VARCHAR(191) NULL,
    MODIFY `highlight` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Notification` (
    `notificationId` INTEGER NOT NULL AUTO_INCREMENT,
    `customerId` INTEGER NOT NULL,
    `typeId` INTEGER NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`notificationId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TypeNotification` (
    `typeId` INTEGER NOT NULL AUTO_INCREMENT,
    `nameNotification` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`typeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Notification` ADD CONSTRAINT `Notification_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `TypeNotification`(`typeId`) ON DELETE RESTRICT ON UPDATE CASCADE;
