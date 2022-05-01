import { UserModel } from '../models/UserModel.js';

export const userController = {
    getAllUsers: async (req, res) => {
        try {
            const user = await UserModel.find()
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteUser: async (req, res) => {
        try {
            const user = await UserModel.findById(req.params.id)
            res.status(200).json("Delete successfully")
        } catch (error) {
            res.status(500).json(error);
        }
    }
}