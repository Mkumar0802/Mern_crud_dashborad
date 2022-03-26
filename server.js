const express = require("express");

const mongo = require("./mongo");
const cors = require("cors");
var employeeRouter = require('./routes/employee')
require("dotenv").config();

var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const port = process.env.PORT || 8080;
var employeeRouter = require('./routes/employee')
mongo.connect();



const app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json())
app.use('/employee', employeeRouter)

app.use((req, res, next) => {
    console.log("call middleware");
    next();
});




app.listen(port, () => {
    console.log(`server is running at ${port}`);
});



module.exports = app;