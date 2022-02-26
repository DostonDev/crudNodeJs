const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    student_id :{
        type:String,
        unique :true
    },
    student_name: {
        type: String,
        required: true
    },
    student_age: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Students', studentSchema)