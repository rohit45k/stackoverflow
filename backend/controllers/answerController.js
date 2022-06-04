const User = require("../models/userModel")
const Answer = require("../models/answerModel");
const Question = require("../models/questionModel");
const asyncHandler = require("express-async-handler");

//@desc     Get all the answer for a user
//@route    GET /api/answer
//@access   Private
const getAnswers = asyncHandler(async (req, res) => {
    const answer = await Answer.find({ user: req.user.id });

    res.status(200).json({
        success: true,
        message: "Answer fetched successfully",
        answer
    })
}) 

//@desc     Get all the answer for a user
//@route    GET /api/answer
//@access   Private
const setAnswer = asyncHandler(async (req, res) => {

    const question = await Question.findById(req.params.id);

    if(!question) {
        res.status(400)
        throw new Error("Question not found")
    }

    if(!req.body.body) {
        res.status(400)
        throw new Error("Please provide a answer with body")
    }

    const answer = await Answer.create({
        user: req.user.id,
        question: req.params.id,
        body: req.body.body,
        upvotes: req.body.upvotes,
    })

    res.status(200).json({
        success: true,
        message: "Question posted successfully",
        question: question
    })
    
}) 

//@desc     Get all the answer for a user
//@route    GET /api/answer
//@access   Private
const editAnswer = asyncHandler(async (req, res) => {
    const answer = await Answer.findById(req.params.id);

    if(!answer) {
        res.status(400)
        throw new Error("Answer not found")
    }

    const user = await User.findById(req.user.id);

    if(!user) {
        res.status(401)
        throw new Error("User not found")
    }

    if(answer.user.toString() !== user.id) {
        res.status(401)
        throw new Error("User access denied")
    }

    const updatedAnswer = await Answer.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json({
        success: true,
        message: "Answer updated successfully",
        updatedAnswer: updatedAnswer
    })
    
}) 

//@desc     Get all the answer for a user
//@route    GET /api/answer
//@access   Private
const deleteAnswer = asyncHandler(async (req, res) => {
    res.json({
        message: "delete an answer"
    })

}) 


module.exports = {
    getAnswers,
    setAnswer,
    editAnswer,
    deleteAnswer
}