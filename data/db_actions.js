const db = require("./db.js");

module.exports = {
  get
};

function get() {
  return db("cohorts");
}
