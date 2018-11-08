-- Schema
DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
    ItemID INT AUTO_INCREMENT NOT NULL,
    ProductName VARCHAR(100),
    DepartmentName VARCHAR(100),
    Price DECIMAL(10,2) DEFAULT 0,
    StockQuantity INT (6), 
    PRIMARY KEY(ItemID)
);

-- seed data
INSERT INTO products(ProductName, departmentName, price, stockQuantity)
VALUES 
 ("Toilet Paper", "Hygene", 9, 20),
 ("Xbox Controller", "Games", 60, 15),
 ("OverWatch Disc", "Games", 65, 40),
 ("Apple Smart TV", "Electr", 290, 100),
 ("Android Tablet", "Electr", 300, 20),
 ("Nintendo Switch", "Electr", 400, 10),
 ("Cotton T-shirt", "Apparel", 10, 50),
 ("Denim Jeans", "Apparel", 16, 30),
 ("Fruit Roll Up", "Snacks", 4, 2000),
 ("Laffy Taffy", "Candy", 2, 750),
 ("Coca-Cola", "Drinks", 1, 1000);

 SELECT * FROM products;
