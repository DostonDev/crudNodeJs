const Students = require('../models/studentModel')


const studentCtrl = {
    getStudents : async (req,res)=>{
        const students = await Students.find()
        res.json(students)
    },
    createStudent : async (req,res)=>{
        const {student_id,student_name,student_age} = req.body
        const student = await Students.findOne({student_id: student_id})
        if(student){
            return res.status(400).json({
                msg:"Already"
            })
        }
        const newStudent = new Students({
            student_id,
            student_name,
            student_age
        })
        await newStudent.save()
        res.json({msg:"create"})
    },
    deleteStudent : async (req,res)=>{
        await Students.findByIdAndDelete(req.params.id)
        res.json({msg:"delete student"})
    },
    updateStudent : async (req,res)=>{
        const {student_name,student_age} = req.body
        await Students.findByIdAndUpdate({_id:req.params.id},{
            student_name,
            student_age
        })
        res.json({msg:"update student hi"})
    },
    getStudent : async (req,res)=>{
        const student = await Students.findById(req.params.id)

        res.json(student)
    },
}



module.exports = studentCtrl