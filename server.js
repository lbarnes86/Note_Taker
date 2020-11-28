var express = require("express");
var path = require("path");
var fs = require("fs");
const db = require("./db/db.json");

var PORT = process.env.PORT || 8080;

var app = express();



app.listen(PORT, function() {
    console.log("APP listening on PORT: " + PORT);
});