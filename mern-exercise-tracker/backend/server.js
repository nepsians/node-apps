const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb://localhost:27017";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("coonect to mongodb");
});

const exerciseRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exerciseRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.warn(`server running on port: ${port}`);
});
