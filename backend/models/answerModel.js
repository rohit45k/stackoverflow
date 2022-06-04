const mongoose = require("mongoose");

const answerSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: [true, "Please login to answer"],
        ref: "User"
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        require: [true, "Please login to answer"],
        ref: "Question"
    },
    title: {
        type: String,
        required: [true, "Please add title field"]
    },
    body: {
        type: String,
        required: [true, "Please add body field"]
    },
}, {
    timestamps: true
})


module.exports = mongoose.model("Answer", answerSchema);