module.exports = (sequelize, DataTypes) => {
  const ProductEmployee = sequelize.define('ProductEmployee', {
    product_employee_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    issue_date: DataTypes.DATE,
    return_date: DataTypes.DATE,
  });

  ProductEmployee.associate = (models) => {
    ProductEmployee.belongsTo(models.Product, { foreignKey: 'product_id' });
    ProductEmployee.belongsTo(models.Employee, { foreignKey: 'employee_id' });
  };

  return ProductEmployee;
};
