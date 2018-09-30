require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cheerio = require("cheerio");
var request = require("request")




var app = express();
var PORT = process.env.PORT || 3000;

// Routes


module.exports = app;