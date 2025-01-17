const Users = require("../Model/user");
const userService = require("../Service/user");
const jwt = require("jsonwebtoken");
const userMiddleware = {
  validate: async (req, res, next) => {
    try {
      const { name, email, userId, password } = req.body;
      if (!name) throw new Error("name requred");
      if (!email) throw new Error("email requred");
      if (!userId) throw new Error("userId required");
      if (!password) throw new Error("password required");
      return next();
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
  authen: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if (!email) throw new Error("Email required");
      if (!password) throw new Error("password required");
      //Find user
      const user = await Users.findOne({ email });
      if (!user) throw new Error("Email or password not correct");

      //Compare password
      const hashFromDB = user.password;
      const isPassCorrect = await userService.compareHash(password, hashFromDB);
      if (!isPassCorrect) throw new Error("Email or password not correct");
      return next();
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  },
  checkLogin: async (req, res, next) => {
    //
    try {
      const token = req.headers.authorization.split("Bearer")[1];
      if (!token) throw new Error("Login required");
      return next();
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  },
  author: async (req, res, next) => {
    try {
      const token = req.headers.authorization.split("Bearer ")[1];
      const user = jwt.verify(token, "duongvihao");
      if (!user) return new Error("Wrong users");
      return next();
    } catch (error) {
      console.log("eroor", error);
    }
  },
};
module.exports = userMiddleware;
