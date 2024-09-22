-- CreateTable
CREATE TABLE `recharge` (
    `rechargeId` INTEGER NOT NULL AUTO_INCREMENT,
    `customerId` INTEGER NOT NULL,
    `banks` VARCHAR(191) NOT NULL,
    `numberBank` INTEGER NOT NULL,
    `dateRecharge` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`rechargeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `recharge` ADD CONSTRAINT `recharge_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`customerId`) ON DELETE RESTRICT ON UPDATE CASCADE;
