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




// GET COMPONENTS/SERVICES LIST
router.get("/", (req, res) => {
    console.log(req.session.cart);
    // if (!req.session.cart) {
    //     return res.status(200).json("No items in cart");
    // }
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



module.exports = router
