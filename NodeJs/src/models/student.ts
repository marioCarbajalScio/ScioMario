
import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    age: {
        type: Number
    },
    email: {
        type: String
    },
    password: {
        type: String,
        minlength: 5
    }
})

const Student = mongoose.model('Student', studentSchema)

export default Student