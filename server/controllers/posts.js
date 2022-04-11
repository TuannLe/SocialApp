import { PostModel } from '../models/PostModel.js'

export const getPosts = async (req, res) => {
    try {
        const post = new PostModel({
            title: 'test',
            content: 'test'
        })
        post.save()

        const posts = await PostModel.find()
        console.log('posts', posts)
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

export const createPost = (req, res) => {
    res.send('Create SUCCESS')
}