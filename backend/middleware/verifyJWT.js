const jwt = require("jsonwebtoken");
require("dotenv").config;

const verifyJWT = (req, res, next) => {
    const authHeader =
        req.header("authorization") || req.header("Authorization");
    if (!authHeader) return res.sendStatus(401);
    console.log(authHeader);
    const token = authHeader.split(" ")[1];
    console.log(req.session.jwtAccess);
    // const token = req.session.jwtAccess;

    jwt.verify(token, "SSTSECRET", (err, decoded) => {
        if (err) return res.sendStatus(403); //inavlid token
        req.email = decoded.email;
        next();
    });
};

module.exports = verifyJWT;
