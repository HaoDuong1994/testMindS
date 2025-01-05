const bcrypt = require("bcrypt");
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const userService = {
  hassPassword: async (pass) => {
    try {
      const hashPass = bcrypt.hash(pass, salt);
      return hashPass;
    } catch (error) {
      console.log("error hass password service >>", error);
    }
  },
  createToken: async (payload) => {
    //
    const token = jwt.sign(payload, process.env.TOKEN_SIGN, {
      expiresIn: "1h",
    });
    return token;
  },
  compareHash: async (passRequest, hashFromDB) => {
    const result = await bcrypt.compare(passRequest, hashFromDB);
    return result;
  },
};
module.exports = userService;
