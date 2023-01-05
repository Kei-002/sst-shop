// DECLARATION/REQUIRE  SECTION START

const express = require("express");
require("dotenv").config();

const mysql = require("mysql");
const Joi = require("joi");
var cors = require("cors");
var verifyJWT = require("./middleware/verifyJWT");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cookieSession = require("cookie-session");
// const sequelize = require("./dbtest");
const passport = require("passport");
const app = express();

const api = process.env.API_URL;

// app.use(
//     session({
//         secret: process.env.SECRET_KEY,
//         cookie: {},
//         resave: false,
//         saveUninitialized: false,
//     })
// );
app.use(cookieParser());
app.use(
    session({
        secret: process.env.SECRET_KEY,
        resave: false,
        saveUninitialized: true,
        cookie: {
            sameSite: "none"
        },
    })
);

// Routes
const custRoutes = require("./routes/customer");
const empRoutes = require("./routes/employee");
const itemRoutes = require("./routes/item");
const catRoutes = require("./routes/category");
const shipRoutes = require("./routes/shipper");
const serviceRoutes = require("./routes/service");
const registerRoutes = require("./routes/register");
const cartRoutes = require("./routes/cart");
const profRoutes = require("./routes/profile");
const authRoutes = require("./routes/authTest");
const authinRoutes = require("./routes/auth");
const refreshRoutes = require("./routes/refresh");
const logoutRoutes = require("./routes/logout");
const usrRoutes = require("./routes/user");
const publicRoutes = require("./routes/public");

// Routes END

// DECLARATION/REQUIRE SECTION END

// APP USE SECTION START

// const corsOptions = {
//     origin: "*",
//     credentials: true,
//     ///..other options
// };

app.use(express.json());
app.use(
    cors({
        origin: [
            "http://127.0.0.1",
            "http://127.0.0.1:8000",
            "http://127.0.0.1:5000",
            "http://localhost:8000",
            "http://localhost:5000",
        ],
        // origin: true,
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization", "authorization"],
        exposedHeaders: ["Set-Cookie"],
        // maxAge: 30 * 24 * 60 * 60 * 1000,
        // expires: new Date(Date.now() + 30 * 86400 * 1000),
    })
);

// app.use(passport.initialize());
// app.use(passport.session());
// app.use(function (req, res, next) {
//     res.locals.session = req.session;
//     next();
// });
// Routes USE START
app.use(`${api}/register`, registerRoutes);
app.use(`${api}/auths`, authRoutes);
app.use(`${api}/login`, authinRoutes);
app.use(`${api}/refresh`, refreshRoutes);
app.use(`${api}/logout`, logoutRoutes);
app.use(`${api}/public`, publicRoutes);
app.use(`${api}/shop`, cartRoutes);

// verify first if user has token
// app.use(verifyJWT);
app.use(`${api}/profiles`, verifyJWT, profRoutes);
app.use(`${api}/customers`, verifyJWT, custRoutes);
app.use(`${api}/employees`, verifyJWT, empRoutes);
app.use(`${api}/items`, verifyJWT, itemRoutes);
app.use(`${api}/categories`, verifyJWT, catRoutes);
app.use(`${api}/shippers`, verifyJWT, shipRoutes);
app.use(`${api}/services`, verifyJWT, serviceRoutes);
app.use(`${api}/users`, verifyJWT, usrRoutes);

// Routes USE END

app.use("/public/uploads", express.static(__dirname + "/public/uploads"));
// APP USE SECTION END

// const schema = Joi.object({
//     name: Joi.string().min(3).required()
// })

const port = process.env.PORT || 3000;
// console.log();
app.listen(port, () => console.log(`listening on port ${port}...`));
