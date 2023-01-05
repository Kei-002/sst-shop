const express = require("express");
const router = express.Router();
const con = require("../conmysql");
const multer = require("multer");
const moment = require("moment");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const fs = require("fs");
const Cart = require("../models/Cart");
const { response } = require("express");
const Item = require("../models/Stock");
const Category = require("../models/Category");
const Customer = require("../models/Customer");
const Orderinfo = require("../models/Orderinfo");
const Orderline = require("../models/Orderline");

router.get("/items", function (req, res) {
    let sql1 =
        "SELECT ol.*, SUM(ol.quantity) as totalItems, i.item_name FROM orderlines ol INNER JOIN items i ON ol.item_id = i.id GROUP BY i.id";
    con.query(sql1, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        console.log(results);
        return res.status(200).json(results);
    });
});

router.get("/sales", function (req, res) {
    let sql1 =
        "SELECT oi.*,SUM(ol.quantity) as totalSales FROM orderinfos oi INNER JOIN orderlines ol ON ol.orderinfo_id = oi.id GROUP BY oi.created_at; ";
    con.query(sql1, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        console.log(results);
        return res.status(200).json(results);
    });
});

router.get("/dates", function (req, res) {
    let sql1 =
        "SELECT MIN(created_at) as 'minDate', MAX(created_at) as 'maxDate', COUNT(*) FROM orderinfos";
    con.query(sql1, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        // const minDate = new Date(results);
        // console.log(minDate);
        console.log(results);
        return res.status(200).json(results);
    });
});

router.get("/filtersales/:firstDate/:secondDate", function (req, res) {
    console.log(req.params.firstDate, "test ", req.params.secondDate);
    var minDate = req.params.firstDate;
    var maxDate = req.params.secondDate;
    let sql1 =
        "SELECT oi.id, oi.customer_id,oi.created_at,SUM(ol.quantity) as totalSales FROM orderinfos oi INNER JOIN orderlines ol ON ol.orderinfo_id = oi.id WHERE created_at >= ? AND created_at <=? GROUP BY created_at";
    con.query(sql1, [minDate, maxDate], (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        console.log(results);
        return res.status(200).json(results);
    });
});

module.exports = router;
