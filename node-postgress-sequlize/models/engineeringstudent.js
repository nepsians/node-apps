'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EngineeringStudent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      EngineeringStudent.belongsTo(models.Department, {
        foreignKey: 'department_id',
        as: 'department'
      })
    }
  };
  EngineeringStudent.init({
    name: DataTypes.STRING,
    department_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'EngineeringStudent',
  });
  return EngineeringStudent;
};