module.exports = {
    HOST: 'blackbeltdb.cfzmklvhj9xc.us-east-1.rds.amazonaws.com',
    USER: 'blackbelt',
    PASSWORD: '6m7xPgY4G0gT88VESmbc',
    DB: 'postgres',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};
