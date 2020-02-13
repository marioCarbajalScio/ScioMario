import { Router } from 'express'
import jwt from 'jsonwebtoken'
import userRepository from '../repositories/userRepository'

export const userController = Router()

const checkToken = (req, res, next) => {
    const token = req.headers['authorization']

    jwt.verify(token, 'super-key-super-secret', (err, data)=> {
        if(err){
            res.status(400).json({err})
        }else{
            next()
        }
    })
}

//Mostrar Usuario
userController.get('/:id',checkToken, async(req, res) => {
    const id = req.params.id 
    const user = await userRepository.findById(id)

    if(user) {
        res.status(200).json({ user })
    }else{
        res.status(400).json({ err: 'Something is wrong with request. Couldnt find any User.' })
    }
})

//Crear Usuario
userController.post('/',checkToken, async(req, res) => {

    const user = await userRepository.saveUser(req.body)

    if(user) {
        res.status(200).json({ user })
    }else{
        res.status(400).json({ err: 'Something is wrong with request. Failed Creating User.' })
    }
})

//Borrar Usuario
userController.delete('/:id',checkToken, async(req, res) => {
    const id = req.params.id
    const user = await userRepository.findById(id)

    if(user) {
        const del = await userRepository.deletePost(user)
        res.status(200).json({ message: "User deleted." })
    }else{
        res.status(400).json({ err: 'Something is wrong with request' })
    }
})