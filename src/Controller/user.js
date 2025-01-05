const Users = require("..//Model/user");
const userService = require("../Service/user");
const userController = {
  create: async (req, res) => {
    try {
      const { name, email, userId, password } = req.body;
      const hashPass = await userService.hassPassword(password);
      const userData = await Users.create({
        name,
        email,
        userId,
        password: hashPass,
      });
      res.status(201).json({
        message: "create user ok",
        data: userData,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
};
module.exports = userController;
