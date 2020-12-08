const mongoose = require("mongoose");

const ReviewModel = mongoose.model("review",
    mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        score: {
            type: Number,
            required: true
        }
    })
);

module.exports = ReviewModel;
