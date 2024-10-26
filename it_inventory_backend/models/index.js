const Sequelize = require('sequelize');
const config = require('../config/config')[process.env.NODE_ENV || 'development'];

const sequelize = new Sequelize(config);

const models = {
  Deputy: require('./Deputy')(sequelize, Sequelize),
  Directorate: require('./Directorate')(sequelize, Sequelize),
  Department: require('./Department')(sequelize, Sequelize),
  Employee: require('./Employee')(sequelize, Sequelize),
  Product: require('./Product')(sequelize, Sequelize),
  Stock: require('./Stock')(sequelize, Sequelize),
  ProductEmployee: require('./ProductEmployee')(sequelize, Sequelize),
};

// Setup relationships
Object.values(models)
  .filter(model => typeof model.associate === 'function')
  .forEach(model => model.associate(models));

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
