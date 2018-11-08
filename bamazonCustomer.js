// ask about markdown files
//ask about how to get id to translate into item name in console.logs
//spruce up readMe with screenshots

var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user:"root",
    password:"password",
    database:"bamazon_db"
});

connection.connect(function(err){
	if (err) throw err;
	runSearch();
});

function runSearch(){
connection.query("SELECT * FROM products", function (err, res) {
	if (err) throw err;
	console.log("Item    Product      	\tDepartment \tPrice\t Stock");
	console.log("------------------------------------------------------------------");
	for (var i = 0; i < res.length; i++) {
		console.log(res[i].ItemID + " \t" + res[i].ProductName + "\t\t" + res[i].DepartmentName + "\t\t" + res[i].Price + " \t " + res[i].StockQuantity);
	}
	console.log("------------------------------------------------------------------");

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
    .then(function (answers) {
			connection.query('SELECT * FROM products WHERE ?', { ItemID: answers.product }, function (err, res) {
				if (err) throw err;
				if (res[0].StockQuantity > answers.qty) {

					var cost = res[0].Price * answers.qty
					console.log("-----------------------------------");
					console.log("                        ");
					console.log("                        ");
					console.log("                        ");
					console.log("                        ");
					console.log("Your order for item #" + answers.product +  " is validated! \nThe total cost is $" + cost.toFixed(2) + "\nThank you for ordering");

					console.log("************************************");
					console.log("                        ");
					console.log("                        ");
					console.log("                        ");
					console.log("                        ");
					console.log("                        ");
					console.log("                        ");
					console.log("                        ");
					console.log("                        ");
					

					var newQty = res[0].StockQuantity - answers.qty

					connection.query("UPDATE products SET ? WHERE ?", [{
						StockQuantity: newQty
					},
					{
						ProductName: answers.product
					}],

						function (err, res) {
						});
				}
				else {
					console.log("  ");
					console.log("  ");
					console.log("  ");
					console.log("  ");
					console.log("  ");
					console.log("  ");
					console.log("  ");
					console.log("  ");
					




					console.log("-----------------------------------");
					console.log("Sorry, we do not have enough #"+ answers.product + " in stock. \nWe only have " + res[0].StockQuantity + " units of " + answers.product + ". \nPlease try a different order. \nThank you!")
					console.log("************************************");
					console.log("  ");
					console.log("  ");
					console.log("  ");

				}
			})
		runSearch();
	})
});
}