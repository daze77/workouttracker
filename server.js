const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

// this helps log items int he console log so that you can trace back - makes it easy to see what is happening when you click buttons
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});



app.use(require("./routes/api-routes"));
require("./routes/html-routes")(app);

app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT}`);
});