CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burger_db
(
	id int NOT NULL AUTO_INCREMENT,
	burger_style VARCHAR (100) NOT NULL,
	devoured BOOLEAN NOT NULL,
	PRIMARY KEY (id)
);