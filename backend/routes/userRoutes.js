const express = require("express");
const { createUser, loginUser, getUsers } = require("../Controllers/userController");

const router = express.Router();

router.post("/register", createUser);

router.post("/login", loginUser);

router.get("/users", getUsers);

module.exports = router;
