// models/DeviceSpecifications.js
module.exports = (sequelize, DataTypes) => {
  const DeviceSpecifications = sequelize.define('DeviceSpecifications', {
      SpecID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      TypeID: {
          type: DataTypes.INTEGER,
          references: {
              model: 'DeviceTypes', // Ensure model name is 'DeviceTypes'
              key: 'TypeID'
          }
      },
      SpecName: { type: DataTypes.STRING, allowNull: false },
      SpecValue: { type: DataTypes.STRING },
      Unit: { type: DataTypes.STRING },
      DateAdded: { type: DataTypes.DATE }
  }, {
      tableName: 'DeviceSpecifications' // Ensure the table name is consistent
  });
  return DeviceSpecifications;
};