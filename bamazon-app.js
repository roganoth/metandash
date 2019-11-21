var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "bamazon"
});

function inventoryCheck() {
    connection.query("select * from inventory", function(err, data){
        if (err) throw err;        
        console.log(data);
    })
}

inventoryCheck();

function userPrompt() {
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
    ])
}

userPrompt();