/*
  Warnings:

  - You are about to drop the column `date` on the `rent` table. All the data in the column will be lost.
  - Added the required column `endTime` to the `rent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `playerId` to the `rent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `rent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPrice` to the `rent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `rent` DROP COLUMN `date`,
    ADD COLUMN `endTime` DATETIME(3) NOT NULL,
    ADD COLUMN `playerId` INTEGER NOT NULL,
    ADD COLUMN `startTime` DATETIME(3) NOT NULL,
    ADD COLUMN `status` VARCHAR(191) NOT NULL DEFAULT 'pending',
    ADD COLUMN `totalPrice` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `rentdetails` MODIFY `rentDetailsId` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `comment` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`rentDetailsId`);

-- AddForeignKey
ALTER TABLE `rent` ADD CONSTRAINT `rent_playerId_fkey` FOREIGN KEY (`playerId`) REFERENCES `Customer`(`customerId`) ON DELETE RESTRICT ON UPDATE CASCADE;
