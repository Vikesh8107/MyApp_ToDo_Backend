// /src/config/db.config.js

require("dotenv").config();
const mongoose = require("mongoose");
const Task = require("../api/models/tasks.model");

const mongoURL = process.env.MONGO_URL;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Remove the following options as they are deprecated
  // useCreateIndex: true,
  // useFindAndModify: false,
};

mongoose.Promise = global.Promise;
const db = mongoose.connect(mongoURL, connectionParams);

module.exports = db;
