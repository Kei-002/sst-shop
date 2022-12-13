const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const Customer = require("../models/Customer");
const User = require("../models/User");
const Employee = require("../models/Employee");
const nodemailer = require('nodemailer');
const jwt = require("jsonwebtoken");
const handlebars = require('handlebars');
const filePath = path.join(__dirname, '../routes/email.html');
const source = fs.readFileSync(filePath, 'utf-8').toString();
const template = handlebars.compile(source);


// const fileData = () => fs.readFileSync(require.resolve("../routes/email.html"), {
//     encoding: "utf8"
// });

const {
    getAllUsers,
    insertCustomer,
    insertU,
} = require("../controller/authController");

// const { insertUser } = require("../controller/authController");
// const user = require("../routes/user");
const saltRounds = 10;

var message = '<p>Hi! Enjoy Shopping At SangSang Tek!</p>';

const handleNewUser = async (req, res) => {
    // var allUser = [];
    var { email, pass } = req.body;
    var role = "customer";
    console.log(email, pass, role);
    // Check if no data in the body
    if (!email || !pass)
        return res.status(400).json({
            message: "No email or password"
        });

    // Check if email exists
    // sync User.findOne({ where: { email: email } }).then((data) => {
    //     res.status(400).json({ message: "Email already exists" });
    // });

    try {
        // Encrypt password
        const hashedPassword = await bcrypt.hash(pass, saltRounds);
        // Store the user in the database
        const newUser = {
            email: email,
            pass: hashedPassword,
            role: role
        };
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
                const usrdata = {
                    lastname: req.body.lname,
                };

                var mail = {
                    "email": email,
                }

                sendMail(mail, 'Welcome to SangSanTek! Please Confirm your Email!', usrdata);
                return res.status(201).json({
                    message: `New User ${email} created`
                });
            })
            .catch((err) => {
                res.status(500).send({
                    Message: err.message,
                });
            });
        // return res.status(201).json({
        //     message: `New user ${email} created`
        // });
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
};

function sendMail(to, subject, userdata) {

    const token_mail_verification = jwt.sign(to, process.env.SECRET_KEY, {
        expiresIn: "1d",
    });
    var url =
        "http://localhost:5000/api/sst/register/verify?email=" + token_mail_verification;

    const replacements = {
        url: url,
        lname: userdata.lastname,
    };
    const htmldata = template(replacements);

    let mailTransporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "juswatoktok@gmail.com",
            pass: "ggadiftlkcdbguyk",
        },
    });

    let details = {
        from: "SangSang Tek",
        to: to.email,
        subject: subject,
        text: "Thank you for Registering!",
        html: htmldata,
    };

    mailTransporter.sendMail(details, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Email has Sent");
        }
    })


}

module.exports = {
    handleNewUser
};
