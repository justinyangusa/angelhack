var mysql = require('mysql');
var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var connection = mysql.createConnection({
	host: "angelhack.c626h2danuwm.us-west-2.rds.amazonaws.com",
	user: "angelhack",
	password: "angelhack",
	database: "testing"
});

connection.connect();
function queryAsk() {
	rl.question("Enter query:", function (query) {
		if (["exit", "quit"].indexOf(query) == -1) {
			connection.query(query, function(err, rows, fields) {
				console.log(rows);
				queryAsk();
			});
		} else {
			connection.end();
			rl.close();
		}
	});
}
queryAsk();