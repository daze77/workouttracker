const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

var PORT = process.env.PORT || 3000;

const app = express();

// this helps log items int he console log so that you can trace back - makes it easy to see what is happening when you click buttons
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
// app.use(require("./routes/api.js"));


require("./routes/html-routes")(app);
// require("./routes/api-routes")(app);

app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT}`);
});