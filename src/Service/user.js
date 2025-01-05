const bcrypt = require("bcrypt");
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const jwt = require("jsonwebtoken");

const userService = {
  hassPassword: async (pass) => {
    try {
      const hashPass = bcrypt.hash(pass, salt);
      return hashPass;
    } catch (error) {
      console.log("error hass password service >>", error);
    }
  },
  createToken: async () => {
    //
  },
};
module.exports = userService;
