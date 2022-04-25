import mongoose from "mongoose";

const schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 50,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    admin: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true })

export const UserModel = mongoose.model('User', schema)