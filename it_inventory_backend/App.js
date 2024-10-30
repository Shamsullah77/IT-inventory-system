// app.js
const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const routes = require('./routes/routes');
const { sequelize } = require('./models'); // Import the Sequelize instance
const PORT = process.env.PORT || 3000;

// Load environment variables from .env
require('dotenv').config();

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Use imported routes
app.use('/api', routes);  // Adds /api prefix to all routes in routes.js


app.get('/',(req,res)=>
  res.send("backend is runing")
)

// Sync database and start server
sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');
    return sequelize.sync(); // Sync models to the database
  })
  .then(() => {
    console.log('Database synchronized');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
  console.log("DB_USER:", process.env.DB_USER);
  console.log("DB_NAME:", process.env.DB_NAME);

