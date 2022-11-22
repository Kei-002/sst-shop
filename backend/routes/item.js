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

// GET ITEM LIST
router.get("/", (req, res) => {
    let sql = `SELECT i.*, c.category_name, s.quantity FROM items i
                INNER JOIN categories c ON c.id = i.category_id
                INNER JOIN stocks s ON s.item_id = i.id`;
    con.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        console.log(results);
        return res.status(200).json(results);
    });
});

// CREATE ITEM
router.post("/", uploadOptions.single("uploads"), (req, res) => {
    let createdat = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
    let updatedat = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
    // const encryptedPassword = bcrypt.hashSync(req.body.pass, saltRounds)

    const file = req.file;

    // console.log(req.file)
    if (!file) return res.status(400).send("No image in the request");

    const fileName = file.filename;
    const basePath = `${req.protocol}://${req.get("host")}/public/uploads/`;
    let img_path = `${basePath}${fileName}`;

    let sql1 = `INSERT INTO items(item_name, description, category_id, cost_price, sell_price, img_path) VALUES(?,?,?,?,?,?)`;
    console.log(sql1);
    con.query(
        sql1,
        [
            req.body.item_name,
            req.body.desc,
            req.body.catDropdown,
            req.body.cost_price,
            req.body.sell_price,
            img_path,
        ],
        (error, results, fields) => {
            let sql = `INSERT INTO stocks(item_id, quantity) VALUES(?,?)`;
            console.log(sql);
            var itemID = results.insertId;
            con.query(
                sql,
                [itemID, req.body.quantity],
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
    let sql = `SELECT i.*, c.category_name, s.quantity FROM items i
                INNER JOIN categories c ON c.id = i.category_id
                INNER JOIN stocks s ON s.item_id = i.id
                where i.id = ${req.params.id}`;
    con.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        console.log(results);
        return res.status(200).json(results);
    });
});

//UPDATE ITEM
router.put("/:id", uploadOptions.single("uploads"), (req, res) => {
    const file = req.file;

    // console.log(req.file)
    if (!file) return res.status(400).send("No image in the request");

    const fileName = file.filename;
    const basePath = `${req.protocol}://${req.get("host")}/public/uploads/`;
    let img_path = `${basePath}${fileName}`;
    let sql = `UPDATE items set item_name = ?, description = ?, category_id = ?, cost_price = ?, sell_price = ?, img_path = ? WHERE id = ?`;
    console.log(fileName, sql);
    con.query(
        sql,
        [
            req.body.item_name,
            req.body.desc,
            req.body.catDropdown,
            req.body.cost_price,
            req.body.sell_price,
            img_path,
            req.params.id,
        ],
        (error, results, fields) => {
            if (error) {
                console.log(req.params.id);
                return console.error(error.message);
            }
            let sql1 = `UPDATE stocks set quantity = ? WHERE item_id = ?`;
            con.query(
                sql1,
                [req.body.quantity, req.params.id],
                (error, results, fields) => {
                    if (error) {
                        console.log(req.params.id);
                        return console.error(error.message);
                    }
                    // return res.status(200).json(results);
                }
            );
            return res.status(200).json(results);
        }
    );
});

//DELETE ITEM
router.delete("/:id", (req, res) => {
    console.log(req.params.id);
    let sql = `DELETE FROM items WHERE id = ${req.params.id}`;
    con.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        // console.log(results[0]);

        // delimg(results);

        return res.status(200).json(results);
    });
});

module.exports = router;
