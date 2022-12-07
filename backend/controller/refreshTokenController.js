const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const con = require("../conmysql");
const moment = require("moment");
const saltRounds = 10;
const Promise = require("promise");
require("dotenv").config();
const jwt = require("jsonwebtoken");

let createdat = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
let updatedat = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");

const getUserToken = (data) =>
    new Promise((resolve, reject) => {
        con.query(
            `SELECT * FROM personal_access_tokens where token = '${data}'`,
            (err, rows) => {
                if (err) {
                    reject(err);
                }
                console.log(rows);
                resolve(rows[0]);
            }
        );
    });

const updateUserToken = (token, id) =>
    new Promise((resolve, reject) => {
        con.query(
            `UPDATE personal_access_tokens set token='${token}' where tokenable_id = '${id}'`,
            (err, rows) => {
                if (err) {
                    reject(err);
                }
                console.log(rows);
                resolve(rows[0]);
            }
        );
    });

const handleRefreshToken = (req, res) => {
    console.log(req.body);
    const cookies = req.cookies;
    var data = req.body;
    var { email, pass } = data;
    console.log(email, pass);
    // Check if no cookies
    if (!cookies?.jwt) return res.sendStatus(401);
    console.log(cookies.jwt);
    const refreshToken = cookies.jwt;
    console.log("this is a test");
    var foundUser = getUserToken(refreshToken);

    foundUser.then(async function (result) {
        console.log(result);
        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            (err, decoded) => {
                if (err || result.email !== decoded.email)
                    return res.sendStatus(403);
                const accessToken = jwt.sign(
                    { email: result.email },
                    process.env.ACCESS_TOKEN_SECRET,
                    { expiresIn: "20s" }
                );
                updateUserToken(refreshToken, result.id);
                res.json({ accessToken });
            }
        );
    });
    console.log("nah");
    res.sendStatus(401);
};

module.exports = {
    getUserToken,
    handleRefreshToken,
};
