import express from 'express';
import { getPosts, createPost, updatePost } from '../controllers/postsController.js'
const router = express.Router();

router.get('/', getPosts)
router.post('/create', createPost)
router.post('/update', updatePost)

export default router