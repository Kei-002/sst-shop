const express = require("express");
const router = express.Router();
const con = require("../conmysql");
const multer = require("multer");
const moment = require("moment");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const fs = require("fs");
const Customer = require("../models/Customer");
// const session = require("express-session");

const FILE_TYPE_MAP = {
    "image/png": "png",
    "image/jpeg": "jpeg",
    "image/jpg": "jpg",
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const isValid = FILE_TYPE_MAP[file.mimetype];
        let uploadError = new Error("invalid image type");

        if (isValid) {
            uploadError = null;
        }
        cb(uploadError, "public/uploads");
    },
    filename: function (req, file, cb) {
        const fileName = file.originalname.split(" ").join("-");
        const extension = FILE_TYPE_MAP[file.mimetype];
        cb(null, `${fileName}-${Date.now()}.${extension}`);
    },
});

const uploadOptions = multer({
    storage: storage,
});

router.get("/", (req, res) => {
    var allInfo = {};

    Customer.findOne({
        where: {
            user_id: req.session.user_id,
        },
    })
        .then((data) => {
            console.log(data);
            allInfo["customer"] = data;
            // return res.status(200).json(data);
            let sql =
                "SELECT c.*, i.item_name,i.sell_price,oi.*, ol.* from customers c INNER JOIN orderinfos oi ON c.id = oi.customer_id INNER JOIN orderlines ol ON oi.id = ol.orderinfo_id INNER JOIN items i ON i.id = ol.item_id WHERE c.id = ?";
            con.query(sql, [data.id], (error, results, fields) => {
                return res
                    .status(200)
                    .json({ customer: data, transactions: results });
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({
                Message:
                    err.message ||
                    "Something unfortunate happened at getting services",
            });
        });
});

module.exports = router;
