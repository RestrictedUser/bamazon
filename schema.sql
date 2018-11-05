-- Schema
DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
    ItemID INT AUTO_INCREMENT NOT NULL,
    ProductName VARCHAR(20),
    DepartmentName VARCHAR(20),
    Price DECIMAL(10,2),
    StockQuantity INT, 
    PRIMARY KEY(ItemID)
);

-- seed data
INSERT INTO products(ProductName, departmentName, price, stockQuantity)
VALUES 
 ("Toy Car", "Toys", 10, 20),
 ("GI Joe", "Toys", 20, 15),
 ("Milk", "Produce", 3, 40),
 ("Apple", "Produce", 2, 100),
 ("Xbox", "Electronics", 300, 20),
 ("Nintendo Switch", "Electronics", 400, 10),
 ("T-shirt", "Clothing", 10, 50),
 ("Jeans", "Clothing", 16, 30);