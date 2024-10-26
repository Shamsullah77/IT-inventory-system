module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define('Department', {
    department_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.TEXT,
  });

  Department.associate = (models) => {
    Department.belongsTo(models.Directorate, { foreignKey: 'directorate_id' });
    Department.hasMany(models.Employee, { foreignKey: 'department_id' });
  };

  return Department;
};
