const Users = require("..//Model/user");
const userService = require("../Service/user");
const userController = {
  create: async (req, res) => {
    try {
      const { name, email, userId, password } = req.body;
      //hash pass in advance
      const hashPass = await userService.hassPassword(password);

      //create user
      const userData = await Users.create({
        name,
        email,
        userId,
        password: hashPass,
      });
      userData.save();

      //create token
      const payload = {
        name,
        id: userData.id,
      };
      const token = await userService.createToken(payload);
      res.status(201).json({
        message: "create user ok",
        data: userData,
        token,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
  login: async (req, res) => {
    try {
      //Get user
      const email = req.body.email;
      const user = await Users.findOne({ email });
      await user.save();
      const payload = {
        name: user.name,
        id: user._id,
      };
      //Create token
      const token = await userService.createToken(payload);
      res.status(200).json({
        message: "Log in sucess",
        token,
        user,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  },
};
module.exports = userController;
