const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("students test");
});

module.exports = router;
