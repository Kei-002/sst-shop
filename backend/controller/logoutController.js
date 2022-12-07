const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const con = require("../conmysql");
const moment = require("moment");
const saltRounds = 10;
const Promise = require("promise");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const getUserToken = (data) =>
    new Promise((resolve, reject) => {
        con.query(
            `SELECT * FROM personal_access_tokens where name = '${data}'`,
            (err, rows) => {
                if (err) {
                    reject(err);
                }
                resolve(rows[0]);
            }
        );
    });

const deleteToken = (data) =>
    new Promise((resolve, reject) => {
        con.query(
            `DELETE FROM personal_access_tokens where token = '${data}'`,
            (err, rows) => {
                if (err) {
                    reject(err);
                }
                resolve(rows[0]);
            }
        );
    });

const handleLogout = async (req, res) => {
    console.log(req.body);
    const cookies = req.cookies;
    var data = req.body;
    var { email, pass } = data;
    console.log(email, pass);
    // Check if no cookies
    if (!cookies?.jwt) return res.sendStatus(401);
    console.log(cookies.jwt);
    const refreshToken = cookies.jwt;

    var foundUser = getUserToken(email);

    foundUser
        .then(async function (result) {
            deleteToken(refreshToken);
            res.clearCookie("jwt", {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000,
            });
            res.sendStatus(204);
        })
        .catch(function (error) {
            // (*)

            if (error) {
                res.clearCookie("jwt", {
                    httpOnly: true,
                    maxAge: 24 * 60 * 60 * 1000,
                });
                res.sendStatus(204);
            } else {
                alert("Can't handle such error");

                throw error; // throwing this or another error jumps to the next catch
            }
        });

    res.sendStatus(401);
};

module.exports = {
    handleLogout,
};
