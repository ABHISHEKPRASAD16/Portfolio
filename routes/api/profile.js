const express = require("express");
const router = express.Router();
const request = require("request");
const config = require("config");
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const normalize = require("normalize-url");
const {
  findProfile,
  CreateProfile,
  GetProfile,
  GetProfileById,
  DeleteProfile,
  ProfileExperience,
  DeleteProfileExperience,
  ProfileEducation,
  DeleteProfileEducation,
} = require("../../contollers/Profile");

const Profile = require("../../models/Profile");
const User = require("../../models/User");
const Post = require("../../models/Post");

//@route GET api/profile/me
//@desc Get current  users profile
//@acess Private
router.get("/me", auth, findProfile);

//@route POST api/profile
//@desc Create or update user profile
//@acess Private

router.post(
  "/",
  [
    auth,
    [
      check("status", "Status is required").not().isEmpty(),
      check("skills", "Skills is required").not().isEmpty(),
    ],
  ],
  CreateProfile
);

//@route GET api/profile
//@desc Get all profiles
//@acess Public
router.get("/", GetProfile);

//@route GET api/profile/user/:user_id
//@desc Get all profile by User id
//@acess Public
router.get("/user/:user_id", GetProfileById);

//@route DELETE api/profile
//@desc Delete profile, user & post
//@acess Private
router.delete("/", auth, DeleteProfile);

// @route PUT api/profile/experience
// @desc Add profile experience
//@access Private
router.put(
  "/experience",
  [
    auth,
    [
      check("title", "Title is required").not().isEmpty(),
      check("company", "Company is required").not().isEmpty(),
      check("from", "From Date is required").not().isEmpty(),
    ],
  ],
  ProfileExperience
);

// @route DELETE api/profile/experience
//@desc Delete experience  from profile
//@access Private
router.delete("/experience/:exp_id", auth, DeleteProfileExperience);

// @route PUT api/profile/education
// @desc Add profile education
//@access Private
router.put(
  "/education",
  [
    auth,
    [
      check("school", "school is required").not().isEmpty(),
      check("degree", "degree is required").not().isEmpty(),
      check("fieldofstudy", "field of study is required").not().isEmpty(),
      check("from", "From Date is required").not().isEmpty(),
    ],
  ],
  ProfileEducation
);

// @route DELETE api/profile/education/:edu_id
//@desc Delete education from profile
//@access Private
router.delete("/education/:edu_id", auth, DeleteProfileEducation);

module.exports = router;
