const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./config/db.config"); // Connect to the database

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

// Routes
const taskRoutes = require("./api/routes/task.route");
app.use("/api/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
