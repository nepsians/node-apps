const Department = require('../models').Department;
const EngineeringStudent = require('../models').EngineeringStudent;
module.exports ={
    async list(req, res){
        const departments = await Department.findAll({
            include: {
                model: EngineeringStudent,
                as: 'engineering_students'
            },
            order: [
                ['createdAt', 'DESC']
            ]
        });

        console.log(departments.getEngineeringStudent)
        res.status(200).send(departments)
    },

    async add(req, res){
        const department = await Department.create(req.body);

        res.status(200).send(department)
        
    }
}