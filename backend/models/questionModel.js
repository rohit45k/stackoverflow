const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Please add a user id"],
        ref: "User"
    },
    title: {
        type: String,
        required: [true, "Please add title field"]
    },
    body: {
        type: String,
        required: [true, "Please add body field"]
    },
    upvotes: {
        type: Number,
        default: 0
    },
    tags: [
        {
            type: String
        }
    ]
}, {
    timestamps: true,
})

module.exports = mongoose.model("QuestionModel", questionSchema);