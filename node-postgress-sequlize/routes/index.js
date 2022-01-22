var express = require('express');
var router = express.Router();

const classroomController = require('../controllers').classroom;
const studentController = require('../controllers').student;
const lecturerController = require('../controllers').lecturer;
const courseController = require('../controllers').course;
const departmentController = require('../controllers').department;
const engineeringStudentController = require('../controllers').engineeringstudent;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send({status: "success"})
});

/* Classroom Router */
router.get('/api/classroom', classroomController.list);
router.get('/api/classroom/:id', classroomController.getById);
router.post('/api/classroom', classroomController.add);
router.put('/api/classroom/:id', classroomController.update);
router.delete('/api/classroom/:id', classroomController.delete);

/* Student Router */
router.get('/api/student', studentController.list);
router.get('/api/student/:id', studentController.getById);
router.post('/api/student', studentController.add);
router.put('/api/student/:id', studentController.update);
router.delete('/api/student/:id', studentController.delete);

/* Lecturer Router */
router.get('/api/lecturer', lecturerController.list);
router.get('/api/lecturer/:id', lecturerController.getById);
router.post('/api/lecturer', lecturerController.add);
router.put('/api/lecturer/:id', lecturerController.update);
router.delete('/api/lecturer/:id', lecturerController.delete);

/* Course Router */
router.get('/api/course', courseController.list);
router.get('/api/course/:id', courseController.getById);
router.post('/api/course', courseController.add);
router.put('/api/course/:id', courseController.update);
router.delete('/api/course/:id', courseController.delete);

// /* Advance Router */
router.post('/api/classroom/add_with_students', classroomController.addWithStudents);
router.post('/api/student/add_course', studentController.addCourse);
router.post('/api/lecturer/add_with_course', lecturerController.addWithCourse);
router.put('/api/lecturer/update_with_course/:id', lecturerController.updateWithCourse)


router.get('/api/department', departmentController.list)
router.post('/api/department', departmentController.add)
router.get('/api/engineering_student', engineeringStudentController.list)
router.post('/api/engineering_student', engineeringStudentController.add)

module.exports = router;