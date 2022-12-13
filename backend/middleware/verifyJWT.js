const jwt = require("jsonwebtoken");
require("dotenv").config;

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.sendStatus(401);
    console.log(authHeader);
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.SECRET_TOKEN, (err, decoded) => {
        if (err) return res.sendStatus(403); //inavlid token
        req.email = decoded.email;
        next();
    });
};

module.exports = verifyJWT;
