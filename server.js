const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//calls for routes
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

app.listen(PORT, function () {
  console.log("APP listening on PORT: " + PORT);
});