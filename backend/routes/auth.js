const express = require("express");
const router = express.Router();
const con = require("../conmysql");
const multer = require("multer");
const moment = require("moment");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const fs = require("fs");
const { handleLogin } = require("../controller/authController");

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

// router.post("/", handleLogin);
router.post("/", uploadOptions.single("uploads"), handleLogin);

module.exports = router;
