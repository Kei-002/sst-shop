const express = require("express");
const router = express.Router();
const con = require("../conmysql");
// const Shipper = require("../conmysql");

const sequelize = require("../con_sequelize");
const Service = require("../models/Service");

router.get("/services", (req, res) => {
    Service.findAll()
        .then((data) => {
            return res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).send({
                Message:
                    err.message ||
                    "Something unfortunate happened at getting services",
            });
        });
});

module.exports = router;
