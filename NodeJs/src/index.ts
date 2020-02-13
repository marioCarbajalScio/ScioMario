import express from 'express'
import bodyParser from 'body-parser'
import { loginController } from './controllers/loginController'
import {postController} from './controllers/postController'
import {userController} from './controllers/userController'
import { connectDB } from './repositories'

const port = 1337

const app = express()
app.use( bodyParser.json() )

app.use( '/login', loginController)

app.use('/post', postController )

app.use('/user', userController)

app.get('/', (req, res) => {
    res.send('API is running OK')
})

connectDB().then( async() => {
    app.listen(port, ()=> {
        console.log("APi is running on port " + port)
    })
})


