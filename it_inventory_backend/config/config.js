require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER || "root", // default to 'root' if missing
    password: process.env.DB_PASS || "",      // default to empty string
    database: process.env.DB_NAME || "it_inventorydb", // default to your db name
    host: process.env.DB_HOST || "localhost",
    dialect: process.env.DB_DIALECT || "mysql",
    logging: false, // Optional: turn off logging for cleaner output
  },
};
