var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
//
// var mysql = require("mysql");
// var conn = mysql.createConnection({
//   host: "localhost",
//   name: "ljp",
//   password: "ljp",
//   database: "TEST_DB_LJP",
// });

//
// var mysql = require("mysql");
// var conn = mysql.createConnection({
//   host: "localhost",
//   //   name: "root",
//   //   password: "root",
//   user: "root",
//   password: "root",
//   database: "employees",
// });
// conn.connect(function (err) {
//   if (err) {
//     throw err;
//   }
//   console.log("connected mysql!!");
// });

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

const cors = require("cors");
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(cors);

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api", require("./routes/api"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

//
// app.get('/haha', (req, res) => {
//   conn.query('SELECT * from emp', (error, rows) => {
//     if (error) throw error;
//     console.log('User info is: ', rows);
//     res.send(rows);
//   });
// });

// app.get("/second", function (req, res) {
//   res.json({ id: 2, name: "second" });
// });
//
module.exports = app;
