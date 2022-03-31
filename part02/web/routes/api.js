var express = require("express");
// //
var mysql = require("mysql");
var conn = mysql.createConnection({
  host: "localhost",
  //   name: "root",
  //   password: "root",
  user: "ljp",
  password: "ljp",
  database: "TEST_DB_LJP",
});
// conn.connect(function (err) {
//   if (err) {
//     throw err;
//   }
//   console.log("connected mysql!!");
// });
var router = express.Router();

router.get("/first", function (req, res) {
  res.json({ id: 1, name: "first" });
});

router.get("/second", function (req, res) {
  res.json({ id: 2, name: "second" });
});

router.get("/haha", (req, res) => {
  conn.query("select * from dept", (error, rows) => {
    // if (error) throw error;
    console.log("User info is: ", rows);
    res.send(rows);
  });
});

module.exports = router;
