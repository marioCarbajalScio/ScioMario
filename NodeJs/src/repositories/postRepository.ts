import Post from '../models/post'

const findById = async (id) => {
    return await Post.findById(id)
}

const savePost = async (post) => {
    let newPost = new Post(post)
    return await newPost.save()
}

const deletePost = async (id) => {
    return await Post.remove(id)
}

const saveComment = async (id,post) => {
    return await Post.findOneAndUpdate(id,post)
    //return await Post.update({'_id':id}, {'comments': {'$addToSet':comment}})
    //{'comment': {'$ne':comment}}
}

export default {
    findById,
    savePost,
    deletePost,
    saveComment
}