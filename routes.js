var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
   // console.log("Hello World");
    res.render("index", {title: 'Homepage'});
});

module.exports = router;