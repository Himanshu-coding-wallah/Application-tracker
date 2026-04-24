import mongoose from "mongoose"
import userModel from "../models/user.model.js"
import crypto from "crypto"
import jwt from "jsonwebtoken"
import config from "../config/config.js"
import { ref } from "process"

export async function register(req, res) {
    const {username, email, password} = req.body
    console.log(req.body)

    const alreadyRegistered = await userModel.findOne({
        $or: [
            { username }, { email }
        ]
    })

    if(alreadyRegistered){
        return res(400).json({
            message: "user already exists"
        })
    }

    const passwordHash = crypto.createHash("sha256").update(password).digest("hex")

    const user = userModel.create({
        username,
        email,
        password: passwordHash
    })

    const accessToken = jwt.sign({
        id: user._id
    }, config.JWT_SECRET,{ expiresIn: "15m"})

    const refreshToken = jwt.sign({
        id: user._id
    }, config.JWT_SECRET,{ expiresIn:"7d"})

    res.cookie("refreshToken", refreshToken,{
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 7*24*60*60*1000
    })

    res.status(200).json({
        message: "user registered !!",
        user: {
            username: user.username,
            email: user.email
        }, 
        accessToken
    })

}

export async function login(req,res){
    const {email, password} = req.body

    const user = await userModel.findOne({email})

    if(!user){
        return res.status(400).json({
            message: "user not found, check your email"
        })
    }

    const passwordHash = crypto.createHash("sha256").update(password).digest("hex")

    if(!(password === passwordHash)){
        return res.status(400).json({
            message: "password is incorrect"
        })
    }

    const accessToken = jwt.sign({
        id: user._id
    }, config.JWT_SECRET,{ expiresIn: "15m"})
    
    const refreshToken = jwt.sign({
        id: user._id
    }, config.JWT_SECRET,{ expiresIn: "7d"})

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 7*24*60*60*1000
    })

    res.status(200).json({
        message: "logged in successfully !!",
        user: {
            username: user.username,
            email: user.email
        },
        accessToken
    })
}

export async function logout(req,res){
    
}

export async function newAccessToken(req, res){
    const refreshToken = req.cookies?.refreshToken

    if(!refreshToken){
        return res.status(404).json({
            message: "refresh token not found"
        })
    }

    
}