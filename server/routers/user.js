import express from 'express';
import { userController } from '../controllers/userController.js';
import { middlewareController } from '../controllers/middlewareController.js';

const router = express.Router();

router.get("/", middlewareController.verifyToken, userController.getAllUsers)
router.delete('/:id', middlewareController.verifyTokenAndAdminAuth, userController.deleteUser)

export default router