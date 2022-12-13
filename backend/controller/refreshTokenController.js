const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const con = require("../conmysql");
const moment = require("moment");
const saltRounds = 10;
const Promise = require("promise");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const PersonalToken = require("../models/PersonalToken");

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
    if (!cookies?.jwtAccess || !cookies?.jwtRefresh) return res.sendStatus(401);
    console.log(cookies.jwtAccess, cookies.jwtRefresh);
    const refreshToken = cookies.jwtRefresh;
    console.log("this is a test");

    const decodedInfo = jwt.verify(refreshToken, process.env.SECRET_KEY);

    PersonalToken.findOne({ where: { name: decodedInfo.email } }).then(
        (data) => {
            // console.log(data);
            const result = data.dataValues;
            jwt.verify(refreshToken, process.env.SECRET_KEY, (err, decoded) => {
                console.log(decoded, result);
                if (err || result.name !== decoded.email)
                    return res.sendStatus(403);
                const accessToken = jwt.sign(
                    { email: result.name },
                    process.env.SECRET_KEY,
                    { expiresIn: "5m" }
                );

                PersonalToken.update(
                    { token: accessToken },
                    {
                        where: {
                            id: result.id,
                        },
                    }
                );
                console.log("Nope");
                // updateUserToken(refreshToken, result.id);
                res.json({ accessToken });
            });
        }
    );

    // var foundUser = getUserToken(refreshToken);

    // foundUser.then(async function (result) {
    //     console.log(result);
    //     jwt.verify(refreshToken, process.env.SECRET_KEY, (err, decoded) => {
    //         if (err || result.email !== decoded.email)
    //             return res.sendStatus(403);
    //         const accessToken = jwt.sign(
    //             { email: result.email },
    //             process.env.SECRET_KEY,
    //             { expiresIn: "20s" }
    //         );
    //         updateUserToken(refreshToken, result.id);
    //         res.json({ accessToken });
    //     });
    // });
    // console.log("nah");
    // res.sendStatus(401);
};

module.exports = {
    getUserToken,
    handleRefreshToken,
};
