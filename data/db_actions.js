const db = require("./db.js");

module.exports = {
  get,
  getById,
  getStudentsOfCohort,
  addCohort,
  update,
  del
};

function get() {
  return db.select().from("cohorts");
}

function getById(id) {
  return db("cohorts").where("id", id);
}

function getStudentsOfCohort(id) {
  return db("cohorts")
    .select(["cohorts.name as Cohort", "students.name as Student"])
    .innerJoin("students", "cohorts.id", "students.cohort_id")
    .where("cohorts.id", id);
}

function addCohort(cohort) {
  return db("cohorts").insert(cohort);
}

function update(theid, thecohort) {
  return db("cohorts")
    .where("id", theid)
    .update(thecohort);
}

function del(id) {
  return db("cohorts")
    .where("id", id)
    .del();
}
