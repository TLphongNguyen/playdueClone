/*
  Warnings:

  - You are about to drop the column `youtube` on the `detailcustomer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `detailcustomer` DROP COLUMN `youtube`;

-- CreateTable
CREATE TABLE `follower` (
    `followingID` INTEGER NOT NULL AUTO_INCREMENT,
    `customerId` INTEGER NOT NULL,
    `followerId` INTEGER NOT NULL,
    `time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`followingID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
