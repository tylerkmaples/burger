var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var bObj = { burgers: data};
        console.log(bObj);
        res.render("index", bObj);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function() {
        res.redirect("/burgers");
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = `id = ${req.params.id}`;
    console.log("condition", condition);
    
    burger.updateOne({ devoured: req.body.devoured }, condition, function(res) {
        if (res.changedRows == 0) {
            return res.status(404).end();
        } else{
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    burger.deleteOne(condition, function(res) {
        if (res.affectedRows == 0) {
            return res.status(404).end()
        } else{
            res.status(200).end();
        }
    });
});

module.exports = router;