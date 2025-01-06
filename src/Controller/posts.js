const Posts = require("../Model/posts");
const userService = require("../Service/user");
const postController = {
  create: async (req, res) => {
    const token = req.headers.authorization.split("Bearer ")[1];
    const user = await userService.getUserByToken(token);
    console.log(user);
    console.log(req.body);
    // const dataPost = await Posts.create({});
    res.send("ok");
  },
};
module.exports = postController;
