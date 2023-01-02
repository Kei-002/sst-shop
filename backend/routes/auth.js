const express = require("express");
const router = express.Router();
const con = require("../conmysql");
const multer = require("multer");
const moment = require("moment");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const fs = require("fs");
const { handleLogin } = require("../controller/authController");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const Customer = require("../models/Customer");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const User = require("../models/User");
const PersonalToken = require("../models/PersonalToken");
const store = require("store");
const { result } = require("lodash");
passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

// function setCookie(req, res, next) {
//     const accessToken = jwt.sign(
//         { email: profile.email, loginType: profile.provider },
//         process.env.SECRET_KEY,
//         { expiresIn: "2h" }
//     );
//     res.cookie("jwtAccess", accessToken, {
//         httpOnly: true,
//         maxAge: 300000, //5 minutes
//     });
//     next();
// }

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:5000/api/sst/login/google/callback",
            passReqToCallback: true,
        },
        (res, accessToken, refreshToken, profile, done) => {
            const user = User.findOne({
                where: { email: profile.email },
            });

            if (user === null) {
                console.log("Not found!");
            } else {
                const accessToken1 = jwt.sign(
                    { email: profile.email, loginType: profile.provider },
                    process.env.SECRET_KEY,
                    { expiresIn: "2h" }
                );
                // res.cookie("jwtAccess", accessToken1, {
                //     httpOnly: true,
                //     maxAge: 300000, //5 minutes
                // });
                PersonalToken.create({
                    tokenable_type: "ACCESS",
                    tokenable_id: 10,
                    name: profile.email,
                    token: accessToken1,
                });

                // store.set("user", { name: "Marcus" });

                // console.log(profile); // 'My Title'
                return done(null, accessToken1);
            }
        }
    )
);

passport.use(
    new FacebookStrategy(
        {
            clientID: process.env.FACEBOOK_APP_ID,
            clientSecret: process.env.FACEBOOK_APP_SECRET,
            callbackURL:
                "http://localhost:5000/api/sst/login/facebook/callback",
        },
        function (accessToken, refreshToken, profile, cb) {
            // const [user, created] = User.findOrCreate({
            //     where: { email: profile.email },
            // });
            // if (created) {
            //     Customer.create({
            //         first_name: profile.given_name,
            //         last_name: profile.family_name,
            //     });
            // }
            // user.then((data) => {
            //     PersonalToken.create({
            //         tokenable_type: "ACCESS",
            //         tokenable_id: data.id,
            //         name: data.email,
            //         token: accessToken,
            //     });
            //     res.cookie("jwtAccess", accessToken, {
            //         httpOnly: true,
            //         maxAge: 300000, //5 minutes
            //     });
            //     res.cookie("jwtRefresh", refreshToken, {
            //         httpOnly: true,
            //         maxAge: 3.154e10, // 1year
            //     });
            // });
            // console.log(user, accessToken, refreshToken);
            // return cb(JSON.stringify(user));
        }
    )
);

const FILE_TYPE_MAP = {
    "image/png": "png",
    "image/jpeg": "jpeg",
    "image/jpg": "jpg",
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const isValid = FILE_TYPE_MAP[file.mimetype];
        let uploadError = new Error("invalid image type");

        if (isValid) {
            uploadError = null;
        }
        cb(uploadError, "public/uploads");
    },
    filename: function (req, file, cb) {
        const fileName = file.originalname.split(" ").join("-");
        const extension = FILE_TYPE_MAP[file.mimetype];
        cb(null, `${fileName}-${Date.now()}.${extension}`);
    },
});

const uploadOptions = multer({
    storage: storage,
});

// router.post("/", handleLogin);
router.post("/", uploadOptions.single("uploads"), handleLogin);
router.get(
    "/google",
    passport.authenticate("google", {
        scope: ["email", "profile"],
    }),
    (req, res) => {
        const accessToken1 = jwt.sign(
            { email: profile.email, loginType: profile.provider },
            process.env.SECRET_KEY,
            { expiresIn: "2h" }
        );
        res.cookie("jwtAccess", accessToken, {
            httpOnly: true,
            maxAge: 300000, //5 minutes
        });
    }
);
router.get(
    "/facebook",
    passport.authenticate("facebook", {
        failureRedirect: "http://localhost:8000/login",
    })
);

router.get(
    "/google/callback",
    passport.authenticate("google", {
        failureRedirect: "http://localhost:8000/login",
        successRedirect: "http://localhost:8000/login",
    }),
    (req, res) => {
        // // setCookie(req, res);
        // return res.redirect(
        //     "http://localhost:5000/api/sst/login/google/callback/success"
        // );
    }
);

router.get("/google/callback/success", (req, res) => {
    // setCookie(req, res);
    const data = req.user;
    const accessToken = jwt.sign(
        { email: data.email, loginType: data.provider },
        process.env.SECRET_KEY,
        { expiresIn: "2h" }
    );
    res.cookie("jwtAccess", accessToken, {
        httpOnly: true,
        maxAge: 300000, //5 minutes
    });
    return res.json(accessToken);
});

module.exports = router;
