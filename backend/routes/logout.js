const express = require("express");
const router = express.Router();
const con = require("../conmysql");

const logoutController = require("../controller/logoutController");

router.post("/", logoutController.handleLogout);

module.exports = router;
