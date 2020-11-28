var express = require("express");
var path = require("path");
var fs = require("fs");
const db = require("./db/db.json");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

//GET `/notes` - Should return the `notes.html` file.
app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

//GET `*` - Should return the `index.html` file
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});




app.listen(PORT, function() {
    console.log("APP listening on PORT: " + PORT);
});