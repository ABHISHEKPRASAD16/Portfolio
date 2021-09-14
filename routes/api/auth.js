const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const config = require("config");
const jwt = require("jsonwebtoken");
const { GetAuth, PostAuth } = require("../../contollers/Auth");
const { GetProfileById } = require("../../contollers/Profile");

//@route GET api/auth
//@desc Test route
//@acess Public
router.get("/", auth, GetAuth);

//@route POST api/auth
//@desc Authenticate user & get token
//@access Public
router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "password is required").exists(),
  ],
  PostAuth
);

module.exports = router;

module.exports = router;
