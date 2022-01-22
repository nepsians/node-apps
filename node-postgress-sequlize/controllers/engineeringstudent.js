const EngineeringStudent = require('../models').EngineeringStudent;
const Department = require('../models').Department;

module.exports = {
    async list(req, res){
        const engineeringStudent = await EngineeringStudent.findAll({
            include: {
                model: Department,
                as: 'department'
            },
            order:[
                ['createdAt', 'DESC']
            ]
        });

        console.log(engineeringStudent);
        res.status(200).send(engineeringStudent)
    },

    async add(req, res){
        const engineeringStudent = await EngineeringStudent.create(req.body);

        res.status(200).send(engineeringStudent)
    }
}