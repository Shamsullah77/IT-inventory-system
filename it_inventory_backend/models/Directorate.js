// models/Directorate.js
module.exports = (sequelize, DataTypes) => {
  const Directorate = sequelize.define('Directorate', {
    DirectorateID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    DeputyID: {
      type: DataTypes.INTEGER,
      references: { model: 'Deputies', key: 'DeputyID' }
    },
    Name: { type: DataTypes.STRING, allowNull: false },
  }, {
    tableName: 'Directorates'
  });

  return Directorate;
};