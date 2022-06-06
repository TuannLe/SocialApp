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
    },
    editProfile: async (req, res) => {
        try {
            const data = req.body
            console.log(data);
            const user = await UserModel.findOneAndUpdate({ _id: data._id }, data, { new: true })
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json({ error: error });
        }
    },
    updateAvatar: async (req, res) => {
        try {
            const data = req.body
            const user = await UserModel.findOneAndUpdate({ _id: data._id }, data, { new: true })
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }
}