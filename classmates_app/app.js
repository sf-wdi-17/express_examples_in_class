// app.js = A node app that will help us learn about our classmates:
// Require the modules we're going to need:
var express = require("express"),
    ejs = require("ejs"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override");
    
// Now instantiate our express app:
var app = express();

// First, let's set the view engine to be "EJS"
app.set('view engine', 'ejs');

// Set up body parser
app.use(bodyParser.urlencoded({extended: true}));
 
// Set up method override to work with POST requests that have the parameter "_method=DELETE"
app.use(methodOverride('_method'))

// Now rather than using res.send() we can use res.render() to load up an EJS file as a view:
app.get("/", function(request, result) {
	// So we use the render function as follows:
	// result.render('name of ejs file', { object to pass variables to EJS template } );
	result.render('index', { title: "Classmates App Example" }); // Because we set the view engine to EJS, we don't have to include the .ejs extension
})

// Using the POST method with an HTML form to send data to a webpage
app.post("/classmate", function(request, result) {
	result.render('classmate', { title: "A New Classmate:", classmate: request.body } );	
});


// Example of using the same route and view with a GET method instead
app.get("/classmate", function(request, result) {
	result.render('classmate', { title: "A New Classmate:", classmate: request.query } );
});

app.listen(3000);