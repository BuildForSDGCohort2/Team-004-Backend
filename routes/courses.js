var express = require("express");
var router = new express.Router();

/* GET uploads listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a course resource");
});

module.exports = router;
