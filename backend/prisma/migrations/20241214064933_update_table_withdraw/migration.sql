-- CreateTable
CREATE TABLE `withdrawal` (
    `withdrawalId` INTEGER NOT NULL AUTO_INCREMENT,
    `customerId` INTEGER NOT NULL,
    `banks` VARCHAR(191) NOT NULL,
    `numberBank` INTEGER NOT NULL,
    `amount` INTEGER NOT NULL,
    `dateWithdraw` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `status` INTEGER NOT NULL,

    PRIMARY KEY (`withdrawalId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `withdrawal` ADD CONSTRAINT `withdrawal_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`customerId`) ON DELETE RESTRICT ON UPDATE CASCADE;
