import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from'mongoose'
import UserModel from './models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb://127.0.0.1:27017/user');
app.post('/register',(req, res) =>{
    UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error:'+ err))

})
app.listen(process.env.PORT,()=>{ 
    console.log('server is running ')
})

