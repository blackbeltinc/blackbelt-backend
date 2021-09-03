const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  HOST: process.env.DB_INSTANCE,
  USER: process.env.DB_USERNAME,
  PASSWORD: process.env.DB_PASSWORD,
  DB: 'postgres',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
