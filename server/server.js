// server.js
const express = require("express");
const app = express();
const User = require("./src/User.model");
const connectDb = require("./src/connection");

const PORT = 8080;

app.get("/users", async (req, res) => {
  const users = await User.find();

  res.json(users);
});

app.get("/user-create", async (req, res) => {
  const user = new User({ username: "userTest" });

  await user.save().then(() => console.log("User created"));

  res.send("User created \n");
});

app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);

  connectDb().then(() => {
    console.log("MongoDb connected");
  });
});