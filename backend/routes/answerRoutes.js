const express = require("express");
const { getAnswers, setAnswer, editAnswer, deleteAnswer } = require("../controllers/answerController");
const { protect } = require("../middleware/authMiddleware")
const router = express.Router();

router.route("/").get(protect, getAnswers)
router.route("/:id").post(protect, setAnswer).put(protect, editAnswer).delete(protect, deleteAnswer)

module.exports = router;