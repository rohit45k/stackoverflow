const express = require("express");
const { getQuestions, setQuestion, editQuestion, deleteQuestion } = require("../controllers/questionController");
const router = express.Router();


router.route("/").get(getQuestions).post(setQuestion);

router.route("/:id").put(editQuestion).delete(deleteQuestion);


module.exports = router;