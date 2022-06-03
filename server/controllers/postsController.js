import multer from 'multer';
import { PostModel } from "../models/PostModel.js"
import fs from 'fs'
import path from 'path';


export const getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find()
        console.log(posts)
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

export const createPost = async (req, res) => {
    try {
        // const image = fs.readFileSync(req.files[0].path, { encoding: 'base64' })
        const newPost = {
            images: req.body.images,
            author: req.body.author,
            content: req.body.content
        }

        const post = new PostModel(newPost)
        await post.save()

        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const updatePost = async (req, res) => {
    try {
        const updatePost = (req.body)
        const post = await PostModel.findOneAndUpdate({ _id: updatePost._id }, updatePost, { new: true })
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}