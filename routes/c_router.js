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

router.get("/:id/students", async (req, res) => {
  try {
    const students = await db.getStudentsOfCohort(req.params.id);
    students.length > 0
      ? res.status(200).json(students)
      : res.status(400).json({ Error: "The request cohort does not exist" });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  const cohort = req.body;
  const { name } = req.body;
  try {
    if (name && name !== "") {
      const newCohort = await db.addCohort(cohort);
      res.status(200).json(newCohort);
    } else {
      res.status(400).json({ Error: "Name is required" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  const cohort = req.body;
  const { name } = req.body;
  const { id } = req.params;
  try {
    if (name && name !== "") {
      const upCohort = await db.update(id, cohort);
      res.status(201).json(upCohort);
    } else {
      res.status(400).json({ Error: "Name is required" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const idCheck = await db.getById(id);
    if (idCheck.length > 0) {
      const delCohort = await db.del(id);
      res.status(200).json({ success: "Deletion Success" });
    } else {
      res.status(400).json({ Error: "The requested cohort does not exist" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
