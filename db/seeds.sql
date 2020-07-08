/* insert queries to populate the `burgers` table with at least three entrees. */
USE burgers_db;

/* Insert 3 Rows of entrees */
INSERT INTO burgers (burger_name, devoured)
VALUES ("fries", TRUE);

INSERT INTO burgers (burger_name, devoured)
VALUES ("soup", TRUE);

INSERT INTO burgers (burger_name, devoured)
VALUES ("coleslaw", TRUE);