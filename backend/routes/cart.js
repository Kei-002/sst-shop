const express = require('express')
const router = express.Router()
const con = require('../conmysql')
const multer = require('multer')
const moment = require('moment')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const fs = require('fs')
const Cart = require("../models/Cart");
const {
    response
} = require("express");
const Item = require("../models/Stock");
const Category = require("../models/Category");
const Customer = require("../models/Customer");
const Orderinfo = require("../models/Orderinfo");
const Orderline = require("../models/Orderline");
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
    console.log(req.params.id);
    // console.log(req.session);
    var itemID = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    Item.findByPk(itemID, {
        include: Category
    }).then((itemInfo) => {
        // console.log(itemInfo);
        console.log(itemInfo.dataValues);
        cart.add(itemInfo.dataValues, itemID);
        req.session.cart = cart;
        // console.log(req.session);
        console.log(req.session.id);
        console.log(cart);
        return res.status(200).json({
            item_name: itemInfo.dataValues.item_name,
            quantity: cart.totalItems
        });
    });
    // console.log(itemInfo);
    // // Add item to cart session
    // cart.add(itemInfo, itemID);
    // req.session.cart = cart;
    // return res.sendStatus(200, "Item added successfully");
});

router.get("/update/:id/:quantity", function (req, res, next) {
    console.log(req.params.id);
    // console.log(req.session);
    var itemID = req.params.id;
    var itemQuantity = req.params.quantity;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    Item.findByPk(itemID, {
        include: Category
    }).then((itemInfo) => {
        // console.log(itemInfo);
        console.log(itemInfo.dataValues);
        cart.update(itemInfo.dataValues, itemQuantity, itemID);
        req.session.cart = cart;
        // console.log(req.session);
        console.log(req.session.id);
        console.log(cart);
        return res.status(200).json({
            item_name: itemInfo.dataValues.item_name,
            totalPrice: cart.totalPrice,
            quantity: cart.totalItems
        });
    });
    // console.log(itemInfo);
    // // Add item to cart session
    // cart.add(itemInfo, itemID);
    // req.session.cart = cart;
    // return res.sendStatus(200, "Item added successfully");
});

router.get("/cart", function (req, res, next) {
    console.log(req.session);
    if (!req.session.cart) {
        console.log("test id nt", req.session.id);
        return res.status(200).json("No items in cart");
    }
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    console.log("test id ", req.session.id);
    console.log(cart.totalPrice);
    return res.status(200).json({
        cartItems: cart.getItems(),
        totalPrice: cart.totalPrice,
    });
});

router.get("/checkoutinfo", function (req, res, next) {
    console.log(req.session.cart);
    if (!req.session.cart) {
        return res.status(200).json("No items in cart");
    }
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    console.log(req.session);
    Customer.findOne({
        where: {
            user_id: req.session.user_id
        }
    }).then(
        (data) => {
            console.log("test id ", req.session.id);
            console.log(cart.totalPrice);
            console.log(data);
            return res.status(200).json({
                customer: data.dataValues,
                cartItems: cart.getItems(),
                totalPrice: cart.totalPrice,
            });
        }
    );
});

router.get("/checkout", function (req, res, next) {
    // console.log(req.session.cart);
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    console.log(req.session);
    Customer.findOne({
        where: {
            user_id: req.session.user_id
        }
    }).then(
        (data) => {
            var info = data.dataValues;

            let sql =
                "INSERT INTO orderinfos (customer_id, shipper_id) VALUES (?, ?); ";
            con.query(sql, [info.id, "1"], (error, results, fields) => {
                if (error) {
                    return console.error(error.message);
                }
                console.log(results);
                var allItems = cart.getItems();
                allItems.forEach((item) => {
                    let sql1 =
                        "INSERT INTO orderlines (orderinfo_id, item_id, quantity) VALUES (?, ?,?); ";
                    con.query(
                        sql1,
                        [results.insertId, item.item.id, item.quantity],
                        (error, results, fields) => {
                            if (error) {
                                return console.error(error.message);
                            }

                        }
                    );
                });
                return res.status(200).json("Ukiii");
            });
        })


});

router.get("/shipper", (req, res) => {
    let sql = `SELECT * FROM shippers`;
    con.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        console.log(results);
        return res.status(200).json(results);
    });
});



router.get("/remove/:id", function (req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.remove(productId);
    req.session.cart = cart;
    // res.redirect("/cart");
    return res.send(200, "Item removed successfully");
});



router.get('/get_data', function (request, response, next) {

    var search_query = request.query.search_query;

    var query = `
    select item_name from items where item_name LIKE '%${search_query}%' UNION SELECT service_name from services WHERE service_name LIKE '%${search_query}%'
    LIMIT 10
    `;

    con.query(query, function (error, data) {

        response.json(data);

    });

});


module.exports = router
