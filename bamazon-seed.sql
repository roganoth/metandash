drop database if exists bamazon;
create database bamazon;
use bamazon;

-- creates inventory table
create table inventory (
    item_id int auto_increment not null,
    product_name varchar (40) not null,
    department_name varchar (40),
    price decimal (10, 2),
    stock_quantity int not null,
    primary key (item_id)
)

-- populates inventory
insert into inventory (product_name,department_name,price,stock_quantity)
    values 
        ("Tennis Racket", "Sporting Goods", 149.99, 100),
        ("Tennis Shoes", "Sporting Goods", 75, 50),
        ("Bowling Ball(16lbs)", "Sporting Goods", 159.99, 5),
        ("Xbox One Elite Controller", "Video Games", 149.99, 3),
        ("Nintento Switch", "Video Games", 299.99, 50),
        ("PS4 Pro", "Video Games", 399.99, 10),
        ("Pokemon Sword", "Video Games", 59.99, 50),
        ("Cheerios(Chocolate)", "Grocery", 3.49, 3),
        ("D&D Rick and Morty Box", "Board Games", 29.99, 1),
        ("Reign", "Grocery", 2.49, 3);
