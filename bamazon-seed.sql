drop database if exists bamazon;
create database bamazon;
use bamazon;

-- creates inventory table
create table inventory (
    item_id int not null,
    product_name varchar (40) not null,
    department_name varchar (40),
    price int (10, 2),
    stock_quantity int not null,
    primary key (item_id)
)

-- populates inventory
insert into inventory (item_id,product_name,department_name,price,stock_quantity)
    values (1, "sample item", "sample department", 10.02, 1)
