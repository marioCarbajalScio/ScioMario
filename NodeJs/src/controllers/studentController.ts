import { Router } from 'express'
import jwt from 'jsonwebtoken'
import studentRepository from '../repositories/studentRepository'

export const studentController = Router()

/*
studentController.post('/login', async(req, res) => {
    const {email, password} = req.body

    const student = await studentRepository.findByEmailAndPassword(email, password)

    if(student){
        jwt.sign( {email} , 'super-key-super-secret' , (err, token) => {
            res.status(200).json({token})
        } )
    }else{
        res.status(404).json({message: 'NOT FOUND'})
    }
})*/

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
/*
studentController.post('/', async(req, res) => {

    const student = await studentRepository.saveStudent(req.body)

    if(student) {
        res.status(200).json({ student })
    }else{
        res.status(400).json({ err: 'Something is wrong with request' })
    }
})
*/
studentController.post('/', async(req, res) => {
    const {email, password} = req.body

    const student = await studentRepository.findByEmailAndPassword(email, password)

    if(student){
        jwt.sign( {email} , 'super-key-super-secret' , (err, token) => {
            res.status(200).json({token})
        } )
    }else{
        res.status(404).json({message: 'NOT FOUND'})
    }
})
/*
studentController.get('/:id', checkToken,  async (req, res) => {
    const id = req.params.id

    const student = await studentRepository.findById(id)

    if(student){
        res.status(200).json({student})

    }else{
        res.status(404).json({ message: 'Studen NOT FOUND' })
    }
})*/




