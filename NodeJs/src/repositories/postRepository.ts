import Post from '../models/post'

const findById = async (id) => {
    return await Post.findById(id)
}

const savePost = async (post) => {
    let newPost = new Post(post)
    return await newPost.save()
}

const modifyPost = async (id,post) => {
    return await Post.updateOne({"_id": id},post)
}

const removePost = async (id) => {
    return await Post.findOneAndDelete(id)
}

const saveComment = async (id,post) => {   
    return await Post.findOneAndUpdate(id,post)
}

export default {
    findById,
    savePost,
    modifyPost,
    removePost,
    saveComment
}