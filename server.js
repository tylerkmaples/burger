var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory
// the application directory
// app.use(express.static("public"));
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give server access
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start the server 
app.listen(PORT, function() {
    console.log(`Server listening on: http://localhost:${PORT}`);
});