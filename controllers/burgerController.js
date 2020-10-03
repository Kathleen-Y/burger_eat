var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function (data){
        res.render("index", {burgerData: data})
    })
});

router.post("/api/burger", function(req, res) {
  burger.create(req.body.burger_style, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

router.put("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    burger.updateOne({
      devoured: req.body.devoured
    }, condition, function(data) {
      if (data.changedDevoured == 1) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router;