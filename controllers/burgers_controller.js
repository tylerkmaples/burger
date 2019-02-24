var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    res.redirect('/burger');
});

router.get("/burgers", function(req, res){
    burger.all(function(error, data) {
        if (error) {
            return res.status(404)
        }
        var hbsObject = { burgers: data};
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burgers/create", function(req, res) {
    burger.create(["id", "burger_name"], [req.body.id, req.body.name], function() {
        res.redirect("/burgers");
    });
});

router.put("/burgers/update/:id", function (req, res) {
    var condition = `id = ${req.params.id}`;
    console.log("condition", condition);
    
    burger.update({ devoured: req.body.devoured }, condition, function() {
        res.redirect("/burgers");
    })
});

router.delete("/cats/delete/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    burger.delete(condition, function(){
        res.redirect("/");
    })
})

module.exports = router;