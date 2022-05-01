import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { UserModel } from '../models/UserModel.js';

export const authController = {
    registerUser: async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10)
            const hashed = await bcrypt.hash(req.body.password, salt)

            // Create new user
            const newUser = await new UserModel({
                username: req.body.username,
                email: req.body.email,
                password: hashed
            })

            const user = await newUser.save()
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    // GENERATE ACCESS TOKEN
    generateAccessToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                admin: user.admin
            },
            process.env.JWT_ACCESS_KEY,
            {
                expiresIn: "60s"
            }
        )
    },
    // GENERATE REFRESH TOKEN
    generateRefreshToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                admin: user.admin
            },
            process.env.JWT_REFRESH_KEY,
            {
                expiresIn: "365d"
            }
        )
    },
    loginUser: async (req, res) => {
        try {
            const user = await UserModel.findOne({ username: req.body.username })
            if (!user) {
                res.status(404).json("Wrong username!")
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            )
            if (!validPassword) {
                res.status(404).json("Wrong password")
            }
            if (user && validPassword) {
                const accessToken = authController.generateAccessToken(user)
                const refreshToken = authController.generateRefreshToken(user)
                const { password, ...others } = user._doc
                res.status(200).json({ ...others, accessToken, refreshToken })
            }
        } catch (error) {
            req.status(500).json(error)
        }
    }
}
