const asyncHandler = require("express-async-handler");
const Question = require("../models/questionModel");
const User = require("../models/userModel");


//@desc     GET all Questions related to a user
//@route    GET /api/questions
//@access   Private
const getQuestions = asyncHandler(async (req, res) => {

    const questions = await Question.find({ user: req.user.id });

    res.status(200).json({
        success: true,
        message: "Question fetched successfully",
        questions
    })
})

//@desc     SET a new question related to a user
//@route    POST /api/questions
//@access   Private
const setQuestion = asyncHandler(async (req, res) => {
    if(!req.body.title || !req.body.body) {
        res.status(400)
        throw new Error("Please provide a question with title and body")
    }

    const question = await Question.create({
        user: req.user.id,
        title: req.body.title,
        body: req.body.body,
        upvotes: req.body.upvotes,
        tags: req.body.tags,
    })

    res.status(200).json({
        success: true,
        message: "Question posted successfully",
        question: question
    })
})

//@desc     EDIT a Question related to a user
//@route    PUT /api/questions/:id
//@access   Private
const editQuestion = asyncHandler(async (req, res) => {

    const question = await Question.findById(req.params.id);

    if(!question) {
        res.status(400)
        throw new Error("Question not found")
    }

    const user = await User.findById(req.user.id);

    if(!user) {
        res.status(401)
        throw new Error("User not found")
    }

    if(question.user.toString() !== user.id) {
        res.status(401)
        throw new Error("User access denied")
    }

    const updatedQuestion = await Question.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json({
        success: true,
        message: "Question updated successfully",
        updatedQuestion: updatedQuestion
    })
})

//@desc     DELETE a Question related to a user
//@route    DELETE /api/questions/:id
//@access   Private
const deleteQuestion = asyncHandler(async (req, res) => {

    const question = await Question.findById(req.params.id);

    if(!question) {
        res.status(400)
        throw new Error("Question not found")
    }

    const user = await User.findById(req.user.id);

    if(!user) {
        res.status(401)
        throw new Error("User not found")
    }

    if(question.user.toString() !== user.id) {
        res.status(401)
        throw new Error("User access denied")
    }

    await Question.findByIdAndDelete(req.params.id)

    res.status(200).json({
        success: true,
        message: "Question deleted successfully",
        id: req.params.id
    })
})

module.exports = {
    getQuestions,
    setQuestion,
    editQuestion,
    deleteQuestion
}