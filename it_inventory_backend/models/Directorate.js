module.exports = (sequelize, DataTypes) => {
  const Directorate = sequelize.define('Directorate', {
    directorate_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.TEXT,
  });

  Directorate.associate = (models) => {
    Directorate.belongsTo(models.Deputy, { foreignKey: 'deputy_id' });
    Directorate.hasMany(models.Department, { foreignKey: 'directorate_id' });
  };

  return Directorate;
};
