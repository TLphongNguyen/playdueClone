/*
  Warnings:

  - Added the required column `price` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `customer` ADD COLUMN `price` INTEGER NOT NULL,
    ADD COLUMN `status` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Games` (
    `gameId` INTEGER NOT NULL AUTO_INCREMENT,
    `gameName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`gameId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GamesOnCustomers` (
    `customerId` INTEGER NOT NULL,
    `gameId` INTEGER NOT NULL,

    PRIMARY KEY (`customerId`, `gameId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rent` (
    `rentId` INTEGER NOT NULL AUTO_INCREMENT,
    `customerId` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `hour` INTEGER NOT NULL,

    PRIMARY KEY (`rentId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rentDetails` (
    `rentDetailsId` INTEGER NOT NULL,
    `rentId` INTEGER NOT NULL,
    `Rating` INTEGER NOT NULL,
    `comment` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `rentDetails_rentId_key`(`rentId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `story` (
    `storyId` INTEGER NOT NULL AUTO_INCREMENT,
    `customerId` INTEGER NOT NULL,
    `urlStory` VARCHAR(191) NOT NULL,
    `caption` VARCHAR(191) NOT NULL,
    `hagtag` VARCHAR(191) NULL,
    `likes` INTEGER NOT NULL,
    `views` INTEGER NOT NULL,
    `stautusStory` BOOLEAN NOT NULL,
    `time` DATETIME(3) NOT NULL,

    PRIMARY KEY (`storyId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `commentStory` (
    `commentStoryId` INTEGER NOT NULL AUTO_INCREMENT,
    `storyId` INTEGER NOT NULL,
    `customerId` INTEGER NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `time` DATETIME(3) NOT NULL,

    PRIMARY KEY (`commentStoryId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `donate` (
    `donateId` INTEGER NOT NULL AUTO_INCREMENT,
    `customerId` INTEGER NOT NULL,
    `idDonateTo` INTEGER NOT NULL,
    `des` VARCHAR(191) NOT NULL,
    `money` INTEGER NOT NULL,

    PRIMARY KEY (`donateId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `GamesOnCustomers` ADD CONSTRAINT `GamesOnCustomers_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`customerId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GamesOnCustomers` ADD CONSTRAINT `GamesOnCustomers_gameId_fkey` FOREIGN KEY (`gameId`) REFERENCES `Games`(`gameId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rent` ADD CONSTRAINT `rent_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`customerId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rentDetails` ADD CONSTRAINT `rentDetails_rentId_fkey` FOREIGN KEY (`rentId`) REFERENCES `rent`(`rentId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commentStory` ADD CONSTRAINT `commentStory_storyId_fkey` FOREIGN KEY (`storyId`) REFERENCES `story`(`storyId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commentStory` ADD CONSTRAINT `commentStory_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`customerId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `donate` ADD CONSTRAINT `donate_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`customerId`) ON DELETE RESTRICT ON UPDATE CASCADE;
