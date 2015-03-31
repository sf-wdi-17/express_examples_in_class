// Require the modules we're going to need:
var express = require("express"),
    ejs = require("ejs"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override");

// Now instantiate our express app:
var app = express();

// Tell express to use EJS as its view engine
app.set("view engine", "ejs");

// Set a root route

app.get('/', function(req, res) {
	var cmates = [
	{ name: "John", age: "21" },
	{ name: "Brett", age: "14"},
	{ name: "Christina", age: "24"},
	{ name: "Rick", age: "27"}
	];

	res.render("index", { taco: cmates } );
});


app.listen(3000);
