const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
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
    // var allUsers = getAllUsers();
    // allUsers.then(async function (result) {
    //     console.log(JSON.stringify.result);
    //     // Compare passwords
    //     // const match = await bcrypt.compare(pass, result.password);
    //     // if (match) {
    //     //     res.json({ message: `User ${result.email} is logged in` });
    //     // }

    //     // res.sendStatus(401);
    // });
    // Check for duplicates
    // const duplicates = allUsers.find((person) => person.email == email);
    // if (duplicates) return res.sendStatus(409);

    try {
        // Encrypt password
        const hashedPassword = await bcrypt.hash(pass, saltRounds);
        // Store the user in the database
        const newUser = { email: email, pass: hashedPassword, role: role };
        var insertedU = insertU(newUser);
        insertedU.then(async function (result) {
            console.log(result);
        });
        // console.log(insertedUser);
        return res.status(201).json({ message: `New user ${email} created` });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

module.exports = { handleNewUser };
