/* Server for zachselindh.dev */

// Express dependencies.
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

// Create an instance of the express app.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static folder for assets
app.use(express.static(path.join(__dirname, "public")));

const routes = require("./routes/profileRoutes");

app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening at port " + PORT);
});
