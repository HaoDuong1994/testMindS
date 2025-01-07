const Posts = require("../Model/posts");
const userService = require("../Service/user");
const postController = {
  create: async (req, res) => {
    try {
      const token = req.headers.authorization.split("Bearer ")[1];
      const user = await userService.getUserByToken(token);
      const { content } = req.body;
      const dataPost = await Posts.create({
        userId: user.id,
        content,
      });
      console.log("posst dataa", dataPost);
      res.status(201).json({
        message: "Posted sucess",
        data: dataPost,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params.id;
      const { content } = req.body;
      console.log(content);
      const today = Date.now();
      const postUpdate = await Posts.findOneAndUpdate(id, {
        content: content,
        updatedAt: today,
      });
      await postUpdate.save();
      res.status(201).json({
        message: " post updated ",
        data: postUpdate,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  },
};
module.exports = postController;
