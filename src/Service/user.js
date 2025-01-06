const bcrypt = require("bcrypt");
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const userService = {
  getUserByToken: async (token) => {
    const user = jwt.verify(token, "duongvihao");
    return user;
  },
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
    console.log("payload >>>", payload);
    console.log("chữ ký", process.env.TOKEN_SIGN);
    const token = jwt.sign(payload, process.env.TOKEN_SIGN, {
      expiresIn: "24h",
    });
    console.log(token);
    return token;
  },
  compareHash: async (passRequest, hashFromDB) => {
    const result = await bcrypt.compare(passRequest, hashFromDB);
    return result;
  },
};
module.exports = userService;
