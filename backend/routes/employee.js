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

// UNLINK IMAGES FUNCTION

function delimg(results) {
    const str = results[0].img_path;

    const imgpath = str.split("http://localhost:5000/");
    console.log(imgpath[1]);

    fs.unlink(imgpath[1], (err) => {
        if (err) throw err;
        console.log("Image Deleted");
    });
}

// GET EMPLOYEE LIST
router.get("/", (req, res) => {
    let sql = `SELECT * FROM employees`;
    con.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        console.log(results);
        return res.status(200).json(results);
    });
});

// CREATE EMPLOYEE
router.post("/", uploadOptions.single("uploads"), (req, res) => {
    let createdat = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
    let updatedat = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
    const encryptedPassword = bcrypt.hashSync(req.body.pass, saltRounds);

    let sql1 = `INSERT INTO users(email, password, role, created_at, updated_at) VALUES(?,?,?,?,?)`;
    console.log(sql1, encryptedPassword);
    con.query(
        sql1,
        [req.body.email, encryptedPassword, "employee", createdat, updatedat],
        (error, results, fields) => {
            if (error) {
                return console.error(error.message);
            }

            var userid = results.insertId;
            const file = req.file;

            // console.log(req.file)
            if (!file) return res.status(400).send("No image in the request");

            const fileName = file.filename;
            const basePath = `${req.protocol}://${req.get(
                "host"
            )}/public/uploads/`;
            let img_path = `${basePath}${fileName}`;
            let sql = `INSERT INTO employees(user_id, fname, lname, addressline, phone, img_path, created_at, updated_at) VALUES(?,?,?,?,?,?,?,?)`;
            console.log(sql);
            con.query(
                sql,
                [
                    userid,
                    req.body.fname,
                    req.body.lname,
                    req.body.addressline,
                    req.body.phone,
                    img_path,
                    createdat,
                    updatedat,
                ],
                (error, results, fields) => {
                    if (error) {
                        return console.error(error.message);
                    }

                    return res.status(200).json(results);
                }
            );
        }
    );
});

// GET ID (EDIT)
router.get("/:id", (req, res) => {
    let sql = `SELECT * FROM employees where id = ${req.params.id}`;
    con.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        console.log(results);
        return res.status(200).json(results);
    });
});

//UPDATE EMPLOYEE
router.put("/:id", uploadOptions.single("uploads"), (req, res) => {
    const file = req.file;

    // console.log(req.file)
    if (!file) return res.status(400).send("No image in the request");

    const fileName = file.filename;
    const basePath = `${req.protocol}://${req.get("host")}/public/uploads/`;
    let img_path = `${basePath}${fileName}`;
    let sql = `UPDATE employees set fname = ?, lname = ?, addressline = ?, phone = ?, img_path = ? WHERE id = ?`;
    console.log(fileName, sql);
    con.query(
        sql,
        [
            req.body.fname,
            req.body.lname,
            req.body.addressline,
            req.body.phone,
            img_path,
            req.params.id,
        ],
        (error, results, fields) => {
            if (error) {
                console.log(req.params.id);
                return console.error(error.message);
            }

            return res.status(200).json(results);
        }
    );
});

//DELETE EMPLOYEE
router.delete("/:id", (req, res) => {
    let sql = `SELECT * from employees where id = ${req.params.id}`;
    con.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        console.log(results[0]);

        delimg(results);

        let sql1 = `DELETE from users where id = ${results[0].user_id}`;
        con.query(sql1, (error, results, fields) => {
            if (error) {
                return console.error(error.message);
            }
            return res.status(200).json(results[0]);
        });
    });
});

module.exports = router;
