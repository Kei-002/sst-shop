const jwt = require("jsonwebtoken");
require("dotenv").config;

const verifyJWT = (req, res, next) => {
    const authHeader = req.header("authorization");
    if (!authHeader) return res.sendStatus(401);
    console.log(authHeader);
    const token = authHeader.split(" ")[1];

    jwt.verify(token, "SSTSECRET", (err, decoded) => {
        if (err) return res.sendStatus(403); //inavlid token
        req.email = decoded.email;
        next();
    });
};

module.exports = verifyJWT;
