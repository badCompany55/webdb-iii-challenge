const express = require("express");
const helm = require("helmet");
const morg = require("morgan");
const cohortsRouter = require("./routes/c_router.js");
const studentsRouter = require("./routes/s_router.js");

const server = express();

server.use(helm(), express.json(), morg("dev"));
server.use("/api/cohorts", cohortsRouter);
server.use("/students", studentsRouter);

server.get("/", (req, res) => {
  res.send(`<h1>Welcome to the Home Page</h1>`);
});

module.exports = server;
