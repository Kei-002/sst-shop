const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const con = require("../conmysql");
const moment = require("moment");
const saltRounds = 10;
const Promise = require("promise");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const PersonalToken = require("../models/PersonalToken");


const handleLogin = async (req, res) => {
    console.log(req.body);
    var data = req.body;
    var { email, pass } = data;
    console.log(email, pass);
    // Check if no data in the body
    if (!email || !pass)
        return res.status(400).json({ message: "No email or password" });

    // Find if user exists
    User.findOne({ where: { email: email } })
        .then(async (data) => {
            console.log(data);
            // Compare passwords
            const match = await bcrypt.compare(pass, data.password);
            if (match) {
                // JWT
                const accessToken = jwt.sign(
                    { email: data.email },
                    process.env.SECRET_KEY,
                    { expiresIn: "2h" }
                );
                const refreshToken = jwt.sign(
                    { email: data.email },
                    process.env.SECRET_KEY,
                    { expiresIn: "1y" }
                );
                console.log(refreshToken, accessToken);
                PersonalToken.create({
                    tokenable_type: "ACCESS",
                    tokenable_id: data.id,
                    name: data.email,
                    token: accessToken,
                });
                res.cookie("jwtAccess", accessToken, {
                    httpOnly: true,
                    maxAge: 300000, //5 minutes
                });
                res.cookie("jwtRefresh", refreshToken, {
                    httpOnly: true,
                    maxAge: 3.154e10, // 1year
                });
                res.json({ accessToken });
            }
        })
        .catch((err) => {
            res.status(401).send({
                Message: err.message,
            });
        });
};

module.exports = {
    handleLogin,
};
