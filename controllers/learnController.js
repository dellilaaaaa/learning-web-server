const learn = require("../models/learning");

module.exports = {
  getAllDataLearning: async (req, res) => {
    try {
      const dataLearning = await learn.find({}, "-__v");

      res.json(dataLearning);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internam Server Error",
      });
    }
  },

  getDataLearningByID: async (req, res) => {
    try {
      const { id } = req.params;
      const dataLearning = await learn.findById(id);

      res.json(dataLearning);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },

  addNewDataLearning: async (req, res) => {
    try {
      const newDataLearning = req.body;
      await learn.create(newDataLearning);

      res.json("success");
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: err.message || "Internal Server Error",
      });
    }
  },

  deleteDataLearning: async (req, res) => {
    try {
      const { id } = req.params;
      await learn.findByIdAndDelete(id);

      res.json("success");
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },

  editDataLearning: async (req, res) => {
    try {
      const { id } = req.params;
      const update = {
        title: req.body.title,
        image: req.body.image,
        description: req.body.description,
        link: req.body.link,
      };

      await learn.findByIdAndUpdate(id, update);

      res.json("success");
    } catch (error) {
      res.status(500).json({
        message: err.message || "Internal Server Error",
      });
    }
  },
};
