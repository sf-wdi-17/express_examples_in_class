// index.js
// The control file for a node server that will help us demonstrate how
// URL params and query params work.

// So as is typical for node apps, the first thing we do is to initialize our npm modules and assign them to variables.
var express = require("express");
var app = express();

// So let's define some routes to use:

app.get('/', function(request, result) {
	
	// Let's create our HTML response
	var html = "<html><body>";
	html += "<h1>Node App Example</h1>";
	html += "<p>Our example app will help us to understand how URL and query parameters work</p>";
	html += "<p>Try entering a URL with the following structure:</p>";
	html +=	"<ul><li>http://localhost:3000/person/Brett?age=32</li></ul>";
	html += "</body></html>";

	// Now we send the html back as our response
	result.send(html);
})

// This route catches URLs that have a path that matches http://localhost:3000/person/:name
app.get('/person/:name', function(request, result) {
	
	// Let's create our HTML response
	var html = "<html><body>";
	html += "<h1>URL and Query Params</h1>";
	html += "<p>The following information was provided to the server:</p>";
	html += "<ul>";
	html += "<li>request.params.name = " + request.params.name + "</li>";
	html += "<li>request.query.age = " + request.query.age + "</li>";
	html += "</ul>";
	html += "</body></html>";

	// Now we send the html back as our response
	result.send(html);
});

// This route will help us see how query parameters are passed in:
// We'll use JSON.stringify to convert a JS object into a string that we can display in our HTML
app.get('/queries', function(request, result) {
	// JSON.stringify will help us convert a Javascript Object to a JSON text string
	var queriesAsString = JSON.stringify(request.query);

	// Let's create our HTML response
	var html = "<html><body>";
	html += "<h1>Query Params</h1>";
	html += "<p>The following query params were passed through:</p>";
	html += "<ul>";
	html += "<li>request.query = " + queriesAsString + "</li>";
	html += "</ul>";
	html += "</body></html>";

	// Now we send the html back as our response.
	result.send(html);
});


// This is how you start the server
// We've already seen just "app.listen(3000)"
// Here we see that you can also pass in a callback to be called when the server is started
app.listen(3000, function() {

	var msg = "====== LISTENING ======";
	console.log(msg);

}); 



