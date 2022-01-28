const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get("/", (req, res) => {
  res.send("products working");
});

router.post("/new", (req, res) => {});

module.exports = router;
