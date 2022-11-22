// DECLARATION/REQUIRE  SECTION START

const express = require('express')
require('dotenv').config()

const mysql = require('mysql')
const Joi = require('joi');
var cors = require('cors')

const app = express()
const custRoutes = require('./routes/customer');
const api = process.env.API_URL

// DECLARATION/REQUIRE SECTION END

// APP USE SECTION START

app.use(express.json())
app.use(cors())
app.use(`${api}/customers`, custRoutes)
app.use("/public/uploads", express.static(__dirname + "/public/uploads"));

// APP USE SECTION END

// const schema = Joi.object({
//     name: Joi.string().min(3).required()
// })




const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`))
