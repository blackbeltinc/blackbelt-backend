const authJwt = require('../config/authJwt');
const verifyRegister = require('./verifyRegister');

module.exports = {
    authJwt,
    verifyRegister
};

//index.js
const db = require("./db");