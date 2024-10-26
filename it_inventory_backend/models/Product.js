module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    product_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: DataTypes.STRING,
    description: DataTypes.TEXT,
  });

  Product.associate = (models) => {
    Product.belongsTo(models.Stock, { foreignKey: 'stock_id' });
    Product.belongsToMany(models.Employee, {
      through: models.ProductEmployee,
      foreignKey: 'product_id',
    });
  };

  return Product;
};
