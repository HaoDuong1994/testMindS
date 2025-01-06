const express = require("express");
const postRouter = express.Router();
const postController = require("../Controller/posts");
const userMiddleware = require("../Middleware/user");
//Create Post
postRouter.post(
  "/",
  userMiddleware.checkLogin,
  userMiddleware.author,
  postController.create
);
module.exports = postRouter;
