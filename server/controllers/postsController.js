import multer from 'multer';
import { PostModel } from "../models/PostModel.js"
import fs from 'fs'
import path from 'path';
import { UserModel } from '../models/UserModel.js';

// Create Post
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

// Read detail post 
export const getDetailPosts = async (req, res) => {
    try {
        const posts = await PostModel.find()
        console.log(posts)
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

// Read post
export const getPosts = async (req, res) => {
    try {
        const currentUser = await UserModel.findById(req.body.userId);
        const userPosts = await PostModel.find({ author: currentUser._id })
        const friendPosts = await Promise.all(
            currentUser.following.map((friendId) => {
                return PostModel.find({ author: friendId })
            })
        )
        res.status(200).json(userPosts.concat(...friendPosts))
    } catch (error) {
        res.status(500).json(error)
    }
}

// Update post
export const updatePost = async (req, res) => {
    try {
        const updatePost = (req.body)
        const post = await PostModel.findOneAndUpdate({ _id: updatePost._id }, updatePost, { new: true })
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

// Delete post
export const deletePost = async (req, res) => {
    try {
        const _id = req.params.id
        const post = await PostModel.findByIdAndDelete(_id)
        res.status(200).json('The post has been deleted')
    } catch (error) {
        res.status(500).json(error)
    }
}

// Like post
export const likePost = async (req, res) => {
    try {
        const post = await PostModel.findById(req.params.id)
        if (!post.likes.includes(req.body.userId)) {
            await PostModel.updateOne({ $push: { likes: req.body.userId } })
            res.status(200).json('The post has been liked')
        } else {
            await PostModel.updateOne({ $pull: { likes: req.body.userId } })
            res.status(200).json('The post has been dislike')
        }
    } catch (error) {
        res.status(500).json(error)
    }
}