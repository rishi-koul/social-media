const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const UserModel = require("../models/UserModel");

router.get("/:searchText", authMiddleware, async (req, res) => {
  try {
    let { searchText } = req.params;
    const {userId} = req
    searchText = searchText.trim()
    if (searchText.length === 0) return;

    let userPattern = new RegExp(`^${searchText}`);

    const results = await UserModel.find({
      name: {$regex : "^" + searchText}
    });

    const resultsToBeSent = results.length > 0 && results.filter(result=>result._id.toString()!==userId)


    return res.status(200).json(resultsToBeSent);
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});

module.exports = router;
