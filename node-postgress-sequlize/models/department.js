'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Department.hasMany(models.EngineeringStudent, {
        foreignKey: 'department_id',
        as: 'engineering_students'
      })
    }
  };
  Department.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Department',
  });
  return Department;
};