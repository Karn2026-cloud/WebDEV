const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");

const dotenv = require("dotenv");

const User = require("./models/User");

dotenv.config();

mongoose.connect(
  process.env.MONGO_URI
);

const createAdmin = async () => {

  const password =
    await bcrypt.hash(
      "admin123",
      10
    );

  await User.create({
    email:
      "admin@gmail.com",

    password
  });

  console.log(
    "Admin Created"
  );

  process.exit();
};

createAdmin();