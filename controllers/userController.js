const users = require("../models/User");

module.exports = {
  getAllUser: async (req, res) => {
    try {
      const Users = await users.find({}, "-password -__v");

      res.json(Users);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },

  getUserByID: async (req, res) => {
    try {
      const { id } = req.params;
      const userByID = await users.findById(id, "-password -__v");

      res.json(userByID);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },

  addUser: async (req, res) => {
    try {
      let postUser = req.body;
      await users.create(postUser);

      res.json("user has been created");
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      await users.findByIdAndDelete(id);

      res.json("successfully deleted user");
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },

  editUser: async (req, res) => {
    try {
      const { id } = req.params;
      const update = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      };

      await users.findByIdAndUpdate(id, update);

      res.json("successfully updated user");
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },
};
