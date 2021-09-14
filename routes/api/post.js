const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Post = require("../../models/Post");
const Profile = require("../../models/Profile");
const User = require("../../models/User");
const {
  PostPost,
  GetPost,
  GetPostById,
  DeletePostById,
  PutLike,
  PutUnlike,
  PostComment,
  DeleteComment,
} = require("../../contollers/Post");

// @route POST api/posts
// @desc create a post
// @access Public

router.post(
  "/",
  [auth, [check("text", "text is required").not().isEmpty()]],
  PostPost
);

// @route GET api/posts
// @desc Get  all  post
// @access Private
router.get("/", auth, GetPost);

// @route GET api/posts/:id
// @desc Get    post
// @access Private
router.get("/:id", auth, GetPostById);
// @route DELETE api/posts/:id
// @desc Delete  a  post
// @access Private
router.delete("/:id", auth, DeletePostById);
//@route PUT api/posts/like/:id
//@desc Like a post
//@access Private
router.put("/like/:id", auth, PutLike);

//@route PUT api/posts/unlike/:id
//@desc Like a post
//@access Private
router.put("/unlike/:id", auth, PutUnlike);

// @route POST api/posts/comment/:id
// @desc comment  a post
// @access Private

router.post(
  "/comment/:id",
  [auth, [check("text", "text is required").not().isEmpty()]],
  PostComment
);
// @route DELETE api/posts/comment/:id/:comment_id
// @desc delete a comment
// @access Private
router.delete("/comment/:id/:comment_id", auth, DeleteComment);

module.exports = router;
