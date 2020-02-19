import { Router } from 'express'
import jwt from 'jsonwebtoken'
import postRepository from '../repositories/postRepository'
import { IPost } from '../models/post'

export const postController = Router()

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

//Crear Post
postController.post('/', checkToken, async (req, res) => {
    const id = req.body.author.id
    const auth = postRepository.findById(id)

    if(auth){
        const save = await postRepository.savePost(req.body)
        if(save){
            res.status(200).json({save})
        }else{
            res.status(404).json({message: 'Error Creating new Post'})
        }
    }else{
        res.status(404).json({ message: 'Author NOT FOUND' })
    }
})

//Obtener Post
postController.get('/:id', checkToken, async (req, res) => {
    const id = req.params.id
    const post = await postRepository.findById(id)

    if(id){
        res.status(200).json({post})
    }else{
        res.status(404).json({ message: 'Author NOT FOUND' })
    }
})

//Borrar Post
postController.delete('/:id', checkToken, async (req, res) => {
    const id = req.params.id
    const post = await postRepository.findById(id)

    if(post){
        const del = await postRepository.removePost(req.body.id)
            res.status(200).json({del})
    }else{
        res.status(404).json({ message: 'Post NOT DELETED' })
    }
})

//Modificar Post
postController.patch('/:id', checkToken, async (req, res) => {
    const id = req.params.id
    const post = await postRepository.findById(id)

    if(post){
        const mod = await postRepository.modifyPost(id,req.body)

        if(mod){
            res.status(200).json({message: 'Post Modifyed'})
        }
        else
            res.status(200).json({ message: 'Post NOT MODIFYED' })
    }else{
        res.status(404).json({ message: 'Post NOT FOUND' })
    }
})

//Crear comentario
postController.post('/:id/comment', checkToken, async (req,res) => {
    const id = req.params.id
    //Se obtiene todo el post y se castea con una interfaz
    const post: IPost = <IPost>(await postRepository.findById(id))
    
    if(post){   
        //Accedo a los comentarios
        const com = req.body.comments
        //Concatena al post el comentario
        post.comments.push(com)
        //Incrementa el total
        post.totalComments = post.totalComments + 1
        
        postRepository.saveComment(post)
        res.status(200).json({post})
    }else{
        res.status(404).json({ message: 'Post NOT FOUND' })
    }
})