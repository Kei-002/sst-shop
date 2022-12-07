const express = require("express");
const router = express.Router();
const con = require("../conmysql");

const refreshTokenController = require("../controller/refreshTokenController");

router.post("/", refreshTokenController.handleRefreshToken);

module.exports = router;
