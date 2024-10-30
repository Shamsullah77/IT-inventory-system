// models/Category.js
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
      CategoryID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      CategoryName: { type: DataTypes.STRING, allowNull: false },
      Description: { type: DataTypes.STRING },
      CreatedDate: { type: DataTypes.DATE }
  }, {
      tableName: 'Categories' // Ensure the table name is consistent
  });
  return Category;
};