DROP DATABASE IF EXISTS mjmf24nj9y1vga7s;
CREATE DATABASE burger_db;
USE mjmf24nj9y1vga7s;

CREATE TABLE burger
(
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
	createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);


