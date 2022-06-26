const express = require("express");
const router = express.Router();

const {
  getAllUser,
  getUserByID,
  addUser,
  deleteUser,
  editUser,
} = require("../controllers/userController");

router.get("/", getAllUser);
router.get("/:id", getUserByID);
router.post("/", addUser);
router.delete("/:id", deleteUser);
router.put("/:id", editUser);

module.exports = router;
