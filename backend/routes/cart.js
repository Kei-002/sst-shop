const express = require('express')
const router = express.Router()
const con = require('../conmysql')
const multer = require('multer')
const moment = require('moment')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const fs = require('fs')
const Cart = require("../models/Cart");
const { response } = require("express");
const Item = require("../models/Stock");

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

// GET COMPONENTS/SERVICES LIST
router.get("/sitems", (req, res) => {
    let sql = `SELECT i.*, c.category_name FROM items i INNER JOIN categories c ON i.category_id = c.id`;
    con.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        console.log(results);
        return res.status(200).json(results);
    });
});

router.get("/sservices", (req, res) => {
    let sql = `SELECT * FROM services`;
    con.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        console.log(results);
        return res.status(200).json(results);
    });
});

// Cart Functions
router.get("/add/:id", function (req, res, next) {
    var itemID = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    // Get item information
    var itemInfo = Item.findByPk(itemID);

    // Add item to cart session
    cart.add(itemInfo.item_name, itemID);
    req.session.cart = cart;
    return res.sendStatus(200);
});

router.get("/cart", function (req, res, next) {
    if (!req.session.cart) {
        return res.send(200, "No items in cart");
    }
    var cart = new Cart(req.session.cart);
    return res.json(cart.getItems());
    // res.render("cart", {
    //     title: "NodeJS Shopping Cart",
    //     products: cart.getItems(),
    //     totalPrice: cart.totalPrice,
    // });
});

router.get("/remove/:id", function (req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.remove(productId);
    req.session.cart = cart;
    // res.redirect("/cart");
    return res.send(200, "Item removed successfully");
});


module.exports = router