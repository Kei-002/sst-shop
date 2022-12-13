const express = require("express");
const router = express.Router();
const con = require("../conmysql");
// const User = require("../model/User");
const moment = require("moment");
const bcrypt = require("bcrypt");

const User = require("../models/User");
const Customer = require("../models/Customer");
const saltRounds = 10;
const fs = require("fs");
const {
    getAllUser,
    getUser,
    handleLogin,
} = require("../controller/authController");
const { insertUser } = require("../controller/authController");
// const validateMiddleware

router.get("/", (req, res) => {
    getAllUser();
    console.log(req.body);
    // let sql = `SELECT u.*, c.fname, c.lname FROM users u
    //             INNER JOIN customers c ON u.id = c.user_id
    //             where email = 'admin@admin.com' `;
    // // AND password = ${bcrypt(req.body.password)}`;
    // con.query(sql, (error, results, fields) => {
    //     if (error) {
    //         return console.error(error.message);
    //     }
    // console.log(getAllUser());
    return res.status(200).json(getAllUser());
    // });
});

router.post("/", (req, res) => {
    console.log(req.body);
    insertUser(req.body, req.body.role);
    // console.log(req.body);
    // let sql = `SELECT u.*, c.fname, c.lname FROM users u
    //             INNER JOIN customers c ON u.id = c.user_id
    //             where email = 'admin@admin.com' `;
    // // AND password = ${bcrypt(req.body.password)}`;
    // con.query(sql, (error, results, fields) => {
    //     if (error) {
    //         return console.error(error.message);
    //     }
    // console.log(getAllUser());
    return res.status(200).json({ message: "User Created" });
    // });
});

router.get("/login", (req, res) => {
    console.log(req.body);
    const data = req.body;
    // Get User
    // console.log(data);
    // var encryptedPassword = bcrypt.hashSync(data.pass, saltRounds);
    // let sql = `SELECT * FROM users where email = '${data.email}' AND password = '${encryptedPassword}'`;
    // console.log(sql);
    // con.query(sql, (error, results, fields) => {
    //     if (error) {
    //         return console.error(error.message);
    //     }
    //     if (results[0] == undefined || results[0] == null) {
    //         res.json({ message: `wrong username/password` });
    //     }
    //     console.log(results);
    //     res.json({ message: `User ${results.email} is logged in` });
    // });
    let sql = `SELECT * FROM users where email = '${data.email}'`;
    con.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        const userFound = results[0];
        console.log(userFound);

        // Checking login data
        console.log(data);
        var { email, pass } = data;
        console.log(email, pass);
        // Check if no data in the body
        if (!email || !pass)
            return res.status(400).json({ message: "No email or password" });

        // Compare passwords
        const match = bcrypt.compare(pass, userFound.password);
        if (match) {
            res.json({ message: `User ${userFound.email} is logged in` });
        } else {
            res.sendStatus(401);
        }
    });
});

router.get("/test", async (req, res) => {
    // const users = User.findAll();
    // console.log(users.every((user) => user instanceof User));
    // const users = await User.findAll({ include: Customer });
    const customers = await Customer.findAll({ include: User });
    res.json(customers);
    // console.log(JSON.stringify(users, null, 2));
});

module.exports = router;
