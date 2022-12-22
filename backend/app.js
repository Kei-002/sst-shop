// DECLARATION/REQUIRE  SECTION START

const express = require('express')
require('dotenv').config()

const mysql = require('mysql')
const Joi = require('joi');
var cors = require('cors')
var verifyJWT = require("./middleware/verifyJWT");
const cookieParser = require("cookie-parser");
// const session = require("express-session");
// const sequelize = require("./dbtest");

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


// Routes
const custRoutes = require("./routes/customer");
const empRoutes = require("./routes/employee");
const itemRoutes = require("./routes/item");
const catRoutes = require("./routes/category");
const shipRoutes = require("./routes/shipper");
const serviceRoutes = require("./routes/service");
const registerRoutes = require("./routes/register");
const authRoutes = require("./routes/authTest");
const authinRoutes = require("./routes/auth");
const refreshRoutes = require("./routes/refresh");
const logoutRoutes = require("./routes/logout");
const usrRoutes = require("./routes/user");
// Routes END

// DECLARATION/REQUIRE SECTION END

// APP USE SECTION START

app.use(express.json());
app.use(cors());
app.use(cookieParser());
// app.use(bodyParser.json());

// Routes USE START
app.use(`${api}/register`, registerRoutes);
app.use(`${api}/auths`, authRoutes);
app.use(`${api}/login`, authinRoutes);
app.use(`${api}/refresh`, refreshRoutes);
app.use(`${api}/logout`, logoutRoutes);

// verify first if user has token
// app.use(verifyJWT);
app.use(`${api}/customers`, custRoutes);
app.use(`${api}/employees`, empRoutes);
app.use(`${api}/items`, itemRoutes);
app.use(`${api}/categories`, catRoutes);
app.use(`${api}/shippers`, shipRoutes);
app.use(`${api}/services`, serviceRoutes);
app.use(`${api}/users`, usrRoutes);


// Routes USE END

app.use("/public/uploads", express.static(__dirname + "/public/uploads"));
// APP USE SECTION END

// const schema = Joi.object({
//     name: Joi.string().min(3).required()
// })

const port = process.env.PORT || 3000;
// console.log();
app.listen(port, () => console.log(`listening on port ${port}...`))
