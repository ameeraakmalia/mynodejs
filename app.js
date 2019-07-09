var express = require("express");
var path = require("path");
var $ = require("jquery")
var routes = require("./routes");
var app = express();

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
//app.set("view engine", "pug");
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/css'));

app.use(routes);

app.listen(app.get("port"), function () {
    console.log("Server started at port " + app.get("port"));
});

console.log("help");