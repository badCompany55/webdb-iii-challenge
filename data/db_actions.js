const db = require("./db.js");

module.exports = {
  get,
  getById
};

function get() {
  return db.select().from("cohorts");
}

function getById(id) {
  return db("cohorts").where("id", id);
}
