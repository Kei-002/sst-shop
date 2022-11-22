const express = require("express");
const router = express.Router();
const con = require("../conmysql");
const multer = require("multer");
const moment = require("moment");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const fs = require("fs");

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

// GET CATEGORY LIST
router.get("/", (req, res) => {
    let sql = `SELECT * FROM categories`;
    con.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        console.log(results);
        return res.status(200).json(results);
    });
});

// CREATE CATEGORY
router.post("/", uploadOptions.single("uploads"), (req, res) => {
    let sql = `INSERT INTO categories(category_name) VALUES (?)`;
    // console.log(sql, req.body);
    con.query(sql, [req.body.category_name], function (error, results, fields) {
        if (error) {
            return console.error(error.message);
        }
        return res.status(200).json(results);
    });
});

// GET ID (EDIT)
router.get("/:id", (req, res) => {
    let sql = `SELECT * FROM categories
                where id = ${req.params.id}`;
    con.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        console.log(results);
        return res.status(200).json(results);
    });
});

//UPDATE CATEGORY
router.put("/:id", uploadOptions.single("uploads"), (req, res) => {
    let sql = `UPDATE categories set category_name = ? WHERE id = ?`;
    // console.log(fileName, sql);
    con.query(
        sql,
        [req.body.category_name, req.params.id],
        (error, results, fields) => {
            if (error) {
                console.log(req.params.id);
                return console.error(error.message);
            }

            return res.status(200).json(results);
        }
    );
});

//DELETE CATEGORY
router.delete("/:id", (req, res) => {
    let sql = `DELETE FROM categories WHERE id = ${req.params.id}`;
    con.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        return res.status(200).json(results);
    });
});

module.exports = router;
