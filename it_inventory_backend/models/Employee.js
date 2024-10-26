module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    employee_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    job_title: DataTypes.STRING,
    contact_number: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  Employee.associate = (models) => {
    Employee.belongsTo(models.Department, { foreignKey: 'department_id' });
    Employee.belongsToMany(models.Product, {
      through: models.ProductEmployee,
      foreignKey: 'employee_id',
    });
  };

  return Employee;
};
