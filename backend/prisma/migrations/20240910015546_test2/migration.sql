-- AddForeignKey
ALTER TABLE `story` ADD CONSTRAINT `story_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`customerId`) ON DELETE RESTRICT ON UPDATE CASCADE;
