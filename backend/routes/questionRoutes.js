const express = require("express");
const { getQuestions, setQuestion, editQuestion, deleteQuestion } = require("../controllers/questionController");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");


router.route("/").get(protect, getQuestions).post(protect, setQuestion);

router.route("/:id").put(protect, editQuestion).delete(protect, deleteQuestion);


module.exports = router;