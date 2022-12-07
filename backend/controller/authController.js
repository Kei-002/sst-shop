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

const insertUser = function (data, callback = () => {}) {
    // return new Promise((resolve, reject) => {});
    // console.log(data);
    var encryptedPassword = bcrypt.hashSync(data.pass, saltRounds);
    var userid;
    let sql1 = `INSERT INTO users(email, password, role, created_at, updated_at) VALUES(?,?,?,?,?)`;
    // console.log(sql1, data);
    con.query(
        sql1,
        [data.email, encryptedPassword, data.role, createdat, updatedat],
        (error, results, fields) => {
            if (error) {
                return console.error(error.message);
            }
            userid = results.insertId;
        }
    );
    console.log("in authControllerid: " + userid);
    return callback(userid);
};

const insertU = (data) =>
    new Promise((resolve, reject) => {
        var encryptedPassword = bcrypt.hashSync(data.pass, saltRounds);
        let sql1 = `INSERT INTO users(email, password, role, created_at, updated_at) VALUES(?,?,?,?,?)`;
        console.log(data);
        con.query(
            sql1,
            [data.email, encryptedPassword, data.role, createdat, updatedat],
            (error, results, fields) => {
                if (error) {
                    reject(error);
                }
                // console.log(results);
                resolve(results.insertId);
            }
        );
        // con.query(`SELECT email FROM users`, (err, rows) => {
        //     if (err) {
        //         reject(err);
        //     }
        //     // const users = rows.map((row) => row.user);
        //     // console.log(users);
        //     resolve(rows);
        // });
    });

const getAllUser = function () {
    // / console.log(email);
    let sql = `SELECT * FROM users`;
    // AND password = ${bcrypt(req.body.password)}`;
    con.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        console.log(results);
        return results;
    });
};
const getAllUsers = (data) =>
    new Promise((resolve, reject) => {
        con.query(`SELECT email FROM users`, (err, rows) => {
            if (err) {
                reject(err);
            }
            // const users = rows.map((row) => row.user);
            // console.log(users);
            resolve(rows);
        });
    });

// const getUser = function (data) {
//     // / console.log(email);
//     let sql = `SELECT * FROM users where email = '${data}'`;
//     // AND password = ${bcrypt(req.body.password)}`;
//     // console.log(sql);
//     con.query(sql, (error, results, fields) => {
//         if (error) {
//             return console.error(error.message);
//         }
//         // console.log(JSON.stringify(results[0]["password"]), results);
//         return JSON.stringify(results[0]);
//     });
// };

const getUser = (data) =>
    new Promise((resolve, reject) => {
        con.query(
            `SELECT * FROM users where email = '${data}'`,
            (err, rows) => {
                if (err) {
                    reject(err);
                }
                resolve(rows[0]);
            }
        );
    });

const handleLogin = async (req, res) => {
    console.log(req.body);
    var data = req.body;
    var { email, pass } = data;
    console.log(email, pass);
    // Check if no data in the body
    if (!email || !pass)
        return res.status(400).json({ message: "No email or password" });
    var foundUser = getUser(email);

    foundUser.then(async function (result) {
        console.log(result);
        // Compare passwords
        const match = await bcrypt.compare(pass, result.password);
        if (match) {
            // JWT
            const accessToken = jwt.sign(
                { email: result.email },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: "20s" }
            );
            const refreshToken = jwt.sign(
                { email: result.email },
                process.env.REFRESH_TOKEN_SECRET,
                { expiresIn: "1d" }
            );
            console.log(refreshToken, accessToken);
            // sql = "INSERT INTO personal_access_token ";
            let sql = `INSERT INTO personal_access_tokens(tokenable_type, tokenable_id, name, token,expires_at,created_at, updated_at) VALUES(?,?,?,?,?,?,?)`;
            console.log(sql);
            con.query(
                sql,
                [
                    "ACCESS",
                    result.id,
                    result.email,
                    accessToken,
                    createdat,
                    createdat,
                    updatedat,
                ],
                (error, results, fields) => {
                    if (error) {
                        return console.error(error.message);
                    }
                }
            );
            res.cookie("jwt", refreshToken, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000,
            }); // 100days maxAge
            res.json({ accessToken });
            // res.json({ message: `User ${result.email} is logged in` });
        }

        res.sendStatus(401);
    });
};

module.exports = {
    getAllUsers,
    insertU,
    getUser,
    handleLogin,
};
