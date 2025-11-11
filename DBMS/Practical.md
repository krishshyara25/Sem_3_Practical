# Q1. Write SQL queries to create a table MenuItems with the following:
- item_id INT (Primary Key)
- item_name VARCHAR(50) (Unique)
- price INT (Not Null)
- category VARCHAR(30)

```
CREATE TABLE menu_items (
    item_id INT PRIMARY KEY,
    item_name VARCHAR(100) UNIQUE,
    price DECIMAL(10,2) NOT NULL,
    category VARCHAR(50)
);
```

# Q2. Write Sql queries for the following operations on MenuItems table.
- Insert three menu items into the table.
- Update the price of any item.
- Delete one item using item_id.
- Find the average price of all items.
- Find the sum of all prices.

## Insert Three Menu Items
```
    INSERT INTO menu_items (item_id, item_name, price, category)
VALUES 
(1, 'Margherita Pizza', 299.00, 'Main Course'),
(2, 'Cold Coffee', 149.00, 'Beverage'),
(3, 'Chocolate Cake', 199.00, 'Dessert');
```

## Update the Price of Any Item
```
UPDATE menu_items
SET price = 159.00
WHERE item_name = 'Cold Coffee';
```

## Delete One Item Using Item ID
```
DELETE FROM menu_items
WHERE item_id = 3;
```

## Find the Average Price of All Items
```
SELECT AVG(price) AS average_price
FROM menu_items;
```

## Find the Sum of All Prices
```
SELECT SUM(price) AS total_price
FROM menu_items;
```