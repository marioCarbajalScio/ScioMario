import mongoose from 'mongoose'

export interface IPost extends mongoose.Document {
    tittle: string
    date: Date,
    author: any,
    comments: [any]
    totalComments: number
}

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

const postSchema = new mongoose.Schema({
    
        _id: {
            type: String
        },
        title: {
            type: String
        },
        date: {
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
        comments:[{
            type: commentsShcema
        }],
        totalComments: {
            type: Number
        },
        content:{
            type: String
        }
    
})

const Post = mongoose.model('Post', postSchema)

export default Post