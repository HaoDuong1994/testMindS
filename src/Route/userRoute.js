const express = require("express");
const userRouter = express.Router();
const userController = require("../Controller/user");
const userMiddleware = require("../Middleware/user");
//Create User
userRouter.post("/register", userMiddleware.validate, userController.create);

//User login
userRouter.post("/login", userMiddleware.authen, userController.login);
module.exports = userRouter;
