const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/user");
// const url = "mongodb+srv://priyasingh:Priya@cluster0.kepu1bm.mongodb.net/user?retryWrites=true&w=majority";

app.post("/", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, response) => {
        if (response) {
          res.json("success");
        } else {
          return res.json("The password is incorrect");
        }
      });
    } else {
      res.json("No record existed");
    }
  });
});
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      UserModel.create({ name, email, password: hash })
        .then((employees) => res.json(employees))
        .catch((err) => res.json(err));
    })
    .catch((err) => console.log(err.message));
});

app.listen(3002, () => {
  console.log("server is running");
});
