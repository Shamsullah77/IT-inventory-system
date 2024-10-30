// models/DeviceType.js
module.exports = (sequelize, DataTypes) => {
  const DeviceType = sequelize.define('DeviceType', {
      TypeID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      CategoryID: {
          type: DataTypes.INTEGER,
          references: {
              model: 'Categories', // Ensure model name is 'Categories'
              key: 'CategoryID'
          }
      },
      TypeName: { type: DataTypes.STRING, allowNull: false },
      ModelDescription: { type: DataTypes.STRING },
      WarrantyPeriod: { type: DataTypes.INTEGER },
      VendorID: { type: DataTypes.INTEGER }
  }, {
      tableName: 'DeviceTypes' // Ensure the table name is consistent
  });
  return DeviceType;
};