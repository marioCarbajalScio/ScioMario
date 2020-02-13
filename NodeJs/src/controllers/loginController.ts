import { Router } from 'express'
import jwt from 'jsonwebtoken'
import userRepository from '../repositories/userRepository'

export const loginController = Router()

loginController.post('/', async(req, res) => {
    const {email, password} = req.body
    const user = await userRepository.findByEmailAndPassword(email, password)
    if(user){
        jwt.sign( {email} , 'super-key-super-secret' , (err, token) => {
            res.status(200).json({token})
        } )
    }else{
        res.status(404).json({message: 'NOT FOUND'})
    }
})