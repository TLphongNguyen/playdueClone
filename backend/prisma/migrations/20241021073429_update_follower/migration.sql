-- AddForeignKey
ALTER TABLE `follower` ADD CONSTRAINT `follower_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`customerId`) ON DELETE RESTRICT ON UPDATE CASCADE;
