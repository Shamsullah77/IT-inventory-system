module.exports = (sequelize, DataTypes) => {
  const Deputy = sequelize.define('Deputy', {
    deputy_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.TEXT,
    contact_number: DataTypes.STRING,
    location: DataTypes.STRING,
  });

  Deputy.associate = (models) => {
    Deputy.hasMany(models.Directorate, { foreignKey: 'deputy_id' });
  };

  return Deputy;
};
