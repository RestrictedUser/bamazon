var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user:"root",
    password:"password",
    database:"bamazon_db"
});

connection.connect();

connection.query("SELECT * FROM products", function(err,res){
    if (err) throw err;
    console.log(res);

    inquirer
    .prompt([
        {
            type: "number",
            name: "product",
            message: "What is the id of the product you would like to buy?"
        },
        {
            type: "number",
            name: "qty",
            message: "How many would you like to buy?"
        }
    ])
    .then(function (productObj) {
			connection.query('SELECT * FROM products WHERE ?', { ItemID: productObj.product }, function (err, res) {
				if (err) throw err;
				// console.log(res)
				if (res[0].StockQuantity > productObj.qty) {

					var cost = res[0].Price * productObj.qty
					console.log("-----------------------------------");
					console.log("Your order is validated! \nThe total cost is $" + cost.toFixed(2) + "\nThank you for ordering")

					var newQty = res[0].StockQuantity - productObj.qty

					connection.query("UPDATE products SET ? WHERE ?", [{
						StockQuantity: newQty
					},
					{
						ProductName: productObj.product
					}],

						function (err, res) {
						});
				}
				else {
					console.log("-----------------------------------");
					console.log("Sorry, we do not have enough in stock. \nWe only have " + res[0].StockQuantity + " units of " + ansProd.product + ". \nPlease retry your order. \nThank you!")
				}
			})
		
	})
});