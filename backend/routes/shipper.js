const express = require("express");
const router = express.Router();
const con = require("../conmysql");
const multer = require("multer");
const moment = require("moment");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const fs = require("fs");
const toastr = require("toastr");

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
    let sql = `SELECT * FROM shippers`;
    con.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        console.log(results);
        return res.status(200).json(results);
    });
});

// CREATE SHIPPERS
router.post("/", uploadOptions.single("uploads"), (req, res) => {
    let sql = `INSERT INTO shippers(shipper_name, phone) VALUES (?,?)`;
    // console.log(sql, req.body);
    con.query(sql, [req.body.shipper_name, req.body.phone], function (error, results, fields) {
        if (error) {
            
            return console.error(error.message);
        }
        // toastr.success('Have fun storming the castle!', 'Miracle Max Says');
        return res.status(200).json(results);
    });
});

// router.post('/', function (req, res, next) {
//     var catn = req.body.catn;

//     var sql = `INSERT INTO shippers (shipper_name) VALUES ("${catn}")`;
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log('Record Inserted');
//         return res.status(200).json(result);
//     });
// });

// GET ID (EDIT)
router.get("/:id", (req, res) => {
    let sql = `SELECT * FROM shippers
                where id = ${req.params.id}`;
    con.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        console.log(results);
        return res.status(200).json(results);
    });
});

//UPDATE SHIPPERS
router.put("/:id", uploadOptions.single("uploads"), (req, res) => {
    let sql = `UPDATE shippers set shipper_name = ?, phone = ? WHERE id = ?`;
    console.log(req.body);
    con.query(
        sql,
        [req.body.eshipper_name, req.body.ephone, req.params.id],
        (error, results, fields) => {
            if (error) {
                console.log(req.params.id);
                return console.error(error.message);
            }

            return res.status(200).json(results);
        }
    );
});

//DELETE SHIPPERS
router.delete("/:id", (req, res) => {
    let sql = `DELETE FROM shippers WHERE id = ${req.params.id}`;
    con.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        return res.status(200).json(results);
    });
});

module.exports = router;
