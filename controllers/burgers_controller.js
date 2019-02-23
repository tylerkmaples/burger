var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

var orm = require("../config/orm")

router.get("/", function(req, res) {
    orm.selectAll(function(error, burgers) {
        if (error) {
            return res.status(200)
        }
        res.render("index", { burgers });
    })
});

module.exports = router;