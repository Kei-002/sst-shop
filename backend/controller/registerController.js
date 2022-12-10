const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const Customer = require("../models/Customer");
const User = require("../models/User");
const Employee = require("../models/Employee");

const {
    getAllUsers,
    insertCustomer,
    insertU,
} = require("../controller/authController");

// const { insertUser } = require("../controller/authController");
// const user = require("../routes/user");
const saltRounds = 10;

const handleNewUser = async (req, res) => {
    // var allUser = [];
    var { email, pass, role } = req.body;
    console.log(email, pass, role);
    // Check if no data in the body
    if (!email || !pass)
        return res.status(400).json({ message: "No email or password" });

    // Check if email exists
    // sync User.findOne({ where: { email: email } }).then((data) => {
    //     res.status(400).json({ message: "Email already exists" });
    // });

    try {
        // Encrypt password
        const hashedPassword = await bcrypt.hash(pass, saltRounds);
        // Store the user in the database
        const newUser = { email: email, pass: hashedPassword, role: role };
        User.create({
            email: email,
            password: hashedPassword,
            role: role,
            remember_token: null,
        })
            .then((data) => {
                if (data.role == "customer") {
                    Customer.create({
                        user_id: data.id,
                        fname: req.body.fname,
                        lname: req.body.lname,
                        addressline: req.body.addressline,
                        phone: req.body.phone,
                        img_path: "/storage/images/default.jpg",
                    });
                } else {
                    Employee.create({
                        user_id: data.id,
                        fname: req.body.fname,
                        lname: req.body.lname,
                        addressline: req.body.addressline,
                        phone: req.body.phone,
                        img_path: "/storage/images/default.jpg",
                    });
                }
                // return res
                //     .status(201)
                //     .json({ message: `New user ${data.email} created` });
            })
            .catch((err) => {
                res.status(500).send({
                    Message: err.message,
                });
            });
        return res.status(201).json({ message: `New user ${email} created` });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

module.exports = { handleNewUser };
