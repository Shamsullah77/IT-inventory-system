module.exports = (sequelize, DataTypes) => {
  const Stock = sequelize.define('Stock', {
    stock_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    location: DataTypes.STRING,
  });

  Stock.associate = (models) => {
    Stock.hasMany(models.Product, { foreignKey: 'stock_id' });
  };

  return Stock;
};
