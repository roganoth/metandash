var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon"
});
var inquirer = require("inquirer");

function openConnection() {
    connection.connect(function (err, res) {
        if (err) {
            console.log(err);
        };
        console.log("You've connected to Bamazon!\n");
        inventoryCheck();
    });
}

function inventoryCheck() {
    connection.query("select item_id, product_name, price from inventory", function (err, res) {
        if (err) {
            console.log(err);
        };
        console.log("===================================================================");
        for (i = 0; i < res.length; i++) {
            console.log(res[i].item_id + "| " + res[i].product_name + " " + "$" + res[i].price);
            console.log("===================================================================");
        }
    })
}

function userPrompt() {
    openConnection();
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the ID of the item you would like to buy?",
                name: "ID"
            },
            {
                type: "input",
                message: "How many would you like to buy?",
                name: "quantity"
            }
        ]).then(function (purchase) {
            var itemID = parseInt(purchase.ID);
            var amount = parseInt(purchase.quantity);
            var currentQuantity;
            connection.query("select stock_quantity from inventory where item_id = " + mysql.escape(itemID), function (err, res) {
                currentQuantity = res[0].stock_quantity;
                if (currentQuantity >= amount) {
                    console.log("yes")
                    connection.query("update inventory set quantity to ? where item_id is = " + mysql.escape(currentQuantity) - mysql.escape(amount), mysql.escape(itemID), function (err, response) {
                        console.log("Purchase complete.");
                    });
                }
                else {
                    if (amount > currentQuantity) {
                        console.log("We don't have that many of that item in stock.");
                    }
                };
            });
            connection.end();
        });
}

userPrompt();