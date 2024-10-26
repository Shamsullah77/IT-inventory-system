const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { sequelize } = require('./models');
require('dotenv').config();

const deputyRoutes = require('./routes/deputyRoutes');

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/deputies', deputyRoutes);

// Database connection and server startup
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');
    console.log(`Server running on port ${PORT}.`);


      // Sync all models with the database to create tables if they don’t exist
      await sequelize.sync({ alter: true }); // You can use { force: true } for development if needed
      console.log('Tables created successfully.');
  
      console.log(`Server running on port ${PORT}.`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
