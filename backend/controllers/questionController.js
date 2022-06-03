//@desc     GET all Questions related to a user
//@route    GET /api/questions
//@access   Private
const getQuestions = (req, res) => {
    res.status(200).json({
        message: "Question GET Route"
    })
}

//@desc     SET a new question related to a user
//@route    POST /api/questions
//@access   Private
const setQuestion = (req, res) => {
    if(!req.body.question) {
        res.status(400)
        throw new Error("Please provide a question")
    }


    res.status(200).json({
        success: true,
        message: "Question posted successfully",
        question: req.body.question
    })
}

//@desc     EDIT a Question related to a user
//@route    PUT /api/questions/:id
//@access   Private
const editQuestion = (req, res) => {
    res.status(200).json({
        message: "Question PUT Route",
        id: req.params.id
    })
}

//@desc     DELETE a Question related to a user
//@route    DELETE /api/questions/:id
//@access   Private
const deleteQuestion = (req, res) => {
    res.status(200).json({
        message: "Question DELETE Route",
        id: req.params.id
    })
}

module.exports = {
    getQuestions,
    setQuestion,
    editQuestion,
    deleteQuestion
}