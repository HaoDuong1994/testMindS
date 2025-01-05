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
};
module.exports = userMiddleware;
