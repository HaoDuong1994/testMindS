const express = require("express");
const userRouter = express.Router();
const userController = require("../Controller/user");
const userMiddleware = require("../Middleware/user");
//Create User
userRouter.post("/register", userMiddleware.validate, userController.create);
module.exports = userRouter;
