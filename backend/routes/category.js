const express = require("express");
const router = express.Router();
const con = require("../conmysql");

// GET CATEGORY LIST
router.get("/", (req, res) => {
    let sql = `SELECT * FROM categories`;
    con.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        console.log(results);
        return res.status(200).json(results);
    });
});

module.exports = router;
