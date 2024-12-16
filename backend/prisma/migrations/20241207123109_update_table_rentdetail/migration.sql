/*
  Warnings:

  - You are about to drop the column `endTime` on the `rent` table. All the data in the column will be lost.
  - You are about to drop the column `hour` on the `rent` table. All the data in the column will be lost.
  - You are about to drop the column `startTime` on the `rent` table. All the data in the column will be lost.
  - You are about to drop the column `totalPrice` on the `rent` table. All the data in the column will be lost.
  - Added the required column `endTime` to the `rentDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hour` to the `rentDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `rentDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPrice` to the `rentDetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `rent` DROP COLUMN `endTime`,
    DROP COLUMN `hour`,
    DROP COLUMN `startTime`,
    DROP COLUMN `totalPrice`;

-- AlterTable
ALTER TABLE `rentdetails` ADD COLUMN `endTime` DATETIME(3) NOT NULL,
    ADD COLUMN `hour` INTEGER NOT NULL,
    ADD COLUMN `startTime` DATETIME(3) NOT NULL,
    ADD COLUMN `totalPrice` DOUBLE NOT NULL,
    MODIFY `Rating` INTEGER NULL;
