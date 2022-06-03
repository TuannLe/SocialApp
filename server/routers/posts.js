import express from 'express';
import { getPosts, createPost, updatePost } from '../controllers/postsController.js'
import { middlewareController } from '../controllers/middlewareController.js'
const router = express.Router();

import multer from 'multer';

const storage = multer.diskStorage({
    filename: function (req, file, cb) {
        const filename = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, filename + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage })

router.get('/', middlewareController.verifyToken, getPosts)
router.post('/create', upload.array("images"), middlewareController.verifyToken, createPost)
router.post('/update', middlewareController.verifyToken, updatePost)

export default router