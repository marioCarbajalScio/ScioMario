import Student from '../models/student'

const findByEmailAndPassword = async (email, password) => {
    return await Student.findOne({email, password})
}

const findById = async (id) => {
    return await Student.findById(id)
}

const saveStudent = async (student) => {
    let newStudent = new Student(student)
    return await newStudent.save()
}

export default {
    findByEmailAndPassword,
    findById,
    saveStudent
}