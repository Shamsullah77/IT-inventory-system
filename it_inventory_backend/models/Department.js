// models/Department.js
module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define('Department', {
    DepartmentID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    DirectorateID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Directorates',
        key: 'DirectorateID'
      }
    },
    Name: { type: DataTypes.STRING, allowNull: false }
  }, {
    tableName: 'Departments'
  });

  return Department;
};