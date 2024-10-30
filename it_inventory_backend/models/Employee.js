// models/Employee.js
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
      EmployeeID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      DepartmentID: { 
          type: DataTypes.INTEGER, 
          references: { model: 'Departments', key: 'DepartmentID' } // Ensure model name is 'Departments'
      },
      DeputyID: { 
          type: DataTypes.INTEGER, 
          references: { model: 'Deputies', key: 'DeputyID' } // Ensure model name is 'Deputies'
      },
      Name: { type: DataTypes.STRING, allowNull: false },
      Position: { type: DataTypes.STRING },
      EmployeeCode: { type: DataTypes.STRING, unique: true },
      PhoneNumber: { type: DataTypes.STRING },
      Email: { type: DataTypes.STRING },
      DateJoined: { type: DataTypes.DATE },
      SupervisorID: { 
          type: DataTypes.INTEGER, 
          references: { model: 'Employees', key: 'EmployeeID' } // Self-reference to Employee table
      }
  }, {
      tableName: 'Employees' // Explicit table name for the Employee model
  });

  return Employee;
};