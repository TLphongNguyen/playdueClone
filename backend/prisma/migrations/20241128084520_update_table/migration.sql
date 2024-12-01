-- DropForeignKey
ALTER TABLE `message` DROP FOREIGN KEY `Message_receiverId_fkey`;

-- CreateTable
CREATE TABLE `_ReceivedMessages` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ReceivedMessages_AB_unique`(`A`, `B`),
    INDEX `_ReceivedMessages_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_ReceivedMessages` ADD CONSTRAINT `_ReceivedMessages_A_fkey` FOREIGN KEY (`A`) REFERENCES `Customer`(`customerId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ReceivedMessages` ADD CONSTRAINT `_ReceivedMessages_B_fkey` FOREIGN KEY (`B`) REFERENCES `Message`(`messageId`) ON DELETE CASCADE ON UPDATE CASCADE;
