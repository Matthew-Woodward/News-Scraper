let express = require("express");
let logger = require("morgan");
let mongoose = require("mongoose");

let db = require("./models");

let PORT = process.env.PORT || 3000;

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

let app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
});


require("./routes/index.js")(app)


let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function () {
  console.log("App running on http://localhost:" + PORT);
});