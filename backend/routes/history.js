const express = require('express')
const router = express.Router()
const con = require('../conmysql')
const multer = require('multer')
const moment = require('moment')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const fs = require('fs')
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

router.get('/chistory', function (request, response, next) {

    var search_query = request.query.search_query;

    var query = `
    SELECT CONCAT(lname,', ' ,fname) as 'cName', item_name, quantity, status, shipper_name, orderinfos.created_at as 'odate' from customers 
    INNER JOIN orderinfos on customers.id = orderinfos.customer_id INNER JOIN orderlines on orderinfos.id = orderlines.orderinfo_id INNER JOIN items on orderlines.item_id = items.id INNER JOIN shippers on orderinfos.shipper_id = shippers.id 
    WHERE lname like '%${search_query}%' OR fname like '%${search_query}%'
    `;

    con.query(query, function (error, data) {

        response.json(data);

    });

});

module.exports = router
