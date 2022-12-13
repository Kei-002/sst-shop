const express = require("express");
const router = express.Router();
const con = require("../conmysql");
// const Shipper = require("../conmysql");
const multer = require("multer");
const moment = require("moment");
const bcrypt = require("bcrypt");
const verifyJWT = require("../middleware/verifyJWT");
const fs = require("fs");
const toastr = require("toastr");
var mysqlBackbone = require("mysql-backbone");


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

// GET SHIPPERS LIST
router.get("/", (req, res) => {
    let sql = `SELECT * FROM users`;
    con.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        console.log(results);
        return res.status(200).json(results);
    });
});

module.exports = router;
