// models/Stock.js
module.exports = (sequelize, DataTypes) => {
  const Stock = sequelize.define('Stock', {
      StockID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      DeviceID: { 
          type: DataTypes.INTEGER, 
          references: { model: 'Products', key: 'DeviceID' } // Ensure model name is 'Products'
      },
      Location: { type: DataTypes.STRING },
      Status: { type: DataTypes.STRING },
      LastCheckedDate: { type: DataTypes.DATE },
      Quantity: { type: DataTypes.INTEGER }
  }, {
      tableName: 'Stocks' // Ensure the table name is consistent
  });

  return Stock;
};