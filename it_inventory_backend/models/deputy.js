// models/Deputy.js
module.exports = (sequelize, DataTypes) => {
  const Deputy = sequelize.define('Deputy', {
    DeputyID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Name: { type: DataTypes.STRING, allowNull: false },
  }, {
    tableName: 'Deputies'
  });

  return Deputy;
};