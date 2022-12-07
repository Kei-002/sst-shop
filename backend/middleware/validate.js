const jwt = require("jsonwebtoken");

module.exports = {
    validateRegister: (req, res, next) => {
        var data = req.body;
        if (!data.email) {
            return res.status(400).send({ message: "Please enter an email" });
        }

        if (!data.password || data.password.legth < 3) {
            return res
                .status(400)
                .send({ message: "Please use a stronger password" });
        }
        next();
    },
    isLoggedIn: () => {},
};
