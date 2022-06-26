const express = require("express");
const router = express.Router();

const {
  getAllDataLearning,
  getDataLearningByID,
  addNewDataLearning,
  deleteDataLearning,
  editDataLearning,
} = require("../controllers/learnController");
router.get("/", getAllDataLearning);

router.get("/:id", getDataLearningByID);

router.post("/", addNewDataLearning);

router.delete("/:id", deleteDataLearning);

router.put("/:id", editDataLearning);

module.exports = router;
