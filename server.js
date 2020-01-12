// *********************************************************************************
// Server.js 
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("app/public"));

var db = require("./models");

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes")(app);

// Starts the server to begin listening
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});