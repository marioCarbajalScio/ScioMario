import User from '../models/user'

const findByEmailAndPassword = async (email, password) => {
    return await User.findOne({email, password})
}

const findById = async (id) => {
    return await User.findById(id)
}

const saveUser = async (post) => {
    let newUser = new User(post)
    return await newUser.save()
}

const deletePost = async (id) => {
    return await User.remove(id)
}


export default {
    findByEmailAndPassword,
    findById,
    saveUser,
    deletePost
}