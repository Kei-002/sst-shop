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
const User = require("../models/User");

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
router.get("/", async (req, res) => {
    await User.findAll({ paranoid: false }).then((data) => {
        return res.status(200).json(data);
    });
});
router.get("/restore/:id", (req, res) => {
    User.update(
        { status: "active" },
        { where: { id: req.params.id }, paranoid: false }
    );
    User.restore({ where: { id: req.params.id } });

    return res.status(200).json({ message: "Account restored" });
});

//DELETE SHIPPERS
router.delete("/:id", async (req, res) => {
    User.update(
        { status: "deactivated" },
        { where: { id: req.params.id }, paranoid: false }
    );
    User.destroy({ where: { id: req.params.id } });

    return res.status(200).json({ message: "Account deactivated" });
});

module.exports = router;



