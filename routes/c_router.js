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

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const cohort = await db.getById(id);
    cohort.length > 0
      ? res.status(200).json(cohort)
      : res.status(400).json({ Error: `The requested cohort does not exist` });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
