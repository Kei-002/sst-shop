// DECLARATION/REQUIRE  SECTION START

const express = require('express')
require('dotenv').config()

const mysql = require('mysql')
const Joi = require('joi');
var cors = require('cors')

const app = express();

const api = process.env.API_URL;

// Routes
const custRoutes = require("./routes/customer");
const empRoutes = require("./routes/employee");
const itemRoutes = require("./routes/item");
const catRoutes = require("./routes/category");
const shipRoutes = require("./routes/shipper");
const serviceRoutes = require("./routes/service");
// Routes END

// DECLARATION/REQUIRE SECTION END

// APP USE SECTION START

app.use(express.json());
app.use(cors());

// Routes USE START
app.use(`${api}/customers`, custRoutes);
app.use(`${api}/employees`, empRoutes);
app.use(`${api}/items`, itemRoutes);
app.use(`${api}/categories`, catRoutes);
app.use(`${api}/shippers`, shipRoutes);
app.use(`${api}/services`, serviceRoutes);
// Routes USE END

app.use("/public/uploads", express.static(__dirname + "/public/uploads"));
// APP USE SECTION END

// const schema = Joi.object({
//     name: Joi.string().min(3).required()
// })

const port = process.env.PORT || 3000;
// console.log();
app.listen(port, () => console.log(`listening on port ${port}...`))
