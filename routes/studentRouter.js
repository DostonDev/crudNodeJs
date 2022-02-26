const router = require('express').Router()
const studentCtrl = require('../controllers/studentCtrl')


router.route('/')
    .get(studentCtrl.getStudents)
    .post(studentCtrl.createStudent)


router.route('/:id')
    .delete(studentCtrl.deleteStudent)
    .put(studentCtrl.updateStudent)
    .get(studentCtrl.getStudent)




module.exports = router
