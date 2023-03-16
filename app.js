// var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
// var logger = require("morgan");
require("dotenv").config();
const cors = require("cors");
require("./models/Course");
// const {
//   getAssignmentsByStudent,
//   getAssignmentsBySubject,
// } = require("./services/dynamodb");
// const {
//   getAssignmentsByStudent,
//   getAssignmentsBySubject,
// } = require("./services/student");
// const { submitAssignment } = require("./services/student");

// const {
//   adminViewAllAssignmentsBySubject,
//   adminViewAssignmentsBySubject,
//   adminViewAssignmentByStudents,
// } = require("./controllers/admin");

var app = express();
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
require("./services/mongoose");

// view engine setup
// app.set(path.join(__dirname, "./views"));
// app.set("view engine", "ejs");

// app.use(logger("dev"));
app.use(express.json());
// app.use(
//   express.json({
//     type: ["application/json", "text/plain"],
//   })
// );
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.route("/assignment")

app.use("/lms/API",require("./routes/course"));

app.use("/lms",(req,res)=>{
  res.send({success:true});
});
module.exports = app;
