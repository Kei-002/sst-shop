const express = require("express");
const router = express.Router();
const con = require("../conmysql");
const multer = require("multer");
const moment = require("moment");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const fs = require("fs");
const registerController = require("../controller/registerController");
const jwt = require("jsonwebtoken");
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

// router.post("/", handleLogin);
// router.post("/", uploadOptions.single("uploads"), handleLogin);

router.post(
    "/",
    uploadOptions.single("uploads"),
    registerController.handleNewUser
);

// router.get("/verify/:email", async (req, res) => {
//     try {
//         const {
//             user: { id },
//         } = jwt.verify(req.params.email, process.env.SECRET_KEY);
//         await models.User.update({ confirmed: true }, { where: { id } });
//     } catch (e) {
//         res.send("error");
//     }

//     return res.redirect("http://localhost:3001/login");
// });

router.get("/verify", function (req, res) {
    token = req.query.email;

    console.log(token);
    if (token) {
        try {
            jwt.verify(token, process.env.SECRET_KEY, async (e, decoded) => {
                if (e) {
                    console.log(e);
                    return res.sendStatus(403);
                } else {
                    var email = decoded.email;

                    User.update({ confirmed: 1 }, { where: { email: email } });
                    return res.redirect("http://localhost:8000/login");
                }
            });
        } catch (err) {
            console.log(err);
            return res.sendStatus(403);
        }
    } else {
        return res.sendStatus(403);
    }
});

module.exports = router;
