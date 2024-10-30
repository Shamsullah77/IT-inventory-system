// models/Employee_Device.js
module.exports = (sequelize, DataTypes) => {
  const Employee_Device = sequelize.define('Employee_Device', {
      AssignmentID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      EmployeeID: { type: DataTypes.INTEGER, references: { model: 'Employees', key: 'EmployeeID' } }, // Ensure model name is 'Employees'
      StockID: { type: DataTypes.INTEGER, references: { model: 'Stocks', key: 'StockID' } }, // Ensure model name is 'Stocks'
      AssignmentDate: { type: DataTypes.DATE },
      ReturnDate: { type: DataTypes.DATE },
      RequestLetter: { type: DataTypes.STRING },
      ReturnLetter: { type: DataTypes.STRING },
      AssignedBy: { type: DataTypes.STRING },
      Notes: { type: DataTypes.TEXT }
  }, {
      tableName: 'Employee_Devices' // Ensure the table name is consistent
  });
  return Employee_Device;
};