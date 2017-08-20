# khidmat
khidmat


Database Design

CREATE TABLE `hack_db`.`person` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `rating` FLOAT NULL,
  `xp` INT NULL,
  `interests` BLOB(100) NULL,
  PRIMARY KEY (`id`));


CREATE TABLE `hack_db`.`company` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `rating` FLOAT NULL,
  `xp` INT NULL,
  `address` BLOB(100) NULL,
  `phone` BLOB(100) NULL,
  `email` varchar(45) NULL,
  PRIMARY KEY (`id`));


CREATE TABLE `hack_db`.`project` (
  `id` INT NOT NULL,
  `companyId` INT NULL,
  `description` LONGBLOB NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `companyId`
    FOREIGN KEY (`companyId`)
    REFERENCES `hack_db`.`company` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

CREATE TABLE `hack_db`.`person_project` (
  `personId` INT NOT NULL,
  `projectId` INT NULL,
  `personRating` FLOAT NULL,
  `companyRating` FLOAT NULL,
  `status` VARCHAR(45) NULL,
  PRIMARY KEY (`personId`),
  INDEX `projectId_idx` (`projectId` ASC),
  CONSTRAINT `personId`
    FOREIGN KEY (`personId`)
    REFERENCES `hack_db`.`person` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `projectId`
    FOREIGN KEY (`projectId`)
    REFERENCES `hack_db`.`project` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);






#Project Guide
Node-angular Project
