import config from './index';

const { secrets } = config();

module.exports = {
  development: {
    username: secrets.username,
    password: secrets.password,
    database: secrets.name,
    host: secrets.host,
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true,
    },
    pool: {
      max: (config().secrets.dbMaxConnection as any) * 1,
      min: 0,
      acquire: 60000,
      idle: (config().secrets.dbIdleTime as any) * 1000,
    },
  },
  test: {
    username: secrets.username,
    password: secrets.password,
    database: secrets.name,
    host: secrets.host,
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  production: {
    username: secrets.username,
    password: secrets.password,
    database: secrets.name,
    host: secrets.host,
    port: secrets.port,
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      bigNumberStrings: true,
      ssl: {
        require: true,
        rejectUnauthorized: false, // <<<<<<< YOU NEED THIS
      },
    },
    pool: {
      max: (config().secrets.dbMaxConnection as any) * 1,
      min: 0,
      acquire: 60000,
      idle: (config().secrets.dbIdleTime as any) * 1000,
    },
  },
};
