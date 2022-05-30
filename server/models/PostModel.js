import mongoose from "mongoose";

const schema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
    },
    images: Array,
    likes: Array,
    comments: Object,
    status: {
        type: Number,
        default: 0,
    },
}, { timestamps: true })

export const PostModel = mongoose.model('Post', schema)