var express = require("express");
var router = express.Router();

var mysql = require("mysql");
var conn = mysql.createConnection({
  host: "localhost",
  user: "ljp",
  password: "ljp",
  port: 3306,
  database: "employees",
});

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/first", function (req, res) {
  res.json({ id: 1, name: "first" });
});

router.get("/second", function (req, res) {
  res.json({ id: 2, name: "second" });
});
router.get("/third", (req, res) => {
  res.json({ id: 3, name: "third" });
  conn.connect
  // conn.query(`select * from music`, (error, rows) => {
  //   if (error) throw error;
  //   console.log("User info is: ", rows);
  //   res.send(rows);
  // });
});

module.exports = router;
