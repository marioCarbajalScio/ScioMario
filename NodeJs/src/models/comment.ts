import mongoose, { Mongoose } from 'mongoose'

const commentsShcema = new mongoose.Schema({   
        _id: {
                type: String
            },
            comment: {
                type: String
            },
            author: {
                id: {
                    type: String
                },
                email: {
                    type: String
                },
                password: {
                    type: String
                }
            },
            date:{
                type: String
            }
})


const Comment = mongoose.model('Comments', commentsShcema)

export default Comment