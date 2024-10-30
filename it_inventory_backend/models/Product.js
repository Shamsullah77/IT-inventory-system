// models/Product.js
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
      DeviceID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      TypeID: { type: DataTypes.INTEGER, references: { model: 'DeviceTypes', key: 'TypeID' } }, // Ensure model name is 'DeviceTypes'
      Brand: { type: DataTypes.STRING },
      Model: { type: DataTypes.STRING },
      SerialNumber: { type: DataTypes.STRING, unique: true },
      PurchaseDate: { type: DataTypes.DATE },
      Condition: { type: DataTypes.STRING },
      WarrantyEndDate: { type: DataTypes.DATE },
      AssignedLocation: { type: DataTypes.STRING }
  }, {
      tableName: 'Products' // Ensure the table name is consistent
  });
  return Product;
};