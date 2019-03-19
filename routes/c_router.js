const express = require("express");
const db = require("../data/db_actions.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cohorts = await db.get();
    res.status(200).json(cohorts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
