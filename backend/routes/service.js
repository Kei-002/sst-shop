const express = require('express')
const router = express.Router()
const con = require('../conmysql')
const multer = require('multer')
const moment = require('moment')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const fs = require('fs')

const FILE_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg'
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const isValid = FILE_TYPE_MAP[file.mimetype];
        let uploadError = new Error('invalid image type');

        if (isValid) {
            uploadError = null;
        }
        cb(uploadError, 'public/uploads');
    },
    filename: function (req, file, cb) {
        const fileName = file.originalname.split(' ').join('-');
        const extension = FILE_TYPE_MAP[file.mimetype];
        cb(null, `${fileName}-${Date.now()}.${extension}`);
    }
});

const uploadOptions = multer({
    storage: storage
});

// UNLINK IMAGES FUNCTION

function delimg(results) {

    const str = results[0].img_path;

    const imgpath = str.split('http://localhost:5000/');
    console.log(imgpath[1]);

    fs.unlink(imgpath[1], (err) => {
        if (err) throw err;
        console.log('Image Deleted');
    });

}


// GET CUSTOMER LIST
router.get('/', (req, res) => {
    let sql = `SELECT * FROM services`;
    con.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        console.log(results);
        return res.status(200).json(results);
    });
});

// CREATE CUSTOMER
router.post('/', uploadOptions.single('uploads'), (req, res) => {

    const file = req.file;

    // console.log(req.file)
    if (!file) return res.status(400).send('No image in the request');

    const fileName = file.filename;
    const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;
    let img_path = `${basePath}${fileName}`

    let sql1 = `INSERT INTO services(service_name, description, price, img_path) VALUES(?,?,?,?)`;
    console.log(sql1, req.body);
    con.query(sql1, [req.body.service_name, req.body.description, req.body.price, img_path], (error, results, fields) => {
        if (error) {

            return console.error(error.message);
        }

        return res.status(200).json(results)
    });
});


// GET ID (EDIT)
router.get('/:id', (req, res) => {
    let sql = `SELECT * FROM services where id = ${req.params.id}`;
    con.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        console.log(results);
        return res.status(200).json(results);
    });
});

//UPDATE CUSTOMER
router.put('/:id', uploadOptions.single('uploads'), (req, res) => {

    const file = req.file;

    // console.log(req.file)
    if (!file) return res.status(400).send('No image in the request');

    const fileName = file.filename;
    const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;
    let img_path = `${basePath}${fileName}`
    let sql = `UPDATE services set service_name = ?, description = ?, price = ?, img_path = ? WHERE id = ?`;
    console.log(fileName, sql)
    con.query(sql, [req.body.service_name, req.body.description, req.body.price, img_path, req.params.id], (error, results, fields) => {
        if (error) {

            console.log(req.params.id)
            return console.error(error.message);
        }

        return res.status(200).json(results)
    });

})


//DELETE CUSTOMER
router.delete("/:id", (req, res) => {
    console.log(req.params.id);
    let sql = `DELETE FROM services WHERE id = ${req.params.id}`;
    con.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        // console.log(results[0]);

        // delimg(results);

        return res.status(200).json(results);
    });
});

module.exports = router
