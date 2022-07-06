const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const PORT = process.env.PORT || 3000;
require("dotenv").config();

const url = process.env.DATABASE_URL;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Connected");
});

const app = express();

app.use(express.json());
app.use("/api", routes);

app.listen(PORT, (req, res) => {
  console.log("Server running at port - 3000");
});
